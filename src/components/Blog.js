import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Blog() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  // Similar to componentDidMount
  useEffect(() => {
    setTimeout(() => {
      Axios
      .get('http://localhost:3002/reviews')
      .then(res => {
        console.log('res', res.data);
        setReviews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <div className="">
      <h1>Blog</h1>
      {loading &&
        <p>Loading...</p>
      }
      {reviews && reviews.length && reviews.map(review =>
        <div key={review.id}>
          <h2>{review.title}</h2>
          <p>{review.subtitle}</p>
          <img src={review.review_picture_url} />
        </div>
      )}
    </div>
  );
}

export default Blog;
