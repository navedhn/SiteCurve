// assets
import "./Home.scss";
import { lazy, Suspense } from "react";
const Hero = lazy(() => import("./Components/Hero"));
const Tabs = lazy(() => import("./Components/Tabs"));
<<<<<<< HEAD
const TextBoxes = lazy(() => import("./Components/TextBoxes"));
=======

>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
function SignUp() {
  return (
    <main id="home" className="">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hero />
<<<<<<< HEAD
        <div className="home-both-sec">
          <Tabs />
          <TextBoxes />
        </div>

=======
        <Tabs />
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
      </Suspense>
    </main>
  );
}

export default SignUp;
