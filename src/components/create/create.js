import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);

  const sendDataToAPI = () => {
    axios.post(`https://62b2c1f020cad3685c93262c.mockapi.io/users`, {
      firstName,
      lastName,
    });
  };
  return (
    <div className="container container-fluid">
      <div className="row mt-5">
        <div className="col-md-4">{/* empty */}</div>
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header text-center">Create user here!</h5>
            <div className="card-body">
              <Form>
                <Form.Field>
                  <div className=" mb-2">
                    <label>First Name</label> <br />
                    <input
                      name="fname"
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                    />
                  </div>
                </Form.Field>

                <Form.Field>
                  <div className="mb-2">
                    <label>Last Name</label> <br />
                    <input
                      name="lname"
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                </Form.Field>
                <Button
                  className="btn btn-primary"
                  type="submit"
                  onClick={sendDataToAPI}
                >
                  Submit
                </Button>
              </Form>
            </div>

            <Link to="/read" className="text-center">
              <p>Click here to view user/s list on Read component</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
