import Link from "next/link";
import { simpleNails } from "@/fonts/fonts";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-99 h-20 px-8 flex justify-between items-center">
      <p className={`${simpleNails.className} text-3xl`}>Duy</p>
      <div className="flex items-center gap-16">
        <Link href="">Projects</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </div>
    </header>
  )
}
