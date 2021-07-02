// let url = "https://pokeapi.co/api/v2/pokemon/";
// const container = document.getElementsByClassName('pokemon-list-container');

// let project = [
//   {
//     img: "",
//     imgALT: "",
//     name: "",
//     id: "",
//     type: "",
//   }]
// const main_types = Object.keys(colors);
// // Function to fetch a list of pokemon
// function getPokemonList(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // let image = document.querySelector(".poke-image").innerHTML += `<img src="${data.sprites.front_default}"`
//       // let number = document.querySelector(".poke-number").innerHTML += `<div class="card">${data.id}</div>`
//       // let name = document.querySelector(".poke-name").innerHTML += `<div class="card">${data.name}</div>`
//       // Console log to make sure I am getting the data
//       document.write(data);
//     //   // Get the list of pokemon from the results
//       let pokemon = data.results;
//     //   // Get element from HTML to write buttons in
//       let container = document.querySelector(".pokemon-list-container");
//     //   // Clear the container
//       container.innerHTML = "";
//     //   // Loop over pokemon list and create an HTML button for each one. Add the button to the container
//     //   pokemon.forEach((card) => {
//     //     container.innerHTML += `<div class="card">${btn.name}</div>`;
//     //   });
//       pokemon.forEach((project) => {
//         container.innerHTML += `<div class="card">${name, number, image}</div>`;
//       });
//     //   document.querySelector(".card").innerHTML = `
//     //   <img src="${data.sprites.front_default} ">`;
//     //   // Add a next pokemon button
//     //   document.querySelector(".instruction-btns").innerHTML += `<br><br><button class="next" onclick="getPokemonList('${data.next}')">Next</button>`;
//     //   // Add a previous pokemon button
//     //   document.querySelector(".insturction-btns").innerHTML += `<br><br><button class="previous" onclick="getPokemonList('${data.previous}')">Previous</button>`;

//     });
// }


// // const fetchPokemons (url) {
// function getPokemonList(url) {
//   fetch(url)
//     // Convert data from JSON
//     .then((response) => response.json())
//     //Stuff to do with data
//     .then((data) => {
//       // Console log to make sure I am getting the data
//       console.log(data);
//       // Get the list of pokemon from the results
//       let pokemon = data.results;
//       // Loop over pokemon list and create an HTML button for each one. Add the button to the container
//   //     pokemon.forEach((card) => {
//   //       <img src="${data.sprites.front_default} "></img>

//   // });
//     // Add a next pokemon button
//       container.innerHTML += `<br><br><button class="next" onclick="getPokemonList('${pokemon.next}')">Next</button>`;
//     // Add a previous pokemon button
//       document.querySelector(".instruction-btns").innerHTML += `<button class="previous" onclick="getPokemonList('${pokemon.previous}')">Previous</button>`;
//   });
// }

// getPokemonList();

// const getPokemon = async id => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const pokemon = await res.json();
//   createPokemonCard(pokemon);
// };

// function createCard(card) {
//   let createdCard = `<div class="card">
//       <img "https://pokeres.bastionbot.org/images/pokemon/${
//         pokemon.id}.png" alt="${pokemon.name}" />
//       <div class="pokemon-id>${pokemon.id}</div>
//       <div class="pokemon-name>${pokemon.name}</div>
//       <span class="pokemon-type">${pokemon.type[0].type.name}</span>
//     </div>
//   `;
//   return createdCard;
// }

// function createPokemonCard(pokemon) {
//   const pokemonEl = document.createElement('div');
//   pokemonEl.classList.add('pokemon');

//   const poke_types = pokemon.types.map(type => type.type.name);
//   const type = main_types.find(type => poke_types.indexOf(type) > -1);
//   const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
//   const color = colors[type];
  
//   pokemonEl.style.backgroundColor = color;

//   // const pokeInnerHTML = `
//   //       <div class="img-container">
//   //           <img src="https://pokeres.bastionbot.org/images/pokemon/${
//   //             pokemon.id
//   //           }.png" alt="${name}" />
//   //       </div>
//   //       <div class="info">
//   //           <span class="number">#${pokemon.id
//   //             .toString()
//   //             .padStart(3, '0')}</span>
//   //           <h3 class="name">${name}</h3>
//   //           <small class="type">Type: <span>${type}</span></small>
//   //       </div>
//   //   `;

//   // pokemonEl.innerHTML = pokeInnerHTML;

//   // poke_container.appendChild(pokemonEl);
// }
// getPokemonList();

// let card = 
//   document.querySelector(".image").INNERHTML


// Get default pokemon list
// getPokemonList(base_URL);

// function renderPokemon(pokemonData){
//   pokemonData.forEach((pokemon) => {
//     console.log(pokemon)
//   });
// }
// Function to get information about a specific pokemin
// function getPokemonInfo(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // Make sure data comes throufg
//       console.log(data);
//       // Write data to pokemon information container
//       document.querySelector(".card").innerHTML = `
//     <img src="${data.sprites.front_default} ">
//     `;
//     });
// }


// cardsContainer = document.querySelector(".pokemon-list-container")

// const card = document.createElement("div")

// document.addEventListener("DOMContentLoaded", function(){console.log("loaded")})

// function getPokemon(){
//   fetch(url)
//   .then((response) => {
//     return response.json()
//   })
//   .then((data)=>{
//     for (let index=0; index<1; index++) {
//       container.INNERHTML += `
//       <div class="card">
//         <div class="image">
//           <img src="${data.sprites.front_default}" alt=""> 
//         </div>
//         <div class="pokemon-id">${data.number}</div>
//         <div class="pokemon-name">${data.name}</div>
//         <div class="pokemon-type-container">
//           Type: <span class="pokemon-type"></span>
//         </div>
//       </div>
//       <div class="instruction-btns">
//         <div class="next">Next</div>
//         <div class="previous">Previous</div>
//       </div>
//     </div>
//       `
//     }
//   })
// }


let baseurl = "https://pokeapi.co/api/v2/pokemon/?limit=48&offset=0"

let image = document.querySelector('.pokeimg');

function getPokemonList(url){
  window.scrollTo(0,0)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let pokemon = data.results;
    console.log(pokemon);
    let container = document.querySelector(".pokemon-list-container");
    let container2 = document.querySelector('.onepokemon');
    container.innerHTML = ''
    pokemon.forEach(btn => {
        container.innerHTML += `<button class='pokebutton' onclick="getPokemonInfo('${btn.url}')"> ${btn.name}</button>`;
    })
    container2.innerHTML = `<i onclick="getPokemonList('${data.previous}')" class="fas fa-arrow-circle-left"></i><i onclick="getPokemonList('${data.next}')" class="fas fa-arrow-circle-right"></i>`
})
}

getPokemonList(baseurl)

function getPokemonInfo(url){
  // console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    };
    // types
    let types = data.types
    let typecont = document.querySelector('.type')
    typecont.innerHTML = innerHTML = ``
    types.forEach(t => {
    typecont.innerHTML +=`<span class='type'>${t.type.name}</span> `; 
    })
    document.querySelector('.pokecontent').style.background = colors[data.types[0].type.name]
    document.querySelector('.pokeinfo').style.background = colors[data.types[0].type.name]
    document.querySelector('.pokeid').innerHTML =`${data.id}.`;
    document.querySelector('.pokename').innerHTML =`${data.species.name}`; 
    document.querySelector('#modal').classList.toggle('active');
    image.innerHTML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
    document.querySelector('.height').innerHTML =`<span class='descspan'>${data.height}</span>`;
    document.querySelector('.weight').innerHTML =`<span class='descspan'>${data.weight}</span>`;
   
  })
}

function closemodal(){
  document.querySelector('#modal').classList.remove('active')
}