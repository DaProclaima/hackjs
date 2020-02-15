
class BruteForce {

	constructor() {
    this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    this.suite = []

    this.charset = this.charset.split("")
	}


  testSuite() {
    for(let i = 0 ; i < 8 ; i++) {
      for(let j = 0 ; j < this.charset.length; j++) {
        this.suite[i] = this.charset[j]
        console.log(this.suite.join(""))
      }
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
// bruteForce.giveCharset()


