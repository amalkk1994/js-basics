const setCounterTime = async (count) => {
  const test = await setTimeout(
    () => {
      console.log("inside", count);
      count = count + 10;
      console.log(count);
    },
    4000,
    count
  );

  return 20;
};

console.log("hello");

(async () => {
  let count = 10;
  const newCount = await setCounterTime(count);

  console.log(newCount);
})();

console.log("line after the async call....");

// the callback inside the settimeout cannot return any value to the outside world
// whatever you have to do must be done inside it

// await can be  used only inside the async functions if you want to call
// immediately use the IIFE
