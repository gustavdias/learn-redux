import axios from "axios";
//!
const instance = axios.create({
  baseURL:
    "https://user-info-table-form-auth-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
