<!-- thumbnail: ./window_on_window.gif -->
<!-- twitterSocialImage: ./window_on_window.gif -->

# How to make transparent windows in Godot

![Illustration of a transparent window on top of another window](./window_on_window.gif)

⚠️ This guide is for Godot 4.

## Make a Window node transparent

1. Select the Window node you want to make transparent
2. In the Inspector panel, go to `Window > Flags`
3. Enable the `Borderless` toggle <a href="#footnote-1">[1]</a>
4. Scroll down to the Viewport section in the Inspector
5. Enable the `Transparent BG` toggle

<img src="./inspector_screenshot.png" width="385"/>

## Make the main window transparent

This will make the desktop visible through the main window, unlocking the potential to make your own [BonziBuddy](https://en.wikipedia.org/wiki/BonziBuddy).

1. Open Project Settings
2. Ensure `Advanced Settings` is toggled on
3. Go to `Display > Window > Size`
4. Enable the `Transparent` toggle, this _allows_ a window to be transparent but does not make it transparent
5. Go to `Display > Window > Per Pixel Transparency`
6. Enable the `Allowed` toggle

![](./sub_pixel_transparent_screenshot.png)

5. Still in Project Settings, go to `Rendering > Viewport`
6. Enable the `Transparent Background` toggle

![](./transparent_background_screenshot.png)

## Other resources

- [Making a fourth wall breaking 2D platformer with windows](https://github.com/geegaz/Multiple-Windows-tutorial#part-1---using-godot-4s-window)

## Footnotes

<ol>
  <li id="footnote-1">
    This will make <strong>embedded</strong> windows transparent. If you are using native non-embedded windows, then you'll need to enable <code>Transparent</code> instead of <code>Borderless</code>.
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

    document.body.appendChild(bubble);

    document.body.addEventListener('click', closeFootnoteBubble);
  };

  for (const link of footnoteLinks) {
    link.addEventListener('click', handleFootnoteLinkClick)
  }
</script>
