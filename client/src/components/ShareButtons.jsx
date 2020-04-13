import React, { Fragment } from 'react';
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
  } from "react-share";



const ShareButtons = () => {
    const url = 'https://coronatracker.squarespace.com'

    return (
        <Fragment>
            <FacebookShareButton url={url}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <RedditShareButton url={url}>
                <RedditIcon size={32} round={true} />
            </RedditShareButton>
            <TelegramShareButton url={url}>
                <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
        </Fragment>
    )
}

export default ShareButtons