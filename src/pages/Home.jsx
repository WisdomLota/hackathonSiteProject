import rightEllipse from "../assets/rightEllipse.png";
import leftEllipse from "../assets/leftEllipse.png";
import onePic from "../assets/onePic.png";
import whatsApp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/Telegram.svg";

import React, { useState, useEffect } from "react";

const Home = () => {
    const initialCountdownTime = 0.5 * 60; // 10 minutes in seconds
    const hackathonDuration = 0.01 * 60 * 60; // 24 hours in seconds

    const [initialTimeLeft, setInitialTimeLeft] = useState(initialCountdownTime);
    const [timeLeft, setTimeLeft] = useState(hackathonDuration);
    const [isInitialCountdownActive, setIsInitialCountdownActive] = useState(true);
    const [isHackathonActive, setIsHackathonActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isInitialCountdownActive && initialTimeLeft > 0) {
            interval = setInterval(() => {
                setInitialTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (initialTimeLeft === 0) {
            setIsInitialCountdownActive(false);
            setIsHackathonActive(true);
        }

        if (isHackathonActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsHackathonActive(false);
        }

        return () => clearInterval(interval);
    }, [isInitialCountdownActive, initialTimeLeft, isHackathonActive, timeLeft]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    };

    const googleFormsUrlClicker = () => {
        const googleFormUrl = "https://forms.gle/6RqPqxhLcpedXGLy9";
        window.location.href = googleFormUrl;
    };

    return (
        <>
            <div className="bg-pixelBlue">
                <div className="flex">
                    <div className="flex items-center">
                        <div className="flex-grow"></div>
                        <img src={leftEllipse} alt="left-ellipse" className="w-72 h-full mt-40" />
                    </div>

                    <div className="flex-grow pt-28 justify-center">
                        <div className="text-center">
                            <span className="text-7xl text-pixelGreen">P</span>
                            <span className="text-7xl text-pixelYellow">i</span>
                            <span className="text-7xl text-pixelYellow">x</span>
                            <span className="text-7xl text-pixelYellow">e</span>
                            <span className="text-7xl text-pixelYellow">l</span>
                            <span> </span>
                            <span className="text-7xl text-pixelYellow">C</span>
                            <span className="text-7xl text-pixelGreen">o</span>
                            <span className="text-7xl text-pixelGreen">d</span>
                            <span className="text-7xl text-pixelGreen">e</span>
                            <span className="text-7xl text-pixelGreen">x</span>
                            <h2 className="text-7xl text-pixelGreen">Annual Hackathon</h2>
                        </div>

                        <div className="py-20 space-y-6">
                            <p className="text-pixelGreen text-center text-3xl">
                                {isInitialCountdownActive ? "Hackathon begins in:" : (isHackathonActive ? "Hackathon ends in:" : "Hackathon has ended")}
                            </p>
                            <h2 className="text-pixelGreen text-center text-9xl">
                                {isInitialCountdownActive ? formatTime(initialTimeLeft) : formatTime(timeLeft)}
                            </h2>
                            <p className="text-pixelGreen text-center text-3xl">
                                {isInitialCountdownActive ? "Hackathon has not commenced" : (isHackathonActive ? "Hackathon in progress" : "Hackathon has ended")}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-grow"></div>
                        <img src={rightEllipse} alt="right-ellipse" className="w-72 h-full" />
                    </div>
                </div>

                <div className="flex justify-center items-center mt-12 mb-8 px-4">
                    <div>
                        <img src={onePic} alt="one-man-army" className="w-96 h-72" />
                    </div>
                    <div className="flex justify-center items-center w-96 h-72 border-2 border-pixelGreen">
                        <p className="text-5xl text-pixelGreen">Join Now!</p>
                    </div>
                </div>

                <div className="py-2 flex justify-center items-center">
                    <p onClick={googleFormsUrlClicker} className="text-1xl text-pixelYellow border-2 border-pixelYellow py-2 px-4 rounded-sm transition-colors duration-300 ease-in-out hover:text-pixelBlue hover:bg-pixelYellow">
                        I Want To Register
                    </p>
                </div>

                <div className="pt-12">
                    <h2 className="text-6xl text-pixelGreen text-center mt-12">About The Hackathon</h2>
                </div>

                <div className="pt-6">
                    <p className="text-pixelGreen text-1xl px-20 text-center">
                        Welcome to the Pixel Codex Hackathon! This 72-hour coding marathon is a platform 
                        for you to showcase your creativity, technical skills, and collaborative spirit.
                        Whether you're a first-time hacker or a seasoned veteran, we invite you to join 
                        us in creating extraordinary solutions. With categories ranging from websites to 
                        game development, and rewards including cash prizes, NFTs, potential job offers, 
                        and a chance to join our incubator program, this hackathon promises an adrenaline-filled
                        journey of innovation. Remember, it's not just about coding; it's about pushing your limits,
                        learning, and making unforgettable memories. Let's create something extraordinary together! 
                        Cheers to creativity and collaboration!
                    </p>
                </div>

                <div className="pt-20">
                    <p className="text-1xl text-pixelYellow px-20 text-center">
                        Please make sure to read through the hackathon document and also join the community and 
                        get answers to any and all questions you might have about the Hackathon.
                    </p>
                </div>

                <div className="flex justify-center items-center space-x-8 p-6">
                    <p className="text-1xl border-2 border-pixelGreen rounded-sm py-2 px-4 text-pixelGreen transition-colors duration-300 ease-in-out hover:text-pixelYellow hover:border-pixelYellow">
                        Join the community
                    </p>
                    <p className="text-1xl border-2 border-pixelGreen rounded-sm py-2 px-4 text-pixelGreen transition-colors duration-300 ease-in-out hover:text-pixelYellow hover:border-pixelYellow">
                        Hackathon Document
                    </p>
                </div>

                <div className="mx-40">
                    <div className="flex items-center justify-between pt-24 pb-14 space-x-6">
                        <div>
                            <span className="text-4xl text-pixelGreen">P</span>
                            <span className="text-4xl text-pixelYellow">i</span>
                            <span className="text-4xl text-pixelYellow">x</span>
                            <span className="text-4xl text-pixelYellow">e</span>
                            <span className="text-4xl text-pixelYellow">l</span>
                            <span> </span>
                            <span className="text-4xl text-pixelYellow">C</span>
                            <span className="text-4xl text-pixelGreen">o</span>
                            <span className="text-4xl text-pixelGreen">d</span>
                            <span className="text-4xl text-pixelGreen">e</span>
                            <span className="text-4xl text-pixelGreen">x</span>
                        </div>

                        <div className="flex space-x-4">
                            <span className="text-1xl text-lg text-pixelGreen">Privacy Policy</span>
                            <span className="text-1xl text-lg text-pixelGreen">About</span>
                        </div>

                        <div className="flex space-x-4">
                            <img src={whatsApp} alt="whatsapp" />
                            <img src={telegram} alt="telegram" />
                            <img src={instagram} alt="instagram" />
                        </div>
                    </div>
                </div>

                <div className="mx-28 pb-12">
                    <hr className="w-full border-3 border-pixelGreen" />
                </div>

                <div className="flex mx-32 pb-12 justify-between space-x-6">
                    <div>
                        <span className="text-1xl text-lg text-pixelGreen">P</span>
                        <span className="text-1xl text-lg text-pixelYellow">i</span>
                        <span className="text-1xl text-lg text-pixelYellow">x</span>
                        <span className="text-1xl text-lg text-pixelYellow">e</span>
                        <span className="text-1xl text-lg text-pixelYellow">l</span>
                        <span> </span>
                        <span className="text-1xl text-lg text-pixelYellow">C</span>
                        <span className="text-1xl text-lg text-pixelGreen">o</span>
                        <span className="text-1xl text-lg text-pixelGreen">d</span>
                        <span className="text-1xl text-lg text-pixelGreen">e</span>
                        <span className="text-1xl text-lg text-pixelGreen">x</span>
                        <span> </span>
                        <span className="text-1xl text-lg text-pixelGreen"> © </span>
                        <span>2024</span>
                    </div>

                    <div>
                        <p className="text-1xl text-lg text-pixelGreen">Moulding the Next Generation of Programmers</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
