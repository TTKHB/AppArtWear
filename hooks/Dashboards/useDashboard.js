import axios from 'axios';
import React from 'react';
import baseURL from '../../assets/common/baseUrl';

const useDashboard = () => {
  const [dashboard, setDashBoard] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`${baseURL}dashboard`)
      .then(function (response) {
        // handle success
        setDashBoard(response.data);
     
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {dashboard};
};

export default useDashboard;
