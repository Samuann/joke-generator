import axios from 'axios';

const baseUrl = 'https://v2.jokeapi.dev';

const readJokeInfo = async () => {
    const response = await axios.get(`${baseUrl}/info`);
    return response.data;
}

const getJokeCategoryList = async (category) => {
    const response = await axios.get(`${baseUrl}/joke/${category}?lang=en&safe-mode&amount=10`);
    return response.data;
}

export default {
    readJokeInfo,
    getJokeCategoryList
}