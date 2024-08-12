import React, { useEffect, useState } from "react";
import Repos from "./components/Repos";
import Header from "./components/Header";

function App() {
  const [avatarURL, setAvatarURL] = useState("");
  const [githubUsername, setGitHubUsername] = useState("");
  const [repoData, setRepoData] = useState([]);

  // Fetch repository data
  async function repoDataURL(username) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
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

  // Fetch user data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.github.com/users/sammajayi");
        const result = await response.json();
        setAvatarURL(result.avatar_url);
        setGitHubUsername(result.login);
        // Call repoDataURL after setting the username
        await repoDataURL(result.login);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div className="container mx-auto">
      <Header githubUsername={githubUsername} />
      <div className="grid grid-cols-4 gap-4">{repoData}</div>
    </div>
  );
}

export default App;
