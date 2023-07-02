console.log('eccolo');

let actualPageindex
getNextPage();

function getNextPage() {
    if (actualPageindex === undefined) {
        actualPageindex = 0;
    } else {
        actualPageindex++;
    }

    PokeSercvice.getPage(actualPageindex).then(pokemons => {

        displayPokemons(pokemons);
    })
}

function getPreviousPage() {
    actualPageindex--;
    PokeSercvice.getPage(actualPageindex).then(pokemons => {
        displayPokemons(pokemons);
    })
}

function displayPokemons(pokemons) {
    const pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';






    for (const pokemon of pokemons) {
       
        pokemonContainer.innerHTML += `
        <details>
            <summary>
                <span>${pokemon.id}</span>
                <img class="list-img" src="${pokemon.sprites.front_default}" alt="">
                <span>${pokemon.name}</span>
                <div class="spacer"></div>
                ${pokemon.types.map(obj => `<span class="type">${obj.type.name}</span>`).join('')}

        </summary>
       <div>
        <ul>
            ${createAbilitiesList(pokemon)}
        </ul>
       </div>
    </details> 
        `

    }
}

function createAbilitiesList(pokemon) {
    let abilitiesHTML = '';
    for (const object of pokemon.abilities) {
        abilitiesHTML += `<li>${object.ability.name}</li>`
    }

    return abilitiesHTML;
}