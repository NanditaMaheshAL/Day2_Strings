document.write('To reverse a string - <br>')
let str1 = 'apples'
document.write('Original string - '+str1+'<br>')
let chars = str1.split('')
let revchars = chars.reverse()
let revstr = chars.join('')
document.write("Reversed string - "+revstr)


document.write('<br><br>Check palindrome - ')
let str2 = 'racecar'
lcstr = str2.toLowerCase()
let chars2 = lcstr.split('')
let revchars2 = chars2.reverse()
let revstr2 = revchars2.join('')
if(str2==revstr2){
    document.write(str2+" is a palindrome.")
}
else{
    document.write(str2+" is not a palindrome.")
}