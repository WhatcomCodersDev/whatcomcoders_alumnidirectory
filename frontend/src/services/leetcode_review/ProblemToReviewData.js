import React, { useState } from 'react';

class ProblemToReview {
  constructor({
    problem_id = 'unknown',
    category = 'unknown',
    user_rating = 3,
    last_reviewed_timestamp = null,
    next_review_timestamp = null,
    streak = 0,
  } = {}) {
    this.problem_id = problem_id;
    this.category = category;
    this.user_rating = user_rating;
    this.last_reviewed_timestamp = last_reviewed_timestamp;
    this.next_review_timestamp = next_review_timestamp;
    this.streak = streak;
  }

  toString() {
    return `${this.problem_id}. ${this.category} (user_rating: ${this.user_rating}, last_reviewed_timestamp: ${this.last_reviewed_timestamp}, next_review_timestamp: ${this.next_review_timestamp}, streak: ${this.streak})`;
  }

  toDict() {
    return {
      [this.problem_id]: {
        category: this.category,
        user_rating: this.user_rating,
        last_reviewed_timestamp: this.last_reviewed_timestamp,
        next_review_timestamp: this.next_review_timestamp,
        streak: this.streak,
      },
    };
  }

  getProblemId() {
    return this.problem_id;
  }

  getCategory() {
    return this.category;
  }

  getUserRating() {
    return this.user_rating;
  }

  getLastReviewedTimestamp() {
    return this.last_reviewed_timestamp;
  }

  getNextReviewTimestamp() {
    return this.next_review_timestamp;
  }

  getStreak() {
    return this.streak;
  }

  updateWithNewNextReviewTimestamp(next_review_timestamp) {
    this.next_review_timestamp = next_review_timestamp;
    return this;
  }
}

const ProblemComponent = () => {
  const [problem, setProblem] = useState(
    new ProblemToReview({
      problem_id: '30',
      category: 'Arrays & Hashing',
      user_rating: 4,
      last_reviewed_timestamp: new Date(2024, 6, 30, 4, 48, 37, 40379),
      next_review_timestamp: new Date(2024, 6, 31, 14, 22, 13, 40314),
      streak: 0,
    })
  );

  const handleUpdateTimestamp = () => {
    const newProblem = new ProblemToReview({
      ...problem.toDict()[problem.getProblemId()],
      next_review_timestamp: new Date(), // Update to current date/time
    });
    setProblem(newProblem);
  };

  return (
    <div>
      <p>{problem.toString()}</p>
      <button onClick={handleUpdateTimestamp}>
        Update Next Review Timestamp
      </button>
    </div>
  );
};

export default ProblemComponent;
