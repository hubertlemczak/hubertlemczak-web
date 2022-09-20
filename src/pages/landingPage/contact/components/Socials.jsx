import { useState } from 'react';

import { ReactComponent as TwitterSVG } from '../../../../assets/twitter.svg';
import { ReactComponent as EmailSVG } from '../../../../assets/email.svg';
import { ReactComponent as LinkedInSVG } from '../../../../assets/linked-in.svg';
import { ReactComponent as GitHubSVG } from '../../../../assets/github.svg';
import './index.css';

const Socials = () => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hubertlemczak@gmail.com');
    setCopiedToClipboard(true);

    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 2000);
  };

  return (
    <>
      {copiedToClipboard && (
        <p className="fixed rounded-md bottom-5 right-1/2 w-max translate-x-1/2 bg-black text-white dark:bg-white p-3 dark:text-black md:text-xl animate-popup">
          Copied to Clipboard
        </p>
      )}
      <div className="flex justify-around items-center lg:flex-col lg:justify-start lg:gap-5 lg:items-start lg:mt-4 lg:ml-16  ">
        <div
          className="flex items-center gap-3 cursor-pointer"
          tabIndex="0"
          onKeyDown={({ key }) => key === 'Enter' && handleCopy()}
          onClick={handleCopy}
          title="Email"
          aria-label="Email"
          aria-haspopup
        >
          <EmailSVG className="fill-black hover:fill-darkBGHover dark:fill-white h-9 dark:hover:fill-svgHover transition-all" />
          <span className="hidden lg:block dark:text-textPara">
            hubertlemczak@gmail.com
          </span>
        </div>
        <a
          className="flex items-center gap-3"
          href="https://github.com/hubertlemczak"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <GitHubSVG className="fill-black hover:fill-darkBGHover dark:fill-white h-10 dark:hover:fill-svgHover transition-all" />
          <span className="hidden lg:block dark:text-textPara">
            github.com/hubertlemczak
          </span>
        </a>
        <a
          className="flex items-center gap-3"
          href="https://linkedin.com/in/hubertlemczak"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedInSVG className="fill-black hover:fill-darkBGHover dark:fill-white h-10 dark:hover:fill-svgHover transition-all" />
          <span className="hidden lg:block dark:text-textPara">
            linkedin.com/in/hubertlemczak
          </span>
        </a>
        <a
          className="flex items-center gap-3"
          href="https://twitter.com/hubertlemczak"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
          aria-label="Twitter"
        >
          <TwitterSVG className="fill-black hover:fill-darkBGHover dark:fill-white h-10 dark:hover:fill-svgHover transition-all" />
          <span className="hidden lg:block dark:text-textPara">
            twitter.com/hubertlemczak
          </span>
        </a>
      </div>
    </>
  );
};

export default Socials;
