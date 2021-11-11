import axios from 'axios';
import React from 'react';
import baseURL from '../../assets/common/baseUrl';

const useCategories = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(async () => {
    await axios
      .get(`${baseURL}categories`)
      .then(function (response) {
        // handle success
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return {categories};
};

export default useCategories;
