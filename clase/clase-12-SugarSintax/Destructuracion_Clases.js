https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  
  const [,, { name }] = props;
  
  console.log(name); // "FizzBuzz"