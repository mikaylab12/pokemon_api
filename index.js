// API pokemon url
let baseurl = "https://pokeapi.co/api/v2/pokemon/?limit=48&offset=0"

// All pokemon images 
let image = document.querySelector('.pokemon-img');

// function to 
function getPokemonList(url){
  window.scrollTo(0,0)
  fetch(url)
  // convert data to JSON
  .then(response => response.json())
  .then(data => {
    // console log info to see if the data will show
    console.log(data);
    let pokemon = data.results;
    console.log(pokemon);
    let container = document.querySelector(".pokemon-list-container");
    let buttons = document.querySelector('.instruction-btns');
    container.innerHTML = ''
    // loop created for each pokemon card
    pokemon.forEach(btn => {
        container.innerHTML += `<button class='pokemon-card' onclick="getPokemonInfo('${btn.url}')"> ${btn.name}</button>`;
    })
    buttons.innerHTML = `<button onclick="getPokemonList('${data.previous}')" class="instruction-btns">Previous</button><button onclick="getPokemonList('${data.next}')" class="instruction-btns">Next</button>`
})
}

getPokemonList(baseurl)

// function to get information about a specific pokemon
function getPokemonInfo(url){
  // console.log(url)
  fetch(url)
  // convert data to JSON
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // colors used to match the type/s of a specific pokemon
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
    // placing the relevant information in their designated areas
    document.querySelector('.pokemon-modal-content').style.background = colors[data.types[0].type.name]
    document.querySelector('.pokemon-info').style.background = colors[data.types[0].type.name]
    document.querySelector('.pokemon-id').innerHTML =`${data.id}.`;
    document.querySelector('.pokemon-name').innerHTML =`${data.species.name}</span>`; 
    document.querySelector('#pokemon-modal').classList.toggle('active');
    image.innerHTML = `<img src=${data.sprites.other["official-artwork"].front_default}>`
    document.querySelector('.height').innerHTML =`<span class='height'>${data.height}</span>`;
    document.querySelector('.weight').innerHTML =`<span class='weight'>${data.weight}</span>`;
   
  })
}

// function to get back to pokemon cards
function closemodal(){
  document.querySelector('#pokemon-modal').classList.remove('active')
}