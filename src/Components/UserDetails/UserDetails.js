import { FloatingLabel, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";
import userImage from "../../assets/user.jpg";
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
            <div
              className={`usersDetailsIcon rounded-circle d-flex align-items-center 
              justify-content-center`}
            >
              <img src={userImage} alt="" className="detailsAvatar" />
            </div>
            <p className="userName mt-2 mb-5">@{activeUser.profile.username}</p>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={activeUser.Bio}
                disabled
                className="mb-5"
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name"
              className="mb-3 "
            >
              <Form.Control
                type="text"
                placeholder="Full Name"
                defaultValue={
                  activeUser.profile.firstName +
                  " " +
                  activeUser.profile.lastName
                }
                disabled
                className=""
              />
            </FloatingLabel>
            <FloatingLabel
              className=""
              controlId="floatingPassword"
              label="Job Title"
            >
              <Form.Control
                type="text"
                placeholder="Job Title"
                className="mb-3 "
                defaultValue={activeUser.jobTitle}
                disabled
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Email"
              className=""
            >
              <Form.Control
                type="email"
                placeholder="Email"
                className=""
                defaultValue={activeUser.profile.email}
                disabled
              />
            </FloatingLabel>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default UserDetails;
