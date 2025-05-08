import React from "react";
import type { Experience } from "../types/Experience";
import ExperienceCard from "./ExperienceCard";


export const experiences: Experience[] = [
  {
    company: "Hyundai Autoever",
    role: "Senior Software Engineer (Contractor)",
    period: "Sep 2024 – Present",
    location: "Irvine, CA",
    responsibilities: [
      "Designed and implemented microservices for KOA/KOP systems using Core Java and Spring Boot.",
      "Integrated legacy systems (AS400) with modern databases like MongoDB and DB2.",
      "Built REST APIs for inter-service communication and configured CI/CD pipelines using Jenkins.",
      "Enabled SSO using SAML2 and Shibboleth for secure authentication across platforms.",
      "Conducted extensive API testing using Postman in a production environment."
    ],
    techStack: ["Java", "Spring Boot", "MyBatis", "Oracle", "PostgreSQL", "MongoDB", "Redis", "Jenkins", "SAML2", "Shibboleth", "Postman"]
  },
  {
    company: "Cox Automotive",
    role: "Senior Full Stack Developer (Contractor)",
    period: "Nov 2020 – Sep 2024",
    location: "San Diego, CA",
    responsibilities: [
      "Created REST APIs with Ruby on Rails for service automation and communication.",
      "Developed React.js dashboards for internal tools and admin panels.",
      "Integrated AS400 mainframes with MongoDB/DB2.",
      "Deployed services via AWS Lambda, EC2, Docker, and Kubernetes.",
      "Built CI/CD pipelines using Jenkins and automated testing with WebdriverIO."
    ],
    techStack: ["Ruby on Rails", "React.js", "MongoDB", "DB2", "AWS Lambda", "EC2", "Docker", "Kubernetes", "WebdriverIO", "Jenkins", "Postman"]
  },
  {
    company: "Boeing Co.",
    role: "Senior Full Stack Developer / Team Lead",
    period: "Nov 2019 – Nov 2020",
    location: "San Diego, CA",
    responsibilities: [
      "Architected and developed Spring Boot microservices integrated with Kafka, MongoDB, and Oracle.",
      "Led an offshore cross-functional team and conducted code reviews.",
      "Built responsive React.js interfaces and mobile apps using Xamarin.",
      "Implemented API testing with Postman and mobile testing with Appium."
    ],
    techStack: ["Spring Boot", "Java", "Kafka", "MongoDB", "Oracle", "React.js", "Xamarin", "Postman", "Appium"]
  },
  {
    company: "AT&T",
    role: "Senior Java Developer",
    period: "Apr 2017 – Nov 2019",
    location: "El Segundo, CA",
    responsibilities: [
      "Modernized BMS platform using Spring Boot, Hibernate, and Core Java.",
      "Refactored legacy code from Struts, JSP, and GWT.",
      "Integrated Kafka for messaging and supported deployment on JBoss, WildFly."
    ],
    techStack: ["Spring Boot", "Hibernate", "Java", "Struts", "JSP", "GWT", "Kafka", "JBoss", "WildFly", "Oracle", "Postman"]
  },
  {
    company: "DirecTV (FPT Software)",
    role: "Senior Developer",
    period: "May 2013 – Apr 2017",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Built backend services for BMS using Java, Spring Boot, and Hibernate.",
      "Created GWT dashboards and internal UI tools.",
      "Implemented Kafka-based Traffic Broker and deployed using WebLogic and WildFly."
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "Kafka", "GWT", "WebLogic", "WildFly", "Oracle", "DB2"]
  },
  {
    company: "Wanek Furniture (Ashley Furniture)",
    role: "ERP Developer",
    period: "Apr 2012 – Mar 2013",
    location: "Binh Duong, Vietnam",
    responsibilities: [
      "Maintained and troubleshot AS400-based ERP systems.",
      "Customized ERP modules and developed SQL tools for cross-department reporting."
    ],
    techStack: ["AS400", "SQL", "ERP"]
  },
  {
    company: "Starseed Vietnam",
    role: "Flex Developer",
    period: "Apr 2011 – Apr 2012",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Built web, phone, and tablet apps using Adobe Flex and ActionScript.",
      "Integrated with Hibernate, Spring, Google App Engine, and media backends.",
      "Contributed to Motorola Atrix and Transformer 3 presentation systems."
    ],
    techStack: ["Adobe Flex", "ActionScript", "Hibernate", "Spring", "Google App Engine", "Java", "MXML", "PHP", "MySQL", "HSQL"]
  },
  {
    company: "Pungkook Corp",
    role: "ERP Developer",
    period: "May 2009 – Apr 2011",
    location: "Binh Duong, Vietnam",
    responsibilities: [
      "Developed PKJITTS and PK3DWEB systems for JIT tracking and 3D design sharing for Nike.",
      "Maintained PowerBuilder ERP and automated QC tools using CruiseControl and CVS."
    ],
    techStack: ["Java", "ASP.NET", "Flex", "PowerBuilder", "Oracle", "CruiseControl", "CVS", "ERP"]
  }
];

  

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Professional Experience
      </h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </section>
  );
};

export default ExperienceTimeline;
