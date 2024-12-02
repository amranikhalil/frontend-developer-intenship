import './card.css'
export const Charachtercard = ({ character }) => {
  return (
    <div className="character-card"
    >
      <img 
        src={character.image} 
        alt={character.name} 
        className="character-image"
      />
      <div className="character-info">
        <h2>{character.name}</h2>
        <div className='status'
        style={{backgroundColor: character.status=='Dead'? 'red': character.status=='unknown'? 'gray':'green'}}
        >
          {character.status}
          </div>
        <p>Species: {character.species}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>

  )
}
