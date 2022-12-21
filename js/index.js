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
    if (counter === 0) {
        return true;
    } else {
        return false;
    }
}
 
validParentheses("()"); // true
validParentheses(")(()))"); // false
validParentheses("("); // false
validParentheses("(())((()())())"); // true