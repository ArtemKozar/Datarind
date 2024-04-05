import { useEffect, useState } from "react";

import UserItem from "./components/UserItem/UserItem";
import { Link } from "react-router-dom";
import Parse from "parse/dist/parse.min";
import { fetchUsers } from "../../redux/getUsers";

const UsersList = () => {
  const [dataUsers, setDataUsers] = useState();

  // const app_id = process.env.REACT_APP_PARSE_APP_ID
  // const host_url = process.env.REACT_APP_PARSE_HOST_URL
  // const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
  // const master_key = process.env.REACT_APP_PARSE_MASTER_KEY

  // const getEmployee = (object) => {
  //   const employee = {}
  //   const keyValues = [
  //     'Name',
  //     'LastName',
  //     'Birthday',
  //     'Email',
  //     'Position',
  //     'PlanedHours',
  //     'ReportedHours',
  //   ]
  //   keyValues.forEach((key) => {
  //     employee[key] = object.get(key)
  //   })
  //   return employee
  // }

  useEffect(() => {
    fetchUsers().then((result) => setDataUsers(result));
  }, []);

  console.log(dataUsers);

  return (
    <>
      <Link to={"/createuser"}>Add user</Link>
      <div>UsersList</div>
      {dataUsers?.map((user) => {
        console.log(user.id);
        return (
          <Link to={`/${user.id}`}>
            <UserItem
              key={user.id}
              name={user.Name}
              lastName={user.LastName}
              email={user.Email}
              phone={user.Phone}
              id={user.id}
              address={user.Address}
            />
          </Link>
        );
      })}
    </>
  );
};

export default UsersList;
