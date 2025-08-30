LANGUAGES = { 
    "english": "Welcome",
    "czech": "Vitejte",
    "danish": "Velkomst",
    "dutch": "Welkom",
    "estonian": "Tere tulemast",
    "finnish": "Tervetuloa",
    "flemish": "Welgekomen",
    "french": "Bienvenue",
    "german": "Willkommen",
    "irish": "Failte",
    "italian": "Benvenuto",
    "latvian": "Gaidits",
    "lithuanian": "Laukiamas",
    "polish": "Witamy",
    "portuguese": "Bem-vindo",
    "spanish": "Bienvenido",
    "swedish": "Valkommen",
    "welsh": "Croeso",
}

def greet(language):
    return LANGUAGES.get(language, "Welcome")
