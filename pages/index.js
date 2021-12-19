import Head from "next/head";
import { SearchIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function Home() {
  const test = useRef(null);
  const makeSmooth = (e) => {
    e.preventDefault();
    window.scrollTo({ top: test.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div>
      <Head>
        <title>Social Phobia World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a
        href="#skip"
        onClick={makeSmooth}
        className=" bg-red-600  transition duration-700 ease-in-out"
      >
        Start area
      </a>
      <Header />
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <span id="skip" ref={test} className=" bg-red-600">
        Where i want to skip to
      </span>
      <Feed />

      <Footer />
    </div>
  );
}
