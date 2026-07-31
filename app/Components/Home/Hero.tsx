"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface GithubUser {
  followers: number;
  public_repos: number;
}

const Hero = () => {
  const [githubData, setGithubData] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mrvornex")
      .then((res) => res.json())
      .then((data: GithubUser) => setGithubData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-15 font-mono">
      <div className="flex flex-col items-start gap-6">
        {/* Profile Image */}
        <img
          src="/Home_Img/bg10.png"
          alt="Muhammad Bilal"
          className="w-32 h-32 rounded-full border border-gray-300 object-cover"
        />

        {/* Name */}
        <h1 className="text-4xl font-bold text-black">
          Muhammad Bilal
        </h1>

        {/* Role */}
        <p className="text-lg text-gray-600">
          Full Stack Developer
        </p>

        {/* About */}
        <p className="max-w-3xl leading-8 text-gray-700">
          I build modern web applications using React, Node.js, and MongoDB. Passionate about writing clean code and continuously learning new technologies.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xl text-gray-600">
          <a
            href="https://github.com/mrvornex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/mrvornex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* <a
            href="https://www.youtube.com/@TalkingAIWorldOfficial"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a> */}

          <a
            href="https://x.com/mrvornex"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        {/* Stats */}
        {/* <div className="mt-2 space-y-3 text-gray-600">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faYoutube} />
            <span>78.5K Subscribers</span>
          </p>

          {githubData && (
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} />
              <span>
                {githubData.followers} Followers •{" "}
                {githubData.public_repos} Repositories
              </span>
            </p>
          )}
        </div> */}

        {/* Resume Button */}
        <a
          href="/Bilal.pdf"
          download="Muhammad-Bilal-Resume.pdf"
          className="mt-2 px-5 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Download Resume
        </a>

        {/* Activity Section */}
        {/* Activity Section */}
        <div className="mt-14 w-full">
          <h2 className="text-3xl font-bold mb-4 tracking-wide">
            ACTIVITY
          </h2>

          {githubData && (
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} />
              <span>
                {/* {githubData.followers} Followers •{" "} */}
                {githubData.public_repos} Repositories
              </span>
            </p>
          )}

          <p className="text-gray-600 mb-6 mt-5">
            GitHub contributions over the last year.
          </p>

          <div className="w-full flex justify-center overflow-hidden">
            <div className="origin-top scale-[0.38] sm:scale-[0.65] md:scale-[0.8] lg:scale-84">
              <GitHubCalendar
                username="mrvornex"
                colorScheme="light"
                fontSize={14}
                blockSize={12}
                blockMargin={4}
                theme={{
                  light: [
                    "#ebedf0",
                    "#d1d5db",
                    "#9ca3af",
                    "#6b7280",
                    "#1f2937",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;