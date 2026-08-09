const totalIntegers = function(object) {
    if(typeof object !== "object" || object === null)
    {
        return undefined;
    }
    let count = 0;
    for(const key in object)
    {
        const value = object[key];
        if(Number.isInteger(value))
        {
            count++;
        }
        else if(typeof value === "object" && value !== null)
        {
            count+= totalIntegers(value);
        }
    }
    return count;
  
};
  
// Do not edit below this line
module.exports = totalIntegers;
