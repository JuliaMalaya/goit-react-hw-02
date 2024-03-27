import css from './Options.module.css';

export default function Options({
  updateFeedback,
  handleResetFeedbacks,
  total,
}) {
  return (
    <div className={css.pos}>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          className={css.button}
          type="button"
          onClick={handleResetFeedbacks}
        >
          Reset
        </button>
      )}
    </div>
  );
}