import { useAppSelector } from "../../hooks/store";
import { Poem } from "../../types/poems";
import "./dashboard.css";

const Dashboard = () => {
  const poems = useAppSelector((state) => state["poems"]);
  
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.data.map((poem) => (
          <div key={poem.title} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines[0]}...</p>
            <button className="poem-button" onClick={() => onViewPoem(poem)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
