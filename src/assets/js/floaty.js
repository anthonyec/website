class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  normalize() {
    const magnitude = this.magnitude()

    if (Math.abs(magnitude) < 1e-9) {
      return new Vector2(0, 0)
    } else {
      return new Vector2(this.x / magnitude, this.y / magnitude)
    }
  }

  add(b) {
    return new Vector2(this.x + b.x, this.y + b.y)
  }

  sub(b) {
    return new Vector2(this.x - b.x, this.y - b.y)
  }

  dot(b) {
    return this.x * b.x + this.y * b.y
  }

  scale(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  directionTo(b) {
    return b.sub(this).normalize()
  }

  distanceTo(b) {
    const difference = this.sub(b);
    return Math.sqrt(difference.x * difference.x + difference.y * difference.y);
  }

  rotated(angle) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    return new Vector2(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function remap(value, istart, iend, ostart, oend) {
  return (value - istart) / (iend - istart) * (oend - ostart) + ostart
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Time to wait between showing the floaty again once it has gone off screen.
const MIN_WAIT_TIME = 1
const MAX_WAIT_TIME = 10

const MIN_ROTATION_SPEED = 50
const MAX_ROTATION_SPEED = 150

const MIN_MOVE_SPEED = 50
const MAX_MOVE_SPEED = 250

const INACTIVE_WAIT_TIME = 30_000

let lastFrameTime = Date.now()

const user = {
  lastInteractTime: Date.now(),
  mousePosition: new Vector2(0, 0)
}

const floaties = []

class Floaty {
  element = null
  timeOffScreen = 0
  waitTime = 1

  position = new Vector2(-100, -100)
  size = new Vector2(100, 100)
  rotation = 0

  moveSpeed = new Vector2(-100, -100)
  rotationSpeed = 0
  forceSpeed = new Vector2(100, 10)

  isOnScreen = false

  setup() {
    this.element = document.createElement("div")
    this.element.width = this.size.x
    this.element.height = this.size.y
    this.element.style.position = "fixed"
    this.element.style.left = "0px"
    this.element.style.top = "0px"
    this.element.style.transformOrigin = "center"
    this.element.style.pointerEvents = "none"
    this.element.style.filter = "drop-shadow(20px 30px 20px rgba(0, 0, 0, 0.4))"
    this.element.style.zIndex = "999"

    const image = document.createElement("img")
    image.style.position = "absolute"
    image.src = "/assets/images/woo.gif"
    image.width = this.size.x
    image.height = this.size.y
    image.style.transformOrigin = "center"
    this.element.appendChild(image)

    document.addEventListener("mousemove", (event) => {
      if (!(event instanceof MouseEvent)) return

      user.mousePosition.x = event.clientX
      user.mousePosition.y = event.clientY

      user.lastInteractTime = Date.now()
    })

    document.addEventListener("scroll", () => {
      user.lastInteractTime = Date.now()
    })
  }

  update(deltaTime = 0) {
    // Update.
    this.position.x += this.moveSpeed.x * deltaTime
    this.position.y += this.moveSpeed.y * deltaTime
    this.rotation += this.rotationSpeed * deltaTime

    const isOnScreen = this.position.x < 0 - this.size.x
      || this.position.x > window.innerWidth
      || this.position.y < 0 - this.size.y
      || this.position.y > window.innerHeight

    if (!this.isOnScreen && isOnScreen) {
      this.onBecomeHidden()
    }
    
    if (this.isOnScreen && !isOnScreen) {
      this.onBecomeVisible()
    }

    this.isOnScreen = isOnScreen

    // Track how long floaty has been hidden off screen for to decide when to
    // show it again.
    if (this.isOnScreen) {
      this.timeOffScreen += deltaTime
    }

    const timeUserInactive = Date.now() - user.lastInteractTime

    if (!this.isOnScreen && timeUserInactive < INACTIVE_WAIT_TIME) {
      const directionToFloaty = user.mousePosition.directionTo(this.position)
      const distanceToFloaty = user.mousePosition.distanceTo(this.position)
      const pushPercent = clamp(remap(distanceToFloaty, 0, 500, 1, 0), 0.5, 1)
      this.moveSpeed = this.moveSpeed.add(directionToFloaty.scale(10 * pushPercent))
    }
    
    if (this.isOnScreen && this.timeOffScreen > this.waitTime && timeUserInactive > INACTIVE_WAIT_TIME) {
      const screenCenter = new Vector2(window.innerWidth / 2, window.innerHeight / 2)

      const directionToCenter = this.position.directionTo(screenCenter)
      const isMovingAwayFromCenter = this.moveSpeed.normalize().dot(directionToCenter) < 0

      // If the floaty is off screen and is moving away, that means it has done
      // a pass by and it's time to put it into a new random position.
      if (isMovingAwayFromCenter) {
        // Pick the new position off screen by choosing a random direction from
        // the center of the window, going outwards. Imagine a clock hand being
        // rotated around.
        const randomDirection = new Vector2(1, 1).rotated(Math.random() * Math.PI * 2)
        const randomPositionOffScreen = screenCenter.add(
          new Vector2(randomDirection.x * (window.innerWidth / 2), randomDirection.y * (window.innerHeight / 2))
        )
        this.position = randomPositionOffScreen

        const randomRotationDirection = Math.random() < 0.5 ? -1 : 1
        this.rotationSpeed = randomRange(MIN_ROTATION_SPEED, MAX_ROTATION_SPEED) * randomRotationDirection
        this.moveSpeed = this.position.directionTo(screenCenter).scale(randomRange(MIN_MOVE_SPEED, MAX_MOVE_SPEED))

        // Reset timers.
        this.timeOffScreen = 0
        this.waitTime = randomRange(MIN_WAIT_TIME, MAX_WAIT_TIME)
      }
    }
  }

  render() {
    const image = this.element.firstChild
    if (!image) return

    image.style.transform = `rotate(${this.rotation}deg)`;
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  }

  onBecomeVisible() {
    document.body.appendChild(this.element)
  }

  onBecomeHidden() {
    if (!this.element.parentElement) return
    this.element.parentElement.removeChild(this.element)
  }
}

for (let index = 0; index < 10; index ++) {
  const floaty = new Floaty()
  floaty.setup()
  floaties.push(floaty)
}

function update() {
  const nowTime = Date.now()
  const deltaTime = (nowTime - lastFrameTime) / 1000

  for (const floaty of floaties) {
    floaty.update(deltaTime)
    floaty.render()
  }

  lastFrameTime = Date.now()
  window.requestAnimationFrame(update)
}

update()
