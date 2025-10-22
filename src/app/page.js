import Navbar from "@/components/Navbar";
import Choice from "@/sections/Choice";
import Client from "@/sections/Client";
import Hero from "@/sections/Hero";
import Pain from "@/sections/Pain";


export default function Home() {
  return (
    <div>
       <Hero/>
       <Pain/>
       <Choice/>
       <Client/>
    </div>
  );
}
