const request = require("request");

//https://api.thecatapi.com/v1/breeds/search

let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the node executable and file path. 
//args[0] = Breed Name

const fetcher = (breed) => {
  console.log(breed);
  const breedString = breed.toString(); //convert array element to string
  console.log(typeof breedString);
  const apiLink = "https://api.thecatapi.com/v1/breeds/search?q=";
  let searchLink = apiLink + breedString;
  console.log(searchLink);
  request(searchLink,(error,response,body) => {
    console.error(error);
    console.log("statusCode:", response && response.statusCode);
    const data = JSON.parse(body);
    console.log(data[0]["description"]);

  });
};


fetcher(args);