const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {

	
	constructor(reverse) {
		if(reverse === false)
	    this.reverse = true;
	}
	
    encrypt(message, key, action) {
    	if(message !== undefined && key !== undefined) {
   
    		let alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()]
    		let messageToWork = message.toUpperCase().replace(/[^A-Z]/g,'');
    		let mLength = messageToWork.length;
    		let kLength = key.length;

    		message = message.toUpperCase().split("");
    		key = key.toUpperCase().split("");

            let longKey = [...key];
    		if(kLength < mLength) {
	        	let multi = Math.trunc(mLength/kLength);
	        	for(let i = 1; i < multi; i++ ) {
	        		longKey = [...longKey, ...key];
	        	}
	        	if(messageToWork.length%key.length) {
	        		let rest = key.splice(0, messageToWork.length%key.length);
	        		longKey = [...longKey, ...rest];
	        	}
       		}
            let count = 0;
       		let answer = message.map((item, index) => {
       			if(alphabet.indexOf(item) === -1) {
       				return item;
       			} else {
       				if(action) {
       					var letter = alphabet.indexOf(item) - alphabet.indexOf(longKey[count]);
	                    count++;
		                if(letter< 0) {
		                    letter = letter + alphabet.length;
		                }
       				} else {
						var letter = alphabet.indexOf(item) + alphabet.indexOf(longKey[count]);
	                    count++;
		                if(letter >= alphabet.length) {
		                    letter = letter - alphabet.length;
		                }
	            	}
	       			return alphabet[letter]
       			}
       			
       		})
       		if(this.reverse) {
       			answer = answer.reverse();
       		}
            return answer.join("");
    	} else {
    		throw Error;
    	}
        
    }

    decrypt(string, key) {
    	if(string !== undefined && key !== undefined) {
    		return this.encrypt(string, key, "decrypt");
    	} else {
    		throw Error;
    	}
    }
}

module.exports = VigenereCipheringMachine;
