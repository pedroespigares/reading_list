export class Book {
  constructor(tit, aut, gen) {
    this.title = tit;
    this.genre = gen;
    this.author = aut;
    this.read = false;
    this.readDate = null;
  }
}

export class BookList {
  constructor() {
    // El libro actual es el primero

    this.books = [];
    this.currentBook = 0;
  }

  add(book) {
    this.books.push(book);
  }

  finishCurrentBook() {
    // Marcar el libro actual como leído con fecha actual

    if (this.currentBook < this.books.length) {
      this.books[this.currentBook].read = true;
      this.books[this.currentBook].readDate = new Date();
      this.currentBook++;
    }
  }

  get numberBooksRead() {
    // Devolver el número de libros leídos

    return this.books.filter((book) => book.read).length;
  }

  get numberBooksNotReadYet() {
    // Devolver el número de libros no leídos

    return this.books.length - this.numberBooksRead;
  }

  get totalBooks() {
    // Devolver el número total de libros

    return this.books.length;
  }
}
