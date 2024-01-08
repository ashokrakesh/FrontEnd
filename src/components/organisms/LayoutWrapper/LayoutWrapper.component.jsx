import React, {Fragment} from 'react';

import SideBar from './SideBar/SideBar.component';
import RightSideBar from './RightSideBar/RightSideBar.component';

const LayoutWrapper = ({ children }) => {
  return (
    <Fragment>
      <div className='page'>
        <SideBar />
        <div id='content'>
          {children}
          <RightSideBar />
        </div>
      </div>
    </Fragment>
  );
};

export default LayoutWrapper;
