//alogorithim task 1 code"
function convertFahrToCelsius(v){
    
    let type = typeof v;
    if (v === Number(v)){
        return c =  ((v - 32) * 5/9).toFixed(4);
    }
  
    else if(Array.isArray(v)){
      let output = `${v} is not a valid number but a/an Array.`;
        console.log(output);
    }
    else if ( isNaN(v)) {
        let output = `${v} is not a valid number but a/an ${ type }.`;
        console.log(output);
    }
 return c = ((v - 32) * 5/9).toFixed(4);
}
 
convertFahrToCelsius("0")

// algorithim no 2

function checkYuGiOh(n) {
    
    try {
      let arr = [...new Array(Number(n))].map((_value, index) => {
       
        index++;
       
        const [_2, _3, _5] = ["yu", "gi", "oh"];
        
        if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
          return _2 + "-" + _3 + "-" + _5;
       
        else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
        else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
        else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;
        else if (index % 2 === 0) return _2;
        else if (index % 3 === 0) return _3;
        else if (index % 5 === 0) return _5;
        
        return index;
      });
      return arr;
    } catch (err) {
      return `'${n}' is an invalid parameter`;
    }
  }
   checkYuGiOh(10)
   checkYuGiOh(5)
   checkYuGiOh("fizzbuzz is meh")