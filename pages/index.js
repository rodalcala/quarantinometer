import Head from 'next/head';
import { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';

import DateInput from '../components/DateInput';
import Results from '../components/Results';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const elapsedDays = differenceInCalendarDays(new Date(), startDate);

  return (
    <div className='container'>
      <Head>
        <title>quarantinometer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <DateInput startDate={startDate} setStartDate={setStartDate} />
        <Results elapsedDays={elapsedDays} />
      </main>

      <footer>
        {/* TODO: Improve emojis accessibility */}
        With 💞 from 🏡
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
};

export default Home;
