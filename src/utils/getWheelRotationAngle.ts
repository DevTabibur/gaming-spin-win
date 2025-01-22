/* eslint-disable no-console */
// this utility function, sets Dice Rotation angle
export async function getWheelRotationAngle(
  face: number
): Promise<{ x: number; y: number; z: number }> {
  console.log('face ==>', face)
  return new Promise((resolve) => {
    switch (face) {
      case 1:
        resolve({ x: 0, y: 0, z: -1.37 }) // Face x5
        break
      case 2:
        resolve({ x: 0, y: 0, z: 2.93 }) //  Face x4
        break
      case 3:
        resolve({ x: 0, y: 0, z: 6.11 }) //  Face x2
        break
      case 4:
        resolve({ x: 0, y: 0, z: -4.891 }) //  Face x7
        break
      case 5:
        resolve({ x: 0, y: 0, z: -5.298 }) // Face x20
        break
      case 6:
        resolve({ x: 0, y: 0, z: 4.5 }) //  Face x10
        break
      default:
        resolve({ x: 0, y: 0, z: 0 }) // if its value is 0 or Default case if face is out of range ==> Face x0 (blue color)
    }
  })
}
