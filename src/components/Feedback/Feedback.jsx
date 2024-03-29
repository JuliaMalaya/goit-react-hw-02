import css from './Feedback.module.css';

export default function Feedback({ feedbacks, total, stats }) {
  return (
    <ul className={css.pos}>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {stats}%</li>
    </ul>
  );
}