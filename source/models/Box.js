import * as THREE from 'three'
import { boxCollision } from '../utils/CollisionDetector.js'

export class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = 0x00ff00,
    texture = {
      colorMap: null,
      roughnessMap: null,
      normalMap: null,
      aoMap: null,
    },
    velocity = {
      x: 0,
      y: 0,
      z: 0,
    },
    position = {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation = {
      x: 0,
      y: 0,
      z: 0,
    },
    zAcceleration = false,
  }) {
    super(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshStandardMaterial(
        texture.colorMap !== null || undefined
          ? {
              map: texture.colorMap,
              roughnessMap: texture.roughnessMap,
              normalMap: texture.normalMap,
              aoMap: texture.aoMap,
            }
          : { color }
      )
    )

    this.width = width
    this.height = height
    this.depth = depth
    this.color = color

    this.position.set(position.x, position.y, position.z)
    this.rotation.set(rotation.x, rotation.y, rotation.z)

    this.right = this.position.x + this.width / 2
    this.left = this.position.x - this.width / 2

    this.bottom = this.position.y - this.height / 2
    this.top = this.position.y + this.height / 2

    this.front = this.position.z + this.depth / 2
    this.back = this.position.z - this.depth / 2

    this.velocity = velocity
    this.gravity = -0.005

    this.zAcceleration = zAcceleration
  }

  updateSides() {
    this.right = this.position.x + this.width / 2
    this.left = this.position.x - this.width / 2

    this.top = this.position.y + this.height / 2
    this.bottom = this.position.y - this.height / 2

    this.front = this.position.z + this.depth / 2
    this.back = this.position.z - this.depth / 2
  }

  update(ground) {
    this.updateSides()

    if (this.zAcceleration) this.velocity.z += 0.00075

    this.position.x += this.velocity.x
    this.position.z += this.velocity.z

    this.addGravity(ground)
  }

  addGravity(ground) {
    this.velocity.y += this.gravity

    if (
      boxCollision({
        box1: this,
        box2: ground,
      })
    ) {
      this.velocity.y *= 0.8
      this.velocity.y = -this.velocity.y
    } else {
      this.position.y += this.velocity.y
    }
  }
}
