---
date: 2021/03/22 17:30:12 +1200
title: Songs I Know Svelte App
category: demos
category-title: Personal Project
comments: true
tags:
- Svelte
- PWA
- Local first
- Web audio API
- CSS
- HTML
status: publish
thumb: "/img/posts-thumb/sik-svelte-app-thumb.jpg"
hero: {
	url: "/img/posts-full/sik-svelte-app-hero.jpg",
	alt: "Showcasing screens from the Svelte PWA app on a phone"
}
gallery:
- {
	url: "/img/posts-full/sik-svelte-app-1.jpg",
	caption: "Stored songs list alongside the album artwork"
}
- {
	url: "/img/posts-full/sik-svelte-app-2.jpg",
	caption: "Viewing the lyrics of a song"
}
- {
	url: "/img/posts-full/sik-svelte-app-3.jpg",
	caption: "Selecting a chord and hearing how it sounds"
}
- {
	url: "/img/posts-full/sik-svelte-app-4.jpg",
	caption: "Editing a song's chord sections"
}
- {
	url: "/img/posts-full/sik-svelte-app-5.jpg",
	caption: "Search results for a chord being added"
}
- {
	url: "/img/posts-full/sik-svelte-app-6.jpg",
	caption: "Editing the frets and fingering of a chord"
}
link-website: "https://songs-i-know-2020.web.app"
codepen-embed: {
	id: eYgZMRL,
	height: 400
}
---

Ever pick up a guitar and can't remember a song to play?

Songs I Know is an app for getting inspiration when holding a guitar and nothing comes to mind. [Visit the app](https://songs-i-know-2020.web.app) and add the songs you know.

## App features

-   Easily store the songs you know
-   Hear how the chords sound
-   Add album artwork, lyrics and chords sections
-   Chord search API
-   Chord fretboard visualisation
-   Create custom chords
-   Capo support
-   Set custom song tunings
-   Song artwork search
-   Offline support
-   Easily import/export songs
-   Manage and erase song data

## Stack

This is the 5th iteration of the app and this time it's back with a fresh look and built as a PWA using Svelte. The goal of the [previous version](/sik-ionic-app) was to build an app using web technologies that felt as native as possible. Although this goal was mostly achieved the app store publishing process was painful so never made it past running on my own phone.

Since 2015 PWAs have come a long way and so seemed like a great opportunity to revisit and explore the new features. I was also looking for an excuse to test out Svelte and its built in animations support. The result may not feel 100% native, but can be installed as a full-screen home screen app to get that little bit closer. 

It was originally built to store data on Firebase but have since changed to store data locally and export to JSON to backup.

The project itself is open-source and available on [Github](https://github.com/johnslipper/sik-svelte). Issues and pull requests welcome if you find the app useful and want to contribute to taking it further.

## Web audio API

Pressing a stored chord will play the sound of the chord. The audio is generated in real-time using the Web Audio API based on the notes of the strings entered. Each playback will generate a slightly different tone for a more realistic sound. The strings can also be muted to simulate being covered by a hand.

See the Codepen below for this part of the code in action.