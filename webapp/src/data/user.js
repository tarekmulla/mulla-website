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
    description1:
      `Tarek is an experienced platform and cybersecurity engineer skilled in DevSecOps, Cloud solutions, and Security best practices. His career has spanned various industries, including finance, telecommunications, and government sectors, where he has played a crucial role in migrating systems to the cloud, implementing robust security controls, and ensuring compliance with security standards.`,
    description2:
      `Tarek holds a Master's degree in Cybersecurity from RMIT University and is currently pursuing a Master of Computer Science with a specialization in Artificial Intelligence at University of Melbourne.`,
    description3:
      `In addition to his academic qualifications, Tarek has earned several prestigious certifications, including AWS Solutions Architect Professional, AWS Security Specialty, Kubernetes Security Specialist, and Project Management Professional (PMP).`
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
