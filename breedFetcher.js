const request = require("request");

const fetchBreedDescription = ((breedName, callback) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) => {
    if (error) {    
      callback(error,null);
    }
    
    if (response.statusCode !== 200) {
      console.error(`Error: Invalid URL: https://api.thecatapi.com/v1/breeds/search?q=${breedName}`);
      return;
    }
    console.log('statusCode:', response && response.statusCode);

    const data = JSON.parse(body); //parse JSON string into JS object.

    if (!data.length) {    //Edge Case: Breed not found if empty array exists.
      callback(error, "Error: The cat breed was not found or does not exist.");
    } else {
      callback(null, data[0]["description"]); //data[0] is the breed and we are accessing the description key's value.
    }

  });
});

module.exports = {fetchBreedDescription};