export interface Opportunity {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  targetAudience: string;
  image: string;
  images: string[];
  color: string;
}

export const opportunities: Opportunity[] = [
  {
    id: "cedar-ai",
    title: "Cedar AI",
    subtitle: "Cannabis Operations Powerhouse",
    tagline: "Transform Complexity into Competitive Advantage",
    description: "Cedar AI transforms cannabis operations from reactive compliance to proactive optimization, turning regulatory complexity into competitive advantage. This comprehensive AI-powered platform optimizes every facet of cannabis operations, from cultivation to distribution, with intelligent AI-driven insights for maximum efficiency and compliance.",
    features: [
      {
        title: "Regulatory Compliance",
        description: "Automates complex compliance requirements, ensuring your operations stay ahead of regulatory changes"
      },
      {
        title: "Supply Chain Management",
        description: "Streamlined seed-to-sale tracking with real-time visibility across your entire operation"
      },
      {
        title: "Financial Insights",
        description: "Optimized P&L analysis and precise forecasts to maximize profitability"
      },
      {
        title: "Risk Mitigation",
        description: "Proactive risk detection and management to protect your business"
      }
    ],
    benefits: [
      "Transforms reactive compliance into proactive optimization",
      "Reduces operational complexity by 60%",
      "Ensures 100% regulatory adherence",
      "Maximizes efficiency across all cannabis operations",
      "Reduces compliance violations by 95%",
      "Improves supply chain efficiency by 40%"
    ],
    targetAudience: "Cannabis cultivators, Multi-state cannabis operators, Dispensary owners, Cannabis distribution companies",
    image: "/images/cedar-ai-1-main.png",
    images: [
      "/images/cedar-ai-1-main.png",
      "/images/cedar-ai-2-compliance.png",
      "/images/cedar-ai-3-workflow.png"
    ],
    color: "#2D5F3F"
  },
  {
    id: "hope-ai",
    title: "Hope AI",
    subtitle: "Foundation & Non-Profit Portal",
    tagline: "Maximum Impact Through Intelligent Resource Allocation",
    description: "Hope AI transforms philanthropy, ensuring maximum social impact through intelligent resource allocation and transparent accountability. This platform empowers non-profits with AI tools for donor engagement, impact measurement, and operational efficiency, amplifying mission reach and effectiveness.",
    features: [
      {
        title: "Grant Management",
        description: "Streamlines grant applications and maximizes measurable impact through AI-powered optimization"
      },
      {
        title: "Donor Relations",
        description: "Fosters personalized donor engagement and builds strong, lasting relationships"
      },
      {
        title: "Financial Oversight",
        description: "Ensures real-time transparency and clear impact reporting for all stakeholders"
      },
      {
        title: "Community Impact",
        description: "Analyzes data for optimized programs and measurable social ROI"
      }
    ],
    benefits: [
      "Maximizes social impact and mission effectiveness",
      "Improves donor retention by 85%",
      "Enhances operational efficiency by 50%",
      "Provides transparent accountability",
      "Increases grant success rate by 67%",
      "Reduces administrative burden significantly"
    ],
    targetAudience: "Non-profit organizations, Foundations, Community organizations, Social impact initiatives",
    image: "/images/hope-ai-1-main.png",
    images: [
      "/images/hope-ai-1-main.png",
      "/images/hope-ai-2-features.png",
      "/images/hope-ai-3-impact.png"
    ],
    color: "#3D7F5F"
  },
  {
    id: "pip-framework",
    title: "PIP Framework",
    subtitle: "Performance Intelligence Platform",
    tagline: "Transform Data into Strategic Insights",
    description: "The PIP Framework transforms raw financial data into clear strategic insights, providing unparalleled visibility and control over operational performance. Gain unparalleled clarity into team performance and project progress, leveraging advanced AI to identify bottlenecks and foster data-driven decision-making.",
    features: [
      {
        title: "Cost Tracking Systems",
        description: "Implement robust systems for precise expense monitoring and financial health insights"
      },
      {
        title: "QuickBooks Integration",
        description: "Seamlessly connect with QuickBooks for streamlined accounting and data synchronization"
      },
      {
        title: "Strategic Process Design",
        description: "Optimize workflows and operations for maximum efficiency and strategic alignment"
      },
      {
        title: "Team Accountability Maps",
        description: "Clearly define roles and responsibilities to foster ownership and measurable outcomes"
      },
      {
        title: "Business Intelligence",
        description: "Leverage advanced analytics to gain actionable insights for informed decision-making"
      }
    ],
    benefits: [
      "Unparalleled visibility into business operations",
      "Data-driven decision making capabilities",
      "Identifies bottlenecks quickly and efficiently",
      "Improves team accountability by 60%",
      "Reduces operational costs by 28%",
      "Increases team productivity by 35%"
    ],
    targetAudience: "Business owners, Operations managers, Financial controllers, Executive teams",
    image: "/images/pip-framework-1-main.png",
    images: [
      "/images/pip-framework-1-main.png",
      "/images/pip-framework-2-icons.png",
      "/images/pip-framework-3-workflow.png"
    ],
    color: "#2D5F3F"
  },
  {
    id: "genesis-manufacturing",
    title: "Genesis Manufacturing System",
    subtitle: "Autonomous Factory Ecosystem",
    tagline: "Manufacturing Reimagined Through AI",
    description: "Transform manufacturing processes with an autonomous AI-driven ecosystem, enhancing production efficiency, quality control, and predictive maintenance. The Genesis Manufacturing System combines the Genesis Design Engine and AR Interface to reduce product development cycles from months to days while achieving unprecedented efficiency and quality.",
    features: [
      {
        title: "Genesis Design Engine",
        description: "AI agents for design-to-manufacturing automation, streamlining every step from concept to production"
      },
      {
        title: "Genesis AR Interface",
        description: "Immersive augmented reality control system for intuitive and precise factory management"
      },
      {
        title: "Exponential Speed",
        description: "Reduce development cycles from months to days, accelerating time to market by 90%"
      },
      {
        title: "Unprecedented Efficiency",
        description: "Automate routine tasks, freeing engineers to focus on innovation and complex problem-solving"
      },
      {
        title: "Superior Quality",
        description: "Virtually eliminate human error, ensuring consistent, high-precision manufacturing outputs at 99.9% accuracy"
      }
    ],
    benefits: [
      "Accelerated time to market (90% faster)",
      "Reduced manufacturing costs by 35%",
      "Consistent high-precision outputs (99.9% accuracy)",
      "Enhanced quality control and predictive maintenance",
      "Attracts top engineering talent",
      "Significant cost reduction through optimal resource utilization"
    ],
    targetAudience: "Manufacturing companies, Product development teams, Factory operations, Industrial engineers",
    image: "/images/genesis-manufacturing-1-main.png",
    images: [
      "/images/genesis-manufacturing-1-main.png",
      "/images/genesis-manufacturing-2-components.png",
      "/images/genesis-manufacturing-3-benefits.png"
    ],
    color: "#3D7F5F"
  },
  {
    id: "verdantstar",
    title: "VerdantStar",
    subtitle: "Revolutionary Energy Intelligence Platform",
    tagline: "Intelligence That Powers Strategic Decisions",
    description: "Pioneer the future of energy management with an AI platform that optimizes consumption, predicts demand, and integrates renewable sources seamlessly. VerdantStar provides the intelligence layer for identifying and capitalizing on energy opportunities, transforming complex data into actionable insights for investors, developers, and operators.",
    features: [
      {
        title: "Grid Vulnerability Assessment",
        description: "Real-time infrastructure analysis to pinpoint weaknesses and modernization opportunities"
      },
      {
        title: "Market Gap Identification",
        description: "Identify and quantify over $53.2B in funding opportunities across emerging energy markets"
      },
      {
        title: "Utility Intelligence",
        description: "Comprehensive financial and operational analysis of utility companies and their assets"
      },
      {
        title: "Regulatory Compliance Tracking",
        description: "Proactive monitoring of FERC, NERC, and regional regulatory bodies"
      },
      {
        title: "Deployment Optimization",
        description: "AI-powered scenario modeling for optimal resource allocation and project staging"
      },
      {
        title: "Real-Time Market Intelligence",
        description: "Live data feeds and predictive analytics for unparalleled market foresight"
      }
    ],
    benefits: [
      "Identifies optimal deployment opportunities",
      "Mitigates energy infrastructure risks",
      "Maximizes ROI across energy landscape",
      "Optimizes energy consumption patterns",
      "Seamless renewable energy integration",
      "$53.2B+ in opportunities identified"
    ],
    targetAudience: "Energy investors, Utility companies, Energy developers, Infrastructure operators",
    image: "/images/verdantstar-energy-1-main.png",
    images: [
      "/images/verdantstar-energy-1-main.png",
      "/images/verdantstar-energy-2-features.png",
      "/images/verdantstar-energy-3-workflow.png"
    ],
    color: "#2D5F3F"
  },
  {
    id: "evergreen-detroit",
    title: "Evergreen Detroit",
    subtitle: "Integrated Urban Development",
    tagline: "Cultivating Sustainable Growth and Community Wealth",
    description: "Drive sustainable urban growth and smart city initiatives in Detroit, utilizing AI for optimized resource management, planning, and community engagement. This transformative strategy addresses Detroit's unique housing opportunities while creating jobs, enhancing safety, and building community wealth from within by leveraging 43,000 vacant properties as assets.",
    features: [
      {
        title: "Evergreen Detroit 501(c)(3)",
        description: "Central nonprofit entity driving the urban revitalization initiative"
      },
      {
        title: "Construction LLC",
        description: "In-house construction capacity providing 15-25% cost savings through vertical integration"
      },
      {
        title: "Security LLC",
        description: "Resident-staffed safety initiatives generating revenue and community engagement"
      },
      {
        title: "13 Property LLCs",
        description: "Direct housing impact through focused development and community ownership"
      },
      {
        title: "Technology Integration",
        description: "Leveraging AI, 3D printing, and smart management for unprecedented efficiency"
      }
    ],
    benefits: [
      "Creates sustainable community wealth",
      "Provides affordable housing ($80K median home price)",
      "Generates local employment opportunities",
      "Enhances neighborhood safety through resident-led initiatives",
      "Sustainable urban revitalization model",
      "Transforms 43,000 vacant properties into community assets",
      "$6.84M annual revenue potential"
    ],
    targetAudience: "City planners, Community developers, Real estate investors, Detroit residents and stakeholders",
    image: "/images/evergreen-detroit-1-main.png",
    images: [
      "/images/evergreen-detroit-1-main.png",
      "/images/evergreen-detroit-2-components.png",
      "/images/evergreen-detroit-3-impact.png"
    ],
    color: "#3D7F5F"
  },
  {
    id: "agricultural-solutions",
    title: "Evergreen Agricultural Solutions",
    subtitle: "Advanced Agricultural Intelligence",
    tagline: "Grow Smarter, Not Harder",
    description: "Leverage AI for precision agriculture, optimizing crop yields, managing resources efficiently, and ensuring sustainable food production. This revolutionary platform provides real-time crop health assessment, AI-powered yield optimization, sustainable resource management, and enterprise-level scalability for agricultural operations of any size.",
    features: [
      {
        title: "Consciousness Interface Technology",
        description: "Unprecedented insight into crop health and agricultural systems through advanced AI"
      },
      {
        title: "Real-Time Crop Monitoring",
        description: "Continuous crop health assessment with early stress detection capabilities"
      },
      {
        title: "AI-Powered Yield Optimization",
        description: "Machine learning algorithms for optimal growing conditions and maximum yield"
      },
      {
        title: "Sustainable Resource Management",
        description: "Environmental optimization and automated compliance reporting"
      }
    ],
    benefits: [
      "30% reduction in crop loss through early stress detection",
      "Significant yield increases through optimized growing conditions",
      "Major water usage reduction through precision irrigation",
      "Automated compliance reporting for sustainability regulations",
      "Applicable to row crops, specialty crops, and controlled environments",
      "Enterprise-level scalability for operations of any size"
    ],
    targetAudience: "Large-scale farmers, Agricultural operations, Greenhouse operators, Agricultural researchers and educators",
    image: "/images/agricultural-solutions-1-main.png",
    images: [
      "/images/agricultural-solutions-1-main.png",
      "/images/agricultural-solutions-2-features.png",
      "/images/agricultural-solutions-3-benefits.png"
    ],
    color: "#7FD858"
  },
  {
    id: "evergreen-investments",
    title: "Evergreen Investments",
    subtitle: "Human-Computer Interface Revolution",
    tagline: "Where Complexity Becomes Competitive Advantage",
    description: "Redefine user interaction with revolutionary human-computer interfaces powered by AI, delivering intuitive and highly personalized experiences. This breakthrough approach transforms complexity into strategic choreography, solving why your best people spend more time fighting technology than using it through consciousness-aware processing and privacy-first innovation.",
    features: [
      {
        title: "Consciousness-Aware Processing",
        description: "Advanced algorithms understanding human behavior at unprecedented depth"
      },
      {
        title: "Privacy-First Innovation",
        description: "Built with absolute privacy protection at the core of every interaction"
      },
      {
        title: "Real-Time Adaptive Response",
        description: "Millisecond-level processing (<5ms) that anticipates user needs"
      },
      {
        title: "Multiple Proprietary Innovations",
        description: "Protected by patents covering unique methods and approaches"
      },
      {
        title: "99.9% Accuracy",
        description: "Unprecedented accuracy in understanding human intent and context"
      }
    ],
    benefits: [
      "Instant responsiveness (<5ms) - systems feel like an extension of the user",
      "99.9% accuracy in understanding human intent",
      "$500B+ current market size with 45% projected CAGR",
      "$1T+ market opportunity by 2030",
      "Applications in healthcare, enterprise productivity, and immersive computing",
      "Transforms user experience across all digital interactions"
    ],
    targetAudience: "Healthcare organizations, Enterprise businesses, Technology companies, AR/VR developers",
    image: "/images/evergreen-investments-1-main.png",
    images: [
      "/images/evergreen-investments-1-main.png",
      "/images/evergreen-investments-2-features.png",
      "/images/evergreen-investments-3-market.png"
    ],
    color: "#2D5F3F"
  },
  {
    id: "dream-engineering",
    title: "DREAM Engineering",
    subtitle: "Infrastructure & AI Integration",
    tagline: "Building with Integrity, Innovation, and Community",
    description: "Design, build, and integrate robust infrastructure solutions with cutting-edge AI, ensuring scalability, security, and peak performance for complex projects. DREAM Engineering represents a bold vision rooted in traditional American values—honest employment, service to community, and pride in building something greater than oneself.",
    features: [
      {
        title: "Infrastructure Design",
        description: "Comprehensive design services combining proven engineering with innovative approaches"
      },
      {
        title: "AI Integration",
        description: "Cutting-edge AI integration for optimized project management and execution"
      },
      {
        title: "Community Development",
        description: "Community-focused development that builds local capacity and pride"
      },
      {
        title: "Scalable Solutions",
        description: "Ensuring long-term scalability and adaptability for growing communities"
      },
      {
        title: "Security & Performance",
        description: "Peak performance and security for complex infrastructure projects"
      }
    ],
    benefits: [
      "Creates sustainable infrastructure with community impact",
      "Integrates cutting-edge AI for optimization",
      "Ensures long-term scalability and security",
      "Builds community capacity and local employment",
      "Delivers peak performance on complex projects",
      "Rooted in integrity, innovation, and community values",
      "Proven engineering combined with modern technology"
    ],
    targetAudience: "Infrastructure developers, City governments, Community organizations, Engineering firms",
    image: "/images/dream-engineering-1-main.png",
    images: [
      "/images/dream-engineering-1-main.png",
      "/images/dream-engineering-2-features.png",
      "/images/dream-engineering-3-values.png"
    ],
    color: "#3D7F5F"
  },
  {
    id: "strategic-ai-integration",
    title: "Strategic AI Integration",
    subtitle: "Tailored Systems for Sustainable Growth",
    tagline: "Clarity is the First Form of Capital",
    description: "Seamlessly embed AI capabilities into your existing infrastructure, creating adaptive and intelligent systems that evolve with your business needs. This service provides tailored AI systems and hands-on strategic insight to optimize performance, reduce chaos, and unlock sustainable growth for founders and teams across diverse industries.",
    features: [
      {
        title: "Structured Clarity",
        description: "Engineer clear objectives through systematic AI integration and strategic planning"
      },
      {
        title: "Strategic Alignment",
        description: "Align AI workflows with your most critical strategic impact areas"
      },
      {
        title: "Measurable Results",
        description: "Deliver tangible outcomes through intelligent automation and optimization"
      },
      {
        title: "Adaptive Systems",
        description: "Create systems that evolve and adapt with your changing business needs"
      },
      {
        title: "Seamless Integration",
        description: "Embed AI capabilities directly into existing infrastructure without disruption"
      }
    ],
    benefits: [
      "Average 35% cost reduction across all client engagements",
      "25% efficiency gains consistently delivered",
      "Reduces operational chaos significantly",
      "Optimizes performance across all business functions",
      "Unlocks sustainable growth potential",
      "Creates adaptive systems that evolve with business",
      "Proven track record with 50+ organizations transformed"
    ],
    targetAudience: "Business founders, Operations teams, Technology leaders, Growth-focused companies across all industries",
    image: "/images/strategic-ai-integration-1-main.png",
    images: [
      "/images/strategic-ai-integration-1-main.png",
      "/images/strategic-ai-integration-2-results.png",
      "/images/strategic-ai-integration-3-approach.png"
    ],
    color: "#7FD858"
  }
];
