<!-- draft: true -->
# S&P FutureChoice Installation

<style>
  .post h1 {
    display: none
  }
</style>

<video src="./videos/titles.mp4" muted playsinline loop autoplay></video>

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

<video src="./videos/role.webm" style="border-radius: 0" playsinline></video>

<video src="./videos/strategy.webm" style="border-radius: 0" playsinline></video>

<video src="./videos/sim.webm" style="border-radius: 0" playsinline></video>

<video src="./videos/worldview.webm" style="border-radius: 0" playsinline></video>

Some little interesting bits:
- The team originally planned to use Unreal, but when that didn’t work out I suggested switching to Godot. So that's a win for Godot!

- I built another small Godot app on the side to automatically pull down the latest build from GitHub and relaunch it on a TV in the office. This caught a bunch of issues early, we even had it running in our Airbnb.

- We built an import plugin that added animations, particles and interactions automatically to the 3D models. This made last minute changes as simple as re-importing files.

In the end, it went very smoothly with it running nonstop for 4 days straight!

![](./images/podiums.avif)
