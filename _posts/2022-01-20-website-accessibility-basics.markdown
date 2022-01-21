---
date: 2022/01/20 16:20:00 +1300
title: Website Accessibility Basics
category: demos
category: posts
category-title: My 2 cents
tags:
- a11y
- CSS
- HTML
- JS
status: publish
thumb: "/img/posts-thumb/agence-olloweb-Z2ImfOCafFk-unsplash.jpg"
hero:
    {
        url: "/img/posts-full/agence-olloweb-Z2ImfOCafFk-unsplash.jpg",
        alt: "A close up shot of a complete collection of coloured pencils arranged in a circle",
        credit:
            {
                name: "Agence Olloweb",
                url: "https://unsplash.com/@olloweb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            },
    }
---

Website accessibility is often misunderstood. These are a few basics to follow that will help during development and hopefully think of the experience from new perspectives.

The accessibility (or “a11y”) of a website is a part of the larger idea of [inclusive](https://xd.adobe.com/ideas/principles/design-systems/what-is-inclusive-design-principles-and-examples/) or [universal](https://universaldesign.org/definition) design that has the aim of designing something considers as many people as possible and touches every part of the design process right from the start.

## TL;DR

-   Use HTML elements that are appropriate to the purpose
-   Leverage the browser’s in-built features and elements over custom solutions
-   Headings are the correct level of importance and not selected based on visual size
-   Adjacent colours have enough contrast to ensure they are clearly visible
-   Use visually hidden content to provide description when relying on
-   Use buttons elements for actions unless navigating, when an anchor should be used
-   Actions do not solely rely on being triggered on hover to avoid problems on touch devices
-   Form inputs always have an associated and correctly linked label
-   For advanced components reach for battle-tested accessible 3rd party solutions

## Using semantic HTML

The simplest win for a11y is to be [semantic](https://www.evinced.com/blog/its-just-a-matter-of-semantics/) with the elements that are used within the site by considering the intent of the element and reaching for [the one that best describes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) that intent. The choice of an appropriate element should not be based on their visual presentation as that is be the responsibility of CSS and can be changed as required. Using appropriate elements also provide valuable information when the HTML is read by non-visual processes like search engines and [screen readers](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree).

## Leverage the browser

Before reaching to create custom UI solutions for a problem first consider whether the browser has an existing in-built solution that can be used. Using existing solutions can not only save time but will likely already have factored in a range of requirements that a developer may not have considered or even know about, including:

-   Can it be used without seeing it? Screen readers get all their context from the code and not the presentation on screen.
-   Does it work in a range of situations? A small touch device might require a completely different solution to on a desktop.
-   Does it work for all input types? In reality there is [a wider range of possible options](https://webaccess.berkeley.edu/resources/assistive-technology) than simply mouse and touch that should be considered.

There are cases where the built in solution does not meet requirements or potentially has problems of its own in which case reaching for an existing accessible 3rd party solution may still be preferable than creating something custom.

## Headings and level trees

If the text is a heading then it should be a heading element. In HTML this is a `h1` element for the most important heading on the page. For further content headings within that `h2` elements would be used to indicate the next level deep and so on for `h3` headings within that content. This forms a tree of related headings that can use up 6 levels deep (`h6` element). Screen readers will read this tree for content navigation.

_Note:_ The visual size representation of headings should not be based on the level. The choice of element should be based on the appropriate level and then styled as required separately. A h4 element might need to be bigger than another h2 element elsewhere depending on situation and context.

## Good colour contrast

To ensure people of all vision types can clearly see the app a developer should be aware of how much contrast there is between adjacent colours in the UI. This is mostly applicable for text colour against the background colour of the containing element and can be checked in the [Chrome developer tools](https://webdesign.tutsplus.com/articles/how-to-use-the-contrast-checker-in-chrome-devtools--cms-31504) as to whether it passes the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) AA and AAA standards. Aiming for AA standard for colour contrast is usually an achievable goal to aim for.

Projects often use [existing palettes of colours](https://yeun.github.io/open-color/) in a range of lightnesses to make development and consistency easy. If the chosen colour does not pass then try using a darker version of it.

_Note_: There is also a new [colour contrast CSS feature](https://css-tricks.com/exploring-color-contrast-for-the-first-time/) that (once it has better support) will make this process easier.

## Visually hidden content

Sometimes it is beneficial for descriptive content to be available for screen readers but be visually hidden on the page. An example of this is when and image or icon is used as a replacement for text, such as in compact buttons. This can be achieved simply by a utility CSS class:

```css
.visually-hidden {
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    text-transform: initial;
}
```

There are actually [a number of ways](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html) of achieving visually hidden content, including dedicated components and CSS classes in frameworks:

-   [React](https://reach.tech/visually-hidden/)
-   [Vue](https://github.com/yamanoku/vue-visually-hidden)
-   [Bootstrap](https://getbootstrap.com/docs/5.1/helpers/visually-hidden/)
-   [Tailwind](https://tailwindcss.com/docs/screen-readers)

## Actions & navigation

    "<a> goes somewhere, <button> does something"

The above statement is a good basic rule of thumb when deciding the best element for triggering an action. Another way to put it is:

    “if an interaction doesn’t have a meaningful href, it’s a <button>”

Using either of these elements provides a large amount of in-built functionality within the browser such as:

-   Having a known role (screen readers know what they are)
-   Can be focused (can use the keyboard to select them)
-   Can be triggered using the keyboard (usually either with “enter” or “space bar”)

Using another element for this purpose and getting the same result would mean manually implementing features unnecessarily. If the element doesn’t look correct then change the CSS styling over using a different element that looks the part.

_Note_: `button` elements that do not submit a form should always have a `type="button"` attribute

## Avoid hover actions

Actions that are triggered by hovering are not properly supported on touch-based devices. Use solutions that either do not solely rely on hovering or better use an alternative solution, potentially using a click/touch to toggle the action.

## Label all form inputs

To ensure all form inputs (such as `input` and `textarea`) are clearly described to users they should be [correctly labelled](https://bitsofco.de/labelling-form-elements/) using a `label` element. This is either done by:

1. Giving the input a unique “ID” attribute (for example `<input id="unique-thing">`) and then connecting it to the label by that unique ID in the label’s “for” attribute (for example `<label for="unique-thing">This is an input</label>`).
2. For some inputs it might be more appropriate to simply wrap the `input` element with a `label` element, ensuring to also include the label text alongside the input element.

Some designs may omit the label of an input where the purpose may already seem clear (single search inputs are a regular offender). These situations still require an associated label for the input, but by using method 1 above with the addition visually hiding the label, the desired effect of hiding the label is achieved while keeping it visible to screen readers.

## Advanced interactive components

Highly interactive UI design patterns such as tabs or modals might seem simple in concept, but are actually significantly more complex to implement in an accessible way. In cases like these reaching for an battle-tested (and accessible) 3rd party library to ensure all aspects are covered.

When selecting a library remember that popularity [does not always mean that a11y is built in](https://twitter.com/lekoarts_de/status/1460292409049427971) and may require a little digging to find out more. Sometimes ensuring a good library is used in an accessible way may also require some small configuration so worth reading the documentation.
