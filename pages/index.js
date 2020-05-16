import Head from 'next/head';
import { useEffect, useState } from 'react';
import { differenceInCalendarDays, formatISO } from 'date-fns';
import { Modal } from 'react-responsive-modal';

import DateInput from '../components/DateInput';
import Results from '../components/Results';
import GeolocationModal from '../components/GeolocationModal';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const handleStartDate = (startDate) => {
    localStorage.setItem('startDate', formatISO(startDate));
    setStartDate(startDate);
  };
  const elapsedDays = differenceInCalendarDays(new Date(), startDate);

  useEffect(() => {
    /* NOTE: Since we use SSR, localStorage is not available outside of useEffect */
    if (localStorage.getItem('startDate')) {
      setStartDate(new Date(localStorage.getItem('startDate')));
    }
    /* NOTE: If we haven't asked for geolocation permissions, open the modal and record it */
    if (!localStorage.getItem('locationAsked') && 'geolocation' in navigator) {
      setLocationModalOpen(true);
      localStorage.setItem('locationAsked', true);
    }
  }, []);

  return (
    <div className="container">
      <main>
        <Modal showCloseIcon={false} open={locationModalOpen} onClose={() => setLocationModalOpen(false)} center>
          <GeolocationModal setStartDate={handleStartDate} setLocationModalOpen={setLocationModalOpen} />
        </Modal>
        <DateInput startDate={startDate} handleStartDate={handleStartDate} />
        <Results elapsedDays={elapsedDays} />
      </main>

      <footer>
        {/* TODO: Improve emojis accessibility */}
        With 💞 from 🏡
      </footer>

      <style jsx>{`
        .container {
          min-height: calc(100vh - 50px);
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        footer {
          position: absolute;
          bottom: 0;
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
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
