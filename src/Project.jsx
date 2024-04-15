"use client";

import React from "react";

import "./Project.css";

export default function index({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>Common medicinal plants</p>
    </div>
  );
}
