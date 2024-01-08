import React, {Fragment} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './UserPanel.styles.scss';

const UserPanel = ({
  user: {_id, username, views},
}) => {
  return (
    <Fragment>
      <div className='user-panel-info s-card bs-sm h:bs-md fc-black-500'>
        <div className='user-gravatar'>
          <Link to={`/users/${_id}`}>
            <div className='logo-wrapper'>
              
            </div>
          </Link>
        </div>
        <div className='user-details'>
          <Link className='fc-blue-600' to={`/users/${_id}`}>
            {username}
          </Link>
          <span className='item'>            
            <span className='count' style={{fontWeight: '400'}}>
             
            </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

UserPanel.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(null)(UserPanel);
