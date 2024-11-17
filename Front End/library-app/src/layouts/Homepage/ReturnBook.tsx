import React from 'react';
import BookImage1 from './../../Images/BooksImages/new-book-1.png';

export const ReturnBook = () => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="d-flex flex-column align-items-center text-center">
                <img src={BookImage1} width='151' height='233' alt="book" />
                <h6 className="mt-2">Book</h6>
                <p>Luv2Code</p>
                <a className="btn main-color text-white mt-2" href="#">Reserve</a>
            </div>
        </div>
    );
}