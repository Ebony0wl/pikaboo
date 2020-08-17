/*
    This file will instantiate JavaScript Objects to represent Pokemon. We may need
    to make API calls using axios in order to grab more information about specific Pokemon.
    These JavaScript objects could then be pushed into a Pokegotchi collection on Firestore to
    persist data about live Pokegotchis.
*/

// const api = an api thing here

class Pokegotchi {
    constructor(name) {
        this.name = name;
        this.timesFed = 0;
        this.evolutionLevel = 1;
    }
}