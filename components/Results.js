const Results = ({ elapsedDays }) => (
  <div className='container'>
    <h3>You've been in quarantine for</h3>
    <h1>{ elapsedDays + ' days' }</h1>
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

export default Results;
