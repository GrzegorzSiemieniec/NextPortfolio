"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "./fontawesome";
import BackToTopButton from "./BackToTop";
import yourImage from "../img/logo.png";
import vue from "../img/vue.png";
import next from "../img/next.png";
import git from "../img/git.png";
import php from "../img/php.png";
import html from "../img/html.png";
import js from "../img/js.png";
import node from "../img/node.png";
import tailwind from "../img/tailwind.png";
import react from "../img/react.png";
import mongodb from "../img/mongodb.png";

import papugi from "../img/papugi.png";

import Typewriter from "typewriter-effect";

import {
  motion,
  useAnimation,
  useTransform,
  useSpring,
  useCycle,
  useScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const introPictureVariants: Variants = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textFromRightAnimation: Variants = {
    hide: {
      opacity: 0,
      x: 80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textFromLeftAnimation: Variants = {
    hide: {
      opacity: 0,
      x: -80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textFromLeftAnimationFooter: Variants = {
    hide: {
      opacity: 0,
      x: -300,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <main className="flex flex-col items-center font-Inter select-none max-w-full">
      <div className="menu bg-gradient-to-r from-[#8121D0] via-[#5a2983] to-[#291C3A] w-full inline-flex h-24 my-auto">
        <Image
          src={yourImage}
          alt="Your Image Description"
          width={270}
          height={50}
        />

        <ul className="menuLi text-white text-2xl inline-flex my-auto">
          <li className="mr-14 ml-14 hover:scale-125 transition-transform">
            <a href="#home">Home</a>
          </li>
          <li className="mr-14 ml-14 hover:scale-125 transition-transform">
            <a href="#aboutme">About</a>
          </li>
          <li className="mr-12 ml-14 hover:scale-125 transition-transform">
            <a href="#skills">Skills</a>
          </li>
          <li className="ml-14 hover:scale-125 transition-transform">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div
        id="home"
        className="introduction bg-[#331C52] w-full pl-24 h-fit pt-52 transition-transform transform"
      >
        <p className="font-bold text-[#9d7fc7] text-8xl pb-8">
          <Typewriter
            options={{
              delay: 30,
            }}
            onInit={(typewriter) => {
              typewriter.start().typeString("I'm a web<br />Developer");
            }}
          />
        </p>
        <p className=" text-5xl pb-6">Grzegorz Siemieniec</p>
        <ul className="inline-flex">
          <li className="mr-3">
            <a href="https://github.com/GrzegorzSiemieniec">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-8 h-8 text-[#9d7fc7] rounded-lg hover:cursor-pointer"
              />
            </a>
          </li>
          <li className="ml-3">
            <a href="https://www.linkedin.com/in/grzegorz-siemieniec-526539250/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-8 h-8 text-[#9d7fc7] rounded-lg mb-20 hover:cursor-pointer"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        id="skills"
        className="skills h-28 bg-[#291C3A] w-full transition-transform transform pt-2"
      >
        <p className=" flex items-center">
          <span className="text-8xl font-bold mr-5 pl-24">7</span>
          <p className=" inline text-4xl items-center text-[#DCCFED]">
            <span>PROJECTS</span> <span className=" block">COMPLETED</span>
          </p>

          <span className="text-8xl font-bold mr-5 pl-48">5</span>
          <p className=" inline text-4xl items-center text-[#DCCFED]">
            <span>YEARS OF</span>{" "}
            <span className=" block mr-[350px]">EXPERIENCE</span>
          </p>
          <Image
            src={html}
            alt="Your Image Description"
            width={70}
            height={70}
            className="mr-10"
          />
          <Image
            src={git}
            alt="Your Image Description"
            width={70}
            height={70}
            className="mr-10"
          />
          <Image
            src={vue}
            alt="Your Image Description"
            width={70}
            height={70}
            className="mr-10"
          />
          <Image
            src={react}
            alt="Your Image Description"
            width={70}
            height={70}
            className="mr-10"
          />
          <Image
            src={js}
            alt="Your Image Description"
            width={70}
            height={70}
            className="mr-10"
          />
          <Image
            src={tailwind}
            alt="Your Image Description"
            width={70}
            height={70}
          />
        </p>
      </div>
      <div
        id="aboutme"
        className="about h-fit bg-[#E1EBED] transition-transform transform w-full"
      >
        <p className="text-[#291C3A] text-4xl font-bold pl-24 mt-20 mb-12">
          About me
        </p>
        <motion.p
          className=" text-[#291C3A] text-3xl pl-24 mt-10 mb-12"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={textFromLeftAnimation}
        >
          I am a enthusiast of Node.js family frameworks, <br />
          and I am capable of creating websites using technologies <br />
          such as Vue.js, React.js, Next.js(utilizing TypeScript). <br />
          I can also write programs in Node.js, <br />
          but I'm more passionate about building websites :)
        </motion.p>
        <p className="text-[#291C3A] text-4xl font-bold mt-20 mb-12 float-right pr-24">
          My Skills
          <p className=" text-[#291C3A] text-3xl mt-10 mb-12 font-normal">
            Technologies I've been working recently
          </p>
          <motion.ul
            className=" inline-grid grid-cols-5 gap-5 my-auto mx-auto"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={textFromRightAnimation}
          >
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={vue}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pt-2">
              <Image
                src={next}
                alt="Your Image Description"
                width={96}
                height={96}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={git}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pt-5">
              <Image
                src={node}
                alt="Your Image Description"
                width={100}
                height={100}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={js}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white">
              <Image
                src={mongodb}
                alt="Your Image Description"
                width={100}
                height={100}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={react}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pl-1">
              <Image
                src={tailwind}
                alt="Your Image Description"
                width={88}
                height={88}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white pl-1 pt-6">
              <Image
                src={php}
                alt="Your Image Description"
                width={88}
                height={88}
              />
            </li>
            <li className="w-24 h-24 bg-[#4f3e63] rounded-lg text-white p-5">
              <Image
                src={html}
                alt="Your Image Description"
                width={86}
                height={86}
              />
            </li>
          </motion.ul>
        </p>
      </div>
      <motion.div
        id="projects"
        className="about h-fit bg-[#E1EBED] transition-transform transform w-full"
      >
        <p className="text-[#291C3A] text-4xl font-bold pl-24 mt-20 mb-12">
          My Projects
        </p>
        <p className=" text-[#291C3A] text-3xl pl-24 mt-10 mb-12">
          Some Things I've build so far
        </p>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        >
          <Swiper
            slidesPerView={6}
            className="text-black mb-52 h-[440px] w-full text-center hover:cursor-grab pr-10 select-none"
          >
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md select-none">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pl-24 mr-24">
              <div className=" bg-[#DCCFED] h-[420px] w-[280px] rounded-lg shadow-gray-800/60 shadow-md">
                <Image
                  src={papugi}
                  alt="Your Image Description"
                  width={200}
                  className=" mx-auto py-6 rounded-2xl"
                />
                <p className="text-[#291C3A] text-2xl font-bold">
                  Blog for parrot sellers
                </p>
                <p className=" text-[#291C3A] pt-5 text-lg mb-[20px]">
                  The website brings together parrot sellers
                </p>
                <a href="https://github.com/GrzegorzSiemieniec/papugi">
                  <button className="bg-[#291C3A] w-[255px] text-white underline h-[35px] rounded-xl">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4 text-white mr-2 "
                    />
                    View Code
                  </button>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
      <div className="footer bg-[#291C3A] w-full h-44 mx-auto">
        <Image
          src={yourImage}
          alt="Your Image Description"
          width={270}
          height={50}
          className="mx-auto"
        />
        <div className=" flex justify-center">
          <motion.p
            className=" inline float-left"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={textFromLeftAnimationFooter}
          >
            Designed and build by
            <p className=" inline bg-gradient-to-r from-[#c188f0] via-[#b666f8] to-[#e50dec] bg-clip-text text-transparent">
              {" "}
              CezikDEV
            </p>{" "}
            ©2023
          </motion.p>
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
}
