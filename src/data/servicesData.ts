
import { Code, Database, FileSearch, Globe, Briefcase, Users } from 'lucide-react';

export const servicesData = [
  {
    id: 'application-development',
    title: "Application Development",
    description: "Custom-built applications tailored to your unique business requirements and goals.",
    iconName: "Code",
    details: "Our application development services deliver custom software solutions that address complex enterprise challenges. We specialize in creating scalable, secure, and user-friendly applications using modern technologies and best practices.",
    features: [
      "Custom enterprise applications",
      "Web and mobile app development",
      "Legacy system modernization",
      "API development and integration",
      "UI/UX design and implementation",
      "Maintenance and support"
    ],
    subServices: [
      {
        title: "Web Application Development",
        description: "Modern, responsive web applications built with cutting-edge technologies like React, Angular, and Vue.js.",
        items: [
          "Single Page Applications (SPAs)",
          "Progressive Web Apps (PWAs)",
          "Enterprise Web Portals",
          "Customer-facing Applications",
          "Internal Business Tools"
        ]
      },
      {
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile applications for iOS and Android devices.",
        items: [
          "Native iOS Development",
          "Native Android Development",
          "Cross-platform Solutions (React Native, Flutter)",
          "Mobile Backend Integration",
          "App Store Optimization"
        ]
      },
      {
        title: "Custom Software Development",
        description: "Bespoke software solutions designed to address specific business challenges and requirements.",
        items: [
          "Enterprise Software Solutions",
          "Workflow Automation Tools",
          "Data Processing Applications",
          "Business Intelligence Dashboards",
          "Industry-specific Solutions"
        ]
      }
    ]
  },
  {
    id: 'software-consulting',
    title: "Software Consulting",
    description: "Strategic guidance and expertise to help you navigate your digital transformation journey.",
    iconName: "Briefcase",
    details: "Our software consulting services provide strategic guidance to help organizations navigate complex technology decisions. We work closely with your team to understand business objectives and develop tailored technology strategies.",
    features: [
      "Technology strategy development",
      "Digital transformation roadmapping",
      "Technical debt assessment",
      "Architecture design and review",
      "Vendor selection assistance",
      "IT governance and compliance"
    ],
    subServices: [
      {
        title: "Digital Transformation Strategy",
        description: "Comprehensive strategies to guide your organization's digital evolution and technology adoption.",
        items: [
          "Digital Maturity Assessment",
          "Technology Roadmapping",
          "Change Management Planning",
          "ROI Analysis for Digital Initiatives",
          "Innovation Workshop Facilitation"
        ]
      },
      {
        title: "IT Architecture Consulting",
        description: "Expert guidance on designing robust, scalable, and efficient technology architectures.",
        items: [
          "Enterprise Architecture Assessment",
          "Technology Stack Recommendations",
          "Scalability Planning",
          "Integration Strategy Development",
          "Microservices Architecture Design"
        ]
      },
      {
        title: "Technology Selection & Evaluation",
        description: "Impartial analysis and recommendations for selecting the right technologies for your needs.",
        items: [
          "Requirements Analysis",
          "Vendor Evaluation Framework",
          "Technology Comparison Matrix",
          "Proof of Concept Support",
          "Implementation Planning"
        ]
      }
    ]
  },
  {
    id: 'cloud-services',
    title: "Amazon Cloud Services",
    description: "Harness the power of AWS with our expert deployment and optimization services.",
    iconName: "Database",
    details: "As an AWS partner, we help organizations migrate, optimize, and manage their cloud infrastructure. Our cloud services enable businesses to leverage the full potential of AWS for improved scalability, security, and cost efficiency.",
    features: [
      "Cloud migration and strategy",
      "AWS architecture and deployment",
      "Cloud cost optimization",
      "DevOps implementation",
      "Managed cloud services",
      "Security and compliance"
    ],
    subServices: [
      {
        title: "Cloud Migration",
        description: "End-to-end migration services to smoothly transition your workloads to AWS cloud infrastructure.",
        items: [
          "Migration Readiness Assessment",
          "Application Portfolio Analysis",
          "Migration Strategy Development",
          "Lift-and-Shift Implementation",
          "Refactoring for Cloud-Native Architecture"
        ]
      },
      {
        title: "Cloud Infrastructure Management",
        description: "Comprehensive management of your AWS cloud environment for optimal performance.",
        items: [
          "Infrastructure as Code (IaC) Implementation",
          "Auto-scaling Configuration",
          "High Availability Architecture",
          "Disaster Recovery Planning",
          "Performance Monitoring and Optimization"
        ]
      },
      {
        title: "Cloud Cost Optimization",
        description: "Strategic approaches to reduce AWS spending while maintaining performance and reliability.",
        items: [
          "Cost Analysis and Reporting",
          "Reserved Instance Planning",
          "Right-sizing Recommendations",
          "Resource Utilization Monitoring",
          "Automated Cost Control Measures"
        ]
      }
    ]
  },
  {
    id: 'qa-testing',
    title: "QA & Testing Services",
    description: "Comprehensive quality assurance to ensure your software meets the highest standards.",
    iconName: "FileSearch",
    details: "Our QA and testing services ensure your software performs flawlessly in real-world conditions. We implement rigorous testing methodologies to identify issues early and ensure your applications meet quality standards.",
    features: [
      "Automated and manual testing",
      "Performance and load testing",
      "Security testing",
      "Mobile and cross-browser testing",
      "Test automation frameworks",
      "QA process consulting"
    ],
    subServices: [
      {
        title: "Functional Testing",
        description: "Comprehensive testing to ensure your software works according to specifications.",
        items: [
          "Regression Testing",
          "Integration Testing",
          "User Acceptance Testing",
          "Exploratory Testing",
          "System Testing"
        ]
      },
      {
        title: "Security Testing",
        description: "Thorough assessment of your applications to identify and remediate security vulnerabilities.",
        items: [
          "Vulnerability Assessment",
          "Penetration Testing",
          "Security Code Reviews",
          "Compliance Testing",
          "API Security Testing"
        ]
      },
      {
        title: "Performance Testing",
        description: "Ensuring your applications perform well under expected and peak load conditions.",
        items: [
          "Load Testing",
          "Stress Testing",
          "Scalability Testing",
          "Endurance Testing",
          "Spike Testing"
        ]
      },
      {
        title: "Testing Process, Tools & Approach",
        description: "Structured methodologies and industry-standard tools to streamline and enhance testing efficiency.",
        items: [
          "Test Strategy Development",
          "Test Automation Framework Design",
          "CI/CD Testing Integration",
          "Testing Tools Selection & Implementation",
          "QA Process Optimization"
        ]
      }
    ]
  },
  {
    id: 'project-management',
    title: "Project Management",
    description: "End-to-end project coordination with proven methodologies for on-time, on-budget delivery.",
    iconName: "Globe",
    details: "Our project management services ensure successful delivery of complex IT initiatives. We employ industry-standard methodologies and best practices to manage scope, schedule, resources, and risks effectively.",
    features: [
      "Agile and traditional methodologies",
      "Resource planning and allocation",
      "Risk management",
      "Status reporting and communication",
      "Budget monitoring and control",
      "Stakeholder management"
    ],
    subServices: [
      {
        title: "Agile Project Management",
        description: "Flexible, iterative approach to managing software development projects for faster delivery.",
        items: [
          "Scrum Implementation",
          "Kanban Process Management",
          "Sprint Planning & Execution",
          "Agile Team Coaching",
          "Continuous Delivery Support"
        ]
      },
      {
        title: "Traditional Project Management",
        description: "Structured approach for projects requiring detailed planning and predictable execution.",
        items: [
          "Waterfall Methodology Implementation",
          "Critical Path Analysis",
          "Milestone Planning & Tracking",
          "Detailed Resource Planning",
          "Formal Change Management"
        ]
      },
      {
        title: "Program & Portfolio Management",
        description: "Coordinated management of multiple related projects to achieve strategic business objectives.",
        items: [
          "Program Governance Framework",
          "Project Portfolio Prioritization",
          "Resource Optimization Across Projects",
          "Program Risk Management",
          "Benefits Realization Tracking"
        ]
      }
    ]
  },
  {
    id: 'offshore-development',
    title: "Offshore Development",
    description: "Access skilled global talent pools with our dedicated offshore development teams.",
    iconName: "Users",
    details: "Our offshore development services provide access to skilled talent at competitive rates. We manage dedicated teams that integrate seamlessly with your in-house resources for efficient project delivery.",
    features: [
      "Dedicated development teams",
      "Staff augmentation",
      "Follow-the-sun development model",
      "Transparent communication",
      "Knowledge transfer",
      "Quality control and oversight"
    ],
    subServices: [
      {
        title: "Dedicated Development Teams",
        description: "Fully managed development teams working exclusively on your projects.",
        items: [
          "Team Formation & Onboarding",
          "Technical Skill Matching",
          "Performance Monitoring",
          "Team Scaling Options",
          "Seamless Integration with In-house Teams"
        ]
      },
      {
        title: "Staff Augmentation",
        description: "Flexible resource allocation to supplement your existing development capacity.",
        items: [
          "Skill Gap Analysis",
          "Rapid Resource Deployment",
          "Domain-specific Expertise",
          "Short & Long-term Engagements",
          "Knowledge Transfer Plans"
        ]
      },
      {
        title: "Development Process & Tools",
        description: "Industry-standard processes and tools ensuring efficient offshore collaboration.",
        items: [
          "Communication Protocol Setup",
          "Collaboration Tool Implementation",
          "Development Workflow Optimization",
          "Code Repository Management",
          "Continuous Integration/Delivery Setup"
        ]
      }
    ]
  }
];
