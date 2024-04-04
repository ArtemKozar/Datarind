import React from "react";
import PropTypes from "prop-types";

import styles from "./UserItem.module.scss";

const UserItem = ({ name, phone, email, id }) => {
  return (
    <div className={styles.userBlock}>
      <div>{name}</div>
      <div>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
      <div>Working hours - {Math.round(Math.random() * 100)}</div>
      <div>{new Date().toDateString()}</div>
    </div>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string,
  address: PropTypes.object,
};

UserItem.defaultProps = {
  id: "",
  address: {},
};

export default UserItem;
