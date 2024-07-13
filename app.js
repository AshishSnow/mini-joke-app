const btn = document.getElementById('btn')
const jokeData = document.getElementById('jokes')
const url = "https://v2.jokeapi.dev/joke/Programming?type=single"


const getJokes = ()=>{


   fetch(url)
   .then(res => res.json())
   .then (data => {
     
    jokeData.textContent = data.joke;

   })


}




btn.addEventListener('click', getJokes)

getJokes();

