
const getMatches = query =>
    new Promise((resolve, reject) =>
        fetch('https://m96ru-pronos-api.vercel.app/api/matches')
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    )

export default getMatches