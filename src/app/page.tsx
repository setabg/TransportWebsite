import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Other from "./components/oher";
import Description from "./components/description";
import ContactForm from "./components/contactForm"

export default function Home() {
  return (
    <main className="bg-white flex flex-col p-10 min-h-screen items-center justify-between">
        <NavBar/>

        <Hero/>

        <Description/>

        <ContactForm/>

        <Other/>
    </main>
  );
}