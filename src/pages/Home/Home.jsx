// assets
import "./Home.scss";
import { lazy, Suspense } from "react";
const Hero = lazy(() => import("./Components/Hero"));
const Tabs = lazy(() => import("./Components/Tabs"));
const TextBoxes = lazy(() => import("./Components/TextBoxes"));
function SignUp() {
  return (
    <main id="home" className="">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hero />
        <div className="home-both-sec">
          <Tabs />
          <TextBoxes />
        </div>

      </Suspense>
    </main>
  );
}

export default SignUp;
