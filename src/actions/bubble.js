export const BUBBLE_NAME = 'BUBBLE_NAME';

export function changeBubble(bubbleName) {
  return {
    type: BUBBLE_NAME,
    bubbleName,
  }
}
