import nonfiction_data from '../nonfiction.json'
import React from 'react';
import BookCard from './BookCard';
// import { useState } from 'react';
export default function NonFiction() {

  // const [data, setData] = useState({})


  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {nonfiction_data.map((item) => (
          <BookCard
            src={item.img}
            title={item.title}
            price={item.price}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
