import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vaishnav Vivek Prabhu",
  initials: "VV",
  url: "https://vaisworks.com",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "A Software Engineer turned Cybersecurity enthusiast with a fervent commitment to fostering digital safety.",
  summary:
    "Recently completed my MSc in Cyber Security from the University of the West of England and currently working as a Software Development Engineer. With a strong background in both cybersecurity and software development, I've gained extensive experience in developing secure applications, conducting penetration testing, and implementing robust security solutions. My diverse skill set spans various programming languages and frameworks, complemented by a deep understanding of security principles and best practices.",
  avatarUrl: "/vvp.jpeg",
  skills: [
    "Python",
    "NodeJS",
    "PHP",
    "HTML/CSS",
    "Javascript",
    "Java",
    "SQL",
    "Docker",
    "React",
    "Angular",
    "Express",
    "Linux",
    "AWS",
    "Azure",
    "GCP",
    "Penetration Testing",
    "SIEM",
    "Cryptography",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vaishnavvprabhu@gmail.com",
    tel: "+44 79185 52274",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vaishnavvprabhu",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vaishnavvprabhu",
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/vaishnavvivekp1",
        icon: Icons.x,
        navbar: true
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@vvpmakesvideos",
        icon: Icons.youtube,
        navbar: true
      },
      email: {
        name: "Send Email",
        url: "mailto:vaishnavvprabhu@gmail.com",
        icon: Icons.email,
        navbar: false
      }
    }
  },

  work: [
    {
      company: "AlsoIT",
      href: "https://www.alsoit.com/",
      badges: ["Full Stack", "AI", "Cybersecurity"],
      location: "On-Site",
      title: "Software Development Engineer",
      logoUrl: "/companies/alsoit.png",
      start: "September 2024",
      end: "Present",
      description: `• Led a team of six to develop an AI-driven CRM with accounting, collaboration, and automation features
• Built and optimized a property rental platform, boosting profits 10x and cutting costs 3x with SEO and UX best practices
• Enhanced security, doubling network protection through switch configuration, access controls, and enterprise-grade protocols
• Upgraded network infrastructure, improving routing and rewiring for 2.5x faster speeds across the office
• Integrated Active Directory, streamlining system administration by 50% and improving operational efficiency
• Deployed load-balanced systems with redundant backup servers, ensuring high availability and failover protection`
    },
    {
      company: "Freelance",
      href: "",
      badges: [ "SDE", "UX/UI", "Full Stack"],
      location: "Remote",
      title: "Freelancer",
      logoUrl: "/companies/freelancer.png",
      start: "September 2023",
      end: "September 2024",
      description: `• Built custom web apps with modern UI/UX, boosting user engagement by 30%.
• Optimized front-end performance, reducing load times by 40% through scalable architecture and caching.
• Developed and integrated APIs, automating workflows and cutting manual tasks by 50%.
• Improved SEO & accessibility, increasing organic traffic by 25% and ensuring WCAG compliance.
• Managed global clients, delivering projects on time with a 98% satisfaction rate.
• Built e-commerce platforms with secure payments, increasing conversions by 20%.`,
    },
    {
      company: "Cyber Nexus",
      href: "https://www.cybernexus.co.in/",
      badges: ["Digital Marketing", "SEO", "UX/UI Design"],
      location: "Remote",
      title: "Founder",
      logoUrl: "/companies/cybernexus.jpeg",
      start: "June 2023",
      end: "Present",
      description: `• Developed and deployed a full-stack web platform for client campaign management, reducing operational overhead by 30% through automation.
• Engineered and optimized ad analytics dashboards, enabling data-driven decision-making and improving ad performance by 40%.
• Built and maintained high-performance landing pages and marketing funnels, increasing conversion rates by 25% using A/B testing.
• Led a cross-functional team of developers, designers, and marketers to deliver digital solutions, managing 10+ client projects concurrently.
• Integrated AI-driven tools for automated content generation and audience targeting, reducing manual effort by 50%.
• Secured and optimized website infrastructures, implementing best practices in web security and performance, reducing load times by 35%.`,
    },
    {
      company: "Smartways",
      href: "https://www.smartways.in/",
      badges: ["Wordpress", "UX/UI Design"],
      location: "On-Site",
      title: "Full Stack Developer & UX Designer",
      logoUrl: "/companies/smartways.jpeg",
      start: "January 2023",
      end: "January 2024",
      description: `• Developed scalable web apps using Angular, React, and Node.js, increasing user engagement by 30% and reducing server response times by 50%.
• Collaborated with clients to deliver tailored IT and graphic solutions, exceeding project expectations.
• Built internal tools like uptime monitoring and CRM pipelines to streamline operations.
• Led 27+ simultaneous projects, delivering custom websites and APIs using the latest technologies.
• Optimized website performance with React and Node.js, boosting load speeds by 80% and increasing client sales by 50%.
• Created a Shopify extension with automation features, enabling scalable functionality across e-commerce platforms.`,
    },
    {
      company: "ExploreIt",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Android Developer",
      logoUrl: "/companies/exploreit.png",
      start: "January 2022",
      end: "April 2022",
      description: "Lead a team for building an Android Application to help the NGO spread their campaigns.",
    },
    {
      company: "Gurugram Police",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Cyber Security Intern",
      logoUrl: "/companies/gpcssi.jpg",
      start: "June 2021",
      end: "July 2021",
      description: "Assisted the Law Enforcement Agency with cases requiring advice on Modus Operandi for Cyber Scammers. Gathered OSINT data and used specialized tools for information gathering activities.",
    },
  ],
  education: [
    {
      school: "University of the West of England",
      href: "https://www.uwe.ac.uk",
      degree: "MSc Cyber Security",
      logoUrl: "/education/uwe.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Symbiosis International University",
      href: "https://www.symbiosis.ac.in",
      degree: "Bachelor of Computer Application",
      logoUrl: "/education/symbiosis.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Father Agnel School",
      href: "#",
      degree: "Higher Secondary (A Levels)",
      logoUrl: "/education/fragnel.jpeg",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Cumbrian Dreams",
      href: "https://cumbriandreams.co.uk/",
      dates: "2024",
      active: true,
      description: "A website for a Holiday Rental Company. Built using a a 3 tier architecture, this website is responsive and has a production ready infrastructure ready to scale.",
      technologies: [
        "Full Stack Development",
        "React",
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Prisma"
      ],
      links: [
        {
          type: "Website",
          href: "https://cumbriandreams.co.uk/",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Cyber Nexus",
      href: "https://cybernexus.co.in/",
      dates: "2023",
      active: true,
      description: "A website for a Digital Marketing Agency and a Software Development Company. Built using a custom theme for wordpress website using Elementor, this theme is responsive and has a clean design.",
      technologies: [
        "Digital Marketing",
        "SEO",
        "UX/UI Design",
        "Wordpress",
        "Elementor"
      ],
      links: [
        {
          type: "Website",
          href: "https://cybernexus.co.in/",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Security Home Lab",
      href: "#",
      dates: "2023 - Present",
      active: true,
      description: "Simulating and Pentesting a Corporate Network with SIEMs, Firewalls, & VLAN Segmentation",
      technologies: [
        "SIEM",
        "Firewalls",
        "VLAN",
        "Pentesting",
        "Network Security"
      ],

      image: "",
      video: ""
    },

    {
      title: "Windows Malware C2",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description: "Developed Windows Malware with its Command-and-Control Server achieving 0% detection rate, deployed using Rubber Ducky",
      technologies: [
        "C++",
        "Python",
        "Windows API",
        "Networking",
        "Security"
      ],

      image: "",
      video: ""
    }
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
