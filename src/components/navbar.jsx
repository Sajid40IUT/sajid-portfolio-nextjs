"use client"

import Link from "next/link"
import Image from "next/image";
import React, { useState } from 'react';
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
]

const Navbar = () => {
     
    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate:0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)" 
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)" 
        }
    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Links */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" 
                    className="text-sm bg-cyan-700 rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white m-1">Sajid</span>
                    <span className="w-24 h-8 rounded bg-white text-black flex items-center justify-center">Chowdhury</span>
                </Link>
            </div>

            {/* Social media */}
            <div className="hidden md:flex gap-4 w-1/3 justify-end">
                <Link href="https://github.com/Sajid40IUT" target="_blank">
                    <Image src="/github.png" alt="github" width={24} height={24}/>
                </Link>
                <Link href="https://www.facebook.com/Sajid2899" target="_blank">
                    <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/sajid-chowdhury-a42b601a6/" target="_blank">
                    <Image src="/linkedin.png" alt="linkedin" width={24} height={24}/>
                </Link>
            </div>

            {/* Responsive Menu */}
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" 
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div variants={topVariants} 
                        className="w-10 h-1 bg-black rounded origin-left"
                        animate = {open ? "opened" : "closed"}></motion.div>
                    <motion.div variants={centerVariants} 
                        className="w-10 h-1 bg-black rounded"
                        animate = {open ? "opened" : "closed"}></motion.div>
                    <motion.div variants={bottomVariants} 
                        className="w-10 h-1 bg-black rounded origin-left"
                        animate = {open ? "opened" : "closed"}></motion.div>
                </button>

                {/* Menus List */}
                {open &&(
                <motion.div variants={listVariants} 
                            initial="closed"
                            animate="opened"
                            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map((link) =>
                        <motion.div variants={listItemVariants}  key={link.title}>
                            <Link href={link.url} >
                                {link.title}
                            </Link>
                        </motion.div>
                        
                    )}
                </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar