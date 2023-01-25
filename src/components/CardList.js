import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

export default function CardList({ cards, player }) {
  // const { setSelectedCard, setFrom, selectedCard } = useGameContext;
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.suit + card.value} player={player} card={card} />
      ))}
    </div>
  );
}
