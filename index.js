function book(bookName, author, pages, read) {
  this.bookName = bookName
  this.author = author
  this.pages = pages
  this.read = read

  this.isRead = function () {
    return this.read ? 'read' : 'not read'
  }
  this.info = function () {
    return `The book name is ${this.bookName} by ${this.author}, it has ${
      this.pages
    } pages and you have ${this.isRead()} it. `
  }
}

const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 235, false)

console.log(theHobbit.info())
Object.getPrototypeOf(theHobbit)
