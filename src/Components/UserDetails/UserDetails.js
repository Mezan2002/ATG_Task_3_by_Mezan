import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";

function UserDetails({ activeUser, userDetails, isLoading }) {
  const activeUserCard = userDetails.filter((user) => user.id === activeUser);
  console.log(activeUserCard[0]);

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
            <p>{activeUser.profile.username}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              consectetur eaque voluptatum amet repudiandae corrupti labore
              natus accusantium officiis eligendi pariatur, minus, totam sint
              asperiores dolor culpa beatae ab dicta.
            </p>
            <label htmlFor="">
              <input type="text" defaultValue="Mezanur" className="w-100" />
            </label>
            <br />
            <label htmlFor="">
              <input type="text" defaultValue="Rahman" className="w-100" />
            </label>
            <br />
            <label htmlFor="">
              <input
                type="email"
                defaultValue="mezan2002@gmail.com"
                className="w-100"
              />
            </label>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default UserDetails;
