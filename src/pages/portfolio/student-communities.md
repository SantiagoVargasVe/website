---
layout: ../../layouts/PortfolioPostLayout.astro
title: Community App
description: I built a cool bot that updates my Twitter bio with the song I'm currently playing on Spotify using Node.js, Express, Twitter and Spotify APIs!
thumbnail: https://res.cloudinary.com/svargasv/image/upload/v1673913291/spotify-twitter_cjesan.png
alt: thumbnail twitter spotify
---

## Introduction

It is difficult for first-semester students at the University of Los Andes to adapt to the academic environment from a social perspective, as they do not have the necessary tools to form support networks that allow them to feel like part of the community and thus be able to enjoy the university experience and, as a result, achieve better academic achievements. Based on this, a mobile application was developed with the purpose of facilitating interaction between students and as a result of this interaction, communities can be created within the University of Los Andes that facilitate interaction for first-semester students.

I needed to prioritize time, make the mobile application multi-platform and the learning curve of the technologies I would use since by that time I had never developt a mobile app. For this project I decided to use the following technologies:

- Flutter allows for fast development and easy deployment to both iOS and Android platforms. The learning curve was easy as well since it's similar to react and angular in some ways and I am familiar with those two.

- Material Design provides a consistent and visually appealing design language that can enhance user engagement.

- Firebase offers a wide range of backend services, such as real-time databases and user authentication, that can greatly simplify the development process.

## The building

The features I wanted to build where:

- Sign up and Log in
- The students can join or create a community
- The communities would have a feed, real time chat and a calendar of events
- The students can post in the feed images or/and text

The idea behind this is that the communities would have a professor watching on the communities, part mentoring the students part monitoring everything is okay.

The first step was to make the desing of the up and the mockups of views, [here](https://www.figma.com/file/VtaiNSEgMmdNzm3K45PCqs/App-proyecto-de-grado?node-id=51096%3A4667&t=8VB3A2xb59F8cKLW-1) you can watch figma related to it. I though it would be easier to start coding the app but making the mockups really helped me to see how I should make the flow of the user and what widgets I could reuse for multiple views so at the end it really paid back.

Once the design was done it was time to setup the firebase, but it was really easy to be honest. Just add some rules about being logged and created the services I needed: Firestore for data and messagges, Authentication and Storage for the images. Then it was time to code, and it was most of the time straightforward, since I had the design and mockups I knew how I wanted the things to look. The times I struggled with the code was when doing some layouts and the famous yellow fance appeared.

Another thing I did for this project was the paper, since this project was made for my grade requirement I had to write a paper about the study and how communities and socilization indeed help freshyear students to improve their academic life. You can see the paper [here](https://repositorio.uniandes.edu.co/bitstream/handle/1992/57606/Sistema%20de%20apoyo%20para%20estudiantes%20de%20primeros%20semestres%20de%20la%20universidad.pdf?sequence=3&isAllowed=y)

## The code

```dart
 return Scaffold(
      appBar: AppBar(
          leading: IconButton(
            icon: const Icon(Icons.arrow_back_ios),
            onPressed: () => Navigator.pop(context),
          ),
          title: Text(args['id'] ?? "Comunidad")),
      body: Column(
        children: [
          Expanded(
            child: Container(
              color: const Color.fromRGBO(169, 133, 255, 1),
              child: StreamBuilder<QuerySnapshot>(
                  stream: _messagesStream,
                  builder: (BuildContext context,
                      AsyncSnapshot<QuerySnapshot> snapshot) {
                    if (snapshot.hasError) {
                      return const Center(child: Text('Algo salio mal'));
                    }
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return const Center(child: CircularProgressIndicator());
                    }
                    return ListView.builder(
                      reverse: true,
                      itemCount: snapshot.data!.docs.length,
                      itemBuilder: (BuildContext context, int index) {
                        Map<String, dynamic> data = snapshot.data!.docs[index]
                            .data() as Map<String, dynamic>;

                        final message = Message.fromJson(data);
                        return Padding(
                          padding: const EdgeInsets.all(8.0),
                          child:
                              MessageCard(key: UniqueKey(), message: message),
                        );
                      },
                    );
                  }),
            ),
          ),
          InputBox(communityId: args['id'] ?? "Comunidad"),
        ],
      ),
    );
```

- The code above was one of the most challenging ones since I wanted to make the chat realtime, use the typing responses in the queries from firebase and create a component to display and handle the messages itself, so I could have all the responsabilities separed. At the end I had to trade the typing.

```dart


Future<void> listExample() async {
    firebase_storage.ListResult result = await firebase_storage
        .FirebaseStorage.instance
        .ref("avatars")
        .listAll();

    for (firebase_storage.Reference ref in result.items) {
      var url = (await ref.getDownloadURL()).toString();
      urls.add(url);
    }
    setState(() {
      _loadingImages = false;
      _currentImageIndex = random.nextInt(urls.length);
      widget.changeSelectedImage(urls[_currentImageIndex]);
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: SizedBox(
        child: _loadingImages
            ? const Center(
                child: CircularProgressIndicator(),
              )
            : GestureDetector(
                child: CircleAvatar(
                  radius: 100,
                  backgroundImage: NetworkImage(urls[_currentImageIndex]),
                ),
                onTap: () {
                  setState(() {
                    _currentImageIndex = random.nextInt(urls.length);
                    widget.changeSelectedImage(urls[_currentImageIndex]);
                  });
                },
              ),
      ),
    );
  }
```

- This is a small feature I implemented since one of the needs for this MVP was to not recollect any data of the users. I didn't want the users to not have an avatar so I made a set of random avatars, when the user tap the avatar it will change to the next and so on.

## Conclusions

I really liked working in this project, one of the most important things about it was the possibility to help other students and be involved in a social impact. Because the app was and MVP a small set of students used but it got good criticts. Another goal of this project, which I wasn't aiming for, is that the university offered me to be an graduted assistant that means that they will pay me my master's degree and a bit more and I'll be a professor as well.

I also learned from this project the importance of design, making questions ( I had to do some surveys) to the future users and understand theirs needs with the purpouse of creating a really good product that will facilitate and make the life of the users better or more easy to go throw.
