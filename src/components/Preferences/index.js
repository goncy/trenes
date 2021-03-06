import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearPreferences } from "../../actions/preferences";

import "./Preferences.css";

const Preferences = ({ branch, line, station }) => (
  <div className="Preferences">
    <div className="preferences">
      <p>{`Esperando a la linea ${line.name}`}</p>
      <p>{`Ramal ${branch.name}`}</p>
      <p>{`En la estación ${station.name}`}</p>
      <Link to="/" className="button edit-btn">
        Volver atrás
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ preferences }) => ({
  branch: preferences.branch,
  line: preferences.line,
  station: preferences.station
});

const mapDispatchToProps = {
  clearPreferences: clearPreferences.run
};

Preferences.propTypes = {
  branch: PropTypes.any.isRequired,
  line: PropTypes.any.isRequired,
  station: PropTypes.any.isRequired,
  clearPreferences: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
