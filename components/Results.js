import { AnimatePresence, motion } from 'framer-motion';

const Results = ({ elapsedDays }) => {
  /** NOTE: Changed the return behavior in order to make the animation work properly  */

  const elapsedDaysText = elapsedDays + (elapsedDays === 1 ? ' day' : ' days');

  return (
    <AnimatePresence>
      {elapsedDays && (
        <motion.div
          initial={{ opacity: 0, y: "200px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "200px" }}
          style={{ width: '100%', background: 'red' }}>
          <div className="container">
            <h3>You've been in quarantine for</h3>
            <h1>{elapsedDaysText}</h1>
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
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Results;
