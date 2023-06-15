//Question one
// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// ....................Pseucode.............
// Input        |Output              |Process
//  story       | translation     | create a class Story
//  storyTeller |                 | create a method translateStory
//  Translator  |                 |  create a method of addStory

class Story{
    stories  = []
    constructor(story, storyTeller, translator){
        this.story = story
        this.storyTeller = storyTeller
        this.translator = translator
    }
}
   function addStory(story){
       stories.push(story);
      } 
      console.log(addStory());
      
      
   function translateStory(){
    let length = 20
    let age = 18
    
    if(this.storyTeller > age && length > 20 ){
        console.log("The story translates to the local language")
    }
    else{
        console.log("The story does not translate from English")
    }
    }

    let story = new Story ("Ndabaga", "Rachel Tuyishimire", "Google translate")
 console.log(translateStory(story));


 //Question two
//  **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// ....................Pseucode.............
// Input                |Output              |Process
//  ingredients         | new recipes        | create a class Recipe
//  preparation time    |                    | create subclasses MoroccanRecipe, EthiopianRecipe, NigeriaRecipe
//  cooking method      |                    | create a method newRecipe
//  nutritional info    |                    |

class Recipe{
    constructor (ingredients, preparationTime, cookingMethod, nutritionalInfo){
        this.ingredients = ingredients
        this.preparationTime = preparationTime
        this.cookingMethod = cookingMethod
        this.nutritionalInfo = nutritionalInfo
    }

}
class MoroccanRecipe extends Recipe{
    constructor (){

    }
}
function newRecipe(){
    let time = 30
    if (this.ingredients === "no spicy" && this.preparationTime > time){
        console.log ("Today's recipe is Moroccan and it has ${this.nutritionalInfo}")
    }
}
newRecipe();

class EthiopianRecipe extends Recipe{
    constructor (){

    }
}
function newRecipe(){
    let time = 30
    if (this.ingredients === "very spicy" && this.preparationTime < time){
        console.log ("Today's recipe is Ethiopian and it has ${this.nutritionalInfo}")
    }
}
newRecipe();
class NigerianRecipe extends Recipe{
    constructor (){

    }
}
function newRecipe(){
    let time = 30
    if (this.ingredients === "spicy" && this.preparationTime > time){
        console.log ("Today's recipe is Nigerian and it has ${this.nutritionalInfo}")
    }
}
newRecipe();


//Question three
// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


// ....................Pseucode.............//
// Input                |Output              |Process
//  diet                | track species      | create a class Species
//  life span           |                    | create a method trackSpecies
//  migration pattern   |                    | 
//     


class Species{
    constructor(diet, lifeSpan, migrationPattern){
        this.diet = diet
        this.lifeSpan = lifeSpan
        this.migrationPattern = migrationPattern
    }
}

class Predator extends Species{
    constructor(){

    }
}
function trackSpecies(){
    if (this.diet === "carnival" && this.lifeSpan > "5 years"){
        console.log("This is preditor")
    }
}
trackSpecies();

class Prey extends Species{
    constructor(){

    }
}
function trackSpecies (){
    if (this.diet = "herbival" && this.lifeSpan < "5 years"){
        console.log("This is a prey")
    }
}

//Question four
// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.


// ....................Pseucode.............//
// Input                |Output              |Process
//  music style         | lineUp             | create a classes Artist, Performance, and Stage
//  instruments         | schedule           | create a methods lineup, schedule and performance
//  schedule            | stage arrangements | 
//     

class Artist{
    constructor (name, musicStyle, instruments){
        this.name = name
        this.musicStyle =musicStyle
        this.instruments = instruments
    }
}
function lineup (){
    if (this.musicStyle === "Country music" && this.instruments ==="Guitar"){
        console.log("Be the first to perform")
    }
    else if(this.musicStyle ==="Afro beat" && instruments === "Drums"){
        console.log("Be the last to perform")
    }
    else{
        console.log("Your will perform in the middle of the festival")
    }
}

class Performance extends Stage{
    constructor (duration, stage, schedule){
        this.duration = duration
        this.stage = stage
        this.schedule = schedule
    }
}

function performance(){
    if (this.schedule ==="Last" && ligths === "Many colourful lights" ){
        console.log()
    }
}

class Stage{
    constructor (ligths, setup){
        this.ligths = ligths
        this.setup = setup
    }

}




