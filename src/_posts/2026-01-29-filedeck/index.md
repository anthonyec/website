<!-- draft: true -->
<meta name="robots" content="noindex">

<style>
  .post video, .post img {
    max-width: none;
    width: 200%;
    margin-left: -50%;
    border-radius: 24px;
    border: 0;
  }

  @media(max-width: 1250px) {
    .post video, .post img {
      width: 150%;
      margin-left: -25%;
    }
  }

  @media(max-width: 950px) {
    .post video, .post img {
      width: 100%;
      margin-left: auto;
    }
  }
</style>

<style>
  .post h1, .post .time {
    display: none
  }

  .post-filedeck__logo {
    position: relative;
  }

  .post-filedeck__logo img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
</style>

# FileDeck Preview

<div class="post-filedeck__logo">
  <video src="./starfield.mp4" muted playsinline loop autoplay></video>
  <img src="./logo.png">
</div>

FileDeck is a file browser for the Steam Deck. It's designed for use with the gamepad, making it the fastest way to manage and edit files without leaving Game Mode.

I'm currently developing FileDeck in the <strong>Godot</strong> game engine, fully leveraging it for it's UI system and graphic capabilities.

## Tab switcher

<video src="./videos/switch_tabs.webm" muted playsinline loop autoplay></video>

## High performance

<video src="./videos/scrolling.webm" muted playsinline loop autoplay></video>

FileDeck can scroll through 1000s of files without dropping frames. This is because I've implemented a virtual scroll grid, which only renders items that should be visible in the viewport.

The virtual scroll grid can be configured so that the scroll area and viewport can be separate. This allows the same UI component to be used for different kinds of lists and layouts.

For example, the Go to Folder UI uses the virtual scroll grid with a centered layout.

<video src="./videos/goto_folder.webm" muted playsinline loop autoplay></video>

Common actions like copying, moving and deleting are all done using threads. This keeps the main thread for the UI responsive and makes it easy to track a tasks progress.

<video src="./videos/deleting.webm" muted playsinline loop autoplay></video>

## Copy, rename and delete files

<video src="./videos/renaming.webm" muted playsinline loop autoplay></video>

<video src="./videos/replacing.webm" muted playsinline loop autoplay></video>

## Filtering files

<video src="./videos/filtering.webm" muted playsinline loop autoplay></video>

## Open images and edit text

<video src="./videos/opening_images.webm" muted playsinline loop autoplay></video>

## Selecting files

<video src="./videos/selecting.webm" muted playsinline loop autoplay></video>
