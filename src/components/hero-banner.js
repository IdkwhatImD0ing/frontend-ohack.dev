import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import * as ga from '../lib/ga';
import {Typography} from '@mui/material';

export default function HeroBanner() {
  const logo = 'https://i.imgur.com/Ih0mbYx.png';

  const JOIN_SLACK_LINK =
    'https://join.slack.com/t/opportunity-hack/shared_invite/zt-1db1ehglc-2tR6zpmszc5898MhiSxHig';
  const openCodeSample = () => {
    gaButton('open_code_sample');
    window.open(JOIN_SLACK_LINK, '_blank', 'noopener noreferrer');
  };

  const gaButton = (actionName) => {
    ga.event({
      action: 'button',
      params: {
        action_name: actionName,
      },
    });
  };

  return (
    <div className="hero-banner">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Opportunity Hack Portal" />
      </Head>
      <img
        className="hero-banner__logo"
        src={logo}
        alt="Opportunity Hack logo"
      />
      <h1 className="hero-banner__headline">
        Hey there, it's a pleasure to meet you.
      </h1>
      <p className="hero-banner__description">
        Welcome to the place where Nonprofits, Hackers, Mentors, and Volunteers
        unite!
      </p>

      <Link href="/nonprofits">
        <button
          onClick={gaButton('find_a_problem')}
          className="button button--primary"
        >
          Step 1: Find a problem to work on →
        </button>
      </Link>
      <br />
      <button onClick={openCodeSample} className="button button--primary">
        Step 2: Join us on Slack to get involved →
      </button>
      <Typography
        variant="h3"
        sx={{
          margin: 2,
        }}
      >
        Or
      </Typography>
      <Link href="/opportunities">
        <button
          onClick={gaButton('find_a_problem')}
          className="button button--primary"
        >
          Volunteer for a non-programming role →
        </button>
      </Link>
    </div>
  );
}
