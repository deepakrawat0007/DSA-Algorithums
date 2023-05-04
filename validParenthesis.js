/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftstack = [];
    let starStack = [];
    for(let i=0; i<s.length; i++) {
        switch(s[i]) {
            case "(":
                leftstack.push(i);
                break;
            case ")":
                if(leftstack.length > 0) {
                    leftstack.pop();
                } else if (starStack.length > 0) {
                    starStack.pop();
                } else {
                    return false;
                }
                break;
            case "*":
                starStack.push(i);
                break;
        }
    }
    while(leftstack.length > 0 && starStack.length > 0) {
        if (leftstack[leftstack.length-1] > starStack[starStack.length-1]) {
            return false;
        }
        leftstack.pop();
        starStack.pop();
    }
    if(leftstack.length > 0) {
        return false;
    }
    return true;  
};