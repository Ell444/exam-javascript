/*Esercizio 5 - Error handling e parsing*/

const power = (base, exponent) => {
    try {

        if (isNaN(base) && isNaN(exponent)) {
            throw new Error(`The values "base" and "exponent" are NOT numbers! See: ${base}, ${exponent}`);     
        }else if (isNaN(base)) {
            throw new Error(`The value "base" is NOT a number! See: ${base}`);
        }else if (isNaN(exponent)){
            throw new Error(`The value "exponent" is NOT a number! See: ${exponent}`);
        }else {
            return base ** exponent;
            //console.log(base ** exponent);
        }

    }catch (error){
        console.error(error.message);
        return null;
    }finally {
       console.log('Operation completed!') 
       
    }
};

//power('a','b');
//power('a', 4);
//power(6, 'b');
//power(6, 4);