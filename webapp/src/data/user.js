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
    title: "Hello, I am Tarek Mulla",
    description:
			"I am a professional platform engineer and cybersecurity enthusiast! I relocated to Australia four years ago and recently embarked on my university journey, doing master in cybersecurity. My passion lies in exploring topics related to the cloud, devops, and cybersecurity. I try to stay up to date with the latest industry trends and consistently enhances his skills through ongoing professional development and certifications. I hold the following certifications:",
  },

  projects: [
    {
      title: "Telstra Trade-in app",
      description:
        "Telstra Trade-in cloud backend, multi-accounts, multi-region cloud infrastructure backend.",
      logo: CONFIG.IMAGES_URL + "telstra.png",
      linkText: "View Project",
      link: "https://www.telstra.com.au/trade-in",
    },

    {
      title: "eHealth Platform",
      description:
        "Helping the Cloud platform team at eHealth NSW with the Cloud Security Essential 8 (E8) compliance initiative.",
      logo: CONFIG.IMAGES_URL + "ehealth.png",
      linkText: "View Project",
      link: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    },

    {
      title: "Iress Content Delivery",
      description:
        "Migrating, automating and supporting Content delivery applications in Iress.",
      logo: CONFIG.IMAGES_URL + "iress.png",
      linkText: "View Project",
      link: "https://www.iress.com/software/trading-and-market-data/market-data/",
    },

    {
      title: "Professional Portfolio",
      description:
        "Personal porfolio, serverless, hosted in AWS, fully automated and follows DevSecOps practices.",
      logo: CONFIG.IMAGES_URL + "portfolio.png",
      linkText: "View Project",
      link: "https://github.com/tarekmulla/mulla-website",
    },

    {
      title: "Uni Webapp",
      description:
        "Webapp to demonstrate the material of Course MATH2415 - Discrete Mathematics in RMIT Uni.",
      logo: CONFIG.IMAGES_URL + "rmit.jpg",
      linkText: "View Project",
      link: "https://github.com/tarekmulla/discrete-math",
    },

    {
      title: "Talent Beyond Boundaries",
      description:
        "Volunteered with Talent Beyond Boundaries to migrate their java app to AWS cloud using Terraform.",
      logo: CONFIG.IMAGES_URL + "tbb.png",
      linkText: "View Project",
      link: "https://github.com/talentbeyondboundaries/tbbtalentv2",
    },
  ],
};

export default INFO;
