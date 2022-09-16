import fiction_data from '../fiction.json'
import React from 'react';
// import { useState, useEffect } from 'react';
import BookCard from './BookCard';
export default function Fiction() {

  //const [data, setData] = useState({});


  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}

        {fiction_data.map((item) => (
          <BookCard
            src={item.img}
            title={item.title}
            price={item.price}
            author={item.author}
          />
        )
        )}

      </div>
    </div>
  );
}


