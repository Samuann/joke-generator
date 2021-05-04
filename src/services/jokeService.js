import axios from 'axios';

const baseUrl = 'https://v2.jokeapi.dev';

const readJokeInfo = async () => {
    const response = await axios.get(`${baseUrl}/info`);
    return response.data;
};

const getJokeCategoryList = async (category) => {
    const response = await axios.get(`${baseUrl}/joke/${category}?lang=en&safe-mode&amount=10`);
    return response.data;
};

const getJokeSearched = async(searchString) => {
    const response = await axios.get(`${baseUrl}/joke/Any?lang=en&safe-mode&amount=10&contains=${searchString}`);
    return response.data;
}

const jokeService = {
    readJokeInfo,
    getJokeCategoryList,
    getJokeSearched
}

export default jokeService;