import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';

import comparableEvents from '../assets/comparableEvents.json';

const Results = ({ elapsedDays }) => {
  /* NOTE: Used to display the elapses day starting from 0 */
  const [elapsedDaysDisplay, setElapsedDaysDisplay] = useState(0);

  /* NOTE: The waiting time to increase the elapsedDaysDisplay gets smaller as it gets closer to the actual elapsedDays value */
  const waitingTime =
    elapsedDaysDisplay >= 20 ? 120 : elapsedDaysDisplay >= 10 ? 70 : 40;

  /* NOTE: Increase the elapsedDaysDisplay */
  setTimeout(() => {
    if (elapsedDaysDisplay >= elapsedDays) return;
    setElapsedDaysDisplay((prev) => prev + 1);
  }, waitingTime);

  /* NOTE: If the actual elapsedDays changes, set the display back to 0 and stop the confetti animation */
  useEffect(() => {
    setElapsedDaysDisplay(0);
    confettiPromise.current && confetti.reset();
  }, [elapsedDays]);

  const elapsedDaysText = elapsedDays === 1 ? ' day' : ' days';

  const [nearestEvent, setNearestEvent] = useState();
  useEffect(() => {
    setNearestEvent(Object.keys(comparableEvents).reduce(
      /* NOTE: Find the nearest event on the array that doesn't exceed the amount of elapsedDays */
      (prev, curr) => ((Math.abs(curr - elapsedDays) < Math.abs(prev - elapsedDays)) && curr < elapsedDays) ? curr : prev
    ));
  }, [setNearestEvent, elapsedDays]);

  const confettiPromise = useRef(null);
  const launchConfetti = () => {
    /* NOTE: If the elapsedDaysDisplay as reached its goal, launch confetti and return true so the comparable event can be rendered */
    if (elapsedDaysDisplay >= elapsedDays) {
      confettiPromise.current = confetti({ origin: { x: 0.5, y: 0.7 } });
      return true;
    }
  };

  return (
    <AnimatePresence>
      { elapsedDays && (
        <motion.div
          initial={{ opacity: 0, y: '200px' }}
          animate={{ opacity: 1, y: '0px' }}
          exit={{ opacity: 0, y: '200px' }}
          style={{ width: '100%' }}>
          <div className="Results-container">
            <h3 style={{ margin: 0 }}>You've been in quarantine for</h3>
            <h1 style={{ margin: 0 }}>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {elapsedDaysDisplay <= elapsedDays ? elapsedDaysDisplay : elapsedDays}
              </motion.span>
              {elapsedDaysText}
            </h1>
            <h3 className="Results-comparableEventsText">{launchConfetti() && comparableEvents[nearestEvent]}</h3>
            <style jsx>{`
              .Results-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                position: absolute;
                transform: translateX(50%);
                left: -50%;
                top: -40px;
              }
              .Results-comparableEventsText {
                margin: 0;
                margin-top: 15px;
                text-align: center;
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Results;
