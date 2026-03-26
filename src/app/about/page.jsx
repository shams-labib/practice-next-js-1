import Title from "@/Components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>This is about page</Title>

      <nav className="flex justify-center items-center mt-10 ">
        <ul className="space-x-5">
          <Link
            href={"/about/contact"}
            className="px-4 py-2 font-semibold text-center bg-amber-500 text-white rounded-xl"
          >
            Contact
          </Link>
          <Link
            href={"/about/team"}
            className="px-4 py-2 font-semibold text-center bg-amber-500 text-white rounded-xl"
          >
            Team
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default About;
