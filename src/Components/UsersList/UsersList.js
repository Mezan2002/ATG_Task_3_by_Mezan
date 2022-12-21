import { useQuery } from "@tanstack/react-query";
import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";
import "./UsersList.css";

function UsersList({ setActiveUser }) {
  const { data: usersList, isLoading } = useQuery({
    queryKey: ["usersList"],
    queryFn: async () => {
      const res = await fetch("usersList.json");
      const data = await res.json();
      return data;
    },
  });

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
            className="py-3 rounded-2 mb-2 usersListContainer"
          >
            <div className="d-flex align-items-center usersList">
              <div
                className={`usersIcon rounded-circle ms-3 d-flex align-items-center 
                justify-content-center ${user.avatarBG}`}
              >
                <img src={user.avatar} alt="" className="w-50 avatar" />
              </div>
              <p className="ms-3 mb-0 listOfUserName">
                {user.firstName + " " + user.lastName}
              </p>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default UsersList;
