import React from 'react'
import Card from './Card'

const CardsList = ( { cards } ) => (
    <div>
        {cards.map(card => 
            <Card key={card.id}
                  {...card}/>)}
    </div>
)

export default CardsList