const arrayEngChar = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Back", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
"[", "]", "\\", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Ent", "Sh", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Sh", "Ctrl",
"Win", "Alt", "Space", "Alt", "Win", "Win", "Ctrl", "test", "test", "test", "test"]


const keyboard = document.createElement("div");
const textArea = document.createElement("textarea")
const body = document.querySelector("body");

textArea.className = ("text-area");
body.append(textArea);

keyboard.className = ("keyboard");
body.append(keyboard);




let text = "";


for (let i = 0; i < 65; i++) {
    let button = document.createElement("div");
    button.className = ("button");
    button.innerHTML = (`${arrayEngChar[i]}`)
    keyboard.append(button);
    button.addEventListener("click", () => {textArea.innerHTML = (text + arrayEngChar[i]); text = text + arrayEngChar[i]});

}