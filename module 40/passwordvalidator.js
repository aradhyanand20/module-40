
function passwordValidation(enterdpassword,setpassword){
    if(enterdpassword==setpassword) console.log("Password Matched.Password validation Successful!");
    else console.log("Password didn't Match");
}

let password = "example123";
let confirmedpassword = "example123";
passwordValidation(password,confirmedpassword);