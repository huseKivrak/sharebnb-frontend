//import cards from reactstrap:
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
function MessagesList() {
  return (
    <div>
      <h1>Messages</h1>
      <Card>
        <CardImg
          top
          width="100%"
          src=""
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Message Title</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export default MessagesList;
