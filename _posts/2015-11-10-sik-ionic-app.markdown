---
date: 2015/11/10 20:59:12 +1200
layout: post
title: Songs I Know Ionic App
category: portfolio
category-title: Personal Project
tags:
- Ionic
- AngularJS
- Cordova
- iOS
- iTunes Search API
- CouchDB
- CSS
- HTML
status: publish
published: true
thumb: '/img/posts-thumb/sik-app-thumb.jpg'
hero: {
	url: '/img/posts-full/sik-app-hero.jpg',
	size: xlarge,
	alt: 'Various screens from the Songs I Know app shown on iPhone',
	margin-top: -5%
}
gallery:
- {
	url: '/img/posts-full/sik-app-1.png',
	caption: 'Splash screen'
}
- {
	url: '/img/posts-full/sik-app-2.png',
	caption: 'Songs list'
}
- {
	url: '/img/posts-full/sik-app-3.png',
	caption: 'Song lyrics'
}
- {
	url: '/img/posts-full/sik-app-4.png',
	caption: 'Song chords'
}
- {
	url: '/img/posts-full/sik-app-5.png',
	caption: 'Updating a song'
}
- {
	url: '/img/posts-full/sik-app-6.png',
	caption: 'Settings screen'
}
link-files: https://github.com/johnslipper/sik-ionic
---

Fourth iteration of a personal project to store the songs I've learned over the years on my smartphone.

As soon as I'm asked to play a song on my guitar I seem to instantly forget everything I've ever learned. This app is a way of quickly listing the songs I know along with lyrics and chords to give me some inspiration. Also useful to refresh on those old songs I haven't played in a while.

The second purpose of this app is to act as my version of the 'MVC Todo' app in that it is the implementation of the same idea across different frameworks, to test out capabilities. The app originally started out as a simple CMS site adapted for phone but later became responsive with offline support via AppCache (oh the pain). Since the rise of hybrid app frameworks I decided the next version should be made in Ionic, as it would be a great way of building on existing AngularJS knowledge and applying it to the mobile environment.

This app now runs natively on my phone via Ionic and Cordova and features:

- Offline local song database storage via PouchDB (IndexedDB or WebSQL)
- Real-time synchronisation with Cloudant service (resumes whenever phone becomes online)
- Add chords sections & song lyrics (with online search)
- Guitar chord visualisation on fretboard via jTab
- Attach song artwork via iTunes API
- Song filtering
