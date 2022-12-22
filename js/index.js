function validParentheses(parents) {
    let counter = 0;

    for (let i = 0; i < parents.length; i++) {
        if (parents[i] === "(") {
            counter++;
        } else {
            counter--;
        }
        if (counter < 0) {
            return false;
        }
    }
  return counter === 0;
}
 
console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); // false
validParentheses("("); // false
validParentheses("(())((()())())"); // true