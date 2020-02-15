
class BruteForce {

	constructor() {
    this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    this.suite = []

    this.charset = this.charset.split("")
	}


  testSuite() {
    for(let i = 0 ; i < this.charset.length ; i++) {
      for(let j = 0 ; j < 8; j++) {
        this.suite[j] = this.charset[i]
        console.log(this.suite.join(""))
      }
    }   
  }


  run(){
    this.testSuite()
  }
}

let bruteForce = new BruteForce()
bruteForce.run()


