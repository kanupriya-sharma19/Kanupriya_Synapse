const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function binary(num) {
    return num.toString(2);
  }
  
  function divisors(num) {
    let divisors = [];
    for (let i = 1; i <= num ; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  
  
  app.get('/range', (req, res) => {
    const start = req.query.start;
    const end = req.query.end;
    
    const result = {};
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            result[num] = binary(num);
        } else {
            result[num] = divisors(num);
        }
    }
    
    res.json(result);
});

