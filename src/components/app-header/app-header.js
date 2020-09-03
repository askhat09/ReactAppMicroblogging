import React from "react";

import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header">
      <h1>Асхат Сулейменов</h1>
      <h2>
        {allPosts} записей, из них понравились {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
