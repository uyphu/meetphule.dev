// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Phu Le | Senior Java Developer</title>
  <meta name="description" content="Experienced Java developer with expertise in backend microservices, cloud-native systems, and scalable enterprise solutions." />
  <meta name="keywords" content="Phu Le, Java Developer, Spring Boot, Microservices, Backend, Portfolio, Full Stack Developer" />
  <meta name="author" content="Phu Le" />

  {/* Social Sharing */}
  <meta property="og:title" content="Phu Le | Senior Java Developer Portfolio" />
  <meta property="og:description" content="Explore Phu Le's portfolio showcasing his backend, full-stack, and enterprise development skills." />
  <meta property="og:image" content="https://meetphule-dev.vercel.app/preview.png" />
  <meta property="og:url" content="https://meetphule-dev.vercel.app" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Phu Le | Java Developer Portfolio" />
  <meta name="twitter:description" content="Explore my work in microservices, DevOps, and scalable backend systems." />
  <meta name="twitter:image" content="https://meetphule-dev.vercel.app/preview.png" />
</Helmet>

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

