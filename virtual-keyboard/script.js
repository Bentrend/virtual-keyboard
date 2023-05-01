let upperChar = false;
let keyboardLang = "eng";
let position;


class BasicKey {
constructor (usChar, ruChar, className, upChar) {
    this.usChar = usChar;
    this.ruChar = ruChar;
    this.className = className;
    this.upChar = upChar;
}
    onClick(textArea, keyboardLang, upperChar) {

        console.log(keyboardLang);
        console.log(upperChar);

        let currentChar = keyboardLang === "eng" ? this.usChar : this.ruChar;

        currentChar = upperChar ? currentChar.toUpperCase() : currentChar.toLowerCase();

        console.log(currentChar);

        textArea.innerHTML += currentChar;
        textArea.selectionStart = textArea.innerHTML.length;
        textArea.focus();
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
            capsButton.classList.add("caps-active");
        
        }  
        else {
            for (let i = 0; i < arrButton.length; i++) {
                arrButton[i].innerHTML = arrButton[i].innerHTML.toLowerCase();
            };
            capsButton.classList.remove("caps-active"); 
            upperChar = false;
        }    
    };
};

class BackspaceKey extends BasicKey {  
    onClick = function (textArea) {
        if (textArea.innerHTML.length == 0) {
            return;
        }; 
        if (textArea.selectionStart > 0) {
            position = textArea.selectionStart-1;
            textArea.innerHTML = textArea.innerHTML.slice(0, textArea.selectionEnd-1) + textArea.innerHTML.slice(textArea.selectionEnd);
            textArea.selectionStart = position;
            textArea.focus();
        return;
        }

        }      
    }

class DelKey extends BasicKey {
     onClick = function (textArea) {
        if (textArea.innerHTML.length == 0) {
            return;
        }; 
        if (textArea.selectionStart > 0) {
            position = textArea.selectionStart;
            textArea.innerHTML = textArea.innerHTML.slice(0, textArea.selectionEnd) + textArea.innerHTML.slice(textArea.selectionEnd+1);
            textArea.selectionStart = position;
            textArea.focus();
        return;
        }
        
        }      
}
class EnterKey extends BasicKey {
    onClick = function (textArea) {
        textArea.innerHTML += "\n";
        textArea.selectionStart = textArea.innerHTML.length;
        textArea.focus();
    }
}

class TabKey extends BasicKey {
    onClick = function () {
    
    }
}

class LangKey extends BasicKey {
    onClick = function () {
        let buttons = document.querySelectorAll('[class$="button"]');
        if (keyboardLang === "eng") {
        
            for (let i = 0; i <keys.length; i++) {
                if (keys[i].className === "button") {
                    buttons[i].innerHTML = (`${keys[i].ruChar}`); 
                }
            }
            keyboardLang = "ru";
            return;
        }

        if (keyboardLang === "ru") {
        
            for (let i = 0; i <keys.length; i++) {
                if (keys[i].className === "button") {
                    buttons[i].innerHTML = (`${keys[i].usChar}`);
                }
            }
            keyboardLang = "eng";
            return;
        }
    }
}

const keys = [new BasicKey("`", "ё","button",false), new BasicKey("1", "1", "button",false), new BasicKey("2", "2", "button",false), new BasicKey("3", "3","button",false), new BasicKey("4", "4","button",false), new BasicKey("5", "5","button",false),
              new BasicKey("6", "6","button",false), new BasicKey("7", "7", "button",false), new BasicKey("8", "8", "button",false), new BasicKey("9", "9","button",false), new BasicKey("0", "0","button"), new BasicKey("-", "-","button"),
              new BasicKey("=", "=","button",false), new BackspaceKey("Back", "Back", "function-button"), new TabKey("Tab", "Tab", "tab-button"), new BasicKey("q", "й","button",false), new BasicKey("w", "ц","button"), new BasicKey("e", "у","button"),
              new BasicKey("r", "к","button",false), new BasicKey("t", "е", "button"), new BasicKey("y", "н", "button",false), new BasicKey("u", "г","button"), new BasicKey("i", "ш","button"), new BasicKey("o", "щ","button"), new BasicKey("p", "з", "button"),
              new BasicKey("[", "х","button",false), new BasicKey("]", "ъ", "button",false), new BasicKey("\\", "\\", "button",false), new DelKey("Del", "Del", "dell-button"), new CapsKey("Caps", "Caps","caps-button"), new BasicKey("a", "ф","button"), new BasicKey("s", "ы","button"),
              new BasicKey("d", "в","button",false), new BasicKey("f", "а", "button",false), new BasicKey("g", "п", "button",false), new BasicKey("h", "р","button"), new BasicKey("j", "о", "button"), new BasicKey("k", "л", "button"),
              new BasicKey("l", "д","button",false), new BasicKey(";", "ж", "button",false), new BasicKey("'", "э", "button",false), new EnterKey("Enter", "Enter","function-button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("z", "я","button"),
              new BasicKey("x", "ч","button",false), new BasicKey("c", "с", "button",false), new BasicKey("v", "м", "button",false), new BasicKey("b", "и","button"), new BasicKey("n", "т","button"), new BasicKey("m", "ь","button"),
              new BasicKey(",", "б","button",false), new BasicKey(".", "ю", "button",false), new BasicKey("/", ".", "button",false), new BasicKey("▲", "▲","button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("Ctr", "Ctr","ctrl-alt-button"), new LangKey("", "","lang-button"),
              new BasicKey("Alt", "Alt","ctrl-alt-button"), new BasicKey(" ", " ", "space-button"), new BasicKey("Alt", "Alt", "ctrl-alt-button"), new BasicKey("◄", "◄","button"), new BasicKey("▼", "▼","button"), new BasicKey("►", "►","button"), new BasicKey("Ctr", "Ctr","ctrl-alt-button")];

const keyboard = document.createElement("div");
const textArea = document.createElement("textarea")
const body = document.querySelector("body");

textArea.className = ("text-area");

body.append(textArea);

keyboard.className = ("keyboard");
body.append(keyboard);



for (let i = 0; i < keys.length; i++) {
    let button = document.createElement("div");
    button.className = (`${keys[i].className}`);
    button.innerHTML = (`${keys[i].usChar}`);
    keyboard.append(button);
    button.addEventListener("click", () => keys[i].onClick(textArea, keyboardLang, upperChar) );

}

