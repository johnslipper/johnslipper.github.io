---
date: 2021/03/22 17:30:12 +1200
title: Songs I Know Svelte App
category: demos
category-title: Personal Project
comments: true
tags:
- Svelte
- Firebase
- PWA
- Offline
- Web audio
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
link-website: "https://sik.app"
---

Ever pick up a guitar and can't remember a song to play?

Songs I Know is an app for getting inspiration when holding a guitar and nothing comes to mind. Sign up now at [sik.app](https://sik.app) and add the songs you know.

## App features

-   Easily store the songs you know
-   Add album artwork, lyrics and chords sections
-   Chord search API
-   Chord fretboard visualisation
-   Hear how the chords sound
-   Create custom chords
-   Capo support
-   Set custom song tunings
-   Song artwork search
-   Google Firebase real-time database
-   Offline support
-   Easily import/export songs
-   Manage and erase account data

## Technology

This is the 5th iteration of the app and this time it's back with a fresh look and built as a PWA using Svelte and Firebase. The goal of the [previous version](/sik-ionic-app) was to build an app using web technologies that felt as native as possible. Although this goal was mostly achieved the app store publishing process was a little daunting for such personal app and more than I wanted to take on. The final app was never made available for public use and remained running locally on my phone.

Since 2015 PWAs have come a long way and so seemed like a great opportunity to revisit and explore the new features. I was also looking for an excuse to test out Svelte and its built in animations support. The result may not feel 100% native, but can be installed as a full-screen home screen app to get that little bit closer.

## Contribution

The project itself is open-source and available on [Github](https://github.com/johnslipper/sik-svelte). Issues and pull requests welcome if you find the app useful and want to contribute to taking it further.
