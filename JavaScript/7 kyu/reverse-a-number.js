/**
 * Created on Sat May 19 22:03:28 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
  * Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
  */

function reverseNumber(n) {
    const reversed = n.toString().split('').reverse().join(''); 
    return Math.sign(n) * parseInt(reversed);
  }
  
  