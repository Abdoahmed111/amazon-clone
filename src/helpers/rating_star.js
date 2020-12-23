export function renderRatingStars(rating) {
  let ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push("⭐");
  }
  return ratings;
}
