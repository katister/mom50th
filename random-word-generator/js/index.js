var NumberOfWords = 20

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "she loves her family"
words[2] = "she cares about animals"
words[3] = "she has great taste in lakes"
words[4] = "she is a great wife"
words[5] = "she ran a half marathon"
words[6] = "she swears gracefully"
words[7] = "her food can make the worst day brighter"
words[8] = "she encourages others to pursue their passions"
words[9] = "she owns the dance floor"
words[10] = "she embarrasses her kids in the best way"
words[11] = "she loves dogs and they love her"
words[12] = "murrrry kristmassss"
words[13] = "she brings positive energy"
words[14] = "she can do a handstand under water"
words[15] = "she knooows how to drink wine"
words[16] = "she is not afraid to get up on the table and dance"
words[17] = "she is there for her parents"
words[18] = "she appreciates even the small moments in life"
words[19] = "she is creative"
words[20] = "she has a high EQ"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
