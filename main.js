class PrintMachine {
  constructor(fontSize, color, fontFamily) {
    this.fontSize = fontSize;
    this.fontColor = color;
    this.fontFamily = fontFamily;
  }
  print(value) {
    document.write(
      `<p style="
        font-size: ${this.fontSize};
        color: ${this.fontColor};
        font-family: ${this.fontFamily};
      ">
        ${value}
      </p>`
    );
  }
}

let printEom = new PrintMachine("40px", "green", "Times New Roman")
printEom.print("Calculation...")

