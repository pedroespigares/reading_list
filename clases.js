export class Book{
  constructor(tit, aut, gen)
  {
      this.title = tit;
      this.genre = gen;
      this.author = aut;
      this.read = false;
      this.readDate = null;
  }
}

export class BookList{
  constructor()
  {
      this.books = [];
      this.currentBook = 0;
  }

  add(book)
  {
      this.books.push(book);
  }

  finishCurrentBook()
  {
      if (this.currentBook<this.books.length)
      {
          this.books[this.currentBook].read=true;
          this.books[this.currentBook].readDate = new Date();
          this.currentBook++;

      }

  }

  get numberBooksRead()
  {
      return this.books.filter( (book)=> book.read).length;
  }

  get numberBooksNotReadYet()
  {
      return this.books.length - this.numberBooksRead;
  }

  get totalBooks(){
      return this.books.length;
  }

}