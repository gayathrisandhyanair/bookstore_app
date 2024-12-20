import React from 'react';

const books = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Book Title ${index + 1}`,
  author: `Author ${index + 1}`,
}));

function Home() {
  return (
    <div className="home-container">
      <h2>Newest Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <button onClick={() => alert(`View details for ${book.title}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
