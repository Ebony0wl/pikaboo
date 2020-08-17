/*
    This file will instantiate JavaScript Objects to represent Pokemon. We may need
    to make API calls using axios in order to grab more information about specific Pokemon.
    These JavaScript objects could then be pushed into a Pokegotchi collection on Firestore to
    persist data about live Pokegotchis.
*/

// const api = an api thing here
// const Pokegotchi = foundPokegotchi

class Pokegotchi {
    constructor(name) {
        this.name = name;
        this.species = species;
        this.timesFed = 0;
        this.evolutionLevel = 1;
    }

    feed() {
        this.timesFed += 1;
    }
}

class Game {
    constructor(pokegotchi) {
        this.pokegotchi = pokegotchi
    }
    
    start(name) {
        this.name = pokegotchi.name;
        
    }
}