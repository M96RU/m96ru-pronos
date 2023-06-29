import {useEffect, useState} from 'react';

function Matches() {
    const [name, setName] = useState([]);

    useEffect(
        () => {
            names()
        }, []
    )

    const names = async () => {
        const response = await fetch('https://m96ru-pronos-api.vercel.app/api/matches');
        setName(await response.json())
    }

    return (<div>
            {
                name.map((data) => {
                    return (
                        <p key={data.id}>{data.home_team} - {data.away_team}</p>
                    )
                })
            }
    </div>);
}

export default Matches;