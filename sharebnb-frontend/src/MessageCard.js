
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

function MessageCard({ message }) {
  return (
    <div>
      <h1>Messages</h1>
      <Card>
        <CardBody>
          <CardTitle>From: {message.from}</CardTitle>
          <CardTitle>To: {message.to}</CardTitle>
          <CardText>{message.body}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export default MessageCard;
