import { useState } from "react";
import "./JokeContent.css";
import { CONTENT } from "./setting";

const JokeContent = () => {
  const voteCookie = document.cookie;
  const jokeCustom =
    voteCookie.includes("|") &&
    voteCookie.split("|").reduce((result, value) => {
      if (value.includes(":")) result.push(value.split(":")[0]);
      return result;
    }, []);
  const [joke, setJoke] = useState(
    (jokeCustom && Math.max(...jokeCustom) + 1) || 1
  );

  return (
    <article className="jokecontent_container ">
      <section className="jk_content_container container">
        <section className="jk_content">
          {CONTENT[`joke${joke}`] ||
            "That's all the jokes for today! Come back another day!"}
        </section>
      </section>
      <span className="divide"></span>
      {CONTENT[`joke${joke}`] && (
        <footer className="jk_button">
          <button
            style={{ backgroundColor: "#2c7edb" }}
            onClick={() => {
              setJoke(joke + 1);
              document.cookie = document.cookie + `|${joke}:true`;
            }}
          >
            This is Funny!
          </button>
          <button
            style={{ backgroundColor: "#29b363" }}
            onClick={() => {
              setJoke(joke + 1);
              document.cookie = document.cookie + `|${joke}:false`;
            }}
          >
            This is not funny.
          </button>
        </footer>
      )}
    </article>
  );
};
export default JokeContent;
