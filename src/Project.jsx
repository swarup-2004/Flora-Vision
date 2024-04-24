"use client";

import React from "react";

import "./Project.css";

export default function index({ index, title, setModal }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>Common medicinal plants</p>
    </div>
  );
}
