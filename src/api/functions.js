import axios from "axios"
import { HOST_URL } from "../assets/constants/api-constants"

const getDataAPI = async (url) => {

  var config = {
    method: 'GET',
    url,
    headers: {}
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    });

}

const loadAllDisplayDiary = async () => {
  let url = HOST_URL

  var config = {
    method: 'GET',
    url,
    headers: {}
  };

  return await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error
    });

}

const loadDiaryById = async (id) => {
  let url = HOST_URL + "diary/id=" + id
  var config = {
    method: 'GET',
    url,
    headers: {}
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    });

}


const loadAllCategory = async () => {
  let url = HOST_URL + "categories"

  var config = {
    method: 'GET',
    url,
    headers: {}
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    });
}

const loadCategoryById = async (id) => {
  let url = HOST_URL + "category/id=" + id

  var config = {
    method: 'GET',
    url,
    headers: {}
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    });

}

const loadDiaryByCategory = async (id) => {
  let url = HOST_URL + "category=" + id

  return await getDataAPI(url);

}

const loadSearchResult = async (keyword) => {
  let url = HOST_URL + "search=" + keyword

  return await getDataAPI(url)
}

const getAccessToken = async (user) => {
  let url = HOST_URL + "user/login"

  var FormData = require('form-data');
  var data = new FormData();
  data.append('username', user.username);
  data.append('password', user.password);

  var config = {
    method: 'POST',
    url,
    data,
  };

  return await axios(config)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    });
}

const loadUserLoginInfo = async (data) => {
  let url = HOST_URL + "user/profile?username=" + data.username
  var config = {
    method: 'GET',
    url,
    headers: {
      'Authorization': 'Bearer ' + data.access_token
    }
  };

  return await axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    });

}

const activeUserByKey = async (key) => {
  let url = HOST_URL + "user/active?code=" + key

  var config = {
    method: 'GET',
    url,
    headers: {}
  };

  return await axios(config)
    .then(function (response) {
      return response.status
    })
    .catch(function (error) {
      return error
    });

}

const registerNewAccount = async (User) => {
  let url = HOST_URL + "user/register"

  var data = User
  
  var config = {
    method: 'POST',
    url,
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  };
  try {
    return await axios(config)
    .then(function (response) {
      return response
    })
   
  } catch (error) {
    if(error.response)
    {
      console.log("Response", error.response)
    }
    else if(error.request)
    {
      console.log("request", error.request)
    }else{
      console.log("Other", error)
    }
  }

}

const signOut = () => {
  localStorage.clear();
}
export {
  loadAllDisplayDiary,
  loadDiaryById,
  loadAllCategory,
  loadCategoryById,
  loadDiaryByCategory,
  loadSearchResult,
  getAccessToken,
  loadUserLoginInfo,
  activeUserByKey,
  signOut,
  registerNewAccount
}