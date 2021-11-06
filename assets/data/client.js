import axios from 'axios';
import baseURL from './../common/baseUrl';

// export default axios.create({baseURL:'http://10.0.3.2:3000'});

export default axios.create({baseURL: `${baseURL}users`});
