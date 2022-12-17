import axios from "axios"
import { HOST_URL } from "../assets/constants/api-constants"


const loadAllDisplayDiary = async () => {
    let url = HOST_URL

    var config = {
        method: 'GET',
        url,
        headers: { }
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
    let url = HOST_URL + "diary/id="+id
    var config = {
        method: 'GET',
        url,
        headers: { }
      };
      
     return await axios(config)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        return error
      });
      
}


export {
    loadAllDisplayDiary,
    loadDiaryById
}