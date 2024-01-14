import * as THREE from 'three'
import { sphereCollision } from '../utils/CollisionDetector.js'

export class Sphere extends THREE.Mesh {
  constructor({
    radius = 1,
    color = 0x00ff00,
    texture = {
      colorMap: null,
      roughnessMap: null,
      normalMap: null,
      aoMap: null,
      displacementMap: null,
      metalnessMap: null,
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
    const materialOptions =
      texture.colorMap !== null || texture.colorMap !== undefined
        ? {
            map: texture.colorMap,
            roughnessMap: texture.roughnessMap,
            normalMap: texture.normalMap,
            aoMap: texture.aoMap,
          }
        : { color }

    super(new THREE.SphereGeometry(radius, 32, 32), new THREE.MeshStandardMaterial(materialOptions))

    this.radius = radius
    this.color = color

    this.position.set(position.x, position.y, position.z)
    this.rotation.set(rotation.x, rotation.y, rotation.z)

    this.velocity = velocity
    this.gravity = -0.005

    this.zAcceleration = zAcceleration
  }

  update(ground) {
    if (this.zAcceleration) this.velocity.z += 0.00075

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.position.z += this.velocity.z

    this.addGravity(ground)
  }

  addGravity(ground) {
    this.velocity.y += this.gravity

    if (sphereCollision({ sphere: this, box: ground })) {
      this.velocity.y *= 0.8
      this.velocity.y = -this.velocity.y
    } else {
      this.position.y += this.velocity.y
    }
  }
}
