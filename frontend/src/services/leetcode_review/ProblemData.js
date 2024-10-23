export default class Problem {
  constructor({
    id,
    name,
    link,
    category,
    problem_difficulty,
    tag,
    isInBlind75,
    isInBlind50,
    isInNeetcode,
    isInGrind75,
    isInSeanPrasadList,
    user_rating,
    last_reviewed_timestamp,
    next_review_timestamp,
  }) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.category = category;
    this.problem_difficulty = problem_difficulty;
    this.tag = tag;
    this.isInBlind75 = isInBlind75;
    this.isInBlind50 = isInBlind50;
    this.isInNeetcode = isInNeetcode;
    this.isInGrind75 = isInGrind75;
    this.isInSeanPrasadList = isInSeanPrasadList;
    this.user_rating = user_rating;
    this.last_reviewed_timestamp = last_reviewed_timestamp;
    this.next_review_timestamp = next_review_timestamp;
  }

  toDict() {
    return {
      id: this.id,
      name: this.name,
      link: this.link,
      category: this.category,
      problem_difficulty: this.problem_difficulty
        ? this.problem_difficulty.toLowerCase()
        : '', // TODO - deprecated because user_rating is used instead
      tag: this.tag,
      isInBlind75: this.isInBlind75,
      isInBlind50: this.isInBlind50,
      isInNeetcode: this.isInNeetcode,
      isInGrind75: this.isInGrind75,
      isInSeanPrasadList: this.isInSeanPrasadList,
      user_rating: this.user_rating ? this.user_rating : 3,
      last_reviewed_timestamp: this.last_reviewed_timestamp
        ? this.last_reviewed_timestamp
        : null,
      next_review_timestamp: this.next_review_timestamp
        ? this.next_review_timestamp
        : null,
    };
  }

  //   add_user_id(user_id) {
  //     this.user_id = user_id;
  //   }
}
