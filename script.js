const base_url = 'https://api.jokes.one';
const chuck_base_url = 'https://api.chucknorris.io/jokes';


const button = document.getElementById('joke-of-the-day');
const randomJokeButton = document.getElementById('random-joke');

button.addEventListener('click', () => {
  fetch(base_url + '/jod')
    .then(res => res.json())
    .then(data => {
      const joke = data.contents.jokes[0].joke; // specific spot in array
      console.log(joke);
      const display = document.getElementById('joke'); // this grabs from the h1 tag in the html file
      display.innerHTML = joke.text; // displays text to html file
    })
    .catch(e => console.error(e.message));
});

randomJokeButton.addEventListener('click', () => {
  fetch(chuck_base_url + '/random')
    .then(res => res.json())
    .then(data => {
      const display = document.getElementById('joke'); // this grabs from the h1 tag in the html file
      display.innerHTML = data.value; // displays text to html file
    })
    .catch(e => console.error(e.message));
});


















// const jod = document.getElementById('jod');
// // when I click this button I just want to add something to the list. Anything I want
// jod.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.innerHTML = `https://api.jokes.one/jod`;
  
// });
 



// const button = document.querySelector('button');
// const randomButton = document.querySelector('randomButton')

// button.addEventListener('click', (event) => {
// });

// randomButton.addEventListener('click', (event) => {
// });

// addEventListener('click', (event) => {});

// onclick = (event) => {"https://api.jokes.one/jod"};

// addEventListener('click', (event) => {});

// randomOnClick = (event) => {"https://api.jokes.one/joke/random"}