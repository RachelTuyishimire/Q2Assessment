# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.

# // ....................Pseucode.............
# // Input        |Output              |Process
# //  story       | translation     | create a class Story
# //  storyTeller |                 | create a method translateStory
# //  Translator  |                 |  create a method of addStory


class Story:
    stories = []
    def__init__(self, story, storyTeller, translator):
        self.story = story
        self.storyTeller = storyTeller
        self.translator = translator
    
    def add_story (self, story):
        stories.append(story)

    def translate_story(self):
        length = 20
        age = 18
    if self.storyTeller > age and length > 20:
        return f"The story translates to the local language"
    elif:
        return f"The story remains in English"


#  //Question two
# //  **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# // The app needs to handle recipes from different African countries, each with its
# // unique ingredients, preparation time, cooking method, and nutritional
# // information. Consider creating a `Recipe` class, and think about how you might
# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# // methods.

# // ....................Pseucode.............
# // Input                |Output              |Process
# //  ingredients         | new recipes        | create a class Recipe
# //  preparation time    |                    | create subclasses MoroccanRecipe, EthiopianRecipe, NigeriaRecipe
# //  cooking method      |                    | create a method newRecipe
# //  nutritional info    |                    |



class Recipe:
    def__init__(self, ingredients, preparationtime, cookingmethod, nutritianalinfo):
        self.ingredients = ingredients
        self.preparationtime = preparationtime
        self.cookingmethod = cookingmethod
        self.nutritianalinfo = nutritianalinfo

class MoroccanRecipe (Recipe):
    def__init__(self):
    

    def new_recipe(self):
        time = 30
        if self.ingredients =="no spicy" and self.preparationtime > time:
            return f"Today's recipe is Moroccan and it has ${self.nutritionalInfo}"

class EthiopianRecipe (Recipe):
    def__init__(self):
        time = 30
        if self.ingredients == "very spicy" and self.preparationtime < time:
            return f"Today's recipe is Ethiopian and it has ${this.nutritionalInfo}"


class NigerianRecipe (Recipe):
    def__Init__(self):
        time = 30
        if self.ingredients == "Less spicy" and self.preparationtime > time:
            return f"Today's recipe is Nigerian and it has ${this.nutritionalInfo}"




# //Question three
# // **Wildlife Preservation:** You're a wildlife conservationist working on a
# // program to track different species in a national park. Each species has its own
# // characteristics and behaviors, such as its diet, typical lifespan, migration
# // patterns, etc. Some species might be predators, others prey. You'll need to
# // create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# // these classes might relate to each other through inheritance.


# // ....................Pseucode.............//
# // Input                |Output              |Process
# //  diet                | track species      | create a class Species
# //  life span           |                    | create a method trackSpecies
# //  migration pattern   |                    | 
# //    



class Species:
    def__init__( self,diet, lifeSpan, migrationPattern):
        self.diet = diet
        self.lifeSpan = lifeSpan
        self.migrationPattern = migrationPattern
  

class Predator(Species):
    def__Init__(self):
  
    def trackSpecies(self):
    if self.diet === "carnival" and self.lifeSpan > "5 years":
        return"This is preditor"
  


class Prey (Species):
    def__Init__(self):

    def trackSpecies ():
    if self.diet = "herbival" and self.lifeSpan < "5 years":
        return f"This is a prey"
  