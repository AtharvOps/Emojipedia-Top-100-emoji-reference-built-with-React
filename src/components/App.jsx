import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entery
      key={emojiTerm.id}
      id={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      discription={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
