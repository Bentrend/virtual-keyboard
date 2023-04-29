let text = "";
let upperChar = false;

class BasicKey {
constructor (usChar, ruChar, className, upChar) {
    this.usChar = usChar;
    this.ruChar = ruChar;
    this.className = className;
    this.upChar = upChar;
}
    onClick(text) {
        text+=this.usChar;
        return text;
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

            for (let i = 0; i < keys.length; i++) {
                if (keys[i].className == "button") {
                    keys[i].usChar = keys[i].usChar.toUpperCase();
                    upperChar = true;
                    capsButton.classList.add("caps-active");
                }
            }
        }  
        else {
            for (let i = 0; i < arrButton.length; i++) {
                arrButton[i].innerHTML = arrButton[i].innerHTML.toLowerCase();
            };

            for (let i = 0; i < keys.length; i++) {
            keys[i].usChar = keys[i].usChar.toLowerCase();
            upperChar = false;
            capsButton.classList.remove("caps-active");
            } 
            
        }    
        return text;
    };
};

class DelKey extends BasicKey {
    onClick = function (text) {
        let arr = text.split("");
        arr.length = arr.length-1;
        return arr.join("");
         
    }
}

const keys = [new BasicKey("`", "ё","button",false), new BasicKey("1", "1", "button",false), new BasicKey("2", "2", "button",false), new BasicKey("3", "3","button",false), new BasicKey("4", "4","button",false), new BasicKey("5", "5","button",false),
              new BasicKey("6", "6","button",false), new BasicKey("7", "7", "button",false), new BasicKey("8", "8", "button",false), new BasicKey("9", "9","button",false), new BasicKey("0", "0","button"), new BasicKey("-", "-","button"),
              new BasicKey("=", "=","button",false), new BasicKey("Back", "Back", "function-button"), new BasicKey("Tab", "Tab", "tab-button"), new BasicKey("q", "й","button",false), new BasicKey("w", "ц","button"), new BasicKey("e", "у","button"),
              new BasicKey("r", "к","button",false), new BasicKey("t", "е", "button"), new BasicKey("y", "н", "button",false), new BasicKey("u", "г","button"), new BasicKey("i", "ш","button"), new BasicKey("o", "щ","button"), new BasicKey("p", "з", "button"),
              new BasicKey("[", "х","button",false), new BasicKey("]", "ъ", "button",false), new BasicKey("\\", "\\", "button",false), new DelKey("Del", "Del", "dell-button"), new CapsKey("Caps", "Caps","caps-button"), new BasicKey("a", "ф","button"), new BasicKey("s", "ы","button"),
              new BasicKey("d", "в","button",false), new BasicKey("f", "а", "button",false), new BasicKey("g", "п", "button",false), new BasicKey("h", "р","button"), new BasicKey("j", "о", "button"), new BasicKey("k", "л", "button"),
              new BasicKey("l", "д","button",false), new BasicKey(";", "ж", "button",false), new BasicKey("'", "э", "button",false), new BasicKey("Enter", "Enter","function-button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("z", "я","button"),
              new BasicKey("x", "ч","button",false), new BasicKey("c", "с", "button",false), new BasicKey("v", "м", "button",false), new BasicKey("b", "и","button"), new BasicKey("n", "т","button"), new BasicKey("m", "ь","button"),
              new BasicKey(",", "б","button",false), new BasicKey(".", "ю", "button",false), new BasicKey("/", ".", "button",false), new BasicKey("▲", "▲","button"), new BasicKey("Shift", "Shift","function-button"), new BasicKey("Ctr", "Ctr","ctrl-alt-button"), new BasicKey("Win", "Win","win-button"),
              new BasicKey("Alt", "Alt","ctrl-alt-button"), new BasicKey(" ", " ", "space-button"), new BasicKey("Alt", "Alt", "ctrl-alt-button"), new BasicKey("◄", "◄","button"), new BasicKey("▼", "▼","button"), new BasicKey("▼", "▼","button"), new BasicKey("Ctr", "Ctr","ctrl-alt-button")];

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
    button.addEventListener("click", () => {
        text = keys[i].onClick(text);
        textArea.innerHTML = text;
    });

}

