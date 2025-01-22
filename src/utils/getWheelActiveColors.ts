// Utility function that sets colors for specific wheel faces
export function getWheelActiveColors(face: number): { [key: string]: string } {
  // console.log('face for colors ==>', face);

  switch (face) {
    case 1:
      return {
        Circle008: '#740938', // red color background color
        // Circle008_1: '#0000ff', // blue text color
      }
    case 2:
      return {
        Circle016: '#740938', // red color background color
        // Circle016_1: '#0000ff', // blue text color
      }
    case 3:
      return {
        Circle004: '#740938', // red color background color
        // Circle004_1: '#0000ff', // blue text color
      }
    case 4:
      return {
        Circle024: '#740938', // red color background color
        // Circle024_1: '#0000ff', // blue text color
      }
    case 5:
      return {
        Circle025: '#740938', // red color background color
        // Circle025_1: '#0000ff', // blue text color
      }
    case 6:
      return {
        Circle010: '#740938', // red color background color
        // Circle010_1: '#0000ff', // blue text color
      }
    default:
      return {
        Circle004_1: '#000', // white color
        // Circle035: '#e71818', // pink
        // Circle035_2: '#cc0d1e', // red
      } // Default colors for undefined cases
  }
}
