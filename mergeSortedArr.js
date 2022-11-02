const arr1 = [1, 1, 2, 3, 6, 6, 9, 11, 14]
const arr2 = [2, 4, 4, 5, 6, 7, 7, 9, 9, 15, 17]

const resArr = []
const resArrLen = arr1.length + arr2.length
let indexArr1 = 0
let indexArr2 = 0

for (let i = 0; i < resArrLen; i++) {
  console.log(
    "index Array 1: " + indexArr1 + ", element array 1:" + arr1[indexArr1]
  )
  console.log(
    "index Array 2: " + indexArr2 + ", element array 2:" + arr2[indexArr2]
  )
  if (arr1[indexArr1] <= arr2[indexArr2] || indexArr2 >= arr2.length) {
    resArr[i] = arr1[indexArr1]
    indexArr1++
  } else {
    if (arr1[indexArr1] > arr2[indexArr2] || indexArr1 >= arr1.length) {
      resArr[i] = arr2[indexArr2]
      indexArr2++
    }
  }
  console.log("resArr:" + resArr)
}

console.log("Result Array:" + resArr)
