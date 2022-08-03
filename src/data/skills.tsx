import React from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
// import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import flutterIcon from "@iconify/icons-logos/flutter";
import expressjsIcon from "@iconify/icons-logos/express";
import expoIcon from "@iconify/icons-logos/expo";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import laravelIcon from "@iconify/icons-logos/laravel";
import electronIcon from "@iconify/icons-logos/electron";
import antdesingIcon from "@iconify/icons-logos/ant-design";
import materialuiIcon from "@iconify/icons-logos/material-ui";
import dockerIcon from "@iconify/icons-logos/docker-icon";

const skills = [
  <a
    href="https://nodejs.org/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-4xl" icon={nodejsIcon} />
  </a>,
  <a
    href="https://reactjs.org"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a
    href="https://expressjs.com/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-3xl" icon={expressjsIcon} />
  </a>,
  <a
    href="https://laravel.com/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={laravelIcon} />
  </a>,
  <a
    href="https://www.electronjs.org/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={electronIcon} />
  </a>,
  <a
    href="https://expo.io/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-6xl" icon={expoIcon} />
  </a>,
  <a
    href="https://flutter.dev/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={flutterIcon} />
  </a>,
  // <a
  //   href="https://getboostrap.com"
  //   className="focus:outline-none"
  //   rel="noopener noreferrer"
  //   target="_blank"
  // >
  //   <Icon className="text-5xl" icon={bootstrapIcon} />
  // </a>,
  <a
    href="https://ant.design/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={antdesingIcon} />
  </a>,
  <a
    href="https://mui.com/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={materialuiIcon} />
  </a>,
  <a
    href="https://www.docker.com/"
    className="focus:outline-none"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Icon className="text-5xl" icon={dockerIcon} />
  </a>,
];

export default skills;
