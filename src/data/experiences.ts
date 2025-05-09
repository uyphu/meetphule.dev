import type { Experience } from "../types/Experience";

export const experiences: Experience[] = [
  {
    company: "Hyundai Autoever",
    role: "Senior Software Engineer (Contractor)",
    period: "Sep 2024 – Present",
    location: "Irvine, CA",
    responsibilities: [
      "Developed and maintained microservices (KIASVC, UVODS, KAMS, BATCH) for remote commands, OTA updates, profiles, and scheduled ETL jobs.",
      "Integrated Oracle, PostgreSQL, and MongoDB databases; used Redis for caching and NoSQL data access.",
      "Refactored the legacy notification engine to use Kafka, enabling API-by-API migration with dynamic ON/OFF config.",
      "Containerized services using Docker and deployed to Kubernetes clusters.",
      "Improved system observability with Dynatrace, ELK stack, and LMS.",
      "Performed API testing with Postman and implemented load testing using K6."
    ],
    techStack: ["Java", "Spring Boot", "MyBatis", "Oracle", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "Dynatrace", "ELK", "Postman", "K6"]
  },
  {
    company: "Cox Automotive",
    role: "Senior Full Stack Developer (Contractor)",
    period: "Nov 2020 – Sep 2024",
    location: "San Diego, CA",
    responsibilities: [
      "Developed RESTful APIs using Ruby on Rails to support automated vehicle data simulations.",
      "Built internal dashboards and admin tools using React.js.",
      "Integrated legacy AS400 and mainframe systems with MongoDB and DB2.",
      "Deployed services using AWS Lambda, EC2, Docker, and Kubernetes.",
      "Created CI/CD pipelines using Jenkins; tested APIs with Postman and automated UI testing with WebdriverIO."
    ],
    techStack: ["Ruby on Rails", "React.js", "MongoDB", "DB2", "AWS Lambda", "EC2", "Docker", "Kubernetes", "AS400", "WebdriverIO", "Jenkins", "Postman"]
  },
  {
    company: "Boeing Co.",
    role: "Senior Full Stack Developer / Team Lead",
    period: "Nov 2019 – Nov 2020",
    location: "San Diego, CA",
    responsibilities: [
      "Designed Spring Boot microservices using Domain-Driven Design (DDD), integrated with Kafka, MongoDB, and Oracle.",
      "Led a cross-functional offshore team and conducted code reviews within Agile sprints.",
      "Developed hybrid APIs (REST/GraphQL) and Xamarin-based mobile apps with offline support.",
      "Created admin dashboards using React.js.",
      "Performed end-to-end testing with Postman and mobile automation testing with Appium."
    ],
    techStack: ["Spring Boot", "Java", "Kafka", "MongoDB", "Oracle", "GraphQL", "React.js", "Xamarin", "Postman", "Appium"]
  },
  {
    company: "AT&T",
    role: "Senior Java Developer",
    period: "Apr 2017 – Nov 2019",
    location: "El Segundo, CA",
    responsibilities: [
      "Modernized the Broadcast Management System (BMS) using Spring Boot and Hibernate.",
      "Migrated legacy Struts/JSP to modern RESTful APIs and integrated with Kafka for async messaging.",
      "Maintained stream control dashboards built in GWT and JSP.",
      "Deployed services to JBoss and WildFly application servers."
    ],
    techStack: ["Spring Boot", "Hibernate", "Java", "Struts", "JSP", "GWT", "Kafka", "JBoss", "WildFly", "Oracle", "Postman"]
  },
  {
    company: "DirecTV (FPT Software)",
    role: "Senior Developer",
    period: "May 2013 – Apr 2017",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Extended core features in BMS using Java, Spring Boot, and Hibernate.",
      "Built real-time monitoring dashboards using GWT and JSP.",
      "Developed Kafka-based Traffic Broker for inter-system communication.",
      "Deployed backend services to WebLogic and WildFly environments."
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "Kafka", "GWT", "WebLogic", "WildFly", "Oracle", "DB2"]
  },
  {
    company: "Wanek Furniture (Ashley Furniture)",
    role: "ERP Developer",
    period: "Apr 2012 – Mar 2013",
    location: "Binh Duong, Vietnam",
    responsibilities: [
      "Maintained AS400-based ERP systems across inventory and manufacturing workflows.",
      "Built cross-department SQL tools for real-time data extraction and custom reporting."
    ],
    techStack: ["AS400", "SQL", "ERP"]
  },
  {
    company: "Starseed Vietnam",
    role: "Flex Developer",
    period: "Apr 2011 – Apr 2012",
    location: "Ho Chi Minh City, Vietnam",
    responsibilities: [
      "Built media-rich mobile/web apps using Adobe Flex and ActionScript 3.x.",
      "Integrated backend using Java, Spring, Hibernate, MySQL, and Red5.",
      "Delivered projects like Heroes Game, Transformer 3 showcase, and Motorola Atrix app."
    ],
    techStack: ["Adobe Flex", "ActionScript", "Hibernate", "Spring", "Java", "Red5", "MySQL", "Google App Engine"]
  },
  {
    company: "Pungkook Corp",
    role: "ERP Developer",
    period: "May 2009 – Apr 2011",
    location: "Binh Duong, Vietnam",
    responsibilities: [
      "Developed ERP modules (PKJITTS, PK3DWEB) using Java, PowerBuilder, and Oracle.",
      "Built supplier tracking, 3D design sharing, and QA automation systems.",
      "Implemented CI pipelines using CruiseControl and versioned with CVS."
    ],
    techStack: ["Java", "PowerBuilder", "Oracle", "CruiseControl", "CVS", "ERP", "ASP.NET", "Flex"]
  }
];
