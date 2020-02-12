
class BruteForce {

	constructor(password) {
		this.password = password.split("")
    // console.log(this.password)
		this.charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
		this.foundChars
	}

	guessPsswd() {
    // this.foundChars = this.password.filter(char => char == "s")

		this.foundChars = this.password.filter(char => {
      
		  for( let i = 0; i <= this.charset.length; i++) {
        console.log(char)
				return(char !== this.charset[i] ? this.charset : false)
		  }
	  })
  }

  getFoundChars() {
    return this.foundChars
  }

  showFound(){
    console.log(`The password was ${this.getFoundChars()}`)
  }
}

let bruteForce = new BruteForce("That_is_to_guess1odfodfk")
bruteForce.guessPsswd()
bruteForce.showFound()
// console.log(bruteforce.foundChars)
