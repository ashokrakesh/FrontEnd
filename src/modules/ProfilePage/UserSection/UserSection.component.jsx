import React from "react";

import AvatarCard from "./AvatarCard/AvatarCard.component";
import ContentCard from "./ContentCard/ContentCard.component";

import './UserSection.styles.scss';

const UserSection = ({ user }) => (
  <div className='grid'>
    <AvatarCard
      id={user._id}
      views={user.views}
    />
  </div>
)

export default UserSection;