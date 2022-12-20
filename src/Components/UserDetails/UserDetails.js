import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserDetails() {
  return (
    <Card className="text-center">
      <p className="cardHeader">USER DETAILS</p>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;
