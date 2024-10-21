"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaTerminal } from "react-icons/fa";
import Image from "next/image";
import { faqs } from "@/data/faqs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const Result = () => {
  return (
    <Alert className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">
      <FaTerminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Your message have been successfully submited. Thanks for reaching out to
        us.
      </AlertDescription>
    </Alert>
  );
};

const ContactUs = () => {
  const { t } = useTranslation();
  const form: React.RefObject<HTMLFormElement> = useRef(null);
  const [result, showResult] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [selectedMap, setSelectedMap] = useState<"betel" | "merkato">("betel");

  const handleMapChange = (map: "betel" | "merkato") => {
    setFadeIn(false); // Trigger fade-out animation
    setTimeout(() => {
      setSelectedMap(map);
      setFadeIn(true); // Trigger fade-in animation
    }, 300);
  };
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            showResult(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form element is undefined");
    }
  };

  return (
    <div className="w-full space-y-6 h-full">
      {/* banner */}
      <div className="relative bg-[url('/contactus_hero.jpg')] bg-cover bg-bottom h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            {t("common:contact_us")}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto rounded-lg h-full">
        <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4">
          {/* the div for the message section */}
          <div className="rounded-lg space-y-8">
            <p className="text-3xl max-w-lg">
              {t("common:contact_us_header")}{" "}
            </p>
            <p>{t("common:contact_us_detail")}</p>
            {/* action="https://formspree.io/f/xayrqznv" method="POST" */}
            <form className="mt-8 space-y-8" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full rounded-xl py-3 px-4 text-sm border border-md border-gray-800/70"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full rounded-xl py-3 px-4 text-sm border border-md border-gray-800/70"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full rounded-xl px-4 text-sm pt-3 border border-md border-gray-800/70"
                required
              ></textarea>
              <div>{result ? <Result /> : null}</div>
              <Button
                type="submit"
                value="Send"
                className="text-white bg-primary hover:bg-primary font-semibold rounded text-sm px-4 py-3 flex items-center justify-center w-64 max-w-full"
              >
                Send
              </Button>
            </form>
          </div>

          {/* The div for the image */}
          <div className="flex justify-center items-center">
            <Image
              src="/image-with_icon.png"
              width={500}
              height={500}
              alt="Contact Us"
            />
          </div>
        </div>

        {/* faq section */}
        <div className="sm:w-3/4 md:w-2/3 max-w-full mx-auto mt-8 p-2.5 md:p-12">
          {faqs.map((faq, idx) => (
            <Accordion
              type="single"
              key={idx}
              collapsible
              className="border border-md border-gray-800/70 rounded-xl my-8 min-w-lg px-6"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {t("common:lang") == "en" ? faq.question : faq.question_am}
                </AccordionTrigger>
                <AccordionContent className="">
                  {" "}
                  {t("common:lang") == "en" ? faq.answer : faq.answer_am}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* The map div */}
        <div className="flex mb-10 sm:px-2 md:px-10 lg:px-36 justify-center font-latoRegular">
          <button
            className={`text-lg font-medium pr-8 ${
              selectedMap === "betel" ? "text-black" : "text-gray-400"
            } transition-all duration-300 ease-in-out`}
            onClick={() => handleMapChange("betel")}
          >
            {t("common:betel").split(",")[0] + " "} {t("common:branch")}
          </button>

          <button
            className={` text-h3_bold pl-8 ${
              selectedMap === "merkato" ? "text-black" : "text-gray-400"
            } transition-all duration-300 ease-in-out`}
            onClick={() => handleMapChange("merkato")}
          >
            {t("common:merkato").split(",")[0] + " "} {t("common:branch")}
          </button>
        </div>

        {/* Maps with transition */}
        <div
          className={`relative w-full h-72 sm:h-[75vh] md:h-[90hv] flex justify-center items-center my-4  transition-opacity duration-500 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <div className="relative w-full h-72 sm:h-[75vh] md:h-[90hv] flex justify-center items-center my-4 "> */}
          {/* SVG background */}
          <div className="absolute top-0 left-4 w-2/3 h-full z-0">
            <Image
              src="/svgs/vector.svg"
              alt="Background SVG"
              className="object-cover"
              fill
            />
          </div>

          {/* Map Image on top of SVG */}
          <div className="relative z-20 border-4 border-white shadow-lg w-4/5 h-4/5">
            <div className="z-10 relative h-full  flex justify-center align-center">
              {selectedMap == "betel" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.196698176735!2d38.691625574613305!3d9.002650089401673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b87153a980967%3A0x8a391b9f99b47bc3!2sAbduselam%20Curtain%2C%20Mejlis%20%26%20Furniture!5e1!3m2!1sen!2set!4v1728473485532!5m2!1sen!2set"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg b-0"
                  allowFullScreen={true}
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.50338271863126!2d38.739049969911235!3d9.031001305973572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8567a0e26ebf%3A0x9740d8c81283253e!2zVGFuYSBNYXJrZXQgfCBNZXJrYXRvIHwg4Yyj4YqTIOGMiOGJoOGLqyB8IOGImOGIreGKq-GJtiB8IFJJREUgODI5NA!5e0!3m2!1sen!2set!4v1729529400716!5m2!1sen!2set"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg b-0"
                  allowFullScreen={true}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
