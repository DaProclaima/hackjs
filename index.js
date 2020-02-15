
class BruteForce {

	constructor() {
    this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    this.countSuiteLength = 0
    this.suite= []
    this.suiteIndex = 0

    this.charset = this.charset.split("")
    
	}

  /**
  * Defines which charset is picked up
  */
  loopToCharset(i) {
    this.charset[i]
  }

  /**
  * Prepares the suite index onto point
  */
  pointSuiteIndex(i) {
    return this.suiteIndex = i
  } 

  /**
  * Once every charset was used in i index, we prepare the new suite length
  */
  addOneToSuiteLength() {
    return this.countSuiteLength++
  }

  /**
  * Once the new suite length is defined, we apply to Suite so that it has one more slot 
  */
  setSuiteLength(){
    if(this.suite.length < 3) {
     return this.suite[this.countSuiteLength] 
    }
  }


  testSuite() {
      this.pointSuiteIndex(0);
      for( let i = 0 ; i < this.charset.length ; i ++){
        console.log(this.pointSuiteIndex(i))
        this.suite[this.suiteIndex] = this.charset[this.suiteIndex]
        console.log(this.suite[this.suiteIndex])
      }
      



      // for(let i = 0; i < 4; i++) {

      //   for(let j = 0; j < this.charset.length; j++){
      //     suite = this.charset[j]
      //     console.log(`suite[${i}] = ${suite}`)
      //   }
      // }
  }



  run(){
    this.testSuite()
  }
}

let bruteForce = new BruteForce()
bruteForce.run()


