// assets
import "./Home.scss";
import { lazy, Suspense } from "react";
const Hero = lazy(() => import("./Components/Hero"));
const Tabs = lazy(() => import("./Components/Tabs"));

function SignUp() {
  return (
    <main id="home" className="">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hero />
        <Tabs />
      </Suspense>
    </main>
  );
}

export default SignUp;
