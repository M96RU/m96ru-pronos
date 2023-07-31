const useLocalhost = false;
const localhost = 'http://localhost:5000';
const render = 'https://m96ru-pronos-api.onrender.com';

const getUrl = isLocal => {
    if (isLocal) {
        return localhost;
    }
    return render;
}

const matchesUrl = getUrl(useLocalhost) + '/api/matches';
const betsUrl = getUrl(useLocalhost) + '/api/bets';

const getMatches = (userId) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (userId) {
        headers['user-id']= userId
    }
    return new Promise((resolve, reject) =>
        fetch(matchesUrl, {
            method: 'GET',
            headers
        })
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    )
}

const sendBet = (userId, match, choice) => {
    const betCreationBody = {
        match_id: match.id,
        choice: choice,
        price: match[choice]
    }
    return new Promise((resolve, reject) =>
        fetch(betsUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'user-id': userId
            },
            body: JSON.stringify(betCreationBody)
        })
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    )
}

export {getMatches, sendBet}