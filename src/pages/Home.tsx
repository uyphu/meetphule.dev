import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Phu Le | Senior Java Developer</title>
        <meta name="description" content="Experienced Java developer with expertise in backend microservices, cloud-native systems, and scalable enterprise solutions." />
        <meta name="keywords" content="Phu Le, Java Developer, Spring Boot, Microservices, Backend, Portfolio, Full Stack Developer" />
        <meta name="author" content="Phu Le" />
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

      <Hero />
    </main>
  );
};

export default Home;
