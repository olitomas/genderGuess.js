var boyz = ['ndur', 'sson', 'ason', 'arson', 'tur'];
var girlz = ['dottir', 'dóttir'];

stringContains = function(string, list) {
  var wasFound = false;

  if(list.constructor !== Array){
    substringList = [list];
  }else{
    substringList = list;
  }

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

guessGender = function(name) {
  if(stringContains(name, boyz)){
    return 'male';
  }

  if(stringContains(name, girlz)){
    return 'female';
  }

  return 'unknown';

};
