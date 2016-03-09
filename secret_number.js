'use strict';
module.exports = function SecretNumberGenerator() {
  var min = 0;
  var max = 1000000;
  var num = null;


    function getSecretNumber(){
         if (num === null){
            num = Math.floor(Math.random() * (max - min + 1) + min);

        }

            return num;

    }

        return getSecretNumber;


};



