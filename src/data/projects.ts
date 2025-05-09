import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    name: "HAEA-KUS – Connected Vehicle Platform",
    description:
      "Next-gen telematics system for Hyundai Autoever enabling vehicle-cloud communication, OTA updates, and secure user profile management.",
    techStack: ["Java", "Spring Boot", "MyBatis", "PostgreSQL", "Oracle", "Redis", "MongoDB", "Kafka", "Kubernetes"],
    role: "Built and maintained microservices (KIASVC, UVODS, KAMS, BATCH) to support remote commands, notifications, and data sync. Migrated legacy systems to Kafka-driven architecture."
  },
  {
    name: "Tandem – Vehicle Auction Simulation Platform",
    description:
      "A backend system and dashboard for Manheim (Cox Automotive) to simulate and manage online vehicle auction data.",
    techStack: ["Ruby on Rails", "React.js", "MongoDB", "DB2", "AWS Lambda", "Docker", "Kubernetes"],
    role: "Developed REST APIs and admin dashboards. Integrated legacy AS400 data sources. Enabled CI/CD pipelines and automated tests with Jenkins and WebdriverIO."
  },
  {
    name: "GOLDesp – Aviation Logistics Management",
    description:
      "Mobile-enabled system for Boeing to manage warehouse logistics (Picking, Receiving, Shipping) with online and offline sync capabilities.",
    techStack: ["Java", "Spring Boot", "MongoDB", "Oracle", "GraphQL", "Kafka", "AWS", "React.js", "Xamarin"],
    role: "Led full-stack team. Built secure microservices with DDD, event sourcing, and hybrid APIs. Developed cross-platform mobile apps and React dashboards."
  },
  {
    name: "BOC Management System (BMS)",
    description:
      "System for AT&T/DirecTV to manage satellite transponders and scheduling data for broadcast streams.",
    techStack: ["Java", "Spring Boot", "Hibernate", "Struts", "SOAP", "Kafka", "Oracle", "JSP", "GWT"],
    role: "Migrated legacy systems from Struts to Spring Boot. Developed SOAP and REST APIs. Added Kafka messaging for async processing. Improved stream configuration UIs."
  },
  {
    name: "AS400 ERP Enhancement (Wanek Furniture)",
    description:
      "Maintained and enhanced ERP modules supporting manufacturing, inventory, and supply chain workflows.",
    techStack: ["AS400", "SQL", "PowerBuilder", "Java", "Oracle"],
    role: "Troubleshot ERP data flows, built internal tools for report generation, and integrated scan data into supply chain tracking."
  }
];
