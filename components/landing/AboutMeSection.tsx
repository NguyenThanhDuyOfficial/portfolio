import Image from "next/image";
import Link from "next/link";
import {
  SiJavascript,
  SiJavascriptHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss,
  SiCssHex,
  SiPython,
  SiPythonHex,
  SiGnubash,
  SiGnubashHex,
  SiTypescript,
  SiTypescriptHex,
  SiCplusplus,
  SiCplusplusHex,
  SiRust,
  SiRustHex,
  SiLua,
  SiLuaHex,

  SiPostgresql,
  SiPostgresqlHex,
  SiMysql,
  SiMysqlHex,
  SiSqlite,
  SiSqliteHex,
  SiRedis,
  SiRedisHex,
  SiMongodb,
  SiMongodbHex,

  SiDocker,
  SiDockerHex,
  SiNpm,
  SiNpmHex,
  SiVite,
  SiViteHex,
  SiPnpm,
  SiPnpmHex,
  SiVercel,
  SiVercelHex,
  SiSupabase,
  SiSupabaseHex,

  SiNodedotjs,
  SiNodedotjsHex,
  SiReact,
  SiReactHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiExpress,
  SiExpressHex,
  SiFastapi,
  SiFastapiHex,
  SiNestjs,
  SiNestjsHex,

  SiNeovim,
  SiNeovimHex,

  SiGithub,
  SiGithubHex,
  SiJira,
  SiJiraHex,
  SiGitlab,
  SiGitlabHex,
  SiMarkdown,
  SiMarkdownHex,
  SiObsidian,
  SiObsidianHex,

  SiArchlinux,
  SiArchlinuxHex,


} from "@icons-pack/react-simple-icons"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function AboutMeSection() {
  return (
    <section className="min-h-screen w-full px-32 grid grid-cols-12 items-center">
      <div className="relative h-140 col-span-5">
        <Image
          src="/aboutme/profile.jpg"
          alt="profile"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="col-span-7 col-start-7 grid grid-cols-7 gap-y-8">
        <p>Me</p>
        <p className="col-span-5 col-start-3 text-sm">Hi, I'm a software programmer, and I enjoy creating things that help people. Seeing people let go of their problems, become wiser, happier, and more peaceful is what I hope to see every day. </p>
        <p>Projects</p>
        <p className="col-span-5 col-start-3 text-sm">I strive to ensure my products meet at least three criteria: user-friendliness, efficiency, and security. I always focus on the project's architecture, clean code, and maintainability. I want my products to benefit both users and the developers who will maintain them in the future.</p>
        <p>Skills</p>
        <div className="col-span-5 col-start-3 flex flex-col gap-2">
          <div className="flex gap-4">
            <SiJavascript color={SiJavascriptHex} size={24} />
            <SiHtml5 color={SiHtml5Hex} size={24} />
            <SiCss color={SiCssHex} size={24} />
            <SiPython color={SiPythonHex} size={24} />
            <SiGnubash color={SiGnubashHex} size={24} />
            <SiTypescript color={SiTypescriptHex} size={24} />
            <SiCplusplus color={SiCplusplusHex} size={24} />
            <SiRust color={SiRustHex} size={24} />
            <SiLua color={SiLuaHex} size={24} />
          </div>
          <div className="flex flex-wrap gap-4">
            <SiPostgresql color={SiPostgresqlHex} size={24} />
            <SiMysql color={SiMysqlHex} size={24} />
            <SiSqlite color={SiSqliteHex} size={24} />
            <SiRedis color={SiRedisHex} size={24} />
            <SiMongodb color={SiMongodbHex} size={24} />
          </div>
          <div className="flex flex-wrap gap-4">
            <SiDocker color={SiDockerHex} size={24} />
            <SiNpm color={SiNpmHex} size={24} />
            <SiVite color={SiViteHex} size={24} />
            <SiPnpm color={SiPnpmHex} size={24} />
            <SiVercel color={SiVercelHex} size={24} />
            <SiSupabase color={SiSupabaseHex} size={24} />

          </div>
          <div className="flex flex-wrap gap-4">
            <SiNodedotjs color={SiNodedotjsHex} size={24} />
            <SiReact color={SiReactHex} size={24} />
            <SiNextdotjs color={SiNextdotjsHex} size={24} />
            <SiExpress color={SiExpressHex} size={24} />
            <SiFastapi color={SiFastapiHex} size={24} />
            <SiNestjs color={SiNestjsHex} size={24} />

          </div>
          <div className="flex flex-wrap gap-4">
            <SiNeovim color={SiNeovimHex} size={24} />
            <SiGithub color={SiGithubHex} size={24} />
            <SiJira color={SiJiraHex} size={24} />
            <SiGitlab color={SiGitlabHex} size={24} />
            <SiMarkdown color={SiMarkdownHex} size={24} />
            <SiObsidian color={SiObsidianHex} size={24} />
            <SiArchlinux color={SiArchlinuxHex} size={24} />
          </div>
        </div>
        <p>Social</p>
        <div className="col-span-5 col-start-3 text-sm">
          <Link href="/"><FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon></Link>
          <Link href="/"><FontAwesomeIcon icon={faLinkedin} size="2xl"></FontAwesomeIcon></Link>
        </div>
      </div>

    </section >
  )
}
