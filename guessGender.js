var boyz = ['ndur', 'sson', 'ason', 'arson', 'tur'];
var girlz = ['dottir', 'dóttir'];

var arrayFy = function(thing) {
  var arr;
  if(thing.constructor !== Array){
    arr = [thing];
  }else{
    arr = thing;
  }

  return arr;
};

var stringContains = function(string, list) {
  var wasFound = false;
  var substringList = arrayFy(list);

  var i = 0;
  while(substringList[i] !== null && substringList[i] !== undefined){
    var substring = substringList[i];

    if(string.indexOf(substring) !== -1){
      wasFound = true;
    }

    if(wasFound){
      i = substringList + 2;
    }else{
      i++;
    }
  }

  return wasFound;
};

var guessGender = function(name) {
  if(stringContains(name, boyz)){
    return 'male';
  }

  if(stringContains(name, girlz)){
    return 'female';
  }

  return 'unknown';
};

var analyzeNames = function(names, returnLists) {
  var results = {
    males: 0,
    females: 0,
    unknown: 0
  };

  var males = [];
  var females = [];
  var unknown = [];

  for (var i = 0; i < names.length; i++) {
    var guess = guessGender(names[i]);

    if(guess === 'male'){
      results.males++;
      if(returnLists) males.push(names[i]);
    }

    if(guess === 'female'){
      results.females++;
      if(returnLists) females.push(names[i]);
    }

    if(guess === 'unknown'){
      results.unknown++;
      if(returnLists) unknown.push(names[i]);
    }
  }

  if(returnLists){
    results.lists = {};
    results.lists.unknown = unknown;
    results.lists.females = females;
    results.lists.males = males;
  }

  return results;
};
