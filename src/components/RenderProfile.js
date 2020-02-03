import React from "react";

function RenderProfile({ profile }) {
  return (
    <div>
      <p>
        {profile.name}: <a href={profile.url}>{profile.url}</a>
      </p>
    </div>
  );
}

export default RenderProfile;
