const password = "Abcdefghij12";

let hasDigit = false;
let hasUppercase = false;

for (let i = 0; i < password.length; i++) {

    if (password[i] >= "0" && password[i] <= "9") {
        hasDigit = true;
    }

    if (password[i] >= "A" && password[i] <= "Z") {
        hasUppercase = true;
    }

}
if (password.length >= 12 && hasDigit && hasUppercase) {
    console.log("Strong password");
}
else if (password.length >= 8 && (hasDigit || hasUppercase)) {
    console.log("Medium password");
}
else {
    console.log("Weak password");
}