import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import UserDetails from "./Components/UserDetails/UserDetails";
import UsersList from "./Components/UsersList/UsersList";

function App() {
  const [activeUser, setActiveUser] = useState("1");
  const { data: userDetails, isLoading } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const res = await fetch("userDetails.json");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="App my-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <UsersList setActiveUser={setActiveUser}></UsersList>
          </div>
          <div className="col-md-6">
            {userDetails && (
              <UserDetails
                userDetails={userDetails}
                activeUser={activeUser}
                isLoading={isLoading}
              ></UserDetails>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
