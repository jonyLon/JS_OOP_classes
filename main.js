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

class News {
  constructor(title, text, tags, datePublished) {
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.datePublished = new Date(datePublished);
  }

  print() {
    const today = new Date();
    const diffTime = Math.abs(today - this.datePublished);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let dateDisplay;
    if (diffDays < 1) {
      dateDisplay = 'сьогодні';
    } else if (diffDays < 7) {
      dateDisplay = `${diffDays} днів тому`;
    } else {
      dateDisplay = this.datePublished.toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }

    document.write(`<h1> ${this.title} </h1>`);
    document.write(`<small> ${dateDisplay}<small>`);
    document.write(`<h2> ${this.text} </h2>`);
    document.write(`<small> #${this.tags.join(', #')}</small>`);
  }
}

const news = new News(
  'Новий закон про податки',
  'Сьогодні було прийнято новий закон про податки, який вплине на всіх громадян.',
  ['політика', 'економіка', 'закон'],
  '2024-05-25'
);

news.print();