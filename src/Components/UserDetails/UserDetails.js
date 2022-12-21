import { FloatingLabel, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";
import "./UserDetails.css";

function UserDetails({ activeUser, userDetails, isLoading }) {
  const activeUserCard = userDetails.filter((user) => user.id === activeUser);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Card className="text-center">
      <p className="cardHeader">USER DETAILS</p>
      <Card.Body>
        {activeUserCard.map((activeUser) => (
          <div key={activeUser.id}>
            <img src="" alt="" />
            <p className="userName">@{activeUser.profile.username}</p>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={activeUser.Bio}
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Full Name"
                defaultValue={
                  activeUser.profile.firstName +
                  " " +
                  activeUser.profile.lastName
                }
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Job Title">
              <Form.Control
                type="text"
                placeholder="Job Title"
                className="mb-3"
                defaultValue={activeUser.jobTitle}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                defaultValue={activeUser.profile.email}
              />
            </FloatingLabel>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default UserDetails;
