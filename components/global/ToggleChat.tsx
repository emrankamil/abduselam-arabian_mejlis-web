"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { Button } from "../ui/button";
import { IoChatbox } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-5 space-y-2 left-5 z-50 max-w-full">
      <div
        className={`w-96 h-96 flex-grow overflow-y-auto no-scrollbar bg-white rounded-xl shadow-3xl flex flex-col transform-all transition-all transition-opacity duration-500 ${
          isChatOpen ? "translate-y-0 opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className=" bg-primary text-white px-4 pt-4 rounded-t-lg">
          <h3 className="text-lg font-semibold">Chat With us</h3>
          <p className="py-2">
            {" "}
            👋 Hi, message us with any questions. We&apos;re happy to help!
          </p>
          <Button
            onClick={toggleChat}
            className="absolute text-sm top-0 right-0 hover:bg-transparent"
          >
            <FaTimes />
          </Button>
          {/* chat section */}
          <form onSubmit={() => {}}>
            <div className="flex items-center py-2 mt-3 px-1 bg-gray-50 rounded dark:bg-gray-700 -mb-2 shadow-xl">
              <button
                type="button"
                className="inline-flex justify-center text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <textarea
                id="chat"
                rows={1}
                className="block mx p-2.5 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="submit"
                className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 w-full mx-auto px-4">
          <h1 className="text-center font-semibold">Instant Answers</h1>
          <div className="">
            {faqs.map((faq, idx) => (
              <Accordion
                type="single"
                key={idx}
                collapsible
                className="border border-md border-gray-800/70 rounded-xl my-2 min-w-full px-2"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      {!isChatOpen ? (
        <Button
          variant={"secondary"}
          onClick={toggleChat}
          className="bg-gray-300 hover:bg-gray-300 text-primary p-2 rounded-full shadow-xl focus:outline-none transition-transform duration-300 hover:scale-110 w-14 h-14 flex items-center justify-center"
        >
          <IoChatbox fontSize={40} />
        </Button>
      ) : (
        <Button
          onClick={toggleChat}
          className="bg-gray-300 hover:bg-gray-300 font-extralight	 text-primary p-4 rounded-full shadow-xl focus:outline-none transition-transform duration-300 hover:scale-110 w-14 h-14 flex items-center justify-center"
        >
          <FaTimes fontSize={40} className="font-extralight" />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;
