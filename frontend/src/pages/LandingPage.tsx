import React from "react";
//@ts-ignore
import mascot from "../assets/mascot.png";
import { useNavigate } from "react-router-dom";
import { LuMessageSquare } from "react-icons/lu";
import { FiCloudLightning } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { BsUpload } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { PiBracketsAngleThin } from "react-icons/pi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";

import main_demo from "../assets/main_demo.mp4";
import main_demo_2 from "../assets/main_demo_2.mp4";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleStartToday = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7FF]">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-10 bg-[#FBF7FF]">
        <div className="flex w-full max-w-6xl space-x-10">
          <div className="flex-1 flex flex-col items-start space-y-4">
            <h1 className="text-5xl font-bold leading-snug text-left">
              Add AI Chat to Your
              <br />
              Website in Minutes
            </h1>
            <div className="space-y-1 ml-10">
              <p className="text-sm text-[#656D7A] text-left">
                Create custom AI chatbots trained on your content.
              </p>
              <p className="text-sm text-[#656D7A] text-left ml-5">
                Embed them anywhere. No coding required.
              </p>
            </div>
            <div className="flex space-x-4 mt-6 ml-4">
              <button
                className="w-48 px-6 py-3 bg-white text-[#837FFC] text-sm rounded-full border border-[#837FFC]"
                onClick={handleStartToday}
              >
                Get Started For Free
              </button>
              <button className="w-48 px-6 py-3 bg-[#837FFC] text-white text-sm rounded-full border border-transparent">
                View Demo
              </button>
            </div>
          </div>
          <div className="flex-1 h-72">
            <VideoPlayer video={main_demo} />
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center px-10 text-center my-24 bg-[#FBF7FF]">
        <h1 className="text-5xl font-bold">See It In Action</h1>
        <p className="mt-6 text-sm text-[#656D7A]">
          Our chatbots provide natural, engaging responses based on your content.
          <br />
          <span className="block">Try our demo to see how it works.</span>
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center px-10 mb-24">
        <div className="flex w-full max-w-6xl space-x-10">
        <div className="flex-1 h-72">
            <VideoPlayer video={main_demo_2} />
          </div>
          <div className="flex-1 space-y-16">
            <div className="flex items-center space-x-4">
              <LuMessageSquare className="text-4xl text-[#837FFC]" />
              <div className="flex flex-col">
                <span className="text-md font-semibold">
                  Natural Conversations
                </span>
                <span className="text-md text-gray-500">
                  Engaging responses that feel human-like
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FiCloudLightning className="text-4xl text-[#837FFC]" />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Lightning Fast</span>
                <span className="text-md text-gray-500">
                  Instant responses to keep your users engaged
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <GrDocumentText className="text-4xl text-[#837FFC]" />
              <div className="flex flex-col">
                <span className="text-md font-semibold">
                  Custom Knowledge Base
                </span>
                <span className="text-md text-gray-500">
                  Enhance responses with your own documents and data
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center px-10 text-center mt-16 bg-[#FBF7FF]">
        <h1 className="text-5xl">How It Works</h1>
        <p className="mt-4 text-md text-[#656D7A]">Here's the heavy lifting we'll take care of for you</p>
      </div>

      <div className="flex items-center justify-center mt-16">
        <div className="flex space-x-12 max-w-6xl w-full px-6">
          <div className="flex-1 bg-[#E3E2FF] flex flex-col items-center justify-center rounded-lg p-6 min-h-[180px]">
            <BsUpload className="text-5xl text-[#837FFC]" />
            <p className="font-bold text-xl text-[#837FFC]">
              Upload Your Content 
            </p>
            <p className="text-center text-sm mt-3 text-[#837FFC]">
              Simply upload your documents, FAQs, or knowledge base. We'll
              process and index your content automatically.
            </p>
          </div>
          <div className="flex-1 bg-[#E3E2FF] flex flex-col items-center justify-center rounded-lg p-6 min-h-[180px]">
            <GoDatabase className="text-5xl text-[#837FFC]" />
            <p className="font-bold text-xl text-[#837FFC]">Train Your Bot</p>
            <p className="text-center text-sm text-[#837FFC] mt-3">
              Our platform uses advanced AI technology to create a chatbot that understands your content and can answer questions.
            </p>
          </div>
          <div className="flex-1 bg-[#E3E2FF] flex flex-col items-center justify-center rounded-lg p-6 min-h-[180px]">
            <PiBracketsAngleThin className="text-5xl text-[#837FFC]" />
            <p className="font-bold text-xl text-[#837FFC]">Embed Anywhere</p>
            <p className="text-center text-sm text-[#837FFC] mt-3">
              Get a simple embed code to add your chatbot to any website, just like embedding a YouTube video.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center rounded-lg p-8 mt-36">
        <h1 className="text-5xl font-bold my-8">Ready to Get Started?</h1>
        <p className="text-[#656D7A] mb-8 text-md">
          Join thousands of websites already using our chatbots to engage their
          <br />
          <span className="block text-center">
            visitors and provide better support.
          </span>
        </p>
        <button
          className="w-60 px-6 py-2 bg-[#837FFC] text-[#FFFFFF] text-sm rounded-full border border-transparent"
          onClick={handleStartToday}
        >
          Create Your Chatbot Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
