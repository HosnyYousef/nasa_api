
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// window.onbeforeunload = function(event)
// {
//     return confirm("Confirm refresh");
// };

// function standby() {
//   document.getElementById('foo').src = 'images/nasaLogoTransparent.png'
// }


document.querySelector('button').addEventListener('click', getDrink)

// window.reload = 

    // Refresh the page after a delay of 3 seconds
 // 3000 milliseconds = 3 seconds


  // location.replace()
function getDrink(){
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP&date=${choice}`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title
      if(data.media_type === 'image') {
        document.querySelector('img').style.visibility = 'visible'
        document.querySelector('iframe').style.visibility = 'hidden'
        document.querySelector('img').src = data.url
      }
      if(data.media_type === 'video') {
        document.querySelector('iframe').style.visibility = 'visible'
        document.querySelector('img').style.visibility = 'hidden'
        let images=document.querySelectorAll('img');
images.forEach(img => img.setAttribute("width",'60%'));
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('h3').innerText = data.explanation
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


// QUESTON:
// how do we change code to accept video?

// function getDrink(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP&date=${choice}`
// fetch(url)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data)
//     document.querySelector('h2').innerText = data.title
//     document.querySelector('img').src = data.url
//     document.querySelector('iframe').src = data.url
//     document.querySelector('h3').innerText = data.explanation
//     // media type
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });
// }

// ANSWER:
// function getDrink(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.nasa.gov/planetary/apod?api_key=gGIh2JmUXbLcG7fwadwnbaaZg2klIH4P3GWrYnbP&date=${choice}`
// fetch(url)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data)
//     document.querySelector('h2').innerText = data.title
//     if (data.media_type === 'image') {
//       document.querySelector('img').src = data.url
//     }else if(data.media_type === 'video'){
//       document.querySelector('iframe').src = data.url
//     }
//     document.querySelector('h3').innerText = data.explanation
//     // media type
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });
// }

//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
