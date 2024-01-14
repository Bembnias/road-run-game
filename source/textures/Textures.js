import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

const textures = {
  grassTexture: {
    colorMap: textureLoader.load('./source/textures/ground/Grass004_1K-JPG_Color.jpg'),
    roughnessMap: textureLoader.load('./source/textures/ground/Grass004_1K-JPG_Roughness.jpg'),
    normalMap: textureLoader.load('./source/textures/ground/Grass004_1K-JPG_NormalGL.jpg'),
    aoMap: textureLoader.load('./source/textures/ground/Grass004_1K-JPG_AmbientOcclusion.jpg'),
  },
  brickTexture: {
    colorMap: textureLoader.load('./source/textures/brick/Bricks076B_1K-JPG_Color.jpg'),
    roughnessMap: textureLoader.load('./source/textures/brick/Bricks076B_1K-JPG_Roughness.jpg'),
    normalMap: textureLoader.load('./source/textures/brick/Bricks076B_1K-JPG_NormalGL.jpg'),
    aoMap: textureLoader.load('./source/textures/brick/Bricks076B_1K-JPG_AmbientOcclusion.jpg'),
  },
  goldTexture: {
    colorMap: textureLoader.load('./source/textures/gold/Foil002_1K-JPG_Color.jpg'),
    roughnessMap: textureLoader.load('./source/textures/gold/Foil002_1K-JPG_Roughness.jpg'),
    normalMap: textureLoader.load('./source/textures/gold/Foil002_1K-JPG_NormalGL.jpg'),
    aoMap: textureLoader.load('./source/textures/gold/Foil002_1K-JPG_AmbientOcclusion.jpg'),
  },
}

textures.grassTexture.colorMap.wrapS = THREE.RepeatWrapping
textures.grassTexture.colorMap.wrapT = THREE.RepeatWrapping

textures.brickTexture.colorMap.wrapS = THREE.RepeatWrapping
textures.brickTexture.colorMap.wrapT = THREE.RepeatWrapping
textures.brickTexture.colorMap.repeat.set(1, 1)

textures.goldTexture.colorMap.wrapS = THREE.RepeatWrapping
textures.goldTexture.colorMap.wrapT = THREE.RepeatWrapping
textures.goldTexture.colorMap.repeat.set(1, 1)

const { grassTexture, brickTexture, goldTexture } = textures

export { grassTexture, brickTexture, goldTexture }
