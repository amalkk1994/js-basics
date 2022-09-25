const sumOfThreeElements = (...elements) => {
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("not more than 3 elements are allowed!!");
    } else {
      let sum = 0;
      for (let i = 0; i < elements.length; i++) {
        sum += elements[i];
      }
      resolve(sum);
    }
  });
};

(async function () {
  try {
    let result = await sumOfThreeElements(4, 5, 6, 8);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
/*
  .then((result) => console.log("res", result))
  .catch((err) => err);
  */
