import React from "react";
import ReactDom from "react-dom";
import MainApp from "./MainApp.jsx";

function App() {
  const [fname, setFName] = React.useState("");
  const [sname, setSName] = React.useState("");

  function handleFChange(event) {
    setFName(event.target.value);
  }

  function handleSChange(event) {
    setSName(event.target.value);
  }

  function handleClick()
  {
    ReactDom.render(
        <MainApp firstName={fname} secondName={sname}/>,
        document.getElementById("root")
      );
  }
  return (
    <div className="container">
      <h1>Hello {fname} {sname}!</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleFChange}
          type="text"
          placeholder="What's your First name?"
          value={fname}
        />
        <input
          onChange={handleSChange}
          type="text"
          placeholder="What's your Second name?"
          value={sname}
        />
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;