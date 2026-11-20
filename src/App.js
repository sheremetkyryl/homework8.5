import { Component } from "react";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlePositiveFeedback = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleNegativeFeedback = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodFeedback={this.handlePositiveFeedback}
            neutralFeedback={this.handleNeutralFeedback}
            badFeedback={this.handleNegativeFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
