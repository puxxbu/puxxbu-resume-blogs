import React from "react";

const projects = [
  {
    category: "Project",
    title: "Patuli (Pahlawan Tuli)",
    slug: "#patuli",
    imageUrl: "img/projects/patuli.png",
    subtitle:
      "Patuli (Pahlawan Tuli) is an Android-based application to learn and communicate sign language using Bisindo gestures with integrated machine-learning.",
    period: "Juli 2023",
    tech: "Android (Kotlin), TFlite, Tensorflow, Google Cloud",
    description: (
      <>
      <h4></h4>
        <h4>Key Features:</h4>
        <ul>
          <li>
            <strong>Learning Modules:</strong> Bisindo curriculum (alphabets,
            numbers, vocabulary)
          </li>
          <li>
            <strong>Real-Time Translation:</strong> Camera-based recognition (30
            FPS, &lt;200ms latency)
          </li>
          <li>
            <strong>Gamified Learning:</strong> Quizzes, achievements, and
            progress tracking
          </li>
        </ul>

        <h4>Technical Implementation:</h4>
        <ul>
          <li>TensorFlow Lite for on-device gesture recognition</li>
          <li>Custom CNN models optimized for mobile</li>
          <li>Android CameraX API for frame processing</li>
        </ul>

        <h4>Purpose:</h4>
        <ul>
          <li>Bridge communication between deaf and hearing communities</li>
          <li>Showcase Android ML integration</li>
          <li>Create interactive Bisindo learning platform</li>
        </ul>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/Patuli-Pahlawan-Tuli",
      },
    ],
  },
 
];

export default projects;
