
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
    let leftCharset = this.charset

    let prevCharset
    // is used to get the char to not again use
    let charIndex

    //raise suite.length
    for( let i = 0; i < 2; i++) {

      for( let j = 0; j < this.charset.length; j++) {

        // charIndex = this.charset.indexOf(j)

        // the letter #i of my suite is the letter #j of leftCharset
        
        this.suite[i] = this.charset[j]
        if(j===0) console.log('this.charset[0] = '+ this.charset[0])
        if(j===0) console.log(this.charset);  
        
        // if my suite has at least one index 
        if(this.suite[i-1] !== undefined && this.suite[i-1] !== null && this.suite.length > 1) {
          this.suite[i-1] = prevCharset.join('')
        } 
       // console.log(this.suite)

      // when this.charset is fully crossed, then stop looping on it
      }    
      prevCharset = leftCharset.splice(0,1 , this.charset[0])
      // console.log(prevCharset)
    // when max length of suite is reached, stop increasing its length 
    } 
  }


  run(){
    this.testSuite()
  }
}

let bruteForce = new BruteForce()
bruteForce.run()


