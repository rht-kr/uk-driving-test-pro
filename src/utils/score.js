export function calculateScore(questions, answers) {
  const correct = questions.reduce((count, question) => count + (answers[question.id] === question.answer ? 1 : 0), 0);
  return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
}
