const request = require("request");

let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the node executable and file path.
//args[0] = Breed Name

const fetcher = (breed) => {

  const breedString = breed.toString(); //convert array element to string
  const apiLink = "https://api.thecatapi.com/v1/breeds/search?q=";
  let searchLink = apiLink + breedString; //create new url with breed name

  request(searchLink,(error,response,body) => {
    if (error) {    //Edge Case: Request Failed
      console.error(`Error: ${error.message}`);
      return;
    }
    if (response.statusCode !== 200) {
      console.error(`Error: Invalid URL: ${searchLink}`);
      return;
    }
    console.log('statusCode:', response && response.statusCode);
    
    const data = JSON.parse(body);

    if (!data.length) {    //Edge Case: Breed Not Found
      console.error(`Error: The following breed not found or does not exist: ${breed}.`);
      return;
    }
    console.log(data[0]["description"]);
    

  });
};


fetcher(args);