import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import UserDetails from "./Components/UserDetails/UserDetails";
import UsersList from "./Components/UsersList/UsersList";

function App() {
  const [activeUser, setActiveUser] = useState("1");
  const { data: userDetails, isLoading } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const res = await fetch(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="App my-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <UsersList setActiveUser={setActiveUser}></UsersList>
          </div>
          <div className="col-md-6 mainContainerUserDetails">
            {userDetails ? (
              <UserDetails
                userDetails={userDetails}
                activeUser={activeUser}
                isLoading={isLoading}
              ></UserDetails>
            ) : (
              <h2>No Data Found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
