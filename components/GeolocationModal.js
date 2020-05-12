import { parse } from 'date-fns';

import lockdownDatesByCountry from '../assets/lockdownDates.json';

const GeolocationModal = ({ setStartDate, setLocationModalOpen }) => {
  const setStartDateByLocation = ({ coords }) => {
    const { latitude: lat, longitude: lon } = coords;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=0`)
      .then(res => res.json())
      .then(res => {
        const { display_name: country } = res;
        /* NOTE: Get starting date by filtering the array of countries */
        const { startDate } = lockdownDatesByCountry.find(el => el.country === country);
        setStartDate(parse(startDate, 'yyyy-MM-dd', new Date()));
        setLocationModalOpen(false);
      })
  }

  return (
    <div>
      <div className="GeolocationModal-container">
        <h3>Would you like to share your location so we can determine when did your quarantine begin?</h3>
        <div className="GeolocationModal-buttonsContainer">
          <a className="GeolocationModal-yesButton" onClick={() => navigator.geolocation.getCurrentPosition(setStartDateByLocation)}>
            Yes!
          </a>
          <a className="GeolocationModal-cancelButton" onClick={() => setLocationModalOpen(false)}>
            I prefer to input the date manually
          </a>
        </div>
      </div>
      <style jsx>{`
        .GeolocationModal-container {
          margin: 0 auto;
          margin-bottom: 1em;
          width: 90%;
          max-width: 500px;
        }
        .GeolocationModal-buttonsContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .GeolocationModal-yesButton {
          padding: 0.2em 0.4em;
          border-radius: 0.3em;
          font-size: 18px;
          color: #FFF;
          background-color: #216BA5;
          cursor: pointer;
        }
        .GeolocationModal-yesButton:hover {
          background-color: #1D5D90;
        }
        .GeolocationModal-yesButton:active {
          transform: translateY(1px);
          filter: saturate(150%);
        }
        .GeolocationModal-cancelButton {
          font-size: 14px;
          padding-top: 0.4em;
          cursor: pointer;
        }
        .GeolocationModal-cancelButton:hover {
          text-decoration: underline;
        }
        .GeolocationModal-cancelButton:active {
          transform: translateY(1px);
          filter: saturate(150%);
        }
      `}</style>
    </div>
  );
}

export default GeolocationModal;
