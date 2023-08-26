import { useState } from "react";
import Score from "./Score";

const Twice = () => {
  const questions = [
    {
      no: 1,
      q: "Who is the leader of twice?",
      choices: [
        {
          value: "Mina",
          valType: false,
        },
        {
          value: "Jihyo",
          valType: true,
        },
        {
          value: "Jeongyeon",
          valType: false,
        },
        {
          value: "Dahyun",
          valType: false,
        },
      ],
    },
    {
      no: 2,
      q: "Who is the kalog in twice?",
      choices: [
        {
          value: "Mina",
          valType: false,
        },
        {
          value: "Jihyo",
          valType: false,
        },
        {
          value: "Jeongyeon",
          valType: false,
        },
        {
          value: "Dahyun",
          valType: true,
        },
      ],
    },
    {
      no: 69,
      q: <></>, // di kasi pwede irekta yung JSX element dito kaya empty tags muna
      choices: [],
    },
  ];

  const [tumpak, setTumpak] = useState(0);
  const [ligwak, setLigwak] = useState(0);
  const [next, setNext] = useState(1);

  const ansFunc = (ans: boolean, nextno: number) => {
    if (ans == true) {
      console.log(ans);
      setTumpak(tumpak + 1);
    } else {
      console.log(ans);
      setLigwak(ligwak + 1);
    }

    setNext(nextno + 1);
    console.log(next);
    if (nextno == 2) {
      setNext(69);
    }
  };

  const filteredQuestions = questions.filter((nextpage) => nextpage.no == next);

  return (
    <>
      <div className="app-box">
        <div className="headline">
          <h1 className="title">Quiz App</h1>
          <br />
          <p className="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eligendi exercitationem adipisci aliquam ratione. Quidem autem
            soluta veritatis quis est error odit, numquam ipsam, molestias,
            itaque libero eveniet fuga odio.
          </p>
        </div>

        {filteredQuestions.map((q, index) =>
          q.no == 69 ? (
            <div className="qbox">
              <Score score={tumpak} />
            </div>
          )
          : (
            <div className="qbox" key={index}>
              <div className="q">{q.q}</div>

              <div className="opt">
                {q.choices.map((opt, index) => (
                  <div
                    role="button"
                    onClick={() => ansFunc(opt.valType, q.no)}
                    key={index}
                  >
                    {opt.value}
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        <br />
        <div className="footline">
          <span id="credits">Made with 💚 by Aron Paul Gonzales</span>
          <br />
          <span id="techs">React + TypeScript + Vanilla CSS + Bootstrap</span>
        </div>
      </div>
    </>
  );
};

export default Twice;
