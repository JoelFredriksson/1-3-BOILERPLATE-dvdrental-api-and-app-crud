  module.exports = class books {
    constructor(id, author, title, genre, year, available_copies, loaned_copies) {
      this.id = id
      this.author = author;
      this.title = title;
      this.genre = genre;
      this.year = year;
      this.available_copies = available_copies
      this.loaned_copies = loaned_copies
      
    }
  }