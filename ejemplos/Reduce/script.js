let numeros = [1, 2, 3, 4, 5];
let total = numeros.reduce((a, b) => a + b , 0);
console.log(total);

const myArray = [1, 2, 3, 4, 5];
let totalR = myArray.reduce((totalR, num) => {
    return totalR + num;
});
console.log(totalR);


// https://medium.com/@jmoran.losada/javascript-map-reduce-filter-find-foreach-c%C3%B3mo-utilizarlos-y-sus-diferencias-e0e078646d11

let numerosIII = [1, 2, 3, 4, 5];
let totalIII = (numeros.reduce((a, b) => a + b , 0))
//       .filter((a,b) => {
//           if(b%2==0) return true
//           else return false;
// });
console.log(totalIII);