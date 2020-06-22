import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ClearUsers = (props) => {
  const clearUsers = () => {
    props.clear();
  };
  return (
    <Fragment>
      <button onClick={clearUsers} className="btn btn-light btn-block">
        Clear
      </button>
    </Fragment>
  );
};

ClearUsers.propTypes = {
  clear: PropTypes.func.isRequired,
};

export default ClearUsers;
