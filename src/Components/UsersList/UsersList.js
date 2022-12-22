import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";
import userImage from "../../assets/user.jpg";
import "./UsersList.css";
import { useEffect, useState } from "react";
import axios from "axios";

function UsersList({ setActiveUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState();
  useEffect(() => {
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
      .then((data) => {
        setUsersList(data.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Card className="text-center">
      <p className="cardHeader">USERS LIST</p>
      <Card.Body>
        {usersList.map((user) => (
          <div
            onClick={() => setActiveUser(user.id)}
            key={user.id}
            className="rounded-2 mb-2 usersListContainer"
          >
            <div className="d-flex align-items-center usersList py-3">
              <div
                className={`usersIcon rounded-circle ms-3 d-flex align-items-center 
                justify-content-center`}
              >
                <img src={userImage} alt="" className="w-50 avatar" />
              </div>
              <p className="ms-3 mb-0 listOfUserName">
                {user.profile.firstName + " " + user.profile.lastName}
              </p>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default UsersList;
