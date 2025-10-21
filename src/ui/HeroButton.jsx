// HeroButton.jsx
"use client";
import React from "react";
import Button from "@/components/Button";
import { GoArrowRight } from "react-icons/go";

const HeroButton = () => (
  <Button
    onClick={() => console.log("✅ this is click free audit")}
    classname="hero-btn"
    content="Get your Free Audit $2500"
    spanContent={<GoArrowRight />}
  />
);

export default HeroButton;
