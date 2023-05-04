
const  n = 3;

function GenerateParen(n){
    let res = []
    
    function RecurSiveIterate(str , open , close){

        if(open > n || close > n || close > open) return;

        if(str.length === n*2 && open == close) {
            res.push(str)
            return;
        }

        RecurSiveIterate(str + "(" , open + 1 , close)
        RecurSiveIterate(str + ")" , open , close + 1)
    }
     RecurSiveIterate("" , 0 , 0)
     return res;
}

console.log(GenerateParen(n))