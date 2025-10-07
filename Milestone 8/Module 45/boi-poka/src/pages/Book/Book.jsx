import React from 'react';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    console.log(singleBook);

    const { bookName, author, image, review, category, totalPages, rating, tags, publisher, yearOfPublishing } = singleBook;

    return (
        // grid view. small device 1 column, medium device 2 column, large device 3 column
        <div className=''>
            <div className="card bg-base-100 w-auto shadow-sm">
  <figure>
    {/* image size 50%  and show all same size*/}
    <img className='w-1/2 mx-auto'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    {/* if review is long, show ... */}
    <p>{review.length > 100 ? review.slice(0, 100) + '...' : review}</p>
    <div className="card-actions justify-end">
        
      <div className="badge badge-outline">{category} </div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;