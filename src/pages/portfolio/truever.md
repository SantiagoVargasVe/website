---
layout: ../../layouts/PortfolioPostLayout.astro
title: Truever
description: I built a cool bot that updates my Twitter bio with the song I'm currently playing on Spotify using Node.js, Express, Twitter and Spotify APIs!
thumbnail: truever-logo.png
alt: thumbnail twitter spotify
---

## Introduction

During the pandemic of COVID-19 me and my friends were really bored in ours home, in order to make something useful with the time we decided to enroll in a hackaton made by Universidad de los Andes. The problem we aimed to solve was fake news, so we came out with the idea of using a web browser extension that will categorize a new and help the reader to understand what kind of content is he/she consuming.

The technologies we used for this project was:

- Javascript: We used javascript for the development of the extension and the landing page of the project.

- Django rest framework: It is a powerful and flexible toolkit for building Web APIs, it provides a lot of useful tools out of the box to help you build robust and scalable API's. It's built on top of the popular Django framework, which is known for its ease of use, scalability and security features, which can help you ensure that your API is secure and can handle a large number of requests.

- Newsplease: This is actually a library for python, but it came handy since it will crawl the content of the news and parse it into useful information

- Postgresql: The integration with Django is easy, Django has built-in support for PostgreSQL and allows you to use it as the database back-end with minimal configuration. PostgreSQL is a powerful, open-source object-relational database system that is known for its reliability, robustness, and scalability.

- Robihno: This was the core service of the application. This was an AI that will provide some insights about the new for example if it is bias, if it's clickbait or if it's fake.

## The building

Choosing Javascript and Django was an easy choice, since part of the team was experience in javascript development and the other part in python and Django. My role in the team was to build all the backend and create the database but at the and I supported the front-end part of the team.

During the development we faced some problems using Django rest framework, I had some experience with Django standalone but not with that package, and the documentation of it was a bit messy by that time. It's worth to mention that the learning curve of learning this package may be a bit steep so that could be the reason I was struggling with the documentation. But besides that, most of the development was straight forward, Django is really good technology to work with.

During the development process we also added not only the categorization of the news that Robihno could give to us but we also added the possibility to have votes from the users and

## The code

```python
@api_view(['POST'])
def createWebSite(request):
    info =  request.data
    print(info)
    organizacion = info['url']
    try:
        webSite = Domain.objects.get(url=organizacion)
    except ObjectDoesNotExist :
        try:
            model = Domain.objects.create(organization=organizacion,url=info['url'],
                    rating=0,categories='recentlyCreated',numVotes=0,creationDate=datetime.datetime.now(tz=timezone.utc))
            return Response("OK", headers={'Access-Control-Allow-Origin': '*'}, status=status.HTTP_201_CREATED)
        except :
            return Response('Invalid format',headers={'Access-Control-Allow-Origin': '*'},status=status.HTTP_400_BAD_REQUEST)

```

- This code is related to the feature of requesting a website to be in our databases, in order to be categorized by humans and later the users could vote the new as well. It's worth to mention that you could still get the analysis by Robihno even if the the news and website is not in the database.

```python
def processArticle(url, domain):
    http = 'http://'+ domain + '/'
    https = 'https://'+ domain + '/'
    if(url != https and url != http):

        try:
            n = theNewsPlease(url)
            r = checkRobinho(n.url, n.title, n.description).json()

            isfake = r['robot']['fake_news']
            isbias = r['robot']['extremely_biased']
            isclickbait = r['robot']['clickbait']

            meanScore = (1-((isfake + isbias + isclickbait)/3))*10

            response = {'title': n.title, 'rating': meanScore, 'isfake': isfake, 'isbiased': isbias, 'isclickbait': isclickbait}
            return response
        except Exception as error:
            raise error
    else:
        return Exception("It's the home")

```

- This one part of the core features of the extension: Processing and crawling the data using newsPlease in order to analyze the news using Robinho. Later this information is displayed in the extension to the users.

## Conclusions

Building this project helped me learn how to work with different technologies like JavaScript and Django REST framework. It also taught me the importance of using powerful and reliable technologies like PostgreSQL to ensure that the data is well managed and secure. The experience of working with a team and the hackathon format allowed me to learn how to work under pressure and meet deadlines.

There are some potential future improvements that I would like to explore, for example, I would like to improve the Robihno AI to make it more accurate and improve its performance. I would also like to explore other ways to categorize news articles, such as using natural language processing techniques. Additionally, I would like to add more features that allow users to interact with the extension more, such as the ability to save articles for later reading, share articles with friends and more.

Overall, the "Truever" project was a valuable learning experience that taught me how to develop a web browser extension and how to work with different technologies. I am excited to continue learning and exploring new technologies and ways to improve the project in the future.
