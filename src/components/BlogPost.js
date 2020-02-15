import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/blog-post.scss';

function BlogPost({ review, isLast }) {

  return (
    <div id="blog-post" className="padding--top">
      <img src={review.review_picture_url} alt={review.title} />
      <h1 className="title is-1 is-primary margin-none">{review.title}</h1>
      <div className="star-rating margin-half--bottom">
        {review.star_rating >= 1 ? <FontAwesomeIcon icon="star" /> : <FontAwesomeIcon icon="star-half" />}
        {review.star_rating >= 2 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 1 ? '' : <FontAwesomeIcon icon="star-half" />)}
        {review.star_rating >= 3 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 2 ? '' : <FontAwesomeIcon icon="star-half" />)}
        {review.star_rating >= 4 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 3 ? '' : <FontAwesomeIcon icon="star-half" />)}
        {review.star_rating >= 5 ? <FontAwesomeIcon icon="star" /> : (review.star_rating <= 4 ? '' : <FontAwesomeIcon icon="star-half" />)}
      </div>
      <h2 className="subtitle is-5">{review.subtitle}</h2>
      {review.body && review.body.length && review.body.map((para, index) =>
        <p key={index} className={"text " + (index < review.body.length-1 ? 'padding-half--bottom' : '')}>{para}</p>
      )}
      <div className="is-flex author-details margin--top">
        <img className="margin-half--right" src={review.author_picture_url} alt={review.author} />
        <div>
          <p className="text">Written by {review.author}</p>
          <p className="text is-size-7">{review.datePosted}</p>
        </div>
      </div>
      {!isLast && <hr />}
    </div>
  );
}

export default BlogPost;
