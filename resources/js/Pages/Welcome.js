import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Button from "@/Components/Button";

export default function Welcome(props) {
    return (
        <>
            <Head title="Learn Tailwindcss" />
            <nav className="sm:px-5 px-[7.5rem] py-10 flex justify-between">
                <div className="w-14 h-14">
                    <ApplicationLogo />
                </div>
                <ul className="sm:hidden flex gap-x-10 items-center text-gray-500">
                    <li className="text-black">Home</li>
                    <li>Course</li>
                    <li>Games</li>
                    <li>Reward</li>
                    <li>Discover</li>
                    <li>Global Rank</li>
                    <li>
                        <button className="bg-gray-200 px-7 text-black py-3 rounded-full">
                            Sign In
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="flex sm:px-5 px-[7.5rem] sm:mt-0 mt-8">
                <div className="left flex-1 flex flex-col justify-center">
                    <p className="text-gray-500 text-lg">Hallo gamers,</p>
                    <h1 className="text-5xl mb-8 font-bold leading-[3.9rem]">
                        Topup & Get a{" "}
                        <span className="border-b-8 border-cyan-500 inline-block leading-5">
                            New
                        </span>
                        <span className="border-b-8 border-cyan-500 inline-block leading-5">
                            Experience
                        </span>{" "}
                        in Gaming
                    </h1>
                    <p className="text-lg pr-16 leading-8">
                        Kami menyediakan jutaan cara untuk membantu players
                        menjadi pemenang sejati
                    </p>
                    <div className="btn-actions mt-10 sm:flex-col flex items-center gap-5">
                        <button className="bg-secondary text-lg sm:w-full px-14 py-3 rounded-full text-white capitalize">
                            get started
                        </button>
                        <a href="#" className="underline text-lg">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="right sm:hidden flex-1">
                    <img
                        src="assets/banner_image.png"
                        className="w-full"
                        alt=""
                    />
                    {/* <img
                        src="assets/card.png"
                        className="absolute top-8 left-[-20px]"
                        alt=""
                    />
                    <img
                        src="assets/card-1.png"
                        className="absolute bottom-8 right-[18px]"
                        alt=""
                    /> */}
                </div>
            </div>
        </>
    );
}
