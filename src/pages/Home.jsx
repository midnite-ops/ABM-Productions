import Navbar from "@/components/Navbar";
import heroBg from "../assets/Home/hero-bg.jpg";
import blackSinger from "../assets/Home/about-img.jpg";
import {
  Disc3Icon,
  FacebookIcon,
  HeadphonesIcon,
  InstagramIcon,
  MicVocalIcon,
  Music,
  PlayCircleIcon,
  YoutubeIcon,
} from "lucide-react";
import videoImg from "../assets/Home/video-img.jpg";
import profile from "../assets/Home/profile-img.jpg";
import Footer from "@/components/Footer";
import Counter from "@/hooks/counter";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInUpBox,
  staggerContainer,
  viewportSettings,
  scaleOnHover,
} from "@/components/animations";

function Home() {
  // Variants for parent container
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3, // delay between each child
  //     },
  //   },
  // };
  // // Variants for each card
  // const card = {
  //   hidden: { opacity: 0, y: 40 }, // start lower
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8, // longer animation
  //       ease: [0.25, 0.1, 0.25, 1], // smooth exit curve
  //     },
  //   },
  //   visble: { opacity: 1, y: 0 },
  // };
  const aboutHistory = [
    {
      title: 10,
      subtitle: "/Years",
      description: "Our mission is to grow and drive progress",
    },
    {
      title: 30,
      subtitle: "/Projects",
      description: "Our mission is to grow and drive progress",
    },
    {
      title: 500,
      subtitle: "/Trained Singers",
      description: "Our mission is to grow and drive progress",
    },
    {
      title: 10,
      subtitle: "/Studios",
      description: "Our mission is to grow and drive progress",
    },
  ];

  const services = [
    {
      title: "Vocal Coaching",
      description:
        "Personalized training to build vocal strength and condfidence",
      img: <MicVocalIcon size={50} className="text-dRed" />,
    },
    {
      title: "Worship Engagements",
      description: "Live worship and preaching bookings.",
      img: <HeadphonesIcon size={50} className="text-dRed" />,
    },
    {
      title: "Music Production",
      description: "Professional recording for gospel and Christian artists.",
      img: <Music size={50} className="text-dRed" />,
    },
    {
      title: "Praise Team Revivals",
      description: "development programs for church worship teams.",
      img: <Disc3Icon size={50} className="text-dRed" />,
    },
  ];
  return (
    <div id="Home">
      <section
        id="Hero"
        className="h-screen lg:min-h-screen md:h-[70vh]  w-screen pt-5 lg:pt-10 flex padded flex-col relative "
      >
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="h-full w-full object-cover " />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[5px]" />
        </div>

        <Navbar />

        <div className=" flex-1 flex flex-col justify-between text-white  pb-8 pt-20">
          <div className="flex justify-end">
            <motion.p
              className="w-[70%] lg:w-[30%] text-sm text-right"
              variants={fadeInUp}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="show"
            >
              Founded by gospel artist, worship leader, and minister Alston
              Milton, ABM Productions develops active praise teams and
              indivdiual singers, training them to mature vocally so they can
              confidently lead praise and worship at their local church.
            </motion.p>
          </div>
          <div className="flex justify-between">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:w-[70%] w-full text-[40px]/tight lg:text-6xl/snug font-extrabold lg:font-bold"
            >
              NOT JUST ELEVATING YOUR VOICE, BUT ELEVATING YOUR MINISTRY
            </motion.h1>
            <motion.div
              className="md:flex flex-col items-end justify-end hidden"
              variants={fadeInUp}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="show"
            >
              <div className="flex -space-x-4 hover:cursor-pointer">
                <div className="w-11 h-11 rounded-full border-2 border-white">
                  <img
                    src={profile}
                    alt="profile pic"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white">
                  <img
                    src={profile}
                    alt="profile pic"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white">
                  <img
                    src={profile}
                    alt="profile pic"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <p className="w-[60%] text-sm text-right">
                Transform Your Voice: Discover the Power of Vocal Training with
                Us
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="padded gap-5 flex flex-col lg:flex-row h-auto my-[100px]"
      >
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-5 w-[90%]">
            <div className="font-alex text-start text-4xl lg:text-5xl">
              Bring your <h1 className="text-dRed inline ">Musical genius</h1>{" "}
              to Life
            </div>
            <p>
              ABM Productions is a faith-based production company dedicated to
              strengthening vocal ability, building confidence, and using the
              God-given gift of voice to usher His presence into every space.
            </p>
          </div>
          <div className="w-[90%]">
            <div className="grid grid-cols-2 gap-10">
              {aboutHistory.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index < 2 ? "border-b border-b-gray-400 pb-5" : ""
                  }`}
                >
                  <div className="flex items-center mb-2.5">
                    <Counter target={item.title} />
                    <span>{item.subtitle}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <button></button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={blackSinger}
            alt="a black man singing"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </motion.section>

      <section id="services" className="padded bg-dRed py-25 text-white">
        <motion.div
          className="mb-20 flex flex-col gap-y-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-center">Elevate Your Voice</h1>
          <h3 className="text-center italic">Elevate Your Minsitry</h3>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          className="grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 gap-8 "
        >
          {services.map((item, index) => (
            <motion.div
              variants={fadeInUpBox}
              className="bg-white p-5 rounded-2xl flex flex-col gap-5 hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)] !text-black"
              key={index}
            >
              <div>{item.img}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="video" className="padded h-auto relative py-20">
        <div className="absolute top-0 left-0 right-0 -z-1 w-full h-full">
          <img
            src={videoImg}
            alt="a woman singing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[5px]"></div>
        </div>
        <div
          className="flex items-center flex-col justify-center
            gap-y-30 md:flex-row"
        >
          <div className="flex-1">
            <h1 className="text-white leading-snug text-center lg:text-start mb-5">
              Transform Your Voice, Transform Your Worship
            </h1>
            <p className="border-b-white border-b w-full lg:w-fit text-white text-2xl pb-3 text-center lg:text-start">
              Bold Messages. Deep influence.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center flex-col gap-8">
            <PlayCircleIcon
              className="text-white hover:cursor-pointer"
              size={100}
            />
            <h3 className="text-white font-nunito italic font-light text-2xl w-[80%] text-center">
              Empowering Voices: The Journey of ABM Productions and Alston
              Milton
            </h3>
            <div className="flex gap-3">
              <InstagramIcon
                size={30}
                className="text-white hover:cursor-pointer"
              />
              <FacebookIcon
                size={30}
                className="text-white hover:cursor-pointer"
              />
              <YoutubeIcon
                size={30}
                className="text-white hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
