import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Axios from 'axios';
import * as moment from 'moment';
import BlogPost from './BlogPost';
import '../styles/blog.scss';

function Blog() {
  // detect if navigated to specific blog post
  let blogId = null;
  let match = useRouteMatch('/blog/:id');
  if (match && match.params && match.params.id) {
    blogId = match.params.id;
  }

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  // Similar to componentDidMount
  useEffect(() => {
    if (blogId) {
      // get single blog
      Axios
      .get(`http://localhost:3002/reviews/${blogId}`)
      .then(res => {
        console.log('res', res.data);
        res.data.datePosted = moment(res.data.date_created, 'X').format('DD/MM/YYYY HH:mm');
        res.data.body = res.data.body.split('[break]');
        setReviews([res.data]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    } else {
      // get all blogs
      Axios
      .get('http://localhost:3002/reviews')
      .then(res => {
        console.log('res', res.data);
        res.data.forEach(review => {
          review.datePosted = moment(review.date_created, 'X').format('DD/MM/YYYY HH:mm');
          review.body = review.body.split('[break]');
        });
        res.data.sort((a, b) => b.date_created - a.date_created);
        setReviews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    }
  }, []);

  const likePost = (pos) => {
    Axios
    .post(`http://localhost:3002/reviews/${reviews[pos].id}`, {})
    .then(res => {
      console.log('res', res.data);
      let reviewsCopy = JSON.parse(JSON.stringify(reviews));
      reviewsCopy[pos].likes = reviewsCopy[pos].likes + 1;
      setReviews(reviewsCopy);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <section id="blog" className="container">
      <div className="blog-stream">
        {loading &&
          <p>Loading...</p>
        }
        {reviews && reviews.length && reviews.map((review, index) =>
          <BlogPost key={index} blogIndex={index} review={review} isLast={index === reviews.length-1} likePost={likePost} />
        )}
      </div>
    </section>
  );
}

export default Blog;
