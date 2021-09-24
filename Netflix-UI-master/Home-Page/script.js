const fetchData = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YThiODE2ZWY2MDAwMTVjZWQwNTUiLCJpYXQiOjE2MzIzMTU3ODksImV4cCI6MTYzMzUyNTM4OX0.5DMyLDm1BhaVjrBNllHevG_JWKkIIT8o2np1ZpuHMFw",
        },
      }
    );
    if (response.ok) {
      const categories = await response.json();
      console.log("Movie categories:", categories);
      const movies = await Promise.all(
        categories.map(async (category) => {
          const moviesResponse = await fetch(
            "https://striveschool-api.herokuapp.com/api/movies/" + category,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YThiODE2ZWY2MDAwMTVjZWQwNTUiLCJpYXQiOjE2MzIzMTU3ODksImV4cCI6MTYzMzUyNTM4OX0.5DMyLDm1BhaVjrBNllHevG_JWKkIIT8o2np1ZpuHMFw",
              },
            }
          );
          return await moviesResponse.json();
        })
      );
      console.log("Movies array", movies);

      movies.forEach((moviesArray) => {
        console.log(moviesArray);
        carouselMovies = [];
        let x = 0;
        while (x < moviesArray.length) {
          carouselMovies.push(moviesArray.slice(x, (x += 6)));
        }

        const movieGallery = `<div class="movie-gallery m-2">
        <h5 class="text-light mt-2 mb-2">${moviesArray[0].category}</h5>
        <div id="${
          moviesArray[0].category
        }" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            ${carouselMovies
              .map(
                (carouselItem, i) => `<div class="carousel-item ${
                  i === 0 ? "active" : ""
                }">
            <div class="movie-row">
                <div class="row">
                ${carouselMovies
                  .map(
                    (movie) => `<div class="col-md-2">
                <img class="movie-cover" src="./img/media0.webp">
            </div>`
                  )
                  .join("")}
                </div>
            </div>
        </div>`
              )
              .join("")}
                
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${moviesArray[0].category}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${moviesArray[0].category}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>`;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

window.onload = async () => {
  await fetchData();
};
