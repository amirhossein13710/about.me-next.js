import Link from "next/link";
import { Button } from "./ui/button";
import { Download, send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// component
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold text-primary mb-4 tracking-[4px]">Web Developer</div>
            <h1 className="h1 mb-4">Hello, my name is Hossein</h1>
            <p className="subtitle mx-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational 
                journey, and what I engage in professionaly.
            </p>
            <div>buttons</div>
          </div>
          <div className="hidden xl:flex relative">Image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
