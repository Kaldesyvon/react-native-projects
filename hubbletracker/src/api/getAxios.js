import axios from 'axios';

const getAxios = () => {
    return axios.create({
        baseURL: 'https://api.nasa.gov/planetary/apod?api_key=zagIQUrOh1phJr6NEDIF9uv6BPPTn9QPTO3ebgsO',
    });
};

export default getAxios;
