import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    name: "KOA/KOP Automotive Platform",
    description:
      "Designed microservices for vehicle remote commands, OTA updates, and user preferences for Hyundai Autoever. This system operates at scale across thousands of vehicles.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "MyBatis", "Jenkins"],
    role: "Led backend development for core modules and integrated legacy systems (AS400) into a modern microservices architecture."
  },
  {
    name: "UVODS / UVODS2 Telematics System",
    description:
      "A high-throughput telematics platform handling vehicle ownership and data sync. Responsible for tracking trip history, driving behavior, and vehicle metadata.",
    techStack: ["Spring Boot", "Kafka", "MyBatis", "Oracle", "Redis"],
    role: "Developed batch jobs, REST APIs, and Kafka-driven consumers to support ETL pipelines and real-time data tracking."
  },
  {
    name: "BMS Modernization (AT&T)",
    description:
      "Refactored and modernized the telecom Billing Management System (BMS), transitioning from Struts/JSP to a scalable Spring Boot microservice ecosystem.",
    techStack: ["Java", "Spring Boot", "Hibernate", "Struts", "JSP", "Kafka", "Oracle"],
    role: "Migrated business logic to Spring Boot, improved performance, and enabled event-driven messaging using Kafka."
  },
  {
    name: "SSO Integration System",
    description:
      "Secure authentication platform enabling Single Sign-On (SSO) using SAML2 and Shibboleth across internal enterprise systems.",
    techStack: ["Spring Security", "SAML2", "Shibboleth", "JWT"],
    role: "Implemented SSO token exchange and configured identity federation for multiple enterprise apps."
  },
  {
    name: "Enterprise ERP & Reporting Tool",
    description:
      "Customized legacy ERP systems for manufacturing and logistics operations. Supported custom reporting and system integration with PowerBuilder and AS400.",
    techStack: ["SQL", "AS400", "PowerBuilder", "Java", "Oracle"],
    role: "Maintained ERP data accuracy, implemented new modules, and built cross-department SQL tools for real-time reporting."
  }
];
