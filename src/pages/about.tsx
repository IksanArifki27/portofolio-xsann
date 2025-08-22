import { motion } from 'framer-motion';
import {
  SiFirebase,
  SiLaravel,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiMysql,
  SiPython,
  SiGit,
  SiPostman,
  SiJavascript,
  SiPhp,
  SiNodedotjs,
  SiPostgresql,
  SiMikrotik
} from 'react-icons/si';
import { useState } from 'react';
import Image from 'next/image';
import { setTransition } from '@lib/transition';
import { SEO } from '@components/common/seo';
import { Accent } from '@components/ui/accent';
import { Tooltip } from '@components/ui/tooltip';
import { CustomLink } from '@components/link/custom-link';
import type { IconType } from 'react-icons';

type TabKey = 'education' | 'experience' | 'Project Experience' | 'training';

const tabs: { label: string; value: TabKey }[] = [
  { label: 'Education', value: 'education' },
  { label: 'Work Experience', value: 'experience' },
  { label: 'Project Experience', value: 'Project Experience' },
  { label: 'Trainings & Certifications', value: 'training' }
];
export default function About(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabKey>('education');
  return (
    <main className='overflow-x-visible layout min-h-screen'>
      <SEO
        title='About'
        description='M. Khotibul Umam is a Fresh Graduate from Information System'
      />
      <section className='grid gap-2'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition()}
        >
          About
        </motion.h2>
        <motion.h1
          className='text-2xl font-bold md:text-4xl'
          {...setTransition({ delayIn: 0.1 })}
        >
          <Accent>M. Iksan Arifki</Accent>
        </motion.h1>
      </section>
      <section id='about' className='mt-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto'>
          {/* LEFT SIDE: 2/3 TEXT */}
          <motion.article
            className='prose prose-neutral dark:prose-invert md:col-span-2'
            {...setTransition({ delayIn: 0.2 })}
          >
            <p>
              Hi, I&apos;m M. Iksan Arifki, an Informatics Engineering graduate
              from from the University of 17 August 1945 Surabaya. I have a
              strong interest and experience in information technology,
              particularly in web development, networking, and data centers. I
              am dedicated to continuously learning and adapting to the latest
              technological developments to provide innovative and efficient
              solutions.
            </p>
            <p>
              I continued to develop professionally at PT Interbat. I was also
              involved in the design and development of information systems for
              the internal HSE division. This hands-on experience helped hone my
              skills in data analysis, reporting, and enterprise-level system
              evaluation.
            </p>
            <p>
              I enjoy working on information technology-based projects, such as
              when I created an information system and device monitoring to
              analyze quality changes. I'm always eager to learn, build, and
              collaborate. This site is where I showcase my work, share
              insights, and reflect on what I've learned. Feel free to contact
              me if you'd like to connect or collaborate!
            </p>
          </motion.article>
          <motion.div
            className='w-full flex justify-center md:justify-end'
            // {...setTransition({ delayIn: 0.4 })}
          >
            <div className='relative group w-fit'>
              <Image
                src='/iksan.jpg'
                alt='Photo of me'
                width={350}
                height={250}
                className='rounded-2xl shadow-lg object-cover'
              />
              {/* <div className='absolute inset-0 bg-black opacity-100 rounded-2xl group-hover:opacity-0 transition duration-1000 mix-blend-multiply'></div> */}
              {/* <Image
                src='/logo.webp'
                alt='Logo Overlay'
                width={250}
                height={400}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 transition duration-1000'
              /> */}
            </div>
          </motion.div>
        </div>
      </section>
      <section id='favorite-tech-stack' className='mt-12 grid gap-4'>
        <motion.h2
          className='text-xl font-bold md:text-3xl'
          {...setTransition({ delayIn: 0.3 })}
        >
          <Accent>Favorite Tech Stack</Accent>
        </motion.h2>
        <motion.ul
          className='grid grid-cols-3 gap-16 sm:grid-cols-6
             place-items-center'
          {...setTransition({ delayIn: 0.4 })}
        >
          {favoriteTechStack.map(({ tip, name, href, Icon }) => (
            <Tooltip
              tag='li'
              key={name}
              tip={
                <>
                  <CustomLink href={href} tabIndex={-1}>
                    {name}
                  </CustomLink>
                  {', '}
                  {tip}
                </>
              }
              tooltipClassName='group-hover:!-translate-y-36 w-72 px-3 py-4 !-translate-y-28
                        text-center !whitespace-normal 2xl:!-translate-x-1/2
                        peer-focus-visible:!-translate-y-36'
            >
              <button className='smooth-tab peer'>
                <Icon className='text-4xl transition-colors hover:text-accent-main' />
              </button>
            </Tooltip>
          ))}
        </motion.ul>
      </section>

      <section id='more' className='mt-16'>
        <motion.h2
          className='text-xl font-bold md:text-3xl mb-6'
          {...setTransition({ delayIn: 0.5 })}
        >
          <Accent>More About Me</Accent>
        </motion.h2>

        <div className='w-full md:flex md:gap-6'>
          <div className='md:w-1/4'>
            {tabs.map((tab) => (
              <div key={tab.value}>
                <button
                  onClick={() => setActiveTab(tab.value)}
                  className={`w-full text-left py-3 px-4 border-r transition ${
                    activeTab === tab.value
                      ? 'bg-accent-main/10 text-accent-main font-bold border-accent-main border-r-4'
                      : 'text-muted-foreground hover:bg-muted/10'
                  }`}
                >
                  {tab.label}
                </button>
                {activeTab === tab.value && (
                  <div className='block md:hidden px-4 py-2'>
                    {/* Optional: tab content preview */}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='w-full'>
            {activeTab === 'education' && (
              <div>
                {activeTab === 'education' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='space-y-4'
                  >
                    <div>
                      <h3 className='text-lg font-semibold'>
                        <CustomLink href='https://www.untag-sby.ac.id'>
                          {' '}
                          Universitas 17 Agustus 1945 Surabaya
                        </CustomLink>
                      </h3>
                      <p className='text-sm text-muted'>
                        Sep 2020 – Jul 2024 · Bachelor of Informatics
                        Engineering (GPA 3.63/4.00)
                      </p>
                      <ul className='list-disc pl-5 mt-1 text-base'>
                        <li>
                          Completed Thesis: Design of an assessment information
                          system based on the OBE curriculum.
                        </li>
                        <li>
                          Focused on IT Development and Information Systems
                        </li>
                        <li>Graduated in 8 semesters with CumLaude honors</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>
                        <CustomLink href='https://smk-wh2sby.sch.id/'>
                          {' '}
                          SMK Wachid Hasyim 2 Surabaya
                        </CustomLink>
                      </h3>
                      <p className='text-sm text-muted'>
                        Aug 2017 – Mar 2020 · Surabaya, East Java
                      </p>
                      <ul className='list-disc pl-5 mt-1 text-base'>
                        <li>
                          Graduated with a focus on technology information
                          systems
                        </li>
                        <li>
                          The competition is to create informative and
                          attractive designs.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
            {activeTab === 'experience' && (
              <div>
                {activeTab === 'experience' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='space-y-4'
                  >
                    <div>
                      <h3 className='text-lg font-semibold'>
                        <CustomLink href='https://www.interbat.co.id/'>
                          {' '}
                          PT Interbat
                        </CustomLink>
                      </h3>
                      <p className='text-sm text-muted'>
                        Jan 2023 – Mar 2023 · Sidoarjo, Indonesia
                      </p>
                      <ul className='list-disc pl-5 mt-1 text-base'>
                        <li>
                          Contributed to the design and support of internal
                          information systems.
                        </li>

                        <li>
                          Performed hardware setup and troubleshooting to
                          support digital .
                        </li>
                        <li>
                          involved in the development of the company's internal
                          information systems
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>
                        <CustomLink href='https://kursuskomputerpalingdiminatidisurabaya.wordpress.com/'>
                          {' '}
                          CV Isokativ Indonesia
                        </CustomLink>
                      </h3>
                      <p className='text-sm text-muted'>
                        Jan 2019 – Jul 2019 · Surabaya, Indonesia
                      </p>
                      <ul className='list-disc pl-5 mt-1 text-base'>
                        <li>Contribute in managing the database.</li>
                        <li>Compile and prepare reports based on data.</li>
                        <li>
                          Provided user training and system testing support.
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
            {activeTab === 'Project Experience' && (
              <div>
                {activeTab === 'Project Experience' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='space-y-4'
                  >
                    <ul className='list-disc pl-5'>
                      <li>
                        Web-Based Occupational Health and Safety Management
                        Information System –{' '}
                        <CustomLink href='https://laravel.com'>
                          {' '}
                          (Laravel)
                        </CustomLink>
                      </li>
                      <p>
                        Development of internet customer management information
                        systems
                      </p>
                      <li>
                        Water Quality Change Dashboard Project –{' '}
                        <CustomLink href='https://laravel.com'>
                          {' '}
                          (Laravel)
                        </CustomLink>
                      </li>
                      <p>
                        create a user-friendly management information system for
                        internet provider customers
                      </p>
                      <li>
                        web-based tourism information system–{' '}
                        <CustomLink href='https://nodejs.org/id'>
                          {' '}
                          (JavaScript)
                        </CustomLink>
                      </li>
                      <p>
                        Developing an information system for tourists focused on
                        finding out about places to visit.
                      </p>
                    </ul>
                  </motion.div>
                )}
              </div>
            )}
            {activeTab === 'training' && (
              <div>
                {activeTab === 'training' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='space-y-4'
                  >
                    <ul className='list-disc pl-5'>
                      <li>
                        BNSP LSP Technical Support Junior –{' '}
                        <CustomLink href='https://www.lsptik.or.id/'>
                          {' '}
                          BNSP LSP TIK{' '}
                        </CustomLink>
                        2024
                      </li>
                      <li>
                        Frontend Developer Junior –{' '}
                        <CustomLink href='https://www.dicoding.com/'>
                          {' '}
                          Dicoding{' '}
                        </CustomLink>
                        2023
                      </li>
                      <li>
                        Revou Digital Marketing Junior –{' '}
                        <CustomLink href='https://https://www.revou.co/?utm_source=sem&gad_campaignid=20753000855&gclid=Cj0KCQjwh5vFBhCyARIsAHBx2wz4zq6w_rsYVhle6xhLrkpfCxcqBhTxZlqxhMTm_o3-jYpEvYvEFeYaAuDmEALw_wcB&gbraid=0AAAAABUZEVuP7KZN3oginnbCwlP2IHTyD&utm_content=id_fp_branded_high_conversion_revou--revou_e_c&gad_source=1&utm_medium=cpc#our-programs.id/'>
                          {' '}
                          Revou{' '}
                        </CustomLink>
                        2024
                      </li>
                      <li>
                        BNSP LSP Junior Graphic Design –{' '}
                        <CustomLink href='https://lspdwiwarna.com/'>
                          {' '}
                          BNSP LSP Dwi Warna{' '}
                        </CustomLink>
                        2022
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

type FavoriteTechStack = {
  tip: string;
  name: string;
  href: string;
  Icon: IconType;
};

const favoriteTechStack: FavoriteTechStack[] = [
  {
    tip: 'a PHP framework for web artisans, providing elegant syntax and tools for building modern web applications.',
    name: 'Laravel',
    href: 'https://laravel.com',
    Icon: SiLaravel
  },
  {
    tip: 'a popular general-purpose scripting language that is especially suited to web development.',
    name: 'PHP',
    href: 'https://www.php.net',
    Icon: SiPhp
  },
  {
    tip: "a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to build scalable network applications.",
    name: 'Node.js',
    href: 'https://nodejs.org',
    Icon: SiNodedotjs
  },
  {
    tip: 'an open-source relational database management system based on SQL.',
    name: 'MySQL',
    href: 'https://www.mysql.com',
    Icon: SiMysql
  },
  {
    tip: 'a utility-first CSS framework that helps you build custom designs without ever leaving your JSX.',
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    Icon: SiTailwindcss
  },
  {
    tip: 'a JavaScript library for building user interfaces.',
    name: 'React',
    href: 'https://react.dev',
    Icon: SiReact
  },
  {
    tip: 'a strongly typed language that builds on JavaScript, giving you better tooling at any scale.',
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    Icon: SiTypescript
  },
  {
    tip: 'database is a highly powerful and advanced open-source object-relational database management system (ORDBMS).',
    name: 'Postgresql',
    href: 'https://www.postgresql.org/',
    Icon: SiPostgresql
  },
  {
    tip: 'MikroTik is a network technology that is famous for its hardware and software products for computer networks.',
    name: 'Mikrotik',
    href: 'https://www.python.org',
    Icon: SiMikrotik
  },
  {
    tip: 'a distributed version control system for tracking changes in source code during software development.',
    name: 'Git',
    href: 'https://git-scm.com',
    Icon: SiGit
  },
  {
    tip: 'a collaboration platform for API development, allowing you to design, test, and document APIs.',
    name: 'Postman',
    href: 'https://www.postman.com',
    Icon: SiPostman
  },
  {
    tip: 'a high-level, interpreted programming language known for its ease of use and versatility.',
    name: 'JavaScript',
    href: 'https://www.javascript.com',
    Icon: SiJavascript
  }
];
