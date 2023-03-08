import React, {useState} from 'react';



function App() {
  const [list, addToList] = useState([]);
  const [input, resetInput] = useState([]);


  const addCard = (card) => {
    const newCard = {
      cardId: Math.floor(Math.random() * 1000),
      cardTitle: card,
    };

    // add the card to thwe list
    addToList([...list, newCard]);

    //cleat the input
    resetInput("");
  };



  return (
    <div>
      <h1>This is the Careeration App!</h1>
      <h2>Here you can add your cards</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => resetInput(e.target.value)}
      />
    <button onClick={() => addCard(input)}>ADD</button>
    <ul> {list.map((card) => (
      <li key={card.cardId}>{card.cardTitle}
      </li>
    ))}</ul>
    </div>
  );
}

export default App;
