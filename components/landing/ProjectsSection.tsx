import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      name: "Name",
      role: "",
      description: "",
      client: "",
      tech_stack: "",
      link: {
        live: ""
      },
      timeline: {
        start: "",
        end: ""
      }
    }
  ]
  return (
    <section className="grid grid-cols-12 gap-y-16">
      <div className="relative col-span-9 col-start-2 aspect-video">
        <Image
          src="/projects/car.png"
          alt="car-screenshot"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="relative col-span-8 col-start-3 aspect-video">
        <Image
          src="/projects/odyssey.png"
          alt="odyssey-screenshot"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-10 col-start-2 grid grid-cols-10 items-center">
        <div className="relative col-span-8 aspect-video">
          <Image
            src="/projects/dotfile.png"
            alt="dotfile-screenshot"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Image
          src="/projects/catppuccin.png"
          alt="catppuccin"
          width={80}
          height={80}
          className="rounded-full col-end-11"
        />
      </div>

    </section>
  )
}
