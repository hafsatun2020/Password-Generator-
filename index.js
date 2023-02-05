//javascript
let getpassBtn = document.getElementById("gen-pw")
let passBox1 = document.querySelector("#shelf-el1")
let passBox2 = document.querySelector("#shelf-el2")

const clearBtn = document.querySelector('#clear');

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];





/*
function generatePass(num) {
let randomPw = Math.floor(Math.random() * characters.length)
let randomPw2 = Math.floor(Math.random() * characters.length)
 passBox1.textContent = characters[randomPw] 
 passBox2.textContent = characters[randomPw2]
  
}
*/
function getpass(num=15) {
    const pwArr = []


    for (let j = 0; j <=0; j++) {
       let passWord =  ""
       for (let i = 0; i <= num; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) 
        passWord += characters[randomIndex]
    }
    pwArr.push(passWord) 
    }
    return pwArr
    
}



function renderPassword(){
    passBox1.textContent = getpass(14) 
    passBox2.textContent = getpass(14)
}

function clearPw() {
    passBox1.textContent = ""
    passBox2.textContent = ""
}



getpassBtn.addEventListener('click' , renderPassword);

clearBtn.addEventListener('click', clearPw);

/*
function copyPw() {
    // Get the text field
    var copyText = document.querySelector("#copy2");
    copyText.textContent = passWord
    //let copyBtn2 = document.querySelector("#copy2");
    //let copyBtn1 = document.querySelector("#copy1");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
   
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
   
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
   }
*/
//copyBtn1.addEventListener('click', copyPw);
//copyBtn2.addEventListener('copy', copyPw);



