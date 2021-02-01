import React from "react";
import "./Header.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useDispatch } from "react-redux";
import InputOption from "../Shared/InputOption";

export default function Header() {
  /*   const dispatch = useDispatch();
   */
  return (
    <div className="header">
      <div className="header__left">
        <ArrowDropDownCircleIcon />
        <p>Dark Mode</p>
      </div>
      <div className="header__right">
        <InputOption Icon={HomeIcon} title="Home" link="/" />
        <InputOption
          Icon={SupervisorAccountIcon}
          title="My GitHub"
          link="https://github.com/poboisvert"
        />
        <InputOption
          Icon={BusinessCenterIcon}
          title="My Linkedin"
          link="https://www.linkedin.com/in/pierre-olivier-boisvert-a83b5796/"
        />
        <InputOption Icon={ChatIcon} title="Daily Slice" link="/" />
        <InputOption Icon={AccountCircleIcon} title="About me" link="/" />
      </div>
    </div>
  );
}
