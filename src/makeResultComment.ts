function makeResultComment(score: number): string {
  let comment = "";

  if (score === 0) {
    comment = "You are truly special!";
  } else if (score <= 30) {
    comment = "Don't worry, we can still be friends!";
  } else if (score <= 60) {
    comment = "Don't be too hard on yourself, you did alright!";
  } else if (score <= 90) {
    comment = "You stanned the test!";
  } else if (score === 100) {
    comment = "You are Stan!";
  }

  return comment;
}

export default makeResultComment;
