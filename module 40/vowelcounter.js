
function countvowel(name){
    let count = 0;
    let vowel = "aeiouAEIOU"
    for (let  char of name) {
        count += vowel.includes(char)?1:0
    }
    return console.log("No. of vowels present:",count);
}
countvowel("Ice cream");

