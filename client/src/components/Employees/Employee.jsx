import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as actions from '../../redux/actions/employees';

const Employee = ({employee, deleteEmployee}) => {
  const {_id, name, surname, sex, position, salary, date} = employee;
  return (
    <tr className="text-center">
      <th>{name}</th>
      <td>{surname}</td>
      <td>{sex}</td>
      <td>{position}</td>
      <td>{salary}</td>
      <td>{date}</td>
      <td>
        <Link to={`/employees/${_id}`}>
          <button type="button" className="btn btn-warning">
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteEmployee(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Employee.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    sex: PropTypes.string,
    position: PropTypes.string,
    salary: PropTypes.number,
    date: PropTypes.node,
  }).isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({deleteEmployee: id => dispatch(actions.deleteEmployee(id))}),
)(Employee);
