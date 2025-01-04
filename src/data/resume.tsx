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
  avatarUrl: "/mex.png",
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
        url: "#",
        icon: Icons.x,
        navbar: true
      },
      Youtube: {
        name: "Youtube",
        url: "#",
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
      company: "Cyber Nexus",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Founder",
      logoUrl: "/cybernexus.png",
      start: "June 2023",
      end: "Present",
      description: "Working with various companies to cater to their branding and IT needs. Overseeing the team performing various activities such as building websites, custom pipelines and marketing plans for our clients.",
    },
    {
      company: "Smartways",
      href: "#",
      badges: [],
      location: "On-Site",
      title: "Full Stack Developer & UX Designer",
      logoUrl: "/smartways.png",
      start: "January 2023",
      end: "January 2024",
      description: "Built internal tools such as uptime monitoring service and CRM pipelines. Headed the development of 27+ simultaneous projects consisting of various custom-coded websites and APIs. Worked on Website Optimisation leading to 80% improvement resulting in a 50% sales increase for clients.",
    },
    {
      company: "ExploreIt",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Android Developer",
      logoUrl: "/exploreit.png",
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
      logoUrl: "/police.png",
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
      logoUrl: "/uwe.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Symbiosis International University",
      href: "https://www.symbiosis.ac.in",
      degree: "Bachelor of Computer Application",
      logoUrl: "/symbiosis.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Father Agnel School",
      href: "#",
      degree: "Higher Secondary (A Levels)",
      logoUrl: "/fagnel.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
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
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4"
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
      links: [
        {
          type: "Documentation",
          href: "#",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4"
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
