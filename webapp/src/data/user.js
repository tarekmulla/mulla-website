import CONFIG from "./config"

const INFO = {
  main: {
    title: "Tarek Mulla",
    name: "Tarek Mulla",
    email: "tarek@mulla.au",
  },

  socials: {
    twitter: "https://twitter.com/tarek_mulla",
    github: "https://github.com/tarekmulla",
    linkedin: "https://linkedin.com/in/tarekmulla/"
  },

  about: {
    title: "Tarek Mulla",
    description:
      "I am a professional platform engineer and cybersecurity enthusiast! I have a deep understanding of DevOps, Security best practices, and Sloud solutions implementation.\
      Throughout my career, I lent my expertise to various industries, including financial, telecommunication, and government. I have assisted businesses in these industries in migrating their systems to the cloud, implementing security controls, and safeguarding their sensitive data against cyber threats. \
      I am currently pursuing a master's degree in cybersecurity at RMIT university. I try to stay up to date with the latest industry trends and consistently enhance my skills through ongoing professional development and certifications.",
  },

  projects: [
    {
      title: "Telstra Trade-in app",
      description:
        "Telstra Trade-in cloud backend, multi-accounts, multi-region cloud infrastructure backend.",
      logo: CONFIG.IMAGES_URL + "telstra.webp",
      linkText: "View Project",
      link: "https://www.telstra.com.au/trade-in",
    },

    {
      title: "eHealth Platform",
      description:
        "Helping the Cloud platform team at eHealth NSW with the Cloud Security Essential 8 (E8) compliance initiative.",
      logo: CONFIG.IMAGES_URL + "ehealth.webp",
      linkText: "View Project",
      link: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    },

    {
      title: "Iress Content Delivery",
      description:
        "Migrating, automating and supporting Content delivery applications in Iress.",
      logo: CONFIG.IMAGES_URL + "iress.webp",
      linkText: "View Project",
      link: "https://www.iress.com/software/trading-and-market-data/market-data/",
    },

    {
      title: "Professional Portfolio",
      description:
        "Personal porfolio, serverless, hosted in AWS, fully automated and follows DevSecOps practices.",
      logo: CONFIG.IMAGES_URL + "portfolio.webp",
      linkText: "View Project",
      link: "https://github.com/tarekmulla/mulla-website",
    },

    {
      title: "Uni Webapp",
      description:
        "Webapp to demonstrate the material of Course MATH2415 - Discrete Mathematics in RMIT Uni.",
      logo: CONFIG.IMAGES_URL + "rmit.webp",
      linkText: "View Project",
      link: "https://github.com/tarekmulla/discrete-math",
    },

    {
      title: "Talent Beyond Boundaries",
      description:
        "Volunteered with Talent Beyond Boundaries to migrate their java app to AWS cloud using Terraform.",
      logo: CONFIG.IMAGES_URL + "tbb.webp",
      linkText: "View Project",
      link: "https://github.com/talentbeyondboundaries/tbbtalentv2",
    },
  ],
};

export default INFO;
