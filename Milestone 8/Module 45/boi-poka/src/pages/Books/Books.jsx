import React, {Suspense, useState} from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(response => response.json())
    //         .then(data => setAllBooks(data));
    // }, []);


    // const bookPromise=fetch('booksData.json').then(res=>res.json());


    return (
        <div>
            <h2 className='text-3xl font-bold text-center p-6'>Books Page</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2'>{
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }</div>
                {/* <Book bookPromise={bookPromise}></Book> */}
            </Suspense>
        </div>
    );
};

export default Books;