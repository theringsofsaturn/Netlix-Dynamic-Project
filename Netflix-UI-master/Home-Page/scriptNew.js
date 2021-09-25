window.onload = async () => {
  // Variables for Fetch URL & authorization key
  const url = "https://striveschool-api.herokuapp.com/api/movies/";
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YThiODE2ZWY2MDAwMTVjZWQwNTUiLCJpYXQiOjE2MzIzMTU3ODksImV4cCI6MTYzMzUyNTM4OX0.5DMyLDm1BhaVjrBNllHevG_JWKkIIT8o2np1ZpuHMFw";

  // Reference to categories in the DOM
  const drama = document.getElementById("drama");
  const comedy = document.getElementById("comedy");
  const thriller = document.getElementById("thriller");

  // The main Try/Catch
  try {
    // The response from Drama category
    const dramaResponse = await fetch(url + "Drama", {
      method: "GET",
      headers: {
        Authorization: key,
      },
    });
    // The response from Comedy category
    const comedyResponse = await fetch(url + "Comedy", {
      method: "GET",
      headers: {
        Authorization: key,
      },
    });
    // The response for Thriller category
    const thrillerResponse = await fetch(url + "Thriller", {
      headers: "GET",
      Authorization: key,
    });

    // The parsed data from each category
    const dramaData = await dramaResponse.json();
    const comedyData = await comedyResponse.json();
    const thrillerData = await thrillerResponse.json();
  } catch (error) {
    console.log(error);
  }
};
