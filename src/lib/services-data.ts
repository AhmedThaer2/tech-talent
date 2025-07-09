export interface ServiceData {
  id: string;
  title: string;
  category:
    | "penetration-testing"
    | "auditing-consultation"
    | "additional-services";
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  duration: string;
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
  icon: string;
}

export const servicesData: ServiceData[] = [
  // Penetration Testing Services
  {
    id: "external-penetration-testing",
    title: "External Penetration Testing",
    category: "penetration-testing",
    shortDescription:
      "External penetration testing is the evaluation of your network's perimeter defenses.",
    fullDescription:
      "Our external penetration testing service simulates real-world attacks against your external-facing systems and applications. We use the same tools and techniques as malicious hackers to identify vulnerabilities that could be exploited to gain unauthorized access to your network.",
    features: [
      "Network perimeter assessment",
      "Web application testing",
      "Email server security testing",
      "DNS and domain security analysis",
      "Firewall configuration review",
      "VPN security assessment",
    ],
    benefits: [
      "Identify external vulnerabilities before attackers do",
      "Validate security controls effectiveness",
      "Meet compliance requirements",
      "Reduce risk of data breaches",
      "Improve overall security posture",
    ],
    process: [
      {
        step: 1,
        title: "Reconnaissance",
        description:
          "Gather information about your external infrastructure and identify potential attack vectors.",
      },
      {
        step: 2,
        title: "Vulnerability Assessment",
        description:
          "Scan and identify vulnerabilities in external-facing systems and applications.",
      },
      {
        step: 3,
        title: "Exploitation",
        description:
          "Attempt to exploit identified vulnerabilities to determine their impact.",
      },
      {
        step: 4,
        title: "Reporting",
        description:
          "Provide detailed findings with risk ratings and remediation recommendations.",
      },
    ],
    deliverables: [
      "Executive summary report",
      "Technical findings report",
      "Risk assessment matrix",
      "Remediation roadmap",
      "Proof of concept demonstrations",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$8,000",
      premium: "$12,000",
    },
    icon: "Target",
  },

  {
    id: "internal-penetration-testing",
    title: "Internal Penetration Testing",
    category: "penetration-testing",
    shortDescription:
      "Internal penetration testing emulates attacks from inside your corporate network.",
    fullDescription:
      "Our internal penetration testing service simulates an attacker who has gained initial access to your internal network. We test your internal security controls, identify privilege escalation paths, and assess lateral movement capabilities.",
    features: [
      "Internal network scanning",
      "Active Directory assessment",
      "Privilege escalation testing",
      "Lateral movement simulation",
      "Internal application testing",
      "Wireless network assessment",
    ],
    benefits: [
      "Identify internal security weaknesses",
      "Test incident response capabilities",
      "Validate network segmentation",
      "Assess insider threat risks",
      "Improve internal security controls",
    ],
    process: [
      {
        step: 1,
        title: "Network Discovery",
        description:
          "Map internal network topology and identify active systems and services.",
      },
      {
        step: 2,
        title: "Vulnerability Analysis",
        description:
          "Identify vulnerabilities in internal systems and applications.",
      },
      {
        step: 3,
        title: "Privilege Escalation",
        description:
          "Attempt to gain higher-level access and administrative privileges.",
      },
      {
        step: 4,
        title: "Lateral Movement",
        description:
          "Test ability to move between systems and access sensitive data.",
      },
    ],
    deliverables: [
      "Internal security assessment report",
      "Network topology documentation",
      "Privilege escalation findings",
      "Lateral movement analysis",
      "Security recommendations",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$7,000",
      standard: "$10,000",
      premium: "$15,000",
    },
    icon: "Network",
  },

  {
    id: "web-application-testing",
    title: "Web Application Testing",
    category: "penetration-testing",
    shortDescription:
      "Web application testing measures the security posture of your website and/or custom developed application.",
    fullDescription:
      "Our web application penetration testing service provides comprehensive security assessment of your web applications, including custom-developed applications and third-party solutions. We test for OWASP Top 10 vulnerabilities and business logic flaws.",
    features: [
      "OWASP Top 10 vulnerability testing",
      "Authentication and authorization testing",
      "Session management assessment",
      "Input validation testing",
      "Business logic flaw identification",
      "API security testing",
    ],
    benefits: [
      "Protect against web-based attacks",
      "Ensure data confidentiality",
      "Maintain application availability",
      "Meet compliance requirements",
      "Protect customer information",
    ],
    process: [
      {
        step: 1,
        title: "Application Mapping",
        description:
          "Understand application functionality and identify all entry points.",
      },
      {
        step: 2,
        title: "Automated Scanning",
        description: "Use automated tools to identify common vulnerabilities.",
      },
      {
        step: 3,
        title: "Manual Testing",
        description:
          "Perform manual testing for complex vulnerabilities and business logic flaws.",
      },
      {
        step: 4,
        title: "Exploitation",
        description: "Demonstrate the impact of identified vulnerabilities.",
      },
    ],
    deliverables: [
      "Web application security report",
      "OWASP compliance assessment",
      "Vulnerability remediation guide",
      "Secure coding recommendations",
      "Proof of concept exploits",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$4,000",
      standard: "$6,000",
      premium: "$9,000",
    },
    icon: "Globe",
  },

  {
    id: "vulnerability-scanning",
    title: "Vulnerability Scanning",
    category: "penetration-testing",
    shortDescription:
      "Vulnerability assessments evaluate and prioritize exposures in your organization.",
    fullDescription:
      "Our vulnerability scanning service provides automated and manual assessment of your IT infrastructure to identify security vulnerabilities. We use industry-leading tools and techniques to discover, analyze, and prioritize security weaknesses.",
    features: [
      "Automated vulnerability scanning",
      "Manual verification of findings",
      "Risk-based prioritization",
      "Compliance mapping",
      "Trend analysis and reporting",
      "Remediation guidance",
    ],
    benefits: [
      "Proactive vulnerability identification",
      "Risk-based remediation prioritization",
      "Compliance requirement fulfillment",
      "Reduced attack surface",
      "Improved security awareness",
    ],
    process: [
      {
        step: 1,
        title: "Asset Discovery",
        description:
          "Identify and catalog all systems within the assessment scope.",
      },
      {
        step: 2,
        title: "Vulnerability Scanning",
        description: "Perform comprehensive automated vulnerability scans.",
      },
      {
        step: 3,
        title: "Manual Verification",
        description:
          "Manually verify critical findings to reduce false positives.",
      },
      {
        step: 4,
        title: "Risk Assessment",
        description:
          "Analyze and prioritize vulnerabilities based on risk and impact.",
      },
    ],
    deliverables: [
      "Vulnerability assessment report",
      "Risk-prioritized findings",
      "Remediation timeline",
      "Compliance gap analysis",
      "Executive dashboard",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$2,000",
      standard: "$3,500",
      premium: "$5,000",
    },
    icon: "AlertTriangle",
  },

  {
    id: "wireless-penetration-testing",
    title: "Wireless Penetration Testing",
    category: "penetration-testing",
    shortDescription:
      "Wireless testing is the evaluation of your wireless posture.",
    fullDescription:
      "Our wireless penetration testing service assesses the security of your wireless networks, including WiFi, Bluetooth, and other wireless technologies. We identify vulnerabilities that could allow unauthorized access to your network.",
    features: [
      "WiFi security assessment",
      "Bluetooth security testing",
      "Wireless access point evaluation",
      "Encryption strength analysis",
      "Rogue access point detection",
      "Guest network security review",
    ],
    benefits: [
      "Secure wireless infrastructure",
      "Prevent unauthorized access",
      "Protect sensitive data transmission",
      "Ensure compliance with standards",
      "Reduce wireless attack vectors",
    ],
    process: [
      {
        step: 1,
        title: "Wireless Discovery",
        description:
          "Identify all wireless networks and devices in the environment.",
      },
      {
        step: 2,
        title: "Security Assessment",
        description:
          "Evaluate wireless security configurations and encryption.",
      },
      {
        step: 3,
        title: "Attack Simulation",
        description:
          "Attempt to gain unauthorized access to wireless networks.",
      },
      {
        step: 4,
        title: "Remediation Planning",
        description:
          "Provide recommendations for wireless security improvements.",
      },
    ],
    deliverables: [
      "Wireless security assessment report",
      "Network configuration review",
      "Security recommendations",
      "Compliance checklist",
      "Best practices guide",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$3,000",
      standard: "$4,500",
      premium: "$6,500",
    },
    icon: "Wifi",
  },

  {
    id: "social-engineering",
    title: "Social Engineering",
    category: "penetration-testing",
    shortDescription:
      "Social engineering assesses the human vulnerability factor in your organization.",
    fullDescription:
      "Our social engineering service tests your employees' awareness and response to social engineering attacks. We simulate phishing campaigns, vishing attacks, and physical social engineering to assess human vulnerabilities.",
    features: [
      "Phishing campaign simulation",
      "Vishing (voice phishing) testing",
      "Physical social engineering",
      "Pretexting scenarios",
      "Employee awareness assessment",
      "Security awareness training",
    ],
    benefits: [
      "Identify human vulnerabilities",
      "Improve security awareness",
      "Reduce successful phishing attacks",
      "Strengthen security culture",
      "Meet compliance training requirements",
    ],
    process: [
      {
        step: 1,
        title: "Planning",
        description:
          "Design social engineering scenarios based on your organization.",
      },
      {
        step: 2,
        title: "Execution",
        description: "Conduct phishing campaigns and social engineering tests.",
      },
      {
        step: 3,
        title: "Analysis",
        description: "Analyze employee responses and identify vulnerabilities.",
      },
      {
        step: 4,
        title: "Training",
        description: "Provide targeted security awareness training.",
      },
    ],
    deliverables: [
      "Social engineering assessment report",
      "Employee vulnerability analysis",
      "Training recommendations",
      "Phishing simulation results",
      "Security awareness materials",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$3,500",
      standard: "$5,500",
      premium: "$8,000",
    },
    icon: "Users",
  },

  {
    id: "physical-penetration-testing",
    title: "Physical Penetration Testing",
    category: "penetration-testing",
    shortDescription:
      "Physical penetration tests evaluate a company's physical security posture.",
    fullDescription:
      "Our physical penetration testing service assesses your organization's physical security controls, including building access, badge systems, surveillance, and physical barriers. We test the effectiveness of your physical security measures.",
    features: [
      "Building access testing",
      "Badge system evaluation",
      "Surveillance system assessment",
      "Physical barrier testing",
      "Tailgating simulation",
      "Lock picking and bypass testing",
    ],
    benefits: [
      "Identify physical security weaknesses",
      "Prevent unauthorized facility access",
      "Protect physical assets",
      "Ensure employee safety",
      "Meet compliance requirements",
    ],
    process: [
      {
        step: 1,
        title: "Reconnaissance",
        description:
          "Gather information about physical security measures and layout.",
      },
      {
        step: 2,
        title: "Access Attempts",
        description:
          "Attempt to gain unauthorized physical access to facilities.",
      },
      {
        step: 3,
        title: "Security Testing",
        description: "Test physical security controls and detection systems.",
      },
      {
        step: 4,
        title: "Documentation",
        description:
          "Document findings and provide improvement recommendations.",
      },
    ],
    deliverables: [
      "Physical security assessment report",
      "Access control evaluation",
      "Security recommendations",
      "Compliance gap analysis",
      "Physical security policy review",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$4,000",
      standard: "$6,500",
      premium: "$9,500",
    },
    icon: "Building",
  },
  {
    id: "pci-dss-qsa-auditing",
    title: "PCI-DSS QSA & Auditing",
    category: "penetration-testing",
    shortDescription:
      "PCI-DSS QSA and Auditing services validate your organization's compliance posture.",
    fullDescription:
      "Our PCI-DSS Qualified Security Assessor (QSA) services help organizations achieve and maintain Payment Card Industry Data Security Standard compliance. We provide comprehensive assessments and ongoing compliance support.",
    features: [
      "PCI-DSS compliance assessment",
      "Gap analysis and remediation",
      "Report on Compliance (ROC)",
      "Attestation of Compliance (AOC)",
      "Quarterly vulnerability scanning",
      "Ongoing compliance monitoring",
    ],
    benefits: [
      "Achieve PCI-DSS compliance",
      "Reduce risk of data breaches",
      "Avoid compliance penalties",
      "Protect cardholder data",
      "Maintain merchant status",
    ],
    process: [
      {
        step: 1,
        title: "Scoping",
        description:
          "Define the cardholder data environment and assessment scope.",
      },
      {
        step: 2,
        title: "Assessment",
        description:
          "Evaluate compliance with all applicable PCI-DSS requirements.",
      },
      {
        step: 3,
        title: "Remediation",
        description: "Address identified gaps and implement required controls.",
      },
      {
        step: 4,
        title: "Validation",
        description:
          "Validate remediation efforts and issue compliance documentation.",
      },
    ],
    deliverables: [
      "Report on Compliance (ROC)",
      "Attestation of Compliance (AOC)",
      "Gap analysis report",
      "Remediation roadmap",
      "Compliance maintenance plan",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$8,000",
      standard: "$12,000",
      premium: "$18,000",
    },
    icon: "CreditCard",
  },

  // Security Auditing & Consultation Services
  {
    id: "security-risk-assessment",
    title: "Security Risk Assessment",
    category: "auditing-consultation",
    shortDescription:
      "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
    fullDescription:
      "Our comprehensive security risk assessment service identifies, analyzes, and evaluates security risks across your organization. We provide a systematic approach to understanding your risk landscape and developing effective risk management strategies.",
    features: [
      "Threat identification and analysis",
      "Vulnerability assessment",
      "Risk impact evaluation",
      "Risk likelihood assessment",
      "Control effectiveness review",
      "Risk treatment recommendations",
    ],
    benefits: [
      "Understand your risk landscape",
      "Prioritize security investments",
      "Meet regulatory requirements",
      "Improve decision making",
      "Reduce business risk",
    ],
    process: [
      {
        step: 1,
        title: "Asset Identification",
        description:
          "Identify and catalog critical business assets and information.",
      },
      {
        step: 2,
        title: "Threat Analysis",
        description:
          "Identify potential threats and threat actors relevant to your organization.",
      },
      {
        step: 3,
        title: "Vulnerability Assessment",
        description:
          "Assess vulnerabilities that could be exploited by identified threats.",
      },
      {
        step: 4,
        title: "Risk Evaluation",
        description:
          "Calculate risk levels and develop treatment recommendations.",
      },
    ],
    deliverables: [
      "Risk assessment report",
      "Risk register",
      "Risk treatment plan",
      "Executive summary",
      "Compliance mapping",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$6,000",
      standard: "$9,000",
      premium: "$13,000",
    },
    icon: "Shield",
  },

  {
    id: "cloud-security-assessment",
    title: "Cloud Security Assessment",
    category: "auditing-consultation",
    shortDescription:
      "A cloud security assessment evaluates your organization's cloud infrastructure and helps secure your critical cloud assets.",
    fullDescription:
      "Our cloud security assessment service provides comprehensive evaluation of your cloud infrastructure across AWS, Azure, GCP, and other cloud platforms. We assess configuration, access controls, data protection, and compliance posture.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Cloud",
  },

  {
    id: "console-architecture-assessment",
    title: "Console Architecture Assessment",
    category: "auditing-consultation",
    shortDescription:
      "A console architecture assessment considers the perimeter and internal network architectures and configurations.",
    fullDescription:
      "A console architecture assessment considers the perimeter and internal network architectures and configurations. After reviewing the architecture and configurations, the engineer validates the implementation on the system consoles. This review precipitates architectural and detailed implementation recommendations for improvement.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Network",
  },

  {
    id: "security-gap-analysis",
    title: "Security Gap Analysis",
    category: "auditing-consultation",
    shortDescription:
      "A security gap analysis is a review of your organization’s security posture.",
    fullDescription:
      "A security gap analysis is a review of your organization’s security posture.  Our engineers will conduct interviews with your security team to evaluate your organization’s security posture based on the Center for Internet Security (CIS) Top 20 Critical Security Controls.  Once all information has been gathered, our team will provide a risk-prioritized report and assist with closing your organization’s cyber gaps.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Network",
  },

  {
    id: "host-compliance-and-malware-audit",
    title: "Host Compliance & Malware Audit",
    category: "auditing-consultation",
    shortDescription:
      "A host compliance audit evaluates your devices for security best-practices.",
    fullDescription:
      "A host compliance audit evaluates a device (workstation, server, etc.) for security best-practices. Our engineers will evaluate the security of the device through measures such as attempting to boot alternate media, evaluating endpoint security solutions against malware, reviewing firewall configurations, reviewing patch management, and more.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Network",
  },

  {
    id: "password-audit",
    title: "Password Audit",
    category: "auditing-consultation",
    shortDescription:
      "A password audit is the evaluation of your organization’s password policy.",
    fullDescription:
      "A password audit is the evaluation of your organization’s password policy. Our engineers will perform a dump of all user hashes within an organization and perform hash cracking against the hashes to evaluate password strength. Weak passwords are one of the most common ways we compromise organizations. An audit can assist with employee training and the improvement of your organization’s password policy and security posture.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Network",
  },

  {
    id: "security-policy-assessment",
    title: "Security Policy Assessment",
    category: "auditing-consultation",
    shortDescription:
      "A security policy assessment is the evaluation of your organization’s current security policies.",
    fullDescription:
      "A security policy assessment is the evaluation of your organization’s current security policies. Our engineers will assist with the improvement of policies or create policies for your organization. Some policies we can assist with include: Acceptable Use Policy (AUP), Incident Response, Disaster Recovery, Remote Access, BYOD, and more.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Network",
  },

  {
    id: "tailored-consulting",
    title: "Tailored Consulting",
    category: "auditing-consultation",
    shortDescription:
      "Sometimes, your organization doesn’t fit into “off the rack” assessments and that’s okay. ",
    fullDescription:
      "Sometimes, your organization doesn’t fit into “off the rack” assessments and that’s okay. We’re here to tailor to you and be a perfect fit. If you’re seeking security consulting that’s not listed here, please contact us and let us know how we can help.",
    features: [
      "Multi-cloud platform assessment",
      "Configuration review",
      "Access control evaluation",
      "Data protection analysis",
      "Compliance assessment",
      "Cost optimization recommendations",
    ],
    benefits: [
      "Secure cloud infrastructure",
      "Ensure compliance in the cloud",
      "Optimize cloud costs",
      "Improve cloud governance",
      "Reduce cloud security risks",
    ],
    process: [
      {
        step: 1,
        title: "Cloud Inventory",
        description:
          "Catalog all cloud resources and services across platforms.",
      },
      {
        step: 2,
        title: "Configuration Review",
        description:
          "Assess cloud service configurations against best practices.",
      },
      {
        step: 3,
        title: "Security Analysis",
        description: "Evaluate security controls and access management.",
      },
      {
        step: 4,
        title: "Recommendations",
        description: "Provide actionable recommendations for improvement.",
      },
    ],
    deliverables: [
      "Cloud security assessment report",
      "Configuration recommendations",
      "Compliance gap analysis",
      "Cost optimization suggestions",
      "Cloud security roadmap",
    ],
    duration: "No set duration",
    pricing: {
      basic: "$5,000",
      standard: "$7,500",
      premium: "$11,000",
    },
    icon: "Network",
  },
  // Add more services as needed...
];

export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find((service) => service.id === id);
}

export function getServicesByCategory(
  category: ServiceData["category"]
): ServiceData[] {
  return servicesData.filter((service) => service.category === category);
}

export function getAllServices(): ServiceData[] {
  return servicesData;
}
