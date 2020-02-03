import React from "react";
import RenderContact from "./RenderProfile";

const ProfileList = () => {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/morley-stuff"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/morleystuff"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/morley-stuff"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/morley_stuff"
    }
  ];
  const profileList = profiles.map(profile => (
    <RenderContact key={profile.url} profile={profile} />
  ));
  return (
    <div>
      <h3>Online profiles</h3>
      {profileList}
    </div>
  );
};

export default ProfileList;
