# genderGuess.js

genderGuess tries to guess the gender of Icelandic names.

## How it works

### Basic genderGuess function:

```javascript

//The basic function is called genderGuess

genderGuess('Óli Tómas Freysson');
// This specific example returns ---> 'male'

// The function will return one of these strings: 'male', 'female' or 'unknown' (lowercase)

```

### analyzeNames function:

```javascript

// This function will analyze a list of names

// The first parameter is the list of names (array)
// The second parameter is optional. If set then the results will also contain 3 arrays (the names sorted into categories)

var people = ['Guðrún Arnardóttir', 'Björgvin Halldórsson', 'Bubbi Morthens', 'Jón Arnar Magnússon', 'Vala Flosadóttir'];

analyzeNames(people); // This returns:
{
  "males": 2,
  "females": 2,
  "unknown": 1
}

// The same function can be called with the second parameter (argument) as true:
analyzeNames(people, true); // This returns:
{
  "males": 2,
  "females": 2,
  "unknown": 1,
  "lists": {
    "unknown": ["Bubbi Morthens"],
    "females": ["Guðrún Arnardóttir", "Vala Flosadóttir"],
    "males": ["Björgvin Halldórsson", "Jón Arnar Magnússon"]
  }
}

```

It is worth pointing it out that this script is extremely light and is kind of useless if you dont have full names (for now at least). I work at an advertising agency and we just ran a campaign and collected over 8000 names. This script was able to analyze 89% of those names. Pull request and ideas for improvement would be awesome!
