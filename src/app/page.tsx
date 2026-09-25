import Hero from "@/components/hero/Hero";
import TheLibrary from "@/components/the_library/TheLibrary";
// import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Suspense fallback = {<p>Hello</p>}> */}
        <TheLibrary />
      {/* </Suspense> */}
    </div>
  );
}
