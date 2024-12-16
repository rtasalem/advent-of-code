export const strictlyDecreasing = (arr) => {
  return arr.every((i, value) => i === 0 || value < arr[i - 1])
}