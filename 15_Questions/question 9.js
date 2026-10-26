const testScores = [85, 92, 78, 90, 88];
const averageScore =
  testScores.reduce((total, score) => total + score, 0) / testScores.length;

console.log(averageScore);
