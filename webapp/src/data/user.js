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
      `Cybersecurity and Cloud Expert with deep experience designing and securing cloud architectures. Successfully led cloud development and migration projects, ensuring compliance with Australian and international security standards.`,
    description2:
      `Focused on embedding security throughout the development lifecycle and aligning security strategy with business objectives. Strong track record in risk analysis, stakeholder engagement, and communicating security priorities to executive leadership.`,
    description3:
      `Regular speaker at the Australian Cyber Conference. Holds a Master’s degree in Cybersecurity, AWS Professional certifications, and is recognised as a Certified Professional (Cybersecurity) by the Australian Computer Society.`
  },

  projects: [
    {
      title: "Security advising role",
      description:
        "Providing strategic security guidance aligned with VPDSS, ISM, PSPF, and ISO 27001/2 at the Department of Energy, Environment and Climate Action.",
      logo: CONFIG.IMAGES_URL + "vic-deeca.webp",
      link: "https://www.deeca.vic.gov.au/",
    },
    {
      title: "AMP - APRA CPS 234",
      description:
        "Contributed to APRA CPS 234 compliance by implementing AWS security baseline controls, terraform core components library, and integrating Prisma Cloud with custom policies.",
      logo: CONFIG.IMAGES_URL + "cps-234.webp",
      link: "https://www.apra.gov.au/sites/default/files/cps_234_july_2019_for_public_release.pdf",
    },

    {
      title: "eHealth Platform",
      description:
        `Helped with cloud security enhancement, achieving Essential 8 compliance through automation of server patching and security management, successfully covered 100% of maturity level 1 and over 60% of maturity level 2 controls.`,
      logo: CONFIG.IMAGES_URL + "ehealth.webp",
      link: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    },

    {
      title: "Telstra Trade-in app",
      description:
        "Delivered high-availability AWS infrastructure deployment and comprehensive remediation of OWASP vulnerabilities.",
      logo: CONFIG.IMAGES_URL + "telstra.webp",
      link: "https://www.telstra.com.au/trade-in",
    },

    {
      title: "Iress Content Delivery",
      description:
        `Developed high-performance, secure global financial data collection systems on AWS.`,
      logo: CONFIG.IMAGES_URL + "iress.webp",
      link: "https://www.iress.com/software/trading-and-market-data/market-data/",
    },

    {
      title: "Professional Portfolio",
      description:
        "Personal porfolio, serverless, hosted in AWS, fully automated and follows DevSecOps practices.",
      logo: CONFIG.IMAGES_URL + "portfolio.webp",
      link: "https://github.com/tarekmulla/mulla-website",
    },

    {
      title: "Talent Beyond Boundaries",
      description:
        "Volunteered with Talent Beyond Boundaries to migrate their java app to AWS cloud using Terraform.",
      logo: CONFIG.IMAGES_URL + "tbb.webp",
      link: "https://github.com/talentbeyondboundaries/tbbtalentv2",
    },
  ],
};

export default INFO;
