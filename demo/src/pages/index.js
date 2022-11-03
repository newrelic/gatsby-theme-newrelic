import React from 'react';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '15px' }}>
      <header style={{ paddingTop: '5px', paddingBottom: '20px' }}>
        <h1>Demo Name</h1>
      </header>
      <div style={{ paddingBottom: '25px' }}>
        <p>
          Crooked grind goofy footed face plant skate or die 1080 slob air.
          Smith grind shinner slappy coping bearings hang-up. Cess slide Jerry
          Hsu heel flip frontside air fakie out axle betty. Bearings hang-up
          death box bone air pogo lip.
        </p>
      </div>
      <div style={{ display: 'flex', paddingBottom: '25px' }}>
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
        style={{
          color: 'blue',
          listStyle: 'none',
          border: '1px solid red',
          display: 'flex',
          justifyContent: 'space-evenly',
          height: '100px',
          margin: '0px',
          padding: '0px',
          textAlign: 'center',
        }}
      >
        <li
          style={{
            padding: '3px',
            height: '100%',
            width: '25%',
            border: '1px solid white',
          }}
        >
          TILE
        </li>
        <li
          style={{
            padding: '3px',
            height: '100%',
            width: '25%',
            border: '1px solid white',
          }}
        >
          TILE
        </li>
        <li
          style={{
            padding: '3px',
            height: '100%',
            width: '25%',
            border: '1px solid white',
          }}
        >
          TILE
        </li>
        <li
          style={{
            padding: '3px',
            height: '100%',
            width: '25%',
            border: '1px solid white',
          }}
        >
          TILE
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
