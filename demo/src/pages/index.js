import React from 'react';
import { css } from '@emotion/react';
import useDarkMode from 'use-dark-mode';

const Homepage = () => {
  const darkMode = useDarkMode();

  return (
    <div
      css={css`
        text-align: center;
        padding: 15px;
      `}
    >
      <header
        css={css`
          padding-top: 5px;
          padding-bottom: 25px;
        `}
      >
        <h1>Demo Name</h1>
      </header>
      <div
        css={css`
          padding-bottom: 25px;
        `}
      >
        <p>
          Crooked grind goofy footed face plant skate or die 1080 slob air.
          Smith grind shinner slappy coping bearings hang-up. Cess slide Jerry
          Hsu heel flip frontside air fakie out axle betty. Bearings hang-up
          death box bone air pogo lip.
        </p>
      </div>
      <div
        css={css`
          display: flex;
          padding-bottom: 25px;
        `}
      >
        <section>
          <h2>What's new Section</h2>
          <p>
            Kick-nose nose grab goofy footed mini ramp ollie north. Nose-bump
            quarter pipe air finger flip blunt. Crooked grind poseur wax
            freestyle nose.
          </p>
        </section>
        <section>
          <h2>What's next Section</h2>
          <p>
            Gnarly steps launch ramp rip grip lien air. Full-cab vert Pantsman
            hurricane ollie hole deck. Bail hanger Mike Taylor griptape 540
            casper slide.
          </p>
        </section>
      </div>

      <ul
        css={css`
          color: blue;
          list-style: none;
          display: flex;
          justify-content: space-evenly;
          height: 100px;
          text-align: center;
        `}
      >
        <li
          css={css`
            padding: 3px;
            height: 100%;
            width: 20%;
            border-radius: 5px;
            background-color: white;
            box-shadow: ${darkMode.value ? 'none' : 'var( --shadow-1)'};
          `}
        >
          TILE
        </li>
        <li
          css={css`
            padding: 3px;
            height: 100%;
            width: 20%;
            border-radius: 5px;
            background-color: white;
            box-shadow: ${darkMode.value ? 'none' : 'var( --shadow-1)'};
          `}
        >
          TILE
        </li>
        <li
          css={css`
            padding: 3px;
            height: 100%;
            width: 20%;
            border-radius: 5px;
            background-color: white;
            box-shadow: ${darkMode.value ? 'none' : 'var( --shadow-1)'};
          `}
        >
          TILE
        </li>
        <li
          css={css`
            padding: 3px;
            height: 100%;
            width: 20%;
            border-radius: 5px;
            background-color: white;
            box-shadow: ${darkMode.value ? 'none' : 'var( --shadow-1)'};
          `}
        >
          TILE
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
