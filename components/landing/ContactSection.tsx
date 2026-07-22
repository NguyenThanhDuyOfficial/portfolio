import { Button } from "../ui/button";

export default function ContactSection() {

  return (
    <section className="min-h-screen w-full flex flex-col">
      <p className="text-center text-4xl font-bold p-16"> Send me your letter</p >
      <form className="grid grid-cols-12">
        <p className="col-span-4 col-start-3">You can talk about anything. Let's here your stories</p>
        <textarea
          className="col-span-4 h-40 border border-white rounded-lg p-4"
          required
          placeholder="Let's start"
        />
        <p className="col-span-4 col-start-3">Send me your contact information if you want me to reply.</p>
        <input
          className="col-span-4"
          placeholder="Your contact infor"
        />
        <p className="col-span-4 col-start-3">And remember to submit</p>
        <Button className="col-span-4">Send</Button>
      </form>
    </section >
  )
}
