import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import Profile from "./components/Profile";
import Loader from "./components/Loader";
import axios from "axios";
import "./styles/app.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className="container">
      {!users.length ? (
        <Loader />
      ) : (
        <Row>
          {users.map((user) => {
            return (
              <Col key={user.id} xs={24} sm={24} md={8} lg={8} xl={6}>
                <Profile
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  id={user.id}
                  phone={user.phone}
                  website={user.website}
                  address={user.address}
                  company={user.company}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default App;
