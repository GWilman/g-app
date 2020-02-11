import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as moment from 'moment';
import '../styles/blog.scss';

function Blog() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  // Similar to componentDidMount
  useEffect(() => {
    Axios
    .get('http://localhost:3002/reviews')
    .then(res => {
      console.log('res', res.data);
      res.data.forEach(review => {
        review.datePosted = moment(review.date_created, 'X').format('DD/MM/YYYY HH:mm');
      });
      setReviews(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
  }, []);

  return (
    <section id="blog" className="container">
      <div className="blog-stream">
        {loading &&
          <p>Loading...</p>
        }
        {reviews && reviews.length && reviews.map((review, index) =>
          <div key={index} className="padding--top">
            <img src={review.review_picture_url} />
            <h1 className="title is-1 is-primary margin-none">{review.title}</h1>
            <div className="star-rating margin-half--bottom">
              {review.star_rating >= 1 ? <FontAwesomeIcon icon="star" /> : <FontAwesomeIcon icon="star-half" />}
              {review.star_rating >= 2 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 1 ? '' : <FontAwesomeIcon icon="star-half" />)}
              {review.star_rating >= 3 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 2 ? '' : <FontAwesomeIcon icon="star-half" />)}
              {review.star_rating >= 4 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 3 ? '' : <FontAwesomeIcon icon="star-half" />)}
              {review.star_rating >= 5 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 4 ? '' : <FontAwesomeIcon icon="star-half" />)}
            </div>
            <h2 className="subtitle is-5">{review.subtitle}</h2>
            <p className="text">{review.body}</p>
            <div className="is-flex author-details margin--top">
              <img className="margin-half--right" src={review.author_picture_url} />
              <div>
                <p className="text">Written by {review.author}</p>
                <p className="text is-size-7">{review.datePosted}</p>
              </div>
            </div>
            {index+1 < reviews.length && <hr className="padding" />}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
