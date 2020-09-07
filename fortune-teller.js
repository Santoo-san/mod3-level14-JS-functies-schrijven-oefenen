console.log("Daar gaan we weer");
const fortuneTeller = function (jobTitle, location, partnername, numberKids) {
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      location +
      ", and married to " +
      partnername +
      " with " +
      numberKids +
      " kids."
  );
};

fortuneTeller("MvA", "Verweggistan", "Joyce", 3);
fortuneTeller("MvbA", "Toedeldokistan", "James", 2);
fortuneTeller("CEO", "Amsterdam", "Jacinda", 4);
