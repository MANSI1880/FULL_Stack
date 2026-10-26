const book = {
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  isRead: true,
};

const readingStatus = book.isRead
  ? `You have already read "${book.title}" by ${book.author}.`
  : `You still need to read "${book.title}" by ${book.author}.`;

console.log(readingStatus);
