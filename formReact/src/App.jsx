import { useState } from "react";
import "./App.css";

function App() {
  const [emailValue, setEmailValue] = useState("");
  const { nameValue, setNameValue } = useState("");
  const [aboutValue, setAboutValue] = useState("");
  const [hobbyValue, setHobbyValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValue === "") {
      setIsError(!isError);
    }
    if (emailValue.includes("@") && emailValue.includes(".com")) {
      setIsError(true);
    }
    if (aboutValue === "") {
      setIsError(true);
    }
    if (hobbyValue === "") {
      setIsError(true);
    }
    if (majorValue === "") {
      setIsError(true);
    }
    if (nameValue) {
      setIsError(false);
    }
    if (emailValue) {
      setIsError(false);
    }
    if (aboutValue) {
      setIsError(false);
    }
    if (hobbyValue) {
      setIsError(false);
    }
    if (majorValue) {
      setIsError(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor=" name">
          Name
          <input onChange={(e) => setNameValue(e.target.value)} type="text" />
          {isError && <p className="error">Please enter a name</p>}
        </label>
        <label htmlFor="email">
          Email
          <input onChange={(e) => setEmailValue(e.target.value)} type="text" />
          {isError && <p className="error">Please enter a valid email</p>}
        </label>
        <label onChange={(e) => setAboutValue(e.target.value)} htmlFor="about">
          About
          <input type="text" />
          {isError && <p className="error">Please enter a description</p>}
        </label>
        <div>
          <label>Hobbies</label>
          <br />
          <input type="checkbox" id="surfing" name="hobby" value="surfing" />
          <label htmlFor="surfing">Surfing</label>

          <input type="checkbox" id="running" name="hobby" value="running" />
          <label htmlFor="running">Running</label>

          <input type="checkbox" id="biking" name="hobby" value="biking" />
          <label htmlFor="biking">Biking</label>

          <input type="checkbox" id="paddling" name="hobby" value="paddling" />
          <label htmlFor="paddling">Paddling</label>
          {isError && <p className="error">Please select at least one hobby</p>}
        </div>

        <br />

        <div>
          <label>Major</label>
          <br />
          <input type="radio" id="physics" name="major" value="physics" />
          <label htmlFor="physics">Physics</label>

          <input type="radio" id="math" name="major" value="math" />
          <label htmlFor="math">Math</label>

          <input type="radio" id="chemistry" name="major" value="chemistry" />
          <label htmlFor="chemistry">Chemistry</label>

          <input type="radio" id="cs" name="major" value="cs" />
          <label htmlFor="cs">Computer Science</label>
          {isError && <p className="error">Please select a one major</p>}
        </div>
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
