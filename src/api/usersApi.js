import axios from 'axios';

import {usersData as _usersData, profileData as _profileData} from './urls';

export const usersData = () => {
  const value = axios.get(_usersData);
  return value;
};

export const profileData = (id) => {
  return axios.get(_profileData.replace('{id}', id));
};