
const url_render = 'https://m96ru-pronos-api.onrender.com/api/matches';
// const url_localhost = 'http://localhost:5000/api/matches';

const getMatches = query =>
    new Promise((resolve, reject) =>
        fetch(url_render)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    )

export default getMatches