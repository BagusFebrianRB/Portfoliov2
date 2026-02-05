import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function ExperienceSection() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h1 className="mb-4 text-lg font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            Staff of External Affairs — BEM FTEIC ITS
          </h1>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50" />
              Led and coordinated the Advance Media Schooling event as Chief
              Organizer
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50" />
              Acted as a bridge between multiple divisions for design and
              communication needs
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50" />
              Strengthened leadership, coordination, and project management
              skills
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/BEM_SERTIF.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/BEM.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h1 className="mb-4 text-lg font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            Independent Study — Web Developer (DICODING)
          </h1>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Participated in a certified independent study program focused on
            Front-End Web Development. The program emphasized modern web
            technologies and industry-standard practices.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/dicoding1.jpg"
              alt="hero template"
              priority
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/dicoding2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <h1 className="mb-4 text-lg font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            Intern Front-End Web Developer — LEAP English Surabaya
          </h1>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked as a Front-End Web Developer Intern, collaborating with
            cross-functional teams to translate user requirements into
            functional web solutions following SDLC principles.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50" />
              Developed and maintained web features using CodeIgniter
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50" />
              Improved collaboration skills within a real-world software
              development workflow
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-white to-white/50" />
              Gained experience aligning business needs with technical
              implementation
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="mb-4 text-lg font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            Bachelor of Informatics Engineering — Institut Teknologi Sepuluh
            Nopember
          </h1>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed undergraduate studies with a strong academic record and a
            thesis focused on machine learning applications in financial
            markets.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/grad.jpg"
              alt="hero template"
              priority
              width={500}
              height={500}
              unoptimized
              className="h-20 w-full col-span-2  rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="mb-4 text-lg font-normal text-neutral-800 md:text-4xl dark:text-neutral-200">
            Self-Employed Developer
          </h1>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Building personal applications while continuously learning modern
            web technologies. Focus on delivering clean, maintainable solutions
            for clients and exploring new tech stacks.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/landing.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-top object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/experience/dashboard.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-top object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
