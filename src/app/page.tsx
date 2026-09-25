import Hero from "@/components/hero/Hero";
import Skelton from "@/components/suspance-screen/Skelton";
import TheLibrary from "@/components/the_library/TheLibrary";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Skelton />}>
        <TheLibrary />
      </Suspense>
    </div>
  );
}
