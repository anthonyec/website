<!-- draft: true -->
<meta name="robots" content="noindex">

<style>
  .post h1 {
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

<video src="./videos/tabs.webm" playsinline></video>

The interface makes use of sound to inform the user with what's going on but also make everyday actions fun. For example, the pitch of the select sound effect varies depending on how many files are being selected.

<video src="./videos/selecting.webm" playsinline></video>

Images can be viewed and simple edits can be made to text files. This is useful for adjusting game config files.

<video src="./videos/chickens.webm" playsinline></video>

FileDeck can scroll through 1000s of files without dropping frames. This is because I've implemented a virtual scroll grid, which only renders items that should be visible in the viewport.

<video src="./videos/scroll.webm" playsinline></video>

The same virtual grid UI component is used throughout the app for all the menus.

<video src="./videos/menus.webm" playsinline></video>

Common actions like copying, moving and deleting are all done using threads. This keeps the main thread for the UI responsive and makes it easy to track a tasks progress.

<video src="./videos/trash.webm" playsinline></video>
