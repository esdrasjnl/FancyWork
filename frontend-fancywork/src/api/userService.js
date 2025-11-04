import axios from "axios";

const API_URL = "http://localhost:5050/api/users";

export async function getUsers() {
  const { data } = await axios.get(API_URL);
  return data;
}
