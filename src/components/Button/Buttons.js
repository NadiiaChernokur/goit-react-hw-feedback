import { Container, FeedbackButton } from './Feedback.styled';

export const Buttons = ({ options, onClick }) => {
  return (
    <Container>
      {options.map(button => {
        return (
          <FeedbackButton
            key={button}
            onClick={() => {
              onClick(button);
            }}
          >
            {button}
          </FeedbackButton>
        );
      })}
    </Container>
  );
};
