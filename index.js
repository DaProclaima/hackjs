let fs = require('fs');
let EOL = require('os').EOL


class BruteForce {

	constructor() {
    this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    this.combinations = []
    this.suite = []

    this.charset = this.charset.split("")
	}

  defineWeight() {

  }

  testSuite() {
    // is used for removing a char to chars set in order to use the next char once one suite index used all combinations with previous char
    let leftCharset 

    let currentChar

    let previousChar
    //raises suite.length
    // console.log(this.suite.length)
    for( let i = 0; i < 3; i++) {
      // console.log(this.suite.length)
      if (this.suite.length < 1) {
        for(let j = 0; j < this.charset.length; j++) {
          this.suite[i] = this.charset[j]
          this.combinations.push(EOL+this.suite)
          // console.log(this.suite.join(''))
          // console.log(i)
        }
      } else {
        // console.log(i)
        leftCharset = this.charset.slice()
        while(leftCharset.length > 0) {
          // console.log('i higherindex = ' + i + ' leftCharset.length = ' + leftCharset.length)
          previousChar = leftCharset.shift()
          // console.log(previousChar)
          for(let k = 0; k <= i; k++) {
            this.suite[k] = previousChar
            // console.log(this.suite[k])
            // console.log('k = '+ k)
            // console.log('i higherindex = ' + i + ' leftCharset.length = ' + leftCharset.length + ' k should reach i = '+ k)

            for(let l = 0; l <= i; l++) {
            // console.log('i higherindex = ' + i + ' leftCharset.length = ' + leftCharset.length + ' k should reach i = '+ k + ' l should reach i  = '+ l)
              if(l != k) {
                // console.log('l = ' + l + ' while k = '+k)
                // console.log('i higherindex = ' + i + ' leftCharset.length = ' + leftCharset.length + ' k should reach i = '+ k + ' l should reach i  = '+ l)

                for( let m = 0; m < this.charset.length; m++) {
                  // console.log('i higherindex = ' + i + ' leftCharset.length = ' + leftCharset.length + ' k should reach i = '+ k + ' l should reach i  = '+ l + ' m should reach 93 = ' + m)
                  // console.log(this.charset[m])
                  this.suite[l] = this.charset[m]
                  // console.log(this.suite)
                  this.combinations.push(EOL+this.suite)
                  console.log(this.suite.join('')) 
                }
              }
            }
          }
        } 
      } 
    }
  }


   run(){
    this.testSuite()
    fs.writeFile( 'log.txt',this.combinations, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    // let file = new File(this.combinations, 'log.txt', {type: 'text/plain'})
  }
}

let bruteForce = new BruteForce()
bruteForce.run()
//  what would help is knowing the probabitliy of unique combinations according to the number of chars and length of suite 


// for( let i = 0; i < 20; i++) {

//       leftCharset = this.charset.slice()
//       while(leftCharset.length > 0){
//         // console.log('leftCharset.length = '+leftCharset.length)
//         // console.log('currentChar = '+currentChar)
//         currentChar = leftCharset.shift()
//         this.suite[i] = currentChar
//         // console.log(this.suite)
//         if(this.suite.length > 1) {
//           previousChar = currentChar
//           for(let k = 0; k < this.suite.length; k++){
//             this.suite[k] = previousChar
//             for(let j = 0 ; j < this.charset.length; j++) {
//               this.suite[i] = this.charset[j]
//               this.combinations.push(EOL+this.suite)
//               console.log(this.suite.join('')) 
//             }
//           }
//         }
//       }
//     // when max length of suite is reached, stop increasing its length 
//     } 
