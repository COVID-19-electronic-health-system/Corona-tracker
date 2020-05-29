import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  RedditIcon,
} from 'react-share';

const ShareButtons = () => {
  const url = 'https://coronatracker.squarespace.com';

  return (
    <>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </>
  );
};

export default ShareButtons;
