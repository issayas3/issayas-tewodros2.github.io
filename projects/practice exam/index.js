let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time) {
    console.log(`Hello everyone, ${greeting}! We are on planet ${location} the show will start ${time}.`)
}



// 2.
var contestants = function(){
    count = 0
    for (var i = 0; i < dogs.length; i++) {
        count++
    }
    return count
}



// 3.
var filterSpecies = dogs.filter(function(animal){
    return animal.species === 'dog'
})



// 4. 
var dogContestants = [... filterSpecies]
 

// 5. 
var dogsWithClasses = dogContestants.map(function(current){
    if (current.weight < 11) {
        current.class = 'red'
    } else if (current.weight < 21) {
        current.class = 'yellow'
    } else {
        current.class = 'green'
    }
    return current
})
    


// 6.
var firstInClass = function(array, output={}) {
    if (array.length === 0) {
        return output
    }

    Object.assign(output, array[0])

    return firstInClass(array.slice(1), output)
}



// 7.
var votes;