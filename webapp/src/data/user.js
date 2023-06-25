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

  homepage: {
    title: "Hello, I am Tarek Mulla",
    description:
      "I am a professional cloud engineer and cybersecurity enthusiast! I relocated to Australia four years ago and recently embarked on my university journey, doing master in cybersecurity. My passion lies in exploring topics related to the cloud and cybersecurity. If you share an interest in these subjects, I invite you to navigate the content available on my website.",
  },

  about: {
    title: "Tarek Mulla",
    description:
			"Tarek is an experienced cloud engineer with over 9 years of cloud and software development experience. He specializes in DevOps, security best practices, and implementing cloud solutions. He is currently pursuing a Master's degree in Cybersecurity at RMIT University to enhance his knowledge and skills in the security field. Tarek is known for his ability to effectively collaborate with cross-functional teams and communicate complex technical concepts to both technical and non-technical stakeholders. He stays up to date with the latest industry trends and consistently enhances his skills through ongoing professional development and certifications. Tarek holds the following certifications:",
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
