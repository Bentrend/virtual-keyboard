let upperChar = false;
let keyMap = new Map();

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
        //Event.preventDefault();
    }
};

class CapsKey extends BasicKey  {
    onClick = function () {
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
};

class BackspaceKey extends BasicKey {  
    onClick = function (textArea) {
        let position = textArea.selectionStart;
            if (textArea.value.length == 0) {
                return;
            }; 
            if (textArea.selectionStart == textArea.selectionEnd) {
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
        textArea.value = textArea.value.slice(0, textArea.selectionStart) + "\n" + textArea.value.slice(textArea.selectionEnd) ;
        textArea.selectionStart = textArea.value.length;
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

class LangKey extends BasicKey {
    onClick = function () {
        let buttons = document.querySelectorAll('[class$="button"]');
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
}

const keys = [new BasicKey("`", "ё","button"), new BasicKey("1", "1", "button"), new BasicKey("2", "2", "button"), new BasicKey("3", "3","button"), new BasicKey("4", "4","button"), new BasicKey("5", "5","button"),
              new BasicKey("6", "6","button"), new BasicKey("7", "7", "button"), new BasicKey("8", "8", "button"), new BasicKey("9", "9","button"), new BasicKey("0", "0","button"), new BasicKey("-", "-","button"),
              new BasicKey("=", "=","button"), new BackspaceKey("Back", "Back", "function-button"), new TabKey("Tab", "Tab", "tab-button"), new BasicKey("q", "й","button", "KeyQ"), new BasicKey("w", "ц","button"), new BasicKey("e", "у","button"),
              new BasicKey("r", "к","button"), new BasicKey("t", "е", "button"), new BasicKey("y", "н", "button"), new BasicKey("u", "г","button"), new BasicKey("i", "ш","button"), new BasicKey("o", "щ","button"), new BasicKey("p", "з", "button"),
              new BasicKey("[", "х","button"), new BasicKey("]", "ъ", "button"), new BasicKey("\\", "\\", "button"), new DelKey("Del", "Del", "dell-button"), new CapsKey("Caps", "Caps","caps-button"), new BasicKey("a", "ф","button"), new BasicKey("s", "ы","button"),
              new BasicKey("d", "в","button"), new BasicKey("f", "а", "button"), new BasicKey("g", "п", "button"), new BasicKey("h", "р","button"), new BasicKey("j", "о", "button"), new BasicKey("k", "л", "button"),
              new BasicKey("l", "д","button"), new BasicKey(";", "ж", "button"), new BasicKey("'", "э", "button"), new EnterKey("Enter", "Enter","function-button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("z", "я","button"),
              new BasicKey("x", "ч","button"), new BasicKey("c", "с", "button"), new BasicKey("v", "м", "button"), new BasicKey("b", "и","button"), new BasicKey("n", "т","button"), new BasicKey("m", "ь","button"),
              new BasicKey(",", "б","button"), new BasicKey(".", "ю", "button"), new BasicKey("/", ".", "button"), new BasicKey("▲", "▲","button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("Ctr", "Ctr","ctrl-alt-button"), new LangKey("", "","lang-button"),
              new BasicKey("Alt", "Alt","ctrl-alt-button"), new BasicKey(" ", " ", "space-button"), new BasicKey("Alt", "Alt", "ctrl-alt-button"), new BasicKey("◄", "◄","button"), new BasicKey("▼", "▼","button"), new BasicKey("►", "►","button"), new BasicKey("Ctr", "Ctr","ctrl-alt-button")];

const keyboard = document.createElement("div");
const textArea = document.createElement("textarea")
const body = document.querySelector("body");
const title = document.createElement("div");
title.className = "title"
title.innerHTML = "Для переключения языка используйте только кнопку на вируальной клавиатуре. Многиe функции в процессе разработки и еще не доступны:("

textArea.className = ("text-area");
textArea.selectionStart = 0;
textArea.focus();
body.append(textArea);

keyboard.className = ("keyboard");
body.append(keyboard);
body.append(title);

document.addEventListener("keyup", (event) => {

   
   let pressKey = keyMap.get(event.code);
   textArea.focus();
   //pressKey.onClick(textArea, keyboardLang, upperChar);
   
})

if (localStorage.getItem("keyboardLang") === null) {
    localStorage.setItem("keyboardLang", "eng")
}

if (localStorage.getItem("keyboardLang") === "eng") {
    textArea.focus();
    for (let i = 0; i < keys.length; i++) {
        let button = document.createElement("div");
        button.className = (`${keys[i].className}`);
        button.innerHTML = (`${keys[i].usChar}`);
        keyboard.append(button);
        button.addEventListener("click", () => keys[i].onClick(textArea,  upperChar) );
        
        keyMap.set(keys[i].keyCode, keys[i]);
    };
};

if (localStorage.getItem("keyboardLang") === "ru") {
    textArea.focus();
    for (let i = 0; i < keys.length; i++) {
        let button = document.createElement("div");
        button.className = (`${keys[i].className}`);
        button.innerHTML = (`${keys[i].ruChar}`);
        keyboard.append(button);
        button.addEventListener("click", () => keys[i].onClick(textArea, upperChar) );
    
        keyMap.set(keys[i].keyCode, keys[i]);
    };
};
