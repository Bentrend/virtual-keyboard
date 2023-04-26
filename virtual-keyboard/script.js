class Key {
    usChar;
    ruChar;
constructor (usChar, ruChar) {
    this.usChar = usChar;
    this.ruChar = ruChar;
}
    onClick(text) {
        text+=this.usChar;
        return text;
    }
}

const keys = [new Key("`", "ё"), new Key("1", "1"), new Key("2", "2"), new Key("3", "3"), new Key("4", "4"), new Key("5", "5"),
              new Key("6", "6"), new Key("7", "7"), new Key("8", "8"), new Key("9", "9"), new Key("0", "0"), new Key("-", "-"),
              new Key("=", "="), new Key("Back", "Back"), new Key("Tab", "Tab"), new Key("q", "й"), new Key("w", "ц"), new Key("e", "у"),
              new Key("r", "к"), new Key("t", "е"), new Key("y", "н"), new Key("u", "г"), new Key("i", "ш"), new Key("p", "з"),
              new Key("[", "х"), new Key("]", "ъ"), new Key("\\", "\\"), new Key("Caps", "Caps"), new Key("a", "ф"), new Key("s", "ы"),
              new Key("d", "в"), new Key("f", "а"), new Key("g", "п"), new Key("h", "р"), new Key("j", "о"), new Key("k", "л"),
              new Key("l", "д"), new Key(";", "ж"), new Key("'", "э"), new Key("En", "En"), new Key("Sh", "Sh"), new Key("z", "я"),
              new Key("x", "ч"), new Key("c", "с"), new Key("v", "м"), new Key("b", "и"), new Key("n", "т"), new Key("m", "ь"),
              new Key(",", "б"), new Key(".", "ю"), new Key("/", "."), new Key("Sh", "Sh"), new Key("Ctr", "Ctr"), new Key("Win", "Win"),
              new Key("a", "ф"), new Key("s", "ы"), new Key("d", "в"), new Key("a", "ф"), new Key("s", "ы"), new Key("d", "в"),
              new Key("Alt", "Alt"), new Key("Space", "Space"), new Key("Alt", "Alt"), new Key("Win", "Win"), new Key("Ctr", "Ctr")];

const keyboard = document.createElement("div");
const textArea = document.createElement("textarea")
const body = document.querySelector("body");

textArea.className = ("text-area");
body.append(textArea);

keyboard.className = ("keyboard");
body.append(keyboard);


let text = "";


for (let i = 0; i < keys.length; i++) {
    let button = document.createElement("div");
    button.className = ("button");
    button.innerHTML = (`${keys[i].usChar}`)
    keyboard.append(button);
    button.addEventListener("click", () => {
        text = keys[i].onClick(text)
        textArea.innerHTML = text;
    });

}