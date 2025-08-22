const repeatString = function(string,num) {
    let text = "";
    if(num < 0)
    {
        text = "ERROR";

    }
    else
    {
        for(let x = 0; x<num;x++)
        {
            text += string;
        } 

    }
    
        return text;


};

// Do not edit below this line
module.exports = repeatString;
