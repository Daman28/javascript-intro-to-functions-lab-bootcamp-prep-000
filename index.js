function shout(string){
  return string.toUpperCase()
}

function sayHiToGrandma(string){
  if(string.toLowerCase() === string) {
    console.log("I can't hear you!");
  }
  else if(string.toUpperCase() === string) {
    console.log("YES INDEED!");
  }
}