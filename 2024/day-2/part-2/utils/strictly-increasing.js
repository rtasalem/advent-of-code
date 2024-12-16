export const strictlyIncreasing = (arr) => {
  return arr.every((i, value) => i === 0 || value > arr[i - 1])
}