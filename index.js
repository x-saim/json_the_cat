const {fetchBreedDescription} = require("./breedFetcher");

const breedName = process.argv[2];

//we are calling the function fetchBreedDescription here with a callback function. fetchBreedDescription serves as an async function.
fetchBreedDescription(breedName, (error,desc) => {
  if (error) {
    console.log("Error fetch details:",error);
  } else {
    console.log(desc);
  }

});