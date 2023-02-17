import React, {useState} from 'react';
import './App.css';
import './styles.css';


var emojiDictionary = {
"😊" : "Smiling",
"😂" : "Face with Tears of Joy",
"🫶 " : "Heart Hands",
"🥹" : "Tears",
"❤️" : "Heart",
"😉 " : "Winking Face",
"🔥" : "Fire",
"🫠" : "Melting Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

function App() {

  var [meaning, setMeaning]= useState("")

  function emojiInputHandler(event){
  var userInput = event.target.value;
  var meaning = emojiDictionary[userInput];

if(meaning === undefined){
  meaning = "We don't have it in our database";
}
  setMeaning(meaning)
  }

  function emojiclickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning)
  }
  
  return (

 <>

 <div className="container">



<h1>Emoji Detector</h1>

<input onChange = {emojiInputHandler}/>

<h2> 👉  {meaning}</h2>

<h3>
  emoji we know
</h3>
{emojisWeKnow.map(function (emoji) {
    return (

    <span 
    onClick = {() =>emojiclickHandler(emoji)}
    style = {{fontSize: "2rem", padding: "0.5rem 0.5rem", cursor: "pointer"}} key = {emoji}>
      
      {emoji} </span>

     );
  })}

</div>
 </>
  );
}

export default App;
