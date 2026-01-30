<!-- draft: true -->
# S&P FutureChoice Installation

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

  .post img {
    border-radius: 1.8vw;
  }

  .post video + button {
    margin-top: -0.5lh;
    transition: opacity 200ms 150ms ease;
  }

  .post button {
    background: var(--card-background);
    border: 1px solid rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    position: relative;
    padding: 8px 15px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
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

<video src="./videos/titles.mp4" muted playsinline loop autoplay style="border-radius: 1.8vw;"></video>

- [Set Reset](https://www.set-reset.com/work/futurechoice-ai) - Team and images credit 
- [Reddit Post](https://www.reddit.com/r/godot/comments/1ndesjs/i_did_my_first_commercial_godot_project_it_was/) - Original post with Q&A

In early 2025 I worked on my first commercial <strong>Godot</strong> project, an interactive installation for CERAWeek in Houston, Texas.

It was a game where participants stepped up to podiums, answered questions and then saw how their choices shaped the future of a virtual country.

Players could then print out a receipt showing how they contributed. The printing part was also powered by Godot (and my teammate Chris. He wrangled all the binary stuff).

I worked on both the 3D and 2D parts of the app. This included: 
- World generation
- Dynamic camera movement system
- Lighting and designed particle effects
- Asset pipeline
- Player and strategy selection UI
- Implemented many of the UI components

<video src="./videos/role.webm"></video>
<button title="Play video">▶ Play video</button>

<video src="./videos/strategy.webm"></video>
<button title="Play video">▶ Play video</button>

<video src="./videos/sim.webm"></video>
<button title="Play video">▶ Play video</button>

<video src="./videos/worldview.webm"></video>
<button title="Play video">▶ Play video</button>

Some little interesting bits:
- The team originally planned to use Unreal, but when that didn’t work out I suggested switching to Godot. So that's a win for Godot!

- I built another small Godot app on the side to automatically pull down the latest build from GitHub and relaunch it on a TV in the office. This caught a bunch of issues early, we even had it running in our Airbnb.

- We built an import plugin that added animations, particles and interactions automatically to the 3D models. This made last minute changes as simple as re-importing files.

In the end, it went very smoothly with it running nonstop for 4 days straight!

![](./images/podiums.avif)

<script>
  const videos = document.querySelectorAll("video");
  
  for (const video of videos) {
    const playButton = video.nextElementSibling;
    if (!playButton) continue;


    playButton.addEventListener("click", () => {
      video.play()
      playButton.style.opacity = 0

      video.addEventListener("ended", () => {
        playButton.style.opacity = 1
      }, { once: true })
    });
  }
</script>
