class Storage {

  static setReviewsLiked(reviewsLiked) {
    return localStorage.setItem('reviewsLiked', JSON.stringify(reviewsLiked));
  }

  static getReviewsLiked() {
    return JSON.parse(localStorage.getItem('reviewsLiked')) || [];
  }

  static removeReviewsLiked() {
    localStorage.removeItem('reviewsLiked');
  }

}

export default Storage;
