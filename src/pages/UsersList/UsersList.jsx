import { useEffect, useState } from "react";

import UserItem from "./components/UserItem/UserItem";
import { Link } from "react-router-dom";
import Parse from "parse/dist/parse.min";

const UsersList = () => {
  const [dataUsers, setDataUsers] = useState();
  const [dataUsers1, setDataUsers1] = useState();

  const app_id = process.env.REACT_APP_PARSE_APP_ID;
  const host_url = process.env.REACT_APP_PARSE_HOST_URL;
  const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
  const master_key = process.env.REACT_APP_PARSE_MASTER_KEY;

  useEffect(() => {
    Parse.serverURL = host_url;
    Parse.initialize(app_id, javascript_key, master_key);
    (async () => {
      const Employees = Parse.Object.extend("Employees");
      const query = new Parse.Query(Employees);
      let employees = [];

      try {
        const results = await query.find();
        setDataUsers(results);
        for (const object of results) {
          const employee = {
            Name: object.get("Name"),
            LastName: object.get("LastName"),
            Birthday: object.get("Birthday"),
            Email: object.get("Email"),
            Position: object.get("Position"),
            PlanedHours: object.get("PlanedHours"),
            ReportedHours: object.get("ReportedHours"),
          };
          // const Name = object.get("Name");
          // const LastName = object.get("LastName");
          // const Birthday = object.get("Birthday");
          // const Email = object.get("Email");
          // const Position = object.get("Position");
          // const PlanedHours = object.get("PlanedHours");
          // const ReportedHours = object.get("ReportedHours");
          // console.log(Email);
          // console.log(PlanedHours);
          // console.log(ReportedHours);
          // console.log(Position);
          // console.log(Name);
          // console.log(LastName);
          // console.log(Birthday);
          // console.log(object.id);
          employees.push(employee);
        }
      } catch (error) {
        console.error("Error while fetching Employees", error);
      }
      console.log(employees);
    })();
  }, []);

  console.log(dataUsers1);

  return (
    <>
      <Link to={"/createuser"}>Add user</Link>
      <div>UsersList</div>
      {dataUsers?.map((object) => {
        return (
          <Link to={`/${object.id}`}>
            <UserItem
              key={object.id}
              name={object.get("Name")}
              phone={object.get("Phone")}
              email={object.get("Email")}
              id={object.id}
              // address={user.address}
            />
          </Link>
        );
      })}
      {/* {dataUsers?.map((user) => {
        return (
          <Link to={`/${user.id}`}>
            <UserItem
              key={user.id}
              name={user.name}
              phone={user.phone}
              email={user.email}
              id={user.id}
              address={user.address}
            />
          </Link>
        );
      })} */}
    </>
  );
};

export default UsersList;
