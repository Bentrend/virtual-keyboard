let upperChar = false;
let arrKeyLang = []; //ДЛИНА МАССИВА ДЛЯ ПОДСЧЕТА НАЖАТЫХ КЛАВИШ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
class BasicKey {
constructor (usChar, ruChar, className, keyCode) {
    this.usChar = usChar;
    this.ruChar = ruChar;
    this.className = className;
    this.keyCode = keyCode;
}
    onClick(textArea, upperChar) {
        let position = textArea.selectionStart;
        let currentChar = localStorage['keyboardLang'] === "eng" ? this.usChar : this.ruChar;
        currentChar = upperChar ? currentChar.toUpperCase() : currentChar.toLowerCase();
        textArea.value = textArea.value.slice(0, textArea.selectionStart) + currentChar + textArea.value.slice(textArea.selectionEnd) ;
        position++;
        textArea.selectionEnd = position;
        textArea.selectionStart = position;
        textArea.focus();
    }
};
let capsFunction = function () {
    let capsButton = document.querySelector(".caps-button");
    let arrButton = document.querySelectorAll(".button");

    if (upperChar == false) {
        for (let i = 0; i < arrButton.length; i++) {
            arrButton[i].innerHTML = arrButton[i].innerHTML.toUpperCase();
        };
        upperChar = true;
        capsButton.classList.add("caps-active-button");
    
    }  
    else {
        for (let i = 0; i < arrButton.length; i++) {
            arrButton[i].innerHTML = arrButton[i].innerHTML.toLowerCase();
        };
        capsButton.classList.remove("caps-active-button"); 
        upperChar = false;
    }    
};
class CapsKey extends BasicKey  {
    onClick = capsFunction;
};

let backSpaceFunction = function (textArea) {
    let position = textArea.selectionStart;
        if (textArea.value.length == 0) {
            return;
        }; 
        if (textArea.selectionStart == textArea.selectionEnd && textArea.selectionStart != 0) {
            textArea.value = textArea.value.slice(0, textArea.selectionStart-1) + textArea.value.slice(textArea.selectionStart);
            textArea.selectionEnd = position-1;
            textArea.focus();
            return;
        }
        else {
            textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionEnd);
            console.log(position);
            textArea.selectionEnd = position;
            textArea.focus();
            return;
        }
    }      

class BackspaceKey extends BasicKey {  
    onClick = backSpaceFunction;
    }

class DelKey extends BasicKey {
     onClick = function (textArea) {
        let position = textArea.selectionStart;
            if (textArea.value.length == 0) {
                return;
            }; 
            if (textArea.selectionStart == textArea.selectionEnd) {
                let position = textArea.selectionStart;
                textArea.value = textArea.value.slice(0, textArea.selectionEnd) + textArea.value.slice(textArea.selectionEnd+1);
                textArea.selectionStart = textArea.selectionEnd = position;
                textArea.focus();
                return;
            }
            else {
                textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionEnd);
                textArea.selectionEnd = position;
                textArea.focus();
                return;
            }
        
        }      
}
class EnterKey extends BasicKey {
    onClick = function (textArea) {
        let position = textArea.selectionStart;
        textArea.value = textArea.value.slice(0, textArea.selectionStart) + "\n" + textArea.value.slice(textArea.selectionEnd) ;
        position++;
        console.log(textArea.selectionStart);
        console.log(textArea.selectionEnd);
        textArea.selectionEnd = position;
        textArea.focus();
    }
}

class TabKey extends BasicKey {
    onClick(textArea) {
        let position = textArea.selectionStart;
        textArea.value = textArea.value.slice(0, textArea.selectionStart) + "    " + textArea.value.slice(textArea.selectionEnd) ;
        position+=4;
        textArea.selectionEnd = position;
        textArea.selectionStart = position;
        textArea.focus();
    }
}

let langFunction = function () {
        let buttons = document.querySelectorAll('[class$="button"], [class$="active"]');
        if (localStorage.getItem("keyboardLang") === "eng") {
            
            for (let i = 0; i <keys.length; i++) {
                if (keys[i].className === "button") {
                    if (upperChar){
                    buttons[i].innerHTML = (`${keys[i].ruChar.toUpperCase()}`);
                    }
                    else {
                        buttons[i].innerHTML = (`${keys[i].ruChar}`);
                    }
                }
            }
            localStorage.setItem("keyboardLang", "ru");
            return;
        }

        if (localStorage.getItem("keyboardLang") === "ru") {
        
            for (let i = 0; i <keys.length; i++) {
                if (keys[i].className === "button") {
                    if (upperChar){
                    buttons[i].innerHTML = (`${keys[i].usChar.toUpperCase()}`);
                    }
                    else {
                        buttons[i].innerHTML = (`${keys[i].usChar}`);
                    }
                }
            }
            localStorage.setItem("keyboardLang", "eng")
            return;
        }
    }

class LangKey extends BasicKey {
     onClick = langFunction; 
}

const keys = [new BasicKey("`", "ё","button"), new BasicKey("1", "1", "button"), new BasicKey("2", "2", "button"), new BasicKey("3", "3","button"), new BasicKey("4", "4","button"), new BasicKey("5", "5","button"),
              new BasicKey("6", "6","button"), new BasicKey("7", "7", "button"), new BasicKey("8", "8", "button"), new BasicKey("9", "9","button"), new BasicKey("0", "0","button"), new BasicKey("-", "-","button"),
              new BasicKey("=", "=","button"), new BackspaceKey("Back", "Back", "function-button"), new TabKey("Tab", "Tab", "tab-button"), new BasicKey("q", "й","button", "KeyQ"), new BasicKey("w", "ц","button"), new BasicKey("e", "у","button"),
              new BasicKey("r", "к","button"), new BasicKey("t", "е", "button"), new BasicKey("y", "н", "button"), new BasicKey("u", "г","button"), new BasicKey("i", "ш","button"), new BasicKey("o", "щ","button"), new BasicKey("p", "з", "button"),
              new BasicKey("[", "х","button"), new BasicKey("]", "ъ", "button"), new BasicKey("\\", "\\", "button"), new DelKey("Del", "Del", "dell-button"), new CapsKey("Caps", "Caps","caps-button"), new BasicKey("a", "ф","button"), new BasicKey("s", "ы","button"),
              new BasicKey("d", "в","button"), new BasicKey("f", "а", "button"), new BasicKey("g", "п", "button"), new BasicKey("h", "р","button"), new BasicKey("j", "о", "button"), new BasicKey("k", "л", "button"),
              new BasicKey("l", "д","button"), new BasicKey(";", "ж", "button"), new BasicKey("'", "э", "button"), new EnterKey("Enter", "Enter","function-button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("z", "я","button"),
              new BasicKey("x", "ч","button"), new BasicKey("c", "с", "button"), new BasicKey("v", "м", "button"), new BasicKey("b", "и","button"), new BasicKey("n", "т","button"), new BasicKey("m", "ь","button"),
              new BasicKey(",", "б","button"), new BasicKey(".", "ю", "button"), new BasicKey("/", ".", "button"), new BasicKey("▲", "▲","button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("Ctr", "Ctr","ctrl-left-button"), new LangKey("", "","lang-button"),
              new BasicKey("Alt", "Alt","ctrl-alt-button"), new BasicKey(" ", " ", "space-button"), new BasicKey("Alt", "Alt", "ctrl-alt-button"), new BasicKey("◄", "◄","button"), new BasicKey("▼", "▼","button"), new BasicKey("►", "►","button"), new BasicKey("Ctr", "Ctr","ctrl-right-button")];

const keyboard = document.createElement("div");
const textArea = document.createElement("textarea")
const body = document.querySelector("body");
const title = document.createElement("div");
title.className = "title"
title.innerHTML = "Для переключения языка используйте кнопку на вируальной клавиатуре или зажмите <b>левый Ctrl</b> и кратковременно нажмите <b>левый Alt</b> на физической. К сожалению кнопки SHIFT не работают("

textArea.className = ("text-area");
textArea.selectionStart = 0;
textArea.focus();
body.className = ("body");
body.append(textArea);

keyboard.className = ("keyboard");
body.append(keyboard);
body.append(title); 
document.addEventListener("keydown", (event) => {
       
    let arrKey = document.querySelectorAll('[class$="button"], [class$="active"]')
    for (let i = 0; i < arrKey.length; i++) {
        if (event.code === `Key${arrKey[i].getAttribute("data")}`) {
        arrKey[i].classList.add("active")
        }
        else if (event.code === arrKey[i].getAttribute("data") && event.code == "ControlLeft" && arrKey[i].className == "ctrl-left-button") {
            if (arrKeyLang.length == 0) {
            arrKeyLang.length++;
            arrKey[i].classList.add("active");
            }
            else {
                arrKey[i].classList.add("active");
            }
            }   
        else if (event.code === arrKey[i].getAttribute("data") && event.code == "ControlRight") {
            arrKey[i].classList.add("active");
        }
        else if (event.code === arrKey[i].getAttribute("data") && event.code == "CapsLock") {
            arrKey[i].classList.toggle("active");
            capsFunction();
        }
        else if (event.code === arrKey[i].getAttribute("data")) {
            arrKey[i].classList.add("active");
        }
    }
   textArea.focus();
});

document.addEventListener("keyup", (event) => {
    let arrKey = document.querySelectorAll('[class$="button active"]')
    for (let i = 0; i < arrKey.length; i++) {
        if (event.code === `Key${arrKey[i].getAttribute("data")}`) {
        arrKey[i].classList.remove("active")
      }
      else if ( event.code == "AltLeft"){
        if(arrKeyLang.length = 1){
        langFunction();
        arrKey[i].classList.remove("active");
        arrKeyLang.length = 0;
        }
        else if (arrKeyLang.length == 0) {
            arrKeyLang.length = 1;
            arrKey[i].classList.remove("active");
            textArea.focus();
        }
    }
      else if (event.code === arrKey[i].getAttribute("data") && event.code != "CapsLock" ) {
        console.log("TEST2");
        arrKey[i].classList.remove("active");
      }
    }
   textArea.focus();
});

if (localStorage.getItem("keyboardLang") === null) {
    localStorage.setItem("keyboardLang", "eng")
}

for (let i = 0; i < keys.length; i++) {
        let button = document.createElement("div");
        button.className = (`${keys[i].className}`);
        button.innerHTML = localStorage.getItem("keyboardLang") === "eng" ?  (`${keys[i].usChar}`) : (`${keys[i].ruChar}`)
        keyboard.append(button);
        button.addEventListener("click", () => keys[i].onClick(textArea,  upperChar) );
        if(keys[i].usChar === "Tab") {
            button.setAttribute("data", keys[i].usChar);
        }
        else if (keys[i].usChar === "Back") {
            button.setAttribute("data", "Backspace");
        }
    
        else if (keys[i].usChar === "Caps") {
            button.setAttribute("data", "CapsLock");
        }
    
        else if (keys[i].usChar === "Enter") {
            button.setAttribute("data", "Enter");
        }
        else if (keys[i].usChar === "Shift") {
            button.setAttribute("data", "ShiftLeft");
        }
        else if (keys[i].className === "ctrl-right-button") {
            console.log(keys[i].className);
            button.setAttribute("data", "ControlRight");
        }
        else if (keys[i].className === "ctrl-left-button") {
            button.setAttribute("data", "ControlLeft");
        }
      
        else if (keys[i].usChar === "Alt") {
            button.setAttribute("data", "AltLeft");
        }
    
        else if (keys[i].usChar === "`") {
            button.setAttribute("data", "Backquote");
        }
    
        else if (keys[i].usChar === "▲") {
            button.setAttribute("data", "ArrowUp");
        }
    
        else if (keys[i].usChar === "◄") {
            button.setAttribute("data", "ArrowLeft");
        }
    
        else if (keys[i].usChar === "►") {
            button.setAttribute("data", "ArrowRight");
        }
    
        else if (keys[i].usChar === "▼") {
            button.setAttribute("data", "ArrowDown");
        }
    
        else if (keys[i].usChar === " ") {
            button.setAttribute("data", "Space");
        }

        else if (keys[i].usChar === "1") {
            button.setAttribute("data", "Digit1");
        }
        else if (keys[i].usChar === "2") {
            button.setAttribute("data", "Digit2");
        }
        else if (keys[i].usChar === "3") {
            button.setAttribute("data", "Digit3");
        }
        else if (keys[i].usChar === "4") {
            button.setAttribute("data", "Digit4");
        }
        else if (keys[i].usChar === "5") {
            button.setAttribute("data", "Digit5");
        }
        else if (keys[i].usChar === "6") {
            button.setAttribute("data", "Digit6");
        }
        else if (keys[i].usChar === "7") {
            button.setAttribute("data", "Digit7");
        }
        else if (keys[i].usChar === "8") {
            button.setAttribute("data", "Digit8");
        }
        else if (keys[i].usChar === "9") {
            button.setAttribute("data", "Digit9");
        }
        else if (keys[i].usChar === "0") {
            button.setAttribute("data", "Digit0");
        }
        else if (keys[i].usChar === "-") {
            button.setAttribute("data", "Minus");
        }
        else if (keys[i].usChar === "=") {
            button.setAttribute("data", "Equal");
        }
        else if (keys[i].usChar === "Del") {
            button.setAttribute("data", "Delete");
        }
        else {
            button.setAttribute("data", keys[i].usChar.toUpperCase())
        }
    }

