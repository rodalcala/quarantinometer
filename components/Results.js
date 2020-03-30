const Results = ({ elapsedDays }) => {
  /** NOTE: In case the user didn't submit a starting date, don't render the component */
  if (!elapsedDays) return null;

  const elapsedDaysText = elapsedDays + (elapsedDays === 1 ? ' day' : ' days');

  return (
    <div className='container'>
      <h3>You've been in quarantine for</h3>
      <h1>{ elapsedDaysText }</h1>
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
  )
};

export default Results;
