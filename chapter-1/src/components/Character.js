function Character(character) {
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <img src={character.image} 
                    alt={character.name}
                    className="card-img-top" 
                    width={300} />
                <div className="card-body">
                    <h3 className="text-truncate">{character.name}</h3>
                    <p className="text-truncate">Origin: {character.origin && character.origin.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Character;