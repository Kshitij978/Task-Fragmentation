import React from "react";

export const InfoBox = ({ title, description }) => (
  <div className="info_box filled">
    <h1 className="title">{title}</h1>
    <p className="description medium">{description}</p>
  </div>
);
