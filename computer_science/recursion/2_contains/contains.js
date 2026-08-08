const contains = function(object,toFind) {
    
    for(const key in object)
    {
        const val = object[key];
        if(Object.is(val,toFind))
        {
            return true;
        }
        if(typeof val === "object"  && val !== null)
        {
            if(contains(val,toFind))
            {
                return true;
            }
        }
    }
  return false;
};
  
// Do not edit below this line
module.exports = contains;
