
import { Globe, FileText, ChartBar, Briefcase, FileCode, Building } from 'lucide-react';

export const solutionsData = [
  {
    id: 'digital-transformation',
    title: "Digital Transformation",
    description: "Enterprise digital strategy and execution",
    iconName: "Globe",
    details: "Our comprehensive digital transformation solutions help enterprises evolve their business models, processes, and customer experiences through strategic implementation of modern technologies.",
    benefits: [
      "Streamlined business operations",
      "Enhanced customer experiences",
      "Data-driven decision making",
      "Increased business agility",
      "Improved competitive advantage"
    ],
    subSolutions: [
      {
        title: "Business Process Automation",
        description: "Automate manual processes to improve efficiency, reduce errors, and free up human resources for higher-value work.",
        items: [
          "Workflow Automation Solutions",
          "Robotic Process Automation (RPA)",
          "Intelligent Document Processing",
          "Business Rule Implementation",
          "Process Analytics & Improvement"
        ]
      },
      {
        title: "Digital Experience Platforms",
        description: "Create seamless, personalized digital experiences across all customer touchpoints.",
        items: [
          "Customer Portal Development",
          "Employee Experience Platforms",
          "Digital Workplace Solutions",
          "Omnichannel Experience Design",
          "User Experience Optimization"
        ]
      },
      {
        title: "Digital Innovation Strategy",
        description: "Develop and implement forward-thinking strategies to drive digital growth and competitive advantage.",
        items: [
          "Digital Maturity Assessment",
          "Innovation Roadmap Development",
          "Emerging Technology Evaluation",
          "Pilot Program Implementation",
          "Change Management Support"
        ]
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: "Cloud & DevOps Enablement",
    description: "Accelerate your development pipeline",
    iconName: "FileText",
    details: "Our Cloud & DevOps solutions help organizations implement modern software delivery practices, automate infrastructure, and optimize their cloud environments for maximum efficiency.",
    benefits: [
      "Faster release cycles",
      "Improved reliability and uptime",
      "Automated infrastructure management",
      "Reduced operational costs",
      "Enhanced security posture"
    ],
    subSolutions: [
      {
        title: "DevOps Transformation",
        description: "Implement DevOps culture, practices and tools to accelerate software delivery and enhance collaboration.",
        items: [
          "DevOps Readiness Assessment",
          "CI/CD Pipeline Implementation",
          "Infrastructure as Code (IaC)",
          "Automated Testing Frameworks",
          "DevOps Team Training & Coaching"
        ]
      },
      {
        title: "Cloud Migration & Optimization",
        description: "Strategic migration to cloud platforms with ongoing optimization for performance and cost.",
        items: [
          "Cloud Readiness Assessment",
          "Migration Strategy & Planning",
          "Lift-and-Shift Implementation",
          "Application Refactoring for Cloud",
          "Multi-Cloud Management Solutions"
        ]
      },
      {
        title: "Containerization & Orchestration",
        description: "Modernize applications through containerization for improved portability and resource efficiency.",
        items: [
          "Docker Implementation",
          "Kubernetes Cluster Deployment",
          "Microservices Architecture Design",
          "Container Security Hardening",
          "Service Mesh Implementation"
        ]
      }
    ]
  },
  {
    id: 'data-analytics',
    title: "Data Analytics & AI",
    description: "Insights-driven business decisions",
    iconName: "ChartBar",
    details: "Our data analytics and AI solutions transform raw data into actionable insights, enabling organizations to make informed decisions, identify trends, and gain competitive advantages.",
    benefits: [
      "Real-time business intelligence",
      "Predictive analytics capabilities",
      "Enhanced customer understanding",
      "Optimized operational efficiency",
      "Data-driven product development"
    ],
    subSolutions: [
      {
        title: "Business Intelligence",
        description: "Transform data into meaningful insights with robust reporting and visualization solutions.",
        items: [
          "Data Warehouse Implementation",
          "Custom Dashboard Development",
          "Self-service BI Platforms",
          "KPI Monitoring Systems",
          "Data Visualization Solutions"
        ]
      },
      {
        title: "Advanced Analytics",
        description: "Leverage statistical analysis and predictive modeling to unlock future insights from your data.",
        items: [
          "Predictive Analytics Models",
          "Customer Segmentation Analysis",
          "Demand Forecasting Systems",
          "Risk Assessment Frameworks",
          "Prescriptive Analytics Solutions"
        ]
      },
      {
        title: "Artificial Intelligence & ML",
        description: "Implement AI and machine learning solutions to automate processes and enhance decision-making.",
        items: [
          "Machine Learning Model Development",
          "Natural Language Processing Solutions",
          "Computer Vision Implementation",
          "Recommendation Engine Creation",
          "AI-powered Process Automation"
        ]
      }
    ]
  },
  {
    id: 'fintech',
    title: "Fintech Solutions",
    description: "Technology for financial services",
    iconName: "Briefcase",
    details: "Our fintech solutions help financial institutions modernize their technology infrastructure, enhance security, and deliver innovative customer experiences in an increasingly digital industry.",
    benefits: [
      "Regulatory compliance automation",
      "Enhanced fraud detection",
      "Seamless payment processing",
      "Improved customer engagement",
      "Modernized banking experiences"
    ],
    subSolutions: [
      {
        title: "Payment Solutions",
        description: "Modern, secure payment processing systems for traditional and digital financial services.",
        items: [
          "Payment Gateway Integration",
          "Mobile Payment Applications",
          "Digital Wallet Solutions",
          "Real-time Payment Systems",
          "Subscription Billing Platforms"
        ]
      },
      {
        title: "Regulatory & Compliance",
        description: "Technology solutions to streamline compliance processes and minimize regulatory risk.",
        items: [
          "KYC/AML Compliance Systems",
          "Regulatory Reporting Automation",
          "Transaction Monitoring Solutions",
          "Compliance Dashboard Development",
          "Audit Trail Implementation"
        ]
      },
      {
        title: "Banking Technology",
        description: "Digital solutions to modernize banking operations and enhance customer experiences.",
        items: [
          "Core Banking System Integration",
          "Digital Banking Platforms",
          "Customer Onboarding Automation",
          "Financial Advisory Tools",
          "Banking API Development"
        ]
      }
    ]
  },
  {
    id: 'healthcare',
    title: "Healthcare Solutions",
    description: "Digital healthcare innovations",
    iconName: "FileCode",
    details: "Our healthcare technology solutions help organizations deliver better patient care, streamline operations, and ensure compliance with healthcare regulations and standards.",
    benefits: [
      "Enhanced patient engagement",
      "Streamlined clinical workflows",
      "Secure health data management",
      "Remote care capabilities",
      "Interoperability with healthcare systems"
    ],
    subSolutions: [
      {
        title: "Patient Engagement Systems",
        description: "Digital solutions to improve patient communication, education, and participation in care.",
        items: [
          "Patient Portal Development",
          "Telehealth Platforms",
          "Appointment Scheduling Systems",
          "Patient Education Solutions",
          "Remote Monitoring Integration"
        ]
      },
      {
        title: "Healthcare Data Management",
        description: "Secure, compliant systems for managing sensitive healthcare information.",
        items: [
          "EHR/EMR Integration Solutions",
          "HIPAA-Compliant Data Storage",
          "Healthcare Data Analytics",
          "Medical Imaging Systems",
          "Healthcare Interoperability Tools"
        ]
      },
      {
        title: "Clinical Workflow Solutions",
        description: "Technologies to optimize clinical processes and improve healthcare delivery efficiency.",
        items: [
          "Clinical Decision Support Systems",
          "Provider Workflow Optimization",
          "Medical Resource Management",
          "Laboratory Information Systems",
          "Medical Staff Scheduling Solutions"
        ]
      }
    ]
  },
  {
    id: 'retail',
    title: "Retail Technology",
    description: "Omnichannel retail experiences",
    iconName: "Building",
    details: "Our retail technology solutions help businesses create seamless omnichannel experiences, optimize supply chain operations, and leverage data for personalized customer engagement.",
    benefits: [
      "Unified customer experience",
      "Inventory optimization",
      "Advanced analytics and insights",
      "Supply chain visibility",
      "Personalized marketing capabilities"
    ],
    subSolutions: [
      {
        title: "Omnichannel Commerce",
        description: "Create seamless shopping experiences across physical stores, online platforms, and mobile devices.",
        items: [
          "E-commerce Platform Development",
          "Mobile Commerce Applications",
          "In-store Digital Solutions",
          "Click & Collect Systems",
          "Unified Shopping Cart Technology"
        ]
      },
      {
        title: "Retail Analytics & Insights",
        description: "Data-driven solutions to understand customer behavior and optimize retail operations.",
        items: [
          "Customer Behavior Analytics",
          "Inventory Forecasting Systems",
          "Store Performance Dashboards",
          "Pricing Optimization Tools",
          "Shopper Journey Analysis"
        ]
      },
      {
        title: "Supply Chain Optimization",
        description: "Technology solutions to streamline retail supply chain operations and improve visibility.",
        items: [
          "Inventory Management Systems",
          "Supplier Integration Platforms",
          "Order Fulfillment Optimization",
          "Logistics Tracking Solutions",
          "Warehousing Automation Tools"
        ]
      }
    ]
  }
];
