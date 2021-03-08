import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import flutterIcon from '@iconify/icons-logos/flutter';
import expressjsIcon from '@iconify/icons-logos/express';
import expoIcon from '@iconify/icons-logos/expo';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import materialuiIcon from '@iconify/icons-logos/material-ui';

const skills = [
  <a href="https://nodejs.org/" className="focus:outline-none">
    <Icon className="text-4xl" icon={nodejsIcon} />
  </a>,
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a href="https://expressjs.com/" className="focus:outline-none">
    <Icon className="text-5xl" icon={expressjsIcon} />
  </a>,
  <a href="https://expo.io/" className="focus:outline-none">
    <Icon className="text-6xl" icon={expoIcon} />
  </a>,
  <a href="https://flutter.dev/" className="focus:outline-none">
    <Icon className="text-5xl" icon={flutterIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={bootstrapIcon} />
  </a>,
  <a href="https://material-ui.com/" className="focus:outline-none">
    <Icon className="text-5xl" icon={materialuiIcon} />
  </a>,
];

export default skills;
