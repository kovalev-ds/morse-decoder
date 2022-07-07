const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function translate(expr) {
  if (!expr) return "";

  const head = expr.slice(0, 2);
  const tail = expr.slice(2);

  if (head == "10") return "." + translate(tail);
  if (head == "11") return "-" + translate(tail);

  return translate(tail);
}

function decode(expr) {
  if (!expr) return "";

  const head = expr.slice(0, 10);
  const tail = expr.slice(10);

  return head === "**********"
    ? " " + decode(tail)
    : MORSE_TABLE[translate(head)] + decode(tail);
}

module.exports = {
  decode,
};
