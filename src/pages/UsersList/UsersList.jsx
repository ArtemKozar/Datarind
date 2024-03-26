import { useEffect, useState } from 'react'

import UserItem from './components/UserItem/UserItem'
import { Link } from 'react-router-dom'

const UsersList = () => {
  const [dataUsers, setDataUsers] = useState()

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setDataUsers(json))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div>UsersList</div>
      {dataUsers?.map((user) => {
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
        )
      })}
    </>
  )
}

export default UsersList
