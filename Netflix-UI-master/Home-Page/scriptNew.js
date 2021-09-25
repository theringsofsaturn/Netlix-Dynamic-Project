window.onload = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/movies/";
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YThiODE2ZWY2MDAwMTVjZWQwNTUiLCJpYXQiOjE2MzIzMTU3ODksImV4cCI6MTYzMzUyNTM4OX0.5DMyLDm1BhaVjrBNllHevG_JWKkIIT8o2np1ZpuHMFw";

  const drama = document.getElementById("drama");
  const comedy = document.getElementById("comedy");
  const thriller = document.getElementById("thriller");

  try {
    const dramaResponse = await fetch(url + "Drama", {
      method: "GET",
      headers: {
        Authorization: key,
      },
    });

    const comedyResponse = await fetch(url + "Comedy", {
      method: "GET",
      headers: {
        Authorization: key,
      },
    });

    const thrillerResponse = await fetch(url + "Thriller", {
      headers: "GET",
      Authorization: key,
    });

    const dramaData = await dramaResponse.json();
    const comedyData = await comedyResponse.json();
    const thrillerData = await thrillerResponse.json();
  } catch (error) {
    console.log(error);
  }
};
