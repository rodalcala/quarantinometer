import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';

const DateInput = ({ startDate, handleStartDate }) => (
  <EnterAnimation>
    <div className="DateInput-container">
      <h3>When did your quarantine begin?</h3>
      <DatePicker
        inline
        selected={startDate}
        onChange={(date) => handleStartDate(date)}
        minDate={new Date('Wed Jan 01 2020')}
        maxDate={new Date()}
        showDisabledMonthNavigation
      />
    </div>
    <style jsx>{`
      .DateInput-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      }
    `}</style>
  </EnterAnimation>
);

const EnterAnimation = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      opacity: 1,
    }}
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 0.5,
      delay,
    }}>
    {' '}
    {children}{' '}
  </motion.div>
);

export default DateInput;
