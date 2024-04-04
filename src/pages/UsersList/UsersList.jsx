import { useEffect, useState } from 'react'

import UserItem from './components/UserItem/UserItem'
import { Link } from 'react-router-dom'
import Parse from 'parse/dist/parse.min'
import { fetchUsers } from '../../redux/getUsers'

const UsersList = () => {
  const [dataUsers, setDataUsers] = useState()
  const [dataUsers1, setDataUsers1] = useState()

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
    fetchUsers().then((res) => console.log(res))
  }, [])

  console.log(dataUsers1)

  return (
    <>
      <Link to={'/createuser'}>Add user</Link>
      <div>UsersList</div>
      {dataUsers?.map((object) => {
        return (
          <Link to={`/${object.id}`}>
            <UserItem
              key={object.id}
              name={object.get('Name')}
              phone={object.get('Phone')}
              email={object.get('Email')}
              id={object.id}
              // address={user.address}
            />
          </Link>
        )
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
  )
}

export default UsersList
