import DatePicker from 'react-datepicker';

const DateInput = ({ startDate, setStartDate }) => (
  <div className='container'>
    <h3>When did your quarantine began?</h3>
    <DatePicker
      inline
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date('Wed Jan 01 2020')}
      maxDate={new Date()}
      showDisabledMonthNavigation
    />
    <style jsx>{`
      .container {
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default DateInput;
