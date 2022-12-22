import { useQuery } from "@tanstack/react-query";
import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";
import userImage from "../../assets/user.jpg";
import "./UsersList.css";

function UsersList({ setActiveUser }) {
  const { data: usersList, isLoading } = useQuery({
    queryKey: ["usersList"],
    queryFn: async () => {
      const res = await fetch(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(usersList);

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
