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
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/nguyenthanhduyofficial/",
      icon: null,
      iconImage: (
        <Image
          src="/icons/linkedin.png"
          alt="linkedin"
          width={24}
          height={24}
        ></Image>
      ),
    },
    {
      title: "Facebook",
      href: "https://facebook.com/nguyenthanhduyofficial",
      icon: <SiFacebook color="#1877F2" />,
      iconImage: null,
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/@NguyenThanhDuyOfficial",
      icon: <SiYoutube color="#FF0000" />,
      iconImage: null,
    },
  ];
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.icon ? link.icon : link.iconImage}
        </Link>
      ))}
    </div>
  );
}
