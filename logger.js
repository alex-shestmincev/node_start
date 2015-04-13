module.exports = function(module){

  return function(/* ... */){
    console.log.apply(console,arguments);
  }

}