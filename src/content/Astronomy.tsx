import { useState } from "react";
import Score from "./Score";

const Astronomy = () => {
  const questions = [
    {
      no: 1,
      q: "What is the name of the process by which a massive star collapses under its own gravity and becomes an extremely dense object?",
      choices: [
        {
          value: "Stellar fusion",
          valType: false,
        },
        {
          value: "Black hole evaporation",
          valType: false,
        },
        {
          value: "Neutronization",
          valType: false,
        },
        {
          value: "Supernova",
          valType: true,
        },
      ],
    },
    {
      no: 2,
      q: "Which type of galaxy is characterized by a flat, rotating disk and a central bulge?",
      choices: [
        {
          value: "Elliptical galaxy",
          valType: false,
        },
        {
          value: "Irregular galaxy",
          valType: false,
        },
        {
          value: "Spiral Galaxy",
          valType: true,
        },
        {
          value: "Lenticular galaxy",
          valType: false,
        },
      ],
    },
    {
      no: 3,
      q: "The Great Red Spot, a persistent high-pressure region, is a prominent feature found on which planet?",
      choices: [
        {
          value: "Jupiter",
          valType: true,
        },
        {
          value: "Saturn",
          valType: false,
        },
        {
          value: "Neptune",
          valType: false,
        },
        {
          value: "Mars",
          valType: false,
        },
      ],
    },
    {
      no: 4,
      q: "Which of the following is a result of gravitational lensing?",
      choices: [
        {
          value: "Formation of a binary star system",
          valType: false,
        },
        {
          value: "Occurrence of a meteor shower",
          valType: false,
        },
        {
          value: "Distortion and magnification of distant objects",
          valType: true,
        },
        {
          value: "Generation of solar flares",
          valType: false,
        },
      ],
    },
    {
      no: 5,
      q: 'What is the phenomenon known as the "precession of the equinoxes" caused by?',
      choices: [
        {
          value: "Earth's axial tilt",
          valType: true,
        },
        {
          value: "Gravitational interactions with the Moon",
          valType: false,
        },
        {
          value: "Variations in solar radiation",
          valType: false,
        },
        {
          value: "Earth's elliptical orbit",
          valType: false,
        },
      ],
    },
    {
      no: 6,
      q: 'The event horizon of a black hole refers to:',
      choices: [
        {
          value: "The point where light bends due to gravity",
          valType: false,
        },
        {
          value: "The boundary surrounding a black hole beyond which nothing can escape",
          valType: true,
        },
        {
          value: "The area where intense magnetic fields are generated",
          valType: false,
        },
        {
          value: "The point where a star transitions into a white dwarf",
          valType: false,
        },
      ],
    },
    {
      no: 7,
      q: 'What is the source of energy that powers the Sun and other main-sequence stars?',
      choices: [
        {
          value: "Nuclear fission",
          valType: false,
        },
        {
          value: "Geothermal heat",
          valType: false,
        },
        {
          value: "Hydrogen combustion",
          valType: false,
        },
        {
          value: "Nuclear fusion",
          valType: true,
        },
      ],
    },
    {
      no: 8,
      q: 'Io, Europa, Ganymede, and Callisto are the largest moons of which planet?',
      choices: [
        {
          value: "Saturn",
          valType: false,
        },
        {
          value: "Neptune",
          valType: false,
        },
        {
          value: "Uranus",
          valType: false,
        },
        {
          value: "Jupiter",
          valType: true,
        },
      ],
    },
    {
      no: 9,
      q: 'The concept of "dark matter" is primarily based on its gravitational effects. What makes dark matter difficult to detect?',
      choices: [
        {
          value: "It emits no light or electromagnetic radiation",
          valType: true,
        },
        {
          value: "It only exists in regions outside our galaxy",
          valType: false,
        },
        {
          value: "It is made of antimatter",
          valType: false,
        },
        {
          value: "It only interacts with neutrinos",
          valType: false,
        },
      ],
    },
    {
      no: 10,
      q: 'What is the term for the point in an orbit when a planet or other celestial body is closest to the Sun?',
      choices: [
        {
          value: "Aphelion",
          valType: false,
        },
        {
          value: "Perihelion",
          valType: true,
        },
        {
          value: "Apogee",
          valType: false,
        },
        {
          value: "Perigee",
          valType: false,
        },
      ],
    },
    {
      no: 69,
      q: <></>, // di kasi pwede irekta yung JSX element dito kaya empty tags muna
      choices: [],
    },
  ];

  const upTo = questions.length - 1; // how many items

  const [tumpak, setTumpak] = useState(0);
  const [ligwak, setLigwak] = useState(0);
  const [next, setNext] = useState(1);

  const ansFunc = (ans: boolean, nextno: number) => {
    if (ans == true) {
      // console.log(ans);
      setTumpak(tumpak + 1); // proceed to next page
    } else {
      // console.log(ans);
      setLigwak(ligwak + 1); // proceed to next page
    }
    setNext(nextno + 1);

    // console.log(next);
    if (nextno == upTo) {
      setNext(69);
    }
  };
  

  const filteredQuestions = questions.filter((nextpage) => nextpage.no == next);

  return (
    <>
      <div className="app-box">
        <div className="headline">
          <h1 className="title">Stellar<span id="quiz">Quiz</span></h1>

          <p className="subtitle">
          Your go-to quiz app for all things astronomy! Test your cosmic knowledge with captivating questions on stars, galaxies, and more. Aim for a perfect 10 as you journey through space facts. Whether you're a beginner or a seasoned astronomer, StellarQuiz offers an engaging cosmic challenge!
          </p>
        </div>


        {filteredQuestions.map((q, index) =>
          q.no == 69 ? (
            <div className="qbox" key={index}>
              <Score score={tumpak} upto={upTo} />
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
          <span id="credits">Made with 💜 by Aron Paul Gonzales</span>
          <br />
          <span id="techs">React + TypeScript + Vanilla CSS + Material UI</span>
        </div>
      </div>
    </>
  );
};

export default Astronomy;
