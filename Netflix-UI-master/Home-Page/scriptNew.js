window.onload = async () => {
  // Variables for Fetch URL & authorization key
  const url = "https://striveschool-api.herokuapp.com/api/movies/";
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YThiODE2ZWY2MDAwMTVjZWQwNTUiLCJpYXQiOjE2MzIzMTU3ODksImV4cCI6MTYzMzUyNTM4OX0.5DMyLDm1BhaVjrBNllHevG_JWKkIIT8o2np1ZpuHMFw";

  // Reference to categories in the DOM
  const dramaContainer = document.getElementById("drama");
  const comedyContainer = document.getElementById("comedy");
  const thrillerContainer = document.getElementById("thriller");

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

    // DRAMA
    if (dramaResponse > 0) {
      dramaResponse.forEach((movie) => {
        dramaContainer.innerHTML += `<div class="movie-row">
        <div class="row">
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media0.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media1.jpg">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media2.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media3.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media4.jpg">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media5.webp">
            </div>

        </div>
    </div>`;
      });
    } else {
      dramaResponse.innerHTML = `<div class="alert alert-info" role="alert">
      No movies yet!
    </div>`;
    }

    // Comedy
    if (comedyResponse > 0) {
      comedyResponse.forEach((movie) => {
        comedyResponse.innerHTML += `<div class="movie-row">
        <div class="row">
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media0.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media1.jpg">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media2.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media3.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media4.jpg">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media5.webp">
            </div>

        </div>
    </div>`;
      });
    } else {
      comedyResponse.innerHTML = `<div class="alert alert-info" role="alert">
      No movies yet!
    </div>`;
    }

    // Thriller
    if (thrillerResponse > 0) {
      thrillerResponse.forEach((movie) => {
        thrillerResponse.innerHTML += `<div class="movie-row">
        <div class="row">
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media0.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media1.jpg">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media2.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media3.webp">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media4.jpg">
            </div>
            <div class="col-md-2">
                <img class="movie-cover" src="./img/media5.webp">
            </div>

        </div>
    </div>`;
      });
    } else {
      `<div class="alert alert-info" role="alert">
      No movies yet!
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};
