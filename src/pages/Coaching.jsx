import Navbar from "@/components/Navbar"
import Testiomonial from "@/components/Testimonial";
import benfitsImg from '@/assets/images/imgT-17.jpg';
import Footer from "@/components/Footer";
import { AudioLines, MicVocal, Shell } from "lucide-react";
import { motion } from "framer-motion";
import img1 from '@/assets/images/imgT-9.jpg';
import img2 from '@/assets/images/imgT-10.jpg';
import img3 from '@/assets/images/imgT-5.jpg';
import img4 from '@/assets/images/imgT-4.jpg';
import img5 from '@/assets/images/imgT-14.jpg';
import img6 from '@/assets/images/imgT-18.jpg';
import { scaleOnHover } from "@/components/animations";
function Coaching(){
    return(
        <div>
            <section className="hero md:h-screen gap-20 bg-dRed overflow-hidden" id="hero">
                <Navbar />
                <div className="text-white flex-1 flex flex-col items-center overflow-hidden gap-y-10">
                    <div className=" lg:w-[70%] w-full header padded">
                        <h1 className="text-center">Trusted By Hundreds Of Musical Agencies</h1>
                        <p className="text-center lg:w-[70%] w-full">
                            Our vocal training is designed for singers at every stage — from those still discovering their
                            voice and building confidence in their range, to seasoned vocalists ready to step outside the box
                            and explore new dimensions in their sound. 
                        </p>
                    </div>
                     <Testiomonial />
                </div>
            </section>


            <section id="benefits" className="padded-y padded lg:mb-20">
                <div className="container-box gap-y-20">
                    <div className="header">
                        <h1 className="text-center"><span className="text-4xl lg:text-5xl text-dRed font-bold font-alex">Elevate</span> Your Potential</h1>
                        <p className="text-center lg:w-[70%] w-full">
                            With over 10 years of experience as a chief worship leader and minister of music, Alston
                            combines spiritual encouragement with professional vocal techniques, ensuring your growth in
                            both skill and ministry impact.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-20 w-full">
                        <div className='flex-1 w-full'>
                            <img src={benfitsImg} alt="a singer" loading="lazy" className="rounded-2xl object-cover h-full"/>
                        </div>
                        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            <motion.div className="border border-dRed rounded-2xl p-6 flex gap-5" variants={scaleOnHover}>
                                <MicVocal size={50} className="text-dRed"/>
                                <div>
                                    <h3 className="mb-2 text-dRed">Build Vocal Strength & Control</h3>
                                    <p className="w-[85%]">
                                        Develop a powerful, well-balanced voice with tailored exercises that improve tone, clarity, and projection.
                                    </p>
                                </div>
                                
                            </motion.div>
                            <div className="border border-dRed rounded-2xl p-6 flex  gap-5">
                                <AudioLines className="text-dRed" size={50}/>
                                <div>
                                    <h3 className="mb-2 text-dRed">Master Breath and Stamina</h3>
                                    <p className="w-[85%]">
                                        Learn techniques to expand your breath support, giving you the endurance needed for long performances without strain.
                                    </p>
                                </div>
                                
                            </div>
                            <div className="border border-dRed rounded-2xl p-6 flex gap-5">
                                <Shell className="text-dRed" size={50}/>
                                <div>
                                    <h3 className="mb-2 text-dRed">Elevate Confidence & Presence</h3>
                                    <p className="w-[85%]">
                                        Gain the confidence to connect with your audience and lead with authority, whether on stage or in worship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="Gallery" className="lg:mb-20">
                <div className="header mb-20">
                    <h1>Voices In <span className="text-4xl lg:text-5xl text-dRed font-bold font-alex">Action</span></h1>
                    <p className="subtitle padded">
                        Step into the world of our students and performers—each image captures the energy, dedication, and growth that comes with discovering the true power of your voice.
                    </p>
                </div>
                <div className="columns-3 gap-4">
                    <img src={img1} alt="" className="mb-4 w-full rounded-lg" />
                    <img src={img3} alt="" className="mb-4 w-full rounded-lg" />
                    <img src={img4} alt="" className="mb-4 w-full rounded-lg" />
                    <img src={img2} alt="" className="mb-4 w-full rounded-lg" />
                    <img src={img5} alt="" className="mb-4 w-full rounded-lg" />
                    <img src={img6} alt="" className="mb-4 w-full rounded-lg" />
                </div>
            </section>


            <section id="pricing" className="padded padded-y ">
                <div className="mx-auto max-w-6xl">
                    <header className="mb-10 text-center">
                    <h2 className="text-3xl font-bold">Coaching Options & Pricing</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Choose the plan that fits your goals and schedule.
                    </p>
                    </header>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Individual */}
                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Individual Sessions</h3>
                        <p className="mt-3 text-3xl font-extrabold text-dRed">$50<span className="text-base font-medium">/hour</span></p>
                        <p className="mt-1 text-sm text-gray-600">1-hour minimum</p>
                    </div>

                    {/* Group */}
                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Group Sessions</h3>
                        <p className="mt-3 text-3xl font-extrabold text-dRed">$35<span className="text-base font-medium"> per person/hour</span></p>
                        <p className="mt-1 text-sm text-gray-600">1-hour minimum</p>
                    </div>

                    {/* Praise Team */}
                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Praise Team Training</h3>
                        <p className="mt-3 text-3xl font-extrabold text-dRed">$300<span className="text-base font-medium">/week</span></p>
                        <p className="mt-1 text-sm text-gray-600">Team development & coaching</p>
                    </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-offWhite p-4 text-dRed border border-amber-200">
                    <p className="text-sm">
                        <span className="font-semibold">Note:</span> A minimum <span className="font-semibold">50% deposit</span> is required to confirm all individual and group session bookings.
                    </p>
                    </div>
                </div>
                </section>
            <Footer />
        </div>
    )
}

export default Coaching