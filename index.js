
class BruteForce {

	constructor() {
    this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
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
    for( let i = 0; i < 5; i++) {
      leftCharset = this.charset.slice()
      while(leftCharset.length > 0){
        // console.log('leftCharset.length = '+leftCharset.length)
        // console.log('currentChar = '+currentChar)
        currentChar = leftCharset.shift()
        this.suite[i] = currentChar
        // console.log(this.suite)
        if(this.suite.length > 1) {
          previousChar = currentChar
          this.suite[i-1] = previousChar
          for(let j = 0 ; j < this.charset.length; j++) {
            this.suite[i] = this.charset[j]
            console.log(this.suite) 

          }
        }
      }

    // when max length of suite is reached, stop increasing its length 
      
    } 
  }


  run(){
    this.testSuite()
  }
}

let bruteForce = new BruteForce()
bruteForce.run()


