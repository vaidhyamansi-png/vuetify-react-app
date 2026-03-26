import React, { useState } from "react";
import imagOne from "../assets/images/imag_one.png";
import searchIcon from "../assets/images/search-icon.png";
// import "./WorkflowModal.scss";

// ---- SVG Illustrations ----
const AdvancedIllustration = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="34" height="22" rx="3" fill="#E8F0FE" stroke="#C5D5F8" strokeWidth="1"/>
    <rect x="5" y="6" width="20" height="2.5" rx="1" fill="#A0B8F0"/>
    <rect x="5" y="11" width="14" height="2" rx="1" fill="#C5D5F8"/>
    <rect x="5" y="15" width="17" height="2" rx="1" fill="#C5D5F8"/>
    <rect x="44" y="2" width="34" height="22" rx="3" fill="#E8F0FE" stroke="#C5D5F8" strokeWidth="1"/>
    <rect x="47" y="6" width="20" height="2.5" rx="1" fill="#A0B8F0"/>
    <rect x="47" y="11" width="14" height="2" rx="1" fill="#C5D5F8"/>
    <rect x="47" y="15" width="17" height="2" rx="1" fill="#C5D5F8"/>
    <rect x="20" y="34" width="40" height="22" rx="3" fill="#D6E4FF" stroke="#A0B8F0" strokeWidth="1"/>
    <rect x="24" y="38" width="22" height="2.5" rx="1" fill="#7FA8F0"/>
    <rect x="24" y="43" width="16" height="2" rx="1" fill="#A0B8F0"/>
    <rect x="24" y="47" width="19" height="2" rx="1" fill="#A0B8F0"/>
    <line x1="19" y1="24" x2="30" y2="34" stroke="#A0B8F0" strokeWidth="1.5" strokeDasharray="2,2"/>
    <line x1="61" y1="24" x2="50" y2="34" stroke="#A0B8F0" strokeWidth="1.5" strokeDasharray="2,2"/>
  </svg>
);

const StandardIllustration = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="60" height="16" rx="3" fill="#E8F0FE" stroke="#C5D5F8" strokeWidth="1"/>
    <rect x="14" y="8" width="28" height="2.5" rx="1" fill="#A0B8F0"/>
    <rect x="14" y="13" width="20" height="2" rx="1" fill="#C5D5F8"/>
    <rect x="10" y="26" width="60" height="16" rx="3" fill="#E8F0FE" stroke="#C5D5F8" strokeWidth="1"/>
    <rect x="14" y="30" width="28" height="2.5" rx="1" fill="#A0B8F0"/>
    <rect x="14" y="35" width="20" height="2" rx="1" fill="#C5D5F8"/>
    <rect x="10" y="48" width="60" height="10" rx="3" fill="#D6E4FF" stroke="#A0B8F0" strokeWidth="1"/>
    <rect x="14" y="51" width="22" height="2" rx="1" fill="#7FA8F0"/>
    <line x1="40" y1="20" x2="40" y2="26" stroke="#A0B8F0" strokeWidth="1.5"/>
    <polygon points="37,25 43,25 40,28" fill="#A0B8F0"/>
    <line x1="40" y1="42" x2="40" y2="48" stroke="#A0B8F0" strokeWidth="1.5"/>
    <polygon points="37,47 43,47 40,50" fill="#A0B8F0"/>
  </svg>
);

// ---- Workflow Options Data ----
const WORKFLOW_OPTIONS = [
  {
    id: "advanced",
    name: "Advanced Workflow",
    badge: "Recommended",
    desc: "Best for high-volume outreach",
    tags: ["Conditional logic", "Multiple paths", "More control"],
    illustration: <AdvancedIllustration />,
  },
  {
    id: "standard",
    name: "Standard Workflow",
    badge: null,
    desc: "Best for beginners",
    tags: ["Linear steps", "No conditions", "Easy Setup"],
    illustration: <StandardIllustration />,
  },
];

// ---- Home Component ----
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState("advanced");

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (e) => setSelectedFilter(e.target.value);
  const handleNewCampaign = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const handleNext = () => {
    console.log("Selected:", selectedWorkflow);
    setIsModalOpen(false);
  };

  return (
    <div className="campaign-container">

      {/* HEADER */}
      <header className="campaign-header">
        <div className="campaign-filter">
          <select
            className="dropdown-select"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Archived">Archived</option>
            <option value="Draft">Draft</option>
          </select>

          <div className="input_img_wrap">
            <span className="search_icon_outer_wrap">
              <img src={searchIcon} alt="search" />
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="campaign-content">
        <div className="illustration-wrapper">
          <img src={imagOne} alt="No campaigns found" />
        </div>
        <div className="button-wrapper">
          <button className="campaign-button" onClick={handleNewCampaign}>
            New Campaign
          </button>
        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="wf-overlay" onClick={handleClose}>
          <div className="wf-modal" onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className="wf-modal__close" onClick={handleClose}>×</button>

            {/* Header */}
            <h2 className="wf-modal__title">Select Workflow Mode</h2>
            <p className="wf-modal__subtitle">Choose how you want your campaign to behave</p>

            {/* Options */}
            <div className="wf-modal__options">
              {WORKFLOW_OPTIONS.map((option) => {
                const isSelected = selectedWorkflow === option.id;
                return (
                  <div
                    key={option.id}
                    className={`wf-option${isSelected ? " wf-option--selected" : ""}`}
                    onClick={() => setSelectedWorkflow(option.id)}
                  >
                    <div className="wf-option__left">
                      <div className={`wf-option__radio${isSelected ? " wf-option__radio--checked" : ""}`} />
                      <div className="wf-option__body">
                        <div className="wf-option__header-row">
                          <span className="wf-option__name">{option.name}</span>
                          {option.badge && (
                            <span className="wf-option__badge">{option.badge}</span>
                          )}
                        </div>
                        <p className="wf-option__desc">{option.desc}</p>
                        <div className="wf-option__tags">
                          {option.tags.map((tag) => (
                            <span key={tag} className="wf-option__tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="wf-option__illustration">
                      {option.illustration}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer — use handleClose & handleNext, NOT onClose/onNext */}
            <div className="wf-modal__footer">
              <button className="wf-btn wf-btn--cancel" onClick={handleClose}>Close</button>
              <button className="wf-btn wf-btn--primary" onClick={handleNext}>Next</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Home;