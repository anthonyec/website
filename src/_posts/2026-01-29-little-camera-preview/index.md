<!-- draft: true -->

# Little Camera Preview

<style>
  .post h1, .post .time {
    display: none
  }

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

<video src="./videos/demo.mp4" muted playsinline loop autoplay></video>

A Godot editor plugin that shows a picture-in-picture style preview when selecting a 2D or 3D camera.

Install via the [Asset Library](https://godotengine.org/asset-library/asset/2500), [Godot Asset Store](https://store-beta.godotengine.org/asset/anthonyec/little-camera-preview/) or download from [Itch.io](https://anthonyec.itch.io/little-camera-preview) (and pay me a buck, or not).

Source code is available on [GitHub](https://github.com/anthonyec/godot_little_camera_preview/).
