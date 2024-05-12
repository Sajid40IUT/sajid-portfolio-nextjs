"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Internation Blockchain Olympiad",
    desc: "Nominated to represent Bangladesh in Amsterdam for IBCOL, 2023 out of over hundreds of team. We presented our idea EcoTrace, enforcing circular economy using blockchain technology.",
    img: "/portfolio_IBCOL.png",
    date: "Nov, 2023",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "HUAWEI TECH4GOOD BEST PROJECT WINNER",
    desc: "Our Project FenceGuard was declared the best Project in Asia Pacific region earning us an exclusive 15 hours mentorship where we learned how to build a business and its stages.",
    img: "/portfolio_t4g.png",
    date: "Sept, 2023",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "HUAWEI Seeds for the Future Champion",
    desc: "As champion and top 6 out of 700 applicants of Huawei’s SFTF I was nominated for a 10 day industrial tour of Huawei in China where I learned about AI, 5G , and cyber security.",
    img: "/portfolio_sftf.png",
    date: "Aug, 2023",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "NDUSTRIAL TOUR IN CHINA FUNDED BY HUAWEI",
    desc: "In the 10 day industrial tour of Huawei in china I learned about AI, 5G, cyber security, automobile, power etc. Got an insight of industry norms and practices from leading industry experts.",
    img: "/portfolio_industry.png",
    date: "Sept, 2023",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "HACKATHON CHAMPION: CODERUSH",
    desc: "24 hour long Hackathon. Competing with 20 other teams and judged by pretigious judges from Optimizely, Samsung and industry experts.",
    img: "/portfolio_hackathon.png",
    date: "Mar, 2023",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "SEMI-FINALIST IN BATTLE OF MINDS | BAT",
    desc: "Battle of Minds is the Flagship event of BAT. Competing against over 100 teams we made it to the top 12. We conducted activation plan in Savar connecting with people and getting consumer insights.",
    img: "/portfolio_bom.png",
    date: "Aug, 2022",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "British Parlimentary Debate Champion | BUP IV",
    desc: "Competed and triumphed against 32 teams from universities all over the country proving our logical and critical thinking abilities.",
    img: "/portfolio_bp.png",
    date: "Nov, 2021",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "",
    desc: "",
    img: "",
    link: "https://lama.dev",
  },
];

const projects = [
    {
      id: 1,
      color: "",
      title: "All Good CV Generator",
      tech: "NextJS| TypeScript | TailwindCSS | PostgreSQL | tRPC",
      desc: "CV Automator using T-3 stack. Primary feature include live editing of CV with different templates. Additional feature and future prospects is using voice and motion gestures to enable the less-abled toward CV building.",
      img: "/project_allG.png",
      link: "https://github.com/SaaS-IUT/all-good-cv-generator",
    },
    {
      id: 2,
      color: "white",
      title: "Krypto",
      tech: "React| MySQL | TailwindCSS | Redux Toolkit",
      desc: "Krypto is a cryptocurrency information web application that gives you real time prices of the cryptocurrencies, their ranks, news regarding cryptocurrency. It also has a mock transaction for the cyptocurrencies.",
      img: "/project_krypto.png",
      link: "https://github.com/faiyazkarim-cse19/Krypto",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "DOUR",
      tech: "Typescript | React | Bootstrap | Spring | Hibernate",
      desc: "E-Commerce Website for car parts. It has a customer account as well as a vendor account. Primary features include buying and selling of items (cart integration) and additional features include giving reviews etc.",
      img: "/project_dour.png",
      link: "https://github.com/T-A-L-O-S/Dour",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Fenceguard",
      tech: "IoT| RFid | sensors | AI",
      desc: "Geofence system for enhanced monitoring using telecom techonogy & intruder detection in farms using AI technology. Used for tracking the livestock in a large farm and protecting the livestocks from attacks of intruders using smart AI detection and alert system.",
      img: "/project_fenceguard.png",
      link: "https://2minutecoding.com/fence/index.html",
    },
    {
      id: 5,
      color: "from-red-300 to-blue-300",
      title: "CareMore",
      tech: "Andriod Dev| AI | Machine Learning",
      desc: "Crossplatform application leveraging on AI and cloud technology to provide guidance to parents of special needs children. In our platform the special parents will log in and answer a few question about the behaivor of their child. This will then induce our AI to suggest relavent support groups for the special parents where they can share their experiences and hence get the proper guidance.",
      img: "/project_caremore.png",
      link: "https://drive.google.com/file/d/1SBg4lVAGC2Rh1AYMgY3a8aVINe7M0OGh/view",
    },
    
  ];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
        {/* MY Award */}
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Awards and Achievements
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black pt-40">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-4xl flex items-center justify-center">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill className="object-contain" />
                  </div>
                  <p className="pb-40 w-80 text-black md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
                
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-white">
      <h1 className="text-6xl font-semibold mb-8">My Work</h1>
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mb-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <div className="relative w-80 h-56">
            <Image src={project.img} alt={project.title} layout="fill" objectFit="cover" />
          </div>
          <p className="mt-4 text-center">{project.desc}</p>
          <p className="mt-2 text-center text-gray-600">{project.tech}</p>
          <Link href={project.link} target="blank">
          <button className="mt-4 py-2 px-4 rounded-lg text-black font-semibold bg-gradient-to-b from-white to-blue-300 hover:from-blue-400 hover:to-blue-500 transition-colors duration-300 shadow-lg">
            View Project
            </button>
          </Link>
        </div>
      ))}
    </div>



      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl">Do you want to collaborate?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;