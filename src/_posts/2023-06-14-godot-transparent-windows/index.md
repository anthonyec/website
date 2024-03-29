<!-- thumbnail: ./window_on_window.gif -->
<!-- twitterSocialImage: ./window_on_window.gif -->
<!-- dateUpdated: 2023-08-20 -->

# How to make transparent windows in Godot

![Illustration of a transparent window on top of another window](./window_on_window.gif)

Here's how to make the [main window](#make-the-main-window-transparent) or [a window node](#make-a-window-node-transparent) transparent in Godot 4 without using code. Unlocking the potential to make your own [BonziBuddy](https://en.wikipedia.org/wiki/BonziBuddy).

## Make the main window transparent

1. Open Project Settings
2. Ensure `Advanced Settings` is toggled on
3. Go to `Display > Window > Size`
4. Enable the `Transparent` **and** the `Borderless` toggle <a href="#footnote-1">[1]</a>
5. Go to `Display > Window > Per Pixel Transparency`
6. Enable the `Allowed` toggle

![Screenshot of the per pixel transparency setting](./sub_pixel_transparent_screenshot.png)

5. Still in Project Settings, go to `Rendering > Viewport`
6. Enable the `Transparent Background` toggle

![Screenshot of the transparent viewport background setting](./transparent_background_screenshot.png)

## Make a Window node transparent

1. Select the Window node you want to make transparent
2. In the Inspector panel, go to `Window > Flags`
3. Enable the `Borderless` and `Transparent` toggle
4. Scroll down to the Viewport section in the Inspector
5. Enable the `Transparent BG` toggle

<img src="./inspector_screenshot.png" width="385"/>

If you want Window nodes to appear outside the main window, go into Project Settings and turn off `Display > Window > Subwindows > Embedded Subwindows`.

![Screenshot of the embedded subwindows setting](./subwindows_screenshot.png)

## Other resources

- [Making a fourth wall breaking 2D platformer with windows](https://github.com/geegaz/Multiple-Windows-tutorial#part-1---using-godot-4s-window)

## Footnotes

<ol>
  <li id="footnote-1">
    The <code>Borderless</code> setting is required for Windows and Linux, without it the window border and title bar will show. On macOS it isn't required for some reason.
  </li>
</ol>

<script>
  const FOOTNOTE_BUBBLE_WIDTH = 430;

  const footnoteLinks = Array.from(document.querySelectorAll('a[href^="#footnote-"]'))
  const footnotes = Array.from(document.querySelectorAll('li[id^="#footnote-"]'));

  const closeFootnoteBubble = (event) => {
    const target = event.target;
    if (target && target.hasAttribute('href') && target.getAttribute('href').includes('#footnote-')) {
      return
    }

    const existingBubble = document.querySelector('.footnote-bubble');

    if (existingBubble) {
      document.body.removeChild(existingBubble);
    }

    document.body.removeEventListener('click', closeFootnoteBubble);
  }

  const handleFootnoteLinkClick = (event) => {
    if (document.body.offsetWidth < 500) {
      return;
    }

    event.preventDefault();

    const target = event.currentTarget
    const id = target.getAttribute('href');

    // Nice, the `href` includes a hash, so it just works as a ID selector.
    const footnote = document.querySelector(id);

    if (!footnote) {
      return;
    }

    const existingBubble = document.querySelector('.footnote-bubble');

    if (existingBubble) {
      document.body.removeChild(existingBubble);

      const existingBubbleId = existingBubble.getAttribute('data-footnote-id');

      // Toggle the bubble on and off if clicking the same footnote.
      if (existingBubbleId === id) {
        return
      }
    }

    const bubble = document.createElement('div');

    bubble.setAttribute('class', 'footnote-bubble');
    bubble.setAttribute('data-footnote-id', id)

    bubble.innerHTML = footnote.innerHTML

    bubble.style.position = "absolute"
    bubble.style.width = FOOTNOTE_BUBBLE_WIDTH;
    bubble.style.top = target.offsetTop + 50;
    bubble.style.left = target.offsetLeft - (FOOTNOTE_BUBBLE_WIDTH / 2);
    bubble.style.background = 'black';
    bubble.style.color = 'white';
    bubble.style.padding = 20;
    bubble.style.borderRadius = '30px';
    bubble.style.lineHeight = 1.3
    bubble.style.fontFamily = "inherit";
    bubble.style.border = "3px solid white";
    bubble.style.boxShadow = "0 0 0 3px black, 0px 5px 20px rgba(0, 0, 0, 0.5)";
    bubble.style.fontSize = 18;

    document.body.appendChild(bubble);

    document.body.addEventListener('click', closeFootnoteBubble);
  };

  for (const link of footnoteLinks) {
    link.textContent = link.textContent.replace('[', '').replace(']', '');
    link.addEventListener('click', handleFootnoteLinkClick)
  }
</script>
