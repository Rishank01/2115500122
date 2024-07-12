const axios = require('axios');

const getApiClient = () => {
  const instance = axios.create({
    headers: {
      'Authorization': `Bearer ${process.env.SECRET_TOKEN}`
    }
  });

  return instance;
};
module.exports=getApiClient;