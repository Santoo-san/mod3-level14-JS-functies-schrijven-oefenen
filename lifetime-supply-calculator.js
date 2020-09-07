console.log("daar gaan we weer");

const maxAge = 100;
const calculateSupply = function (age, amountDay) {
  let supply = (maxAge - age) * amountDay * 365;
  console.log(
    "You will need " +
      supply +
      " to last you until the ripe old age of " +
      maxAge
  );
};

calculateSupply(20, 1000);
calculateSupply(99, 200);
calculateSupply(10, 500);
