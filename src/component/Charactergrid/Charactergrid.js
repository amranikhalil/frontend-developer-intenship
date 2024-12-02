import React, { useState } from 'react'
import {Charachtercard} from '../Charactercard/Charachtercard'
import './charactergrid.css'

export const Charactergrid = ({characters}) => {
  const [characterselected, setCharacterselected] = useState(null)
  
  return (
    <div className="character-container">
      <div className="character-grid-container">
        <div className="character-grid">
          {characters.length > 0 ? (
            characters.map((character) => (
              <div
                key={character.id} 
                onClick={() => setCharacterselected(character)}
                className={`character-card-wrapper ${characterselected?.id === character.id ? 'selected' : ''}`}
              >
                <Charachtercard 
                  character={character}
                />
              </div>
            ))
          ) : (
            <div className="no-characters">
              No characters found
            </div>
          )}
        </div>
      </div>
      
      {characterselected && (
        <div className="character-details-container">
          <div className="character-details">
            <h2>{characterselected?.name}</h2>
            <img src={characterselected?.image} alt={characterselected.name} />
            <div className="statu"
                style={{backgroundColor: characterselected.status=='Dead'? 'red': characterselected.status=='unknown'? 'gray':'green',
                    position:'relative',
                    padding:"5px"
                }}
            > 
              {characterselected?.status}
              </div>
            <p><strong>Gender:</strong> {characterselected?.gender}</p>
            <p><strong>Origin:</strong> {characterselected.origin?.name}</p>
            <p><strong> Location:</strong> {characterselected.location?.name}</p>
            <p><strong> Species:</strong> {characterselected.species}</p>
          </div>
        </div>
      )}
    </div>
  )
}
