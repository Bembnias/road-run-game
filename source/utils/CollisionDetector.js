export function sphereCollision({ sphere, box }) {
  const closestPoint = {
    x: Math.max(box.left, Math.min(sphere.position.x, box.right)),
    y: Math.max(box.bottom, Math.min(sphere.position.y, box.top)),
    z: Math.max(box.back, Math.min(sphere.position.z, box.front)),
  }

  const distance = Math.sqrt(
    (closestPoint.x - sphere.position.x) ** 2 +
      (closestPoint.y - sphere.position.y) ** 2 +
      (closestPoint.z - sphere.position.z) ** 2
  )

  return distance < sphere.radius
}

export function boxCollision({ box1, box2 }) {
  const xAxisCollision = box1.right >= box2.left && box1.left <= box2.right
  const zAxisCollision = box1.back <= box2.front && box1.front >= box2.back
  const yAxisCollision = box1.bottom <= box2.top && box1.top >= box2.bottom

  return xAxisCollision && yAxisCollision && zAxisCollision
}
