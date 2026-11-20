export default function FeedbackOptions({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) {
  // const FeedbackOptions = ({ goodFeedback, badFeedback, neutralFeedback})
  return (
    <div>
      <button onClick={goodFeedback}>Good</button>
      <button onClick={neutralFeedback}>Neutral</button>
      <button onClick={badFeedback}>Bad</button>
    </div>
  );
}
