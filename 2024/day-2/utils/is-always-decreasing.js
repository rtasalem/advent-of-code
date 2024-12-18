export const isAlwaysDecreasing = (array) => {
  for(let i = 1; i < array.length; i++) {
    if(array[i] >= array[i-1]) {
      return false
    }
  }
  return true
}
