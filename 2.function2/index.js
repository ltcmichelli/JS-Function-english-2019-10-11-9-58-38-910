function palindrome(message){
    var len = message.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (message[i] !== message[len - 1 - i]) {
            return false;
        }
    }

    return true;
  }
  console.log(palindrome('hello')); // should return false
  console.log(palindrome('abcba')); // should return true