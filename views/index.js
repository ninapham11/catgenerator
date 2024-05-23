// Define an object named `API` to encapsulate functionality related to fetching dog images/videos
const API = {
  // Function to fetch a random dog image or video
  async getRandomDog() {
    try {
      // Get a reference to the button element with the ID "dogStatus"
      const dogButton = document.querySelector("#dogStatus");

      // Update the button text to indicate fetching is in progress
      dogButton.innerHTML = "Getting dog now...";

      // Fetch data from the "random.dog" API endpoint using the fetch API
      const response = await fetch("https://random.dog/woof.json");

      // Check if the response was successful (status code in the 200s)
      if (!response.ok) {
        // If not successful, throw an error with details
        throw new Error(`API request failed with status: ${response.status}`);
      }

      // Parse the JSON response data
      const data = await response.json();

      // Extract the URL of the dog image/video from the data
      const dog = data.url; // link to the video or picture

      // Check if the URL ends with ".mp4" to determine if it's a video
      const isVideo = dog.split('.').pop() === "mp4";

      // Update the image element's source attribute with the dog URL
      document.querySelector("#dog").setAttribute("src", dog);

      // Update the button text back to "Click Here for A New Pup!"
      dogButton.innerHTML = "Click Here for A New Pup!";
    } catch (error) {
      // Handle errors during the process
      console.error("Error fetching random dog:", error);
      dogButton.innerHTML = "Error! Try again later.";
    }
  },
};

// When the window loads (page fully loaded), call the getRandomDog function
window.onload = function () {
  API.getRandomDog();
};
