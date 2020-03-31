import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';

const DateInput = ({ startDate, handleStartDate }) => (
  <div className="container">
    <EnterAnimation>
      <h3 style={{textAlign: "center"}}>When did your quarantine began?</h3>
    </EnterAnimation>
    <EnterAnimation delay={0.7}>
      <DatePicker
        inline
        selected={startDate}
        onChange={(date) => handleStartDate(date)}
        minDate={new Date('Wed Jan 01 2020')}
        maxDate={new Date()}
        showDisabledMonthNavigation
      />
    </EnterAnimation>
    <style jsx>{`
      .container {
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      }
    `}</style>
  </div>
);

const EnterAnimation = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      scale: 1,
      y: '0%',
      opacity: 1,
    }}
    initial={{
      scale: 10,
      y: '-100%',
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
