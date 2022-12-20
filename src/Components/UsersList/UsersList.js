import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";

function UsersList() {
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
            key={user.id}
            className=" bg-dark text-white py-3 rounded-3 mb-2"
          >
            <div className="d-flex">
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
