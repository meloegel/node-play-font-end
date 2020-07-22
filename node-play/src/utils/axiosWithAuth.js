import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            authorization: token,
        },
        baseURL: "https://cors-anywhere.herokuapp.com/https://node-play.herokuapp.com/",
    });
};
