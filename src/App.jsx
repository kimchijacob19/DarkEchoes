import { useState } from "react";
import { episodeList } from "./data.js";
import "./App.css"; // optional, or adjust to your preferred styling

function EpisodeList({ episodes, onSelect }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li
          key={episode.id}
          onClick={() => onSelect(episode)}
          style={{
            cursor: "pointer",
            margin: "8px 0",
            padding: "8px",
            background: "#333",
            color: "#fff",
            borderRadius: "4px",
          }}
        >
          {episode.title}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  if (!episode) {
    return <p>Please select an episode.</p>;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        background: "#222",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
    </div>
  );
}

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#d33" }}>Dark Echoes</h1>
      <EpisodeList episodes={episodes} onSelect={setSelectedEpisode} />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
