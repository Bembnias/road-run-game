export function findMax() {
  let points = localStorage.getItem('points')
  if (points === null) {
    return null
  }
  let max = Number.NEGATIVE_INFINITY
  let pointArray = points.split(';')
  for (let i = 0; i < pointArray.length; i++) {
    let point = parseFloat(pointArray[i])
    if (!isNaN(point) && point > max) {
      max = point
    }
  }
  return max
}
