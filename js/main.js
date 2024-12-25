
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    const choice = document.querySelector('input').value.toLowerCase()
    const url = `https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
