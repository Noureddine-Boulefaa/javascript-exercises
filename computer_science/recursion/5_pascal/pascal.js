const pascal = function(n) {
  if (n <= 1) {
    return [1];
  }


  const prevRow = pascal(n - 1);
  const currentRow = [1];

 
  for (let i = 0; i < prevRow.length - 1; i++) {
    currentRow.push(prevRow[i] + prevRow[i + 1]);
  }

  currentRow.push(1);

  return currentRow;
};
  
// Do not edit below this line
module.exports = pascal;
