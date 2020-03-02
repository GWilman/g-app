import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Axios from 'axios';
import * as moment from 'moment';
import BlogPost from './BlogPost';
import Spinner from './Spinner';
import Storage from '../lib/storage';
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
      // get single blog post
      Axios
      .get(`http://localhost:3002/review/${blogId}`)
      .then(res => {
        console.log('res', res.data);
        const likedReviews = Storage.getReviewsLiked();
        res.data.datePosted = moment(res.data.date_created, 'X').format('DD/MM/YYYY HH:mm');
        res.data.body = res.data.body.split('[break]');
        res.data.userHasLiked = Array.isArray(likedReviews) ? likedReviews.indexOf(res.data.id) !== -1 : false;
        setReviews([res.data]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    } else {
      // get all blog posts
      Axios
      .get('http://localhost:3002/review')
      .then(res => {
        const likedReviews = Storage.getReviewsLiked();
        res.data.forEach(review => {
          review.datePosted = moment(review.date_created, 'X').format('DD/MM/YYYY HH:mm');
          review.body = review.body.split('[break]');
          review.userHasLiked = Array.isArray(likedReviews) ? likedReviews.indexOf(review.id) !== -1 : false;
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
    .post(`http://localhost:3002/review/${reviews[pos].id}`, {})
    .then(res => {
      let reviewsCopy = JSON.parse(JSON.stringify(reviews));
      reviewsCopy[pos].likes = reviewsCopy[pos].likes + 1;
      reviewsCopy[pos].userHasLiked = true;
      setReviews(reviewsCopy);
      const likedReviews = Storage.getReviewsLiked();
      if (Array.isArray(likedReviews)) {
        Storage.setReviewsLiked(likedReviews.concat(reviewsCopy[pos].id));
      } else {
        Storage.setReviewsLiked([reviewsCopy[pos].id]);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <section id="blog" className="container">
      <div className="narrow-container">
        {loading ? (
          <div className="loading-container-medium center-everything">
            <Spinner />
          </div>
        ) : (
          <div>
            {reviews && reviews.length ? (
              reviews.map((review, index) =>
                <BlogPost key={index} blogIndex={index} review={review} isLast={index === reviews.length-1} likePost={likePost} />
              )
            ) : (
              <p className="padding-double--top has-text-centered">No film reviews found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
