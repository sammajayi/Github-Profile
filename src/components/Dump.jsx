import * as React from "react";
import { useEffect, useState } from "react";
import Repos from "./components/Repos";
import CreateRepo from "./components/CreateRepo";

function App() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    // Get repo data about github user
    await fetch("https://api.github.com/users/Pereweitom/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <Repos
              avatarURL={avatarURL}
              githubUsername={githubUsername}
              repoData={item.name}
              repoURL={item.svn_url}
            />
            // <div className="text-center">
            //   <a target="_blank" href={}>
            //     {item.name}
            //   </a>
            // </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Pereweitom")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <>
      {onload(repoDataURL())}
      {/* <CreateRepo /> */}
    </>
  );
}

import React, { useEffect, useState } from "react";
import Repos from "./components/Repos";
// import CreateRepo from "./components/CreateRepo"; // Uncomment if used

function App() {
  const [avatarURL, setAvatarURL] = useState("");
  const [githubUsername, setGitHubUsername] = useState("");
  const [repoData, setRepoData] = useState([]);

  async function repoDataURL() {
    try {
      const response = await fetch(
        "https://api.github.com/users/Pereweitom/repos"
      );
      const result = await response.json();
      const list = result.map((item) => (
        <Repos
          key={item.id}
          avatarURL={avatarURL}
          githubUsername={githubUsername}
          repoData={item.name}
          repoURL={item.svn_url}
        />
      ));
      setRepoData(list);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.github.com/users/Pereweitom");
        const result = await response.json();
        setAvatarURL(result.avatar_url);
        setGitHubUsername(result.login);
        await repoDataURL(); // Fetch repo data after user data is set
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {repoData}
      {/* <CreateRepo /> */}
    </div>
  );
}
