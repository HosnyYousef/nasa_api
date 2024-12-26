
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

window.onbeforeunload = function(event)
{
    return confirm("Confirm refresh");
};

document.querySelector('button').addEventListener('click', getDrink)

// window.reload = 

function getDrink(){
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP&date=${choice}`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.url
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('h3').innerText = data.explanation
      // media type
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// anki
// how to do you add another query parameter to an API key?
// e.g.: https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP
// answer: we use '&'
// e.g.: `https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP&date=${choice}`


// how do we change code to accept video?



//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
