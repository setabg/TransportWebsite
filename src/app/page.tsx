import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Other from "./components/Oher";
import Description from "./components/Description";
import ContactForm from "./components/ContactForm"

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