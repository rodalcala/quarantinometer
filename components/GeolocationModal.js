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
          <a onClick={() => navigator.geolocation.getCurrentPosition(setStartDateByLocation)}>
            Yes!
          </a>
          <a>I prefer to input the date manually</a>
        </div>
      </div>
      <style jsx>{`
        .GeolocationModal-container {
          margin: 0 auto;
          width: 90%;
          max-width: 500px;
        }
        .GeolocationModal-buttonsContainer {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default GeolocationModal;
