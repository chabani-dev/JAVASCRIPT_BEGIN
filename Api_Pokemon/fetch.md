# Fetch API Example

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It is a more powerful and flexible replacement for the older XMLHttpRequest.

## Example: Fetching Data from a Pokémon API

Here is an example of how to use the Fetch API to get data from a Pokémon API:

```javascript
// URL of the Pokémon API
const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

// Fetch data from the API
fetch(apiUrl)
  .then((response) => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then((data) => {
    // Log the data to the console
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("There has been a problem with your fetch operation:", error);
  });
```

In this example:

- We define the URL of the Pokémon API.
- We use `fetch` to make a GET request to the API.
- We check if the response is ok and then parse the JSON data.
- We log the data to the console.
- We handle any errors that occur during the fetch operation.

This is a simple example to get you started with the Fetch API. You can use it to make more complex requests and handle different types of responses.
