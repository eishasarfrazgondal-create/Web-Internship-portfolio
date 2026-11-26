//Reverse a string using a loop (not the built-in reverse) Strings, loops "abc" gives "cba"
const text = "abc";
let reversed =" ";

for(let i = text.length-1; i>=0; i--)
{
    reversed = reversed + text[i];
}
console.log(reversed);