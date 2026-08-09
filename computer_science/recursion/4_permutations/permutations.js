const permutations = function(array) {
    if(array.length <= 1)
    {
        return [array];
    }
    const result = [];
    for(let i = 0;i < array.length; i++ )
    {
        const current = array[i];

        const remaining = array.slice(0,i).concat(array.slice(i + 1));

        const remainingPerms = permutations(remaining);

        for(const perm of remainingPerms)
        {
            result.push([current,...perm]);
        }

    }
    return result;
  
};
  
// Do not edit below this line
module.exports = permutations;
