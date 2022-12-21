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
            <div className="d-flex usersList">
              <img src={user.avatar} alt="" className="ms-3" />
              <h5 className="ms-3">{user.firstName + " " + user.lastName}</h5>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default UsersList;
