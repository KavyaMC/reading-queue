import { useState } from "react";

function Overview({ books }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [bookList, setBookList] = useState(books);

  const booksRead = bookList.filter((book) => book.status === "read").length;

  const totalBooks = bookList.length;

  const currentlyReading = bookList.filter(
    (book) => book.status === "reading",
  ).length;

  const booksRemaining = totalBooks - (booksRead + currentlyReading);
  const progress = (booksRead / totalBooks) * 100;

  return (
    <>
      <p>
        {booksRead} of {totalBooks} books read in {year}
      </p>
      <p>Books Remaining: {booksRemaining}</p>
      <p>Currently Reading: {currentlyReading}</p>
      <p>Books Read: {booksRead}</p>
      <p>Total Books: {totalBooks}</p>
      <p>Progress: {progress}%</p>
    </>
  );
}

export default Overview;
