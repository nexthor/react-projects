import { useEffect, useState } from "react";
import Character from "./Character";

function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setLoading(false);
            });
    }, [characters.length]);

    return (
        <div>
            <h2>Characters</h2>
            {
                loading ? 
                    <p>Loading...</p> : characters.map(character => (
                    <Character key={character.id} {...character} />
                ))
            }
        </div>
    );        
}

export default List;