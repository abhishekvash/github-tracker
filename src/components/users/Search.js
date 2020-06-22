import React from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const search = (e) => {
    e.preventDefault();
    const textField = e.target.children[0];
    if (textField.value === "") {
      props.showAlert();
    } else {
      props.searchUsers(textField.value);
      textField.value = "";
    }
  };
  return (
    <div>
      <form onSubmit={search} className="form">
        <input type="text" name="text" placeholder="Search Users" autoComplete="off" />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Search;
