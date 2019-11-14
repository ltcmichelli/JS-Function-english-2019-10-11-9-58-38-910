function alphabetSort(message){
    var str =message.split("");
    str.sort();
    var result = str.join("");
    console.log(result);
  }
  alphabetSort('hello'); // should return 'ehllo'