function firstChar(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      return text[i];
    }
  }
  return "";
}

// Get input from user
const text = prompt("Enter text:");
alert(firstChar(text));