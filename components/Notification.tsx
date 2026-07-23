import Link from "next/link";

export default function Notification() {
  return (
    <div className="min-h-dvh w-full fixed top-0 left-0 z-200 flex items-center justify-center
bg-[#1e1e2e] [background-image:radial-gradient(rgba(100,_116,_139,_0.2)_2px,_transparent_2px)] [background-size:16px_16px]
      text-[#cdd6f4]
      ">
      <p className="p-8">This page currently only supports desktop.<br />
        Please switch to desktop.<br />
        I'm still trying to update it daily.<br />
        Contact me if you wish<br />
        <Link href="mailto:nguyenthanhduyofficial@gmail.com"
          className="underline text-blue-400 active:text-blue-500">
          nguyenthanhduyofficial@gmail.com
        </Link>
      </p>
    </div>
  )
}
