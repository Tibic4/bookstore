import React from 'react';

const Books = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}
