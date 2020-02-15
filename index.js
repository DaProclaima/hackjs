
class BruteForce {

	constructor() {
    this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    this.suite = []

    this.charset = this.charset.split("")
	}

  defineWeight() {

  }

  testSuite() {
    //raise suite.length
    for( let i = 0; i < 3; i++) {
// i = 0
        let previousIndex = i;
        for( let j = 0; j < this.charset.length; j++) {
          let combination = this.charset[j]
          this.suite[i] = combination
          console.log(this.suite)
          this.suite[previousIndex] = this.charset[0]
        }
    } 
  }


  run(){
    this.testSuite()
  }
}

let bruteForce = new BruteForce()
bruteForce.run()


