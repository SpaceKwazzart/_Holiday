import { Button } from "shared/ui";

export const LeaveFeedback = () => {
  const onClick = () => {
    alert("Feedback!")
  }

  return (
    <Button onClick={onClick}>
      Feedback :3
    </Button>
  );
}
 