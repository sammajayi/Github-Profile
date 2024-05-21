import React from "react";

const Header = ({ githubUsername }) => {
  return (
    <div className="flex justify-between items-center p-6 space-x-3">
      <h1 className="text-3xl font-bold">{githubUsername}</h1>
      <div className="flex space-x-4 font-bold">
        <p>Search</p>
        <p>Create Repo</p>
      </div>
    </div>
  );
};

export default Header;
