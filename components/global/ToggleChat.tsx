"use client";

import React, { useEffect, useRef, useState } from "react";
import { faqs } from "@/data/faqs";
import { Button } from "../ui/button";
import { IoChatbox } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Picker from "emoji-picker-react";
import { EmojiStyle } from "emoji-picker-react";
import { useTranslation } from "react-i18next";

const ChatWidget = () => {
  const { t } = useTranslation();
  const [selectedQuestion, setSelectedQuestion] = useState<{
    question: string;
    answer: string;
  } | null>(null);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (isChatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [chatHistory, isChatOpen, formVisible]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("chatHistory");
    if (storedHistory) {
      setChatHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    if (chatHistory.length > 0) {
      // Update local storage only if chatHistory is not empty
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }
  }, [chatHistory]);

  const handleInstantAnsSelect = (faq: {
    question: string;
    question_am: string;
    answer: string;
    answer_am: string;
  }) => {
    setSelectedQuestion(faq);

    const newChat = {
      question: t("common:lang") == "en" ? faq.question : faq.question_am,
      answer: t("common:lang") == "en" ? faq.answer : faq.answer_am,
    };

    setChatHistory([...chatHistory, newChat]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    if (!message) return;
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const newChat = {
        question: message,
        answer:
          "We have received your message, and we will get back to you as soon as we can.\nIf you want to know more, please contact +97143388533 or mail to info@tarrab.net",
      };

      setSelectedQuestion(newChat);
      setChatHistory([...chatHistory, newChat]);
      setMessage("");
    } else {
      setSelectedQuestion({
        question: message,
        answer: "Please enter your name and email to continue.",
      });
      setFormVisible(true);
    }
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && user.name && user.email) {
      localStorage.setItem("user", JSON.stringify(user));
      // Show the message after storing the user
      const newChat = {
        question: message,
        answer:
          "We have received your message, and we will get back to you as soon as we can.\nIf you want to know more, please contact +97143388533 or mail to",
      };

      setSelectedQuestion(newChat);

      setChatHistory([...chatHistory, newChat]);

      setMessage("");
      setFormVisible(false);
    }
  };
  const returnToQuestionList = () => {
    setSelectedQuestion(null);
    setFormVisible(false);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div className="fixed bottom-3 space-y-2 left-2 sm:bottom-5 sm:left-5 z-50 w-full font-latoRegular">
      <div
        className={`w-[365px] max-w-4/5 h-[450px] flex-grow overflow-y-auto no-scrollbar bg-white rounded-xl shadow-3xl flex flex-col transform-all transition-all transition-opacity duration-500 ${
          isChatOpen ? "translate-y-0 opacity-100" : "opacity-0 hidden"
        }`}
      >
        <div className=" bg-primary text-white px-4 pt-4 rounded-t-lg">
          <h3 className="text-lg font-semibold font-playfair">
            {t("common:chat_with_us")}
          </h3>
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
          {!selectedQuestion ? (
            <MessageBox
              handleSubmit={handleSendMessage}
              message={message}
              setMessage={setMessage} // Pass setMessage to update the message state
            />
          ) : (
            <Button
              variant="secondary"
              className="border border-md border-gray-200/70 rounded mb-2 min-w-full px-2 "
              onClick={returnToQuestionList}
            >
              Return to Instant Answers
            </Button>
          )}
        </div>

        {/* chat board */}
        <div className="w-full">
          {!selectedQuestion ? (
            <div className="mt-6 w-full mx-auto px-4 w-full">
              <h1 className="text-center font-semibold font-playfair">
                Instant Answers
              </h1>
              <div className="">
                {faqs.map((faq, idx) => (
                  <Button
                    key={idx}
                    variant={"secondary"}
                    className="border border-md border-gray-800/70 rounded-xl my-2 w-full px-2 "
                    onClick={() => handleInstantAnsSelect(faq)}
                  >
                    <h1
                      className="text-left break-words whitespace-normal overflow-hidden"
                      style={{ wordWrap: "break-word" }}
                    >
                      {t("common:lang") === "en"
                        ? faq.question
                        : faq.question_am}
                    </h1>
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-h-80 overflow-y-auto border border-gray-300 rounded-md ">
              {/* chat history */}
              {chatHistory.length > 0 && (
                <div className="mt-6">
                  {chatHistory.map((chat, idx) => (
                    <div key={idx} className="mt-2">
                      <div className="text-right">
                        <p className="bg-primary text-white rounded px-4 py-2 inline-block m-1 ml-4">
                          {chat.question}
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="bg-gray-200 rounded px-4 py-2 inline-block m-1 mr-6">
                          {chat.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Dummy div to scroll to */}
              <div ref={chatEndRef}></div>
              {formVisible && (
                <form onSubmit={handleUserSubmit} className="mt-6 px-4">
                  <h2 className="m-4">
                    Hey there, Please leave your details below, and we&apos;ll
                    get back to you shortly with the information you need, even
                    if you leave the site.
                  </h2>
                  <div className="flex flex-col space-y-4 bg-white shadow-lg p-4 rounded-lg">
                    <label className="text-sm text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={user?.name || ""}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          name: e.target.value,
                          email: user?.email || "",
                        })
                      }
                      className="p-2 border-b border-gray-300 rounded focus:outline-none focus:border-primary/50"
                      required
                    />
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={user?.email || ""}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          email: e.target.value,
                          name: user?.name || "",
                        })
                      }
                      className="p-2 border-b border-gray-300 rounded focus:outline-none focus:border-primary/50"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
        {selectedQuestion && (
          <MessageBox
            handleSubmit={handleSendMessage}
            message={message}
            setMessage={setMessage} // Pass setMessage to update the message state
          />
        )}
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

const MessageBox = ({
  handleSubmit,
  message,
  setMessage,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const addEmoji = (e: { unified: string }) => {
    const sym: string[] = e.unified.split("-");
    const codesArray: number[] = [];
    sym.forEach((el: string) => codesArray.push(parseInt("0x" + el)));
    const emoji = String.fromCodePoint(...codesArray);
    setMessage(message + emoji);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as React.FormEvent<HTMLTextAreaElement>);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          onClick={() => setShowPicker(!showPicker)}
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
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
          onClick={() => setShowPicker(false)}
          onFocus={() => setShowPicker(false)}
        ></textarea>
        <button
          type="submit"
          className={`inline-flex justify-center p-2 rounded-full cursor-pointer ${
            message
              ? "text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              : "text-gray-400 cursor-not-allowed"
          }`}
          disabled={!message}
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
      {/* Display Emoji Picker */}
      {showPicker && (
        <div className="flex items-center rounded dark:bg-gray-700">
          <Picker
            onEmojiClick={addEmoji}
            skinTonesDisabled
            searchDisabled
            lazyLoadEmojis
            emojiStyle={EmojiStyle.TWITTER}
            open={showPicker}
          />
        </div>
      )}
    </form>
  );
};
