import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

import styles from './AddUser.module.scss'

const AddUser = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  console.log(selectedDate)
  return (
    <div>
      <form action="">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Birthday:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy" // Формат дати, який ви хочете використовувати
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddUser
