var args = process.argv[2];
module.exports = function average(...args){
  var result = 0
  var avg = 0
  var length = args.length
  args.forEach(function (value){
    result += value;
    avg = result/length;
  });
  return avg;
}