import axios from "axios";

  const api = axios.create({
	baseURL:"https://flight-radar1.p.rapidapi.com",
	 headers: {
    "x-rapidapi-key":"9ea5f9b309msh4569053afcdcd1bp184bafjsn2129e772327e",
    "x-rapidapi-host":"flight-radar1.p.rapidapi.com",
  },
  });

  export default api;