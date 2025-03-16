import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const MatchSummaryGenerator = () => {
  const summaryRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    team1: "",
    team2: "",
    team1Score: "",
    team2Score: "",
    team1Overs: "",
    team2Overs: "",
    player1t1: "",
    player1t1Runs: "",
    player2t1: "",
    player2t1Runs: "",
    player1t2: "",
    player1t2Runs: "",
    player2t2: "",
    player2t2Runs: "",
    bowler1t1: "",
    bowler1t1Stats: "",
    bowler2t1: "",
    bowler2t1Stats: "",
    bowler1t2: "",
    bowler1t2Stats: "",
    bowler2t2: "",
    bowler2t2Stats: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    if (summaryRef.current) {
      // Using html2canvas with better options for complex rendering
      html2canvas(summaryRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "match-summary.png";
        link.click();
      }).catch((error) => console.error("Error capturing image:", error));
    }
  };

  // Styles for angled elements that avoid clip-path
  const playerNameStyle = {
    position: "relative",
    backgroundColor: "#FFC107",
    color: "black",
    fontWeight: "bold",
    padding: "8px 16px",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center"
  };

  const playerAngleStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    width: "30px",
    height: "100%",
    backgroundColor: "#212529", // Dark background to match
    transform: "skew(-20deg)",
    transformOrigin: "top right"
  };

  const bowlerNameStyle = {
    position: "relative",
    backgroundColor: "#8a222b",
    color: "black",
    fontWeight: "bold",
    padding: "8px 16px",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center"
  };

  const bowlerAngleStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    width: "35px",
    height: "100%",
    backgroundColor: "#212529", // Dark background to match
    transform: "skew(-20deg)",
    transformOrigin: "top right"
  };

  return (
    <div className="p-5 bg-gradient bg-dark min-vh-100 d-flex flex-column align-items-center text-white">
      <div className="d-flex flex-row w-max justify-end">
        <div className="text-center mt-1">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-dark btn-lg"
          >
            Enter Match Details
          </button>
        </div>

        {!showModal && (
          <div className="text-center mt-1 ms-5">
            <button
              onClick={handleDownload}
              className="btn btn-light btn-lg"
            >
              📥 Download as Image
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="modal d-block bg-dark bg-opacity-50 modal-xl" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-secondary">
              <button
                onClick={() => setShowModal(false)}
                className="btn-close text-white position-absolute top-0 end-0 m-3"
                aria-label="Close"
              ></button>
              <div className="modal-header">
                <h5 className="modal-title text-center">Enter Match Details</h5>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6 mb-0 pb-0">
                    <p className="text-center mb-0 pb-0">Team 1</p>
                  </div>
                  <div className="col-md-6 mb-0 pb-0">
                    <p className="text-center mb-0 pb-0">Team 2</p>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="team1"
                      placeholder="Team 1 Name"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="team2"
                      placeholder="Team 2 Name"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="team1Score"
                      placeholder="Team 1 Score : ex 100/2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="team2Score"
                      placeholder="Team 2 Score : ex 100/2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="team1Overs"
                      placeholder="Team 1 Overs"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="team2Overs"
                      placeholder="Team 2 Overs"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="player1t1"
                      placeholder="Best Batsman 1"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="player1t1Runs"
                      placeholder="Runs ex :- 32(23)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="player1t2"
                      placeholder="Best Batsman 1"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="player1t2Runs"
                      placeholder="Runs ex :- 32(23)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="player2t1"
                      placeholder="Best Batsman 2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="player2t1Runs"
                      placeholder="Runs ex :- 32(23)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="player2t2"
                      placeholder="Best Batsman 2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="player2t2Runs"
                      placeholder="Runs ex :- 32(23)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="bowler1t1"
                      placeholder="Best Bowler 1"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="bowler1t1Stats"
                      placeholder="Stats (Wkts-Runs-Ovrs)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="bowler1t2"
                      placeholder="Best Bowler 2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="bowler1t2Stats"
                      placeholder="Stats (Wkts-Runs-Ovrs)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="bowler2t1"
                      placeholder="Best Bowler 2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="bowler2t1Stats"
                      placeholder="Stats (Wkts-Runs-Ovrs)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="bowler2t2"
                      placeholder="Best Bowler 2"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-2">
                    <input
                      type="text"
                      name="bowler2t2Stats"
                      placeholder="Stats (Wkts-Runs-Ovrs)"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-success"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Match Summary Card */}
      <div
        ref={summaryRef}
        style={{
          background: 'linear-gradient(to left, #fd3744, #fbbf24)',
        }}
        className="p-5 rounded-lg shadow-lg w-100 max-w-screen-xl mt-5 text-center border-4 border-white"
      >
        <h2 className="display-4 font-weight-bold mb-4">MATCH SUMMARY</h2>
        <div className="bg-dark text-white p-3 rounded-5">
          <div className="d-flex justify-content-center mt-3 mb-3">
            <p className="font-weight-bold text-uppercase h3 pe-3">{formData.team1}</p>
            <p className="font-weight-bold h4 pt-1">vs</p>
            <p className="font-weight-bold text-uppercase h3 ps-3">{formData.team2}</p>
          </div>

          {/* Team 1 */}
          <div className="d-flex justify-content-between mx-5 px-5 py-2 bg-warning rounded-sm">
            <p className="font-weight-bold text-uppercase h3 pr-2">{formData.team1}</p>
            <p className="font-weight-bold h3">
              {formData.team1Score} <span className="h6">({formData.team1Overs})</span>
            </p>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div className="d-flex flex-row ms-5">
                <div className="col-10 p-0 h-25">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={playerNameStyle}>
                    <span>{formData.player1t1}</span>
                    <div style={playerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.player1t1Runs}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-row me-5">
                <div className="col-10">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={bowlerNameStyle}>
                    <span>{formData.bowler1t1}</span>
                    <div style={bowlerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.bowler1t1Stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div className="d-flex flex-row ms-5">
                <div className="col-10 p-0">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={playerNameStyle}>
                    <span>{formData.player2t1}</span>
                    <div style={playerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.player2t1Runs}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-row me-5">
                <div className="col-10">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={bowlerNameStyle}>
                    <span>{formData.bowler2t1}</span>
                    <div style={bowlerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.bowler2t1Stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team 2 */}
          <div className="d-flex justify-content-between mx-5 px-5 py-2 mt-5 rounded-sm" style={{
            backgroundColor: "#8a222b"
          }}>
            <p className="font-weight-bold text-uppercase h3 pr-2">{formData.team2}</p>
            <p className="font-weight-bold h3">
              {formData.team2Score} <span className="h6">({formData.team2Overs})</span>
            </p>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div className="d-flex flex-row ms-5">
                <div className="col-10 p-0 h-25">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={playerNameStyle}>
                    <span>{formData.player1t2}</span>
                    <div style={playerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.player1t2Runs}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-row me-5">
                <div className="col-10">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={bowlerNameStyle}>
                    <span>{formData.bowler1t2}</span>
                    <div style={bowlerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.bowler1t2Stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div className="d-flex flex-row ms-5">
                <div className="col-10 p-0">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={playerNameStyle}>
                    <span>{formData.player2t2}</span>
                    <div style={playerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.player2t2Runs}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-row me-5">
                <div className="col-10">
                  {/* Replaced clip-path with div+angle element */}
                  <div style={bowlerNameStyle}>
                    <span>{formData.bowler2t2}</span>
                    <div style={bowlerAngleStyle}></div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex justify-content-end align-items-center p-2" style={{
                    color: "#FFC107",
                    fontWeight: "bold",
                  }}>
                    <span>{formData.bowler2t2Stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo at the bottom */}
          <div className="mt-5 mb-0">
            <img
              src="/images/sponsor.jpg"
              alt="Match Logo"
              className="img-fluid"
              style={{ maxHeight: '70px', width: 'auto' }}
              crossOrigin="anonymous" // Add this for CORS images
            />
          </div>
          <div className="mt-2 mb-0 p-0">
            <p className="m-0 p-0">Harcourts Ignite Reality</p>
          </div>
          <div className="mt-0 mb-0 p-0">
            <p className="m-0 p-0">Iresh Tannakoon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchSummaryGenerator;