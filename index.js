const person = {
    "name": "Lil Mo Diddy",
    "city": "Columbia City",
    "hungry": true,
    "numberOfPizzaSlicesCanBeEatenBy": 1200,
}
console.log(person.numberOfPizzaSlicesCanBeEatenBy);

//create an object that is an animal, give it 5 properties (sound,name,type how many paws it has, would you hang out with that animanl)

const tiger = {
    "name": "Timba",
    "type": "BigCat",
    "sound": "Roar",
    "howManyPaws": 4,
    "wouldIHangoutWithIt": true,
}
console.log(tiger)

const person1 = {
    name: "Samir tha Savage",
    ageRange: "Eleventeen to 46",

}

const person2 = {
    name: "Dragonforce Ana",
    ageRange: "22-27"
}

function suggestMusic(person) {
    if (person.ageRange === "Eleventeen to 46") {
        console.log("We think you listen to Migos and believe you are the 4th member")
    } else if (person.ageRange === "22-27") {
        console.log("you obviously like Cardi B")
    } else {
        console.log("you re too old for this survey geezer")
    }
}

suggestMusic(person1);

const ghost = {
    name: "Salah",
    speak() {
        console.log("bOoOoOoo")
    }
}

ghost.speak()

const cat = {
    name: "BigCat",
    speak() {
        console.log("Meeeeeeooowowwwww")
    }
}

//write an array with 6 indexes of objects that contain an artist and a song 
//use a for loop to run through the array 
//use foreach to run through array

const artist = [
    { song: "baby", artist: "JustinBieber" }
    { song: "sorry", artist: "JustinBieber"}
    { song: "whatDoYouMean", artist: "JustinBieber"}
]

for (let i = 0; i < artist.length; i++) {
    console.log(artist[1]);
}