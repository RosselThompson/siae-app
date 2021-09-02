import axios from 'axios';

const accessToken = localStorage.getItem('access_token') || '';
/*eslint no-undef:*/
const baseURL = process.env.REACT_APP_CTLG_URL;

const request = {
  baseURL: baseURL,
  json: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export default axios.create(request);
