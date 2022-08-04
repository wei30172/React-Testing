import React, { useState } from "react";
import "./Accomplishment.scss";
import { ButtonWrapper } from "../../components";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";

function Accomplishment() {
  const [title, setTitle] = useState("");
  const [accomplishment, setAccomplishment] = useState("");

  const [valid, setValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    if (!title || !accomplishment || !valid) {
      return setShowError(true);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 3000);
  };

  return (
    <div className="accomplishment">
      <div className="accomplishment_header">
        <h2>Accomplishment</h2>
      </div>
      <div className="accomplishment_card">
        {!loading && !showSuccess && (
          <>
            <input
              className="accomplishment_card_input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-cy="accomplishment-title-input"
            />
            <textarea
              className="accomplishment_card_textarea"
              placeholder="My accomplishment..."
              value={accomplishment}
              onChange={(e) => setAccomplishment(e.target.value)}
              data-cy="accomplishment-input"
            />
            <div className="accomplishment_card_checkbox">
              <input
                type="checkbox"
                checked={valid}
                onChange={(e) => setValid(e.target.checked)}
                data-cy="accomplishment-checkbox"
              />
              <p>This accomplishment is valid</p>
            </div>
            {showError && (
              <div className="accomplishment_card_error">
                <p>Complete the items above to continue</p>
              </div>
            )}
            <ButtonWrapper
              className="btn accomplishment_btn"
              title="Submit"
              onClick={handleSubmit}
            />
          </>
        )}
        {loading && (
          <div className="flex">
            <HourglassEmptyIcon />
          </div>
        )}
        {showSuccess && (
          <div className="flex">
            <AssignmentTurnedInOutlinedIcon />
            <h2>Submitted Successfully</h2>
            <ButtonWrapper
              className="btn accomplishment_btn"
              title="Add more accomplishments."
              onClick={() => {
                setShowSuccess(false);
                setTitle("");
                setAccomplishment("");
                setValid(false);
                setShowError(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Accomplishment;
