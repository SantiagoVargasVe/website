---
layout: ../../layouts/PortfolioPostLayout.astro
title: Twitter-Spotify bot
description: I built a cool bot that updates my Twitter bio with the song I'm currently playing on Spotify using Node.js, Express, Twitter and Spotify APIs!
thumbnail: https://res.cloudinary.com/svargasv/image/upload/v1673913291/spotify-twitter_cjesan.png
alt: thumbnail twitter spotify
---

## Introduction

As a personal project, I developed a bot that updates my Twitter bio with the song I am currently playing on Spotify. The purpose of this is to mimic the behavior of the old and now discontinued Microsoft Messenger feature, where you could see the current song the user was listening to. This was an interesting way of knowing what music your friends like.

The technologies I used for this project were:

- **NodeJS**: t allows for easy and efficient back-end development. I was also learning Node.js at the time, so I wanted to practice what I had learned.

- **Express**: It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It makes it easy to handle routing and middleware, which are crucial for building a web application. I chose Express because it is the state-of-the-art framework for back-end development in Node.js.

- **Twitter and Spotify API's**: I had to use them in order to know the song I am playing at that moment and to modify my Twitter bio to display the name of the song.

## The building

[Here](https://github.com/santiagovargasve/spotify-twitter-botyou) you can find the repository where the source code is. The first step during the development process was to read, understand and use the API's of twitter and Spotify. The usage of the Spotify API was really easy, well documented and explained, so I made all the calls from scratch. The one that I struggled with the more was the twitter authentication process, since I didn't want to use that much time in this project I preferred to use a [library](https://github.com/santiagovargasve/spotify-twitter-bot) for it **(don't reinvent the wheel)**.

Once the code was done it was time to deploy it, I tried first with Heroku and the free tier. The problem with Heroku in its free tier is that after some time idle the server goes to sleep so that was a problem if I wanted it to be real time, by that time I don't really wanted to use some money on this, I decided to run it locally instead.

## The code

The following is the most important code snippets:

```js
const initProgram = async () => {
  let isSong = await checkSong();
  let timeout = false;
  if (isSong) {
    let current_bio = await getBioInfo();
    let bio_parsed = current_bio.split("|");
    timeout = isSong.item.duration_ms - isSong.progress_ms;
    bio_parsed[
      bio_parsed.length - 1
    ] = `▶ ${isSong.item.name}- ${isSong.item.artists[0].name}`;

    let bio_new = constructBioString(bio_parsed);
    changeBio(bio_new);
  } else {
    let old_bio = `Ingeniero de Sistemas | Noctámbulo a tiempo completo |  A veces hago proyectos personales| Opiniones personales |⏸ Nada por ahora`;
    changeBio(old_bio);
  }
  console.log(timeout);
  setTimeout(initProgram, timeout || 60000);
};
```

- Since the API of Spotify has no endpoints that can stream the events of the user's player I have a time-out that will check if any song is being played by that moment, if a song is played the timeout will change the remaining duration of the current song, so that the following calls will match the beginning of the next song and so on.

## Conclusions

Building this bot allowed me to learn several things, such as:

- How to use Node.js and Express for back-end development
- How to interact with third-party APIs, specifically Twitter and Spotify
- How to handle and manipulate data received from the APIs
- How to schedule and automate tasks using Node.js
- How to handle errors and troubleshoot issues
- How to structure and organize code for maintainability and scalability.
- How to work with API's and how to deal with token and limit issues.

Overall, this project provided me a good introduction to web development and working with APIs, and it also gave me an opportunity to practice my coding skills and apply what you have learned.

The future improvements that I could apply to this project are changing how I access the logic of the controllers since I am making and HTTP request to the own server nor accessing directly the methods from it. Another improvement would be to change some variables from let to const.

I also would like to explore a new feature of creating playlist from Twitter, like someone tweets hey suggests me songs that remembers you of a sunny day and the replies of that tweet that could contain the song name or link would populate the new playlist
