import "./App.css";
import UserDetails from "./Components/UserDetails/UserDetails";
import UsersList from "./Components/UsersList/UsersList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <UsersList></UsersList>
          </div>
          <div className="col-md-6">
            <UserDetails></UserDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
