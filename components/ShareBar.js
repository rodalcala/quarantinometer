import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';

const ShareBar = ({ comparableEvent, elapsedDays }) => {
  const elapsedDaysText = elapsedDays === 1 ? `${elapsedDays} day` : `${elapsedDays} days`;
  const shareText = `I've been in quarantine for ${elapsedDaysText}! ${comparableEvent}`
  const shareUrl = 'https://quarantinometer.now.sh/';

  return (
    <div>
      <div className="ShareBar-container">
        <FacebookShareButton
          children={<FacebookIcon size={40} borderRadius={'0.2em'} />}
          url={shareUrl}
          quote={shareText}
          hashtag={'#covid19'}
          className={'tuvieja'}
        />
        <WhatsappShareButton
          children={<WhatsappIcon size={40} borderRadius={'0.2em'} />}
          url={shareUrl}
          title={shareText}
        />
        <TwitterShareButton
          children={<TwitterIcon size={40} borderRadius={'0.2em'} />}
          url={shareUrl}
          title={shareText}
          hashtags={['covid19', 'quarantine']}
        />
      </div>
      <style jsx>{`
        .ShareBar-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;
        }
        .tuvieja {
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default ShareBar;
