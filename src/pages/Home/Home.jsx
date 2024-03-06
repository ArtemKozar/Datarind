import React from 'react'
import Parse from "parse/dist/parse.min"

import styles from './Home.module.scss'

const Home = () => {

    Parse.serverURL = 'https://parseapi.back4app.com';
    Parse.initialize('O0jzbt32Ax63tVUuBNF4MhiqIOsXHajyVYbfc18I', 'YFgtM3aq5g4mLZhs4iyVlJ6Oka73Cts5aQtubgCi', 'wUIvpjuvaSHQBFqhY8VM3U6QEIp11mnRpxj4fuHc');

    (async () => {
        const Employees = Parse.Object.extend('Employees');
        const query = new Parse.Query(Employees);
        try {
            const results = await query.find();
            for (const object of results) {
                // Access the Parse Object attributes using the .GET method
                const Name = object.get('Name')
                const LastName = object.get('LastName')
                console.log(Name);
                console.log(LastName);
                console.log(object.attributes.Name, '- name');
            }
        } catch (error) {
            console.error('Error while fetching Employees', error);
        }
    })();

  return (
    <>
      <div>Home </div>
      <div>Home </div>
      <div>Home </div>
      <div>Home </div>
    </>
  )
}

export default Home
