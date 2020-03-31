import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Results = ({ elapsedDays }) => {
  /** NOTE: Changed the return behavior in order to make the animation work properly  */

  const [elapsedDaysDisplay, setElapsedDaysDisplay] = useState(0);

  const waitingTime =
    elapsedDaysDisplay >= 20 ? 40 : elapsedDaysDisplay >= 10 ? 70 : 120;

  setTimeout(() => {
    if (elapsedDaysDisplay >= elapsedDays) return;
    setElapsedDaysDisplay((prev) => prev + 1);
  }, waitingTime);

  useEffect(() => {
    setElapsedDaysDisplay(0);
  }, [elapsedDays]);

  const elapsedDaysText = elapsedDays === 1 ? ' day' : ' days';

  return (
    <AnimatePresence>
      { elapsedDays && (
        <motion.div
          initial={{ opacity: 0, y: '200px' }}
          animate={{ opacity: 1, y: '0px' }}
          exit={{ opacity: 0, y: '200px' }}
          style={{ width: '100%' }}>
          <div className="container">
            <h3 style={{ margin: 0 }}>You've been in quarantine for</h3>
            <h1 style={{ margin: 0 }}>
              {' '}
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {elapsedDaysDisplay}
              </motion.span>
              {elapsedDaysText}
            </h1>
            <style jsx>{`
              .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                position: absolute;
                transform: translateX(50%);
                left: -50%;
                bottom: -40px;
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Results;
