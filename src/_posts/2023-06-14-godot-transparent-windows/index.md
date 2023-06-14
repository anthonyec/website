<!-- thumbnail: ./window_on_window.gif -->
<!-- twitterSocialImage: ./window_on_window.gif -->

# How to make transparent windows in Godot

![Illustration of a transparent window on top of another window](./window_on_window.gif)

⚠️ This guide is for Godot version 4 and above.

## Make a Window node transparent

1. Select the Window node you want to make transparent
2. In the Inspector panel, go to `Window > Flags`
3. Enable the "Borderless" toggle. This will hide the title bar and border.
4. Scroll down to the "Viewport" section in the Inspector
5. Enable the "Transparent BG" toggle.

Note that I **didn't** toggle `Window > Flags > Transparent`. Enabling this doesn't seem to affect transparency, and just removes the drop shadow on native (non-embedded) windows. This confused me and is why I made this post.

<a href="mailto:anthonycossins@gmail.com?subject=You are misunderstanding something about this setting!">Let me know</a> if I'm misunderstanding something about this setting.

## Make the main window transparent

This will make the desktop visible through the main window, unlocking the potential to make your own [BonziBuddy](https://en.wikipedia.org/wiki/BonziBuddy).

First you'll need to enable Per Pixel Transparency.

1. Open Project Settings
2. Ensure "Advanced Settings" is toggled on
3. Go to `Display > Window > Per Pixel Transparency`
4. Enable the "Allowed" toggle

Then you'll need to adjust the settings of the main Window.

5. Still in Project Settings, go to `Display > Window > Size`
6. Enable the "Borderless" toggle.

Finally create a script with the following code, and attach it to a node somewhere in the main scene.

```gd
extends Node

func _ready() -> void:
  get_tree().get_root().transparent_bg = true
```

![BonziBuddy looking satisfied](bonzi.png)
