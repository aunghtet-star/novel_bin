import React from "react";
import { Link } from "react-router-dom";
import useHeaderStore from "../../../stores/useHeaderStore";
import "../../../styles/HomePage.css";

const HomePage = () => {
  const novels = [
    {
      id: 1,
      title: "MMORPG: Rebirth as an Alchemist",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      genre: "Fantasy",
    },
    {
      id: 2,
      title: "Top Tier Providence, Secretly Cultivate for a Thousand Years",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      genre: "Cultivation",
    },
    {
      id: 3,
      title: "Martial Peak",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      genre: "Martial Arts",
    },
    {
      id: 4,
      title: "A Regressor's Tale of Cultivation",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      genre: "Fantasy",
    },
    {
      id: 5,
      title: "Longevity Martial Arts: Grinding Experience in the Chaotic World",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
      genre: "Martial Arts",
    },
    {
      id: 6,
      title: "Dungeon Diver: Stealing A Monster's Power",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
      genre: "Adventure",
    },
    {
      id: 7,
      title: "Global Killing: Awakening SSS-level Talent At The Beginning",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=300&h=400&fit=crop",
      genre: "Action",
    },
    {
      id: 8,
      title: "Water Magician",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      genre: "Fantasy",
    },
    {
      id: 9,
      title: "King of Gods",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      genre: "Fantasy",
    },
  ];

  const { setSelectedGenre, selectedGenre } = useHeaderStore();

  return (
    <div className="homepage">
      {/* Subtitle */}
      <div className="subtitle">
        <div className="container">
          <p>Best novels of all time - Read novels online for free</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hot Novel Section */}
          <section className="hot-novels">
            <div className="section-header">
              <h2 className="section-title">🔥 HOT NOVEL</h2>
              <select
                className="genre-filter"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="ALL">ALL</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Cultivation">Cultivation</option>
                <option value="Martial Arts">Martial Arts</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
              </select>
            </div>

            {/* Novel Grid */}
            <div className="novel-grid">
              {novels.map((novel) => (
                <Link key={novel.id} to={`/info/${novel.id}`} className="novel-card">
                  <div className="novel-image">
                    <img src={novel.image} alt={novel.title} />
                    <div className="novel-overlay">
                      <h3 className="novel-title">{novel.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
