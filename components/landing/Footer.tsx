export default function Footer() {
  return (
    <footer className="min-h-screen flex items-center justify-center">
      <div className="hidden md:grid grid-cols-12 items-center md:text-8xl py-3">
        <p className="col-start-5 col-span-5">Thank You</p>
        <p className="col-start-4 col-span-10">for</p>
        <p className="col-start-6 col-span-4">your time</p>
      </div>
      <div className="md:hidden">
        <p className="text-8xl">Thank you for your time</p>
      </div>
    </footer>
  );
}
