import {
  SiGithub,
  SiFacebook,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

import Image from "next/image";
import Link from "next/link";
export default function SocialLinks() {
  const socialLinks = [
    {
      title: "Github",
      href: "https://github.com/NguyenThanhDuyOfficial",
      icon: <SiGithub />,
      iconImage: null,
      ariaLabel: "Github Link",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/nguyenthanhduyofficial/",
      icon: null,
      ariaLabel: "LinkedIn Link",
      iconImage: (
        <Image
          src="/icons/linkedin.png"
          alt="linkedin"
          fill
          className="object-cover"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      ),
    },
    {
      title: "Facebook",
      href: "https://facebook.com/nguyenthanhduyofficial",
      icon: <SiFacebook color="#1877F2" />,
      iconImage: null,
      ariaLabel: "Facebook Link",
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/@NguyenThanhDuyOfficial",
      icon: <SiYoutube color="#FF0000" />,
      iconImage: null,
      ariaLabel: "Youtube Link",
    },
  ];
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative w-6 h-6"
          aria-label={link.ariaLabel}
        >
          {link.icon ? link.icon : link.iconImage}
        </Link>
      ))}
    </div>
  );
}
