import Head from "next/head";
import { SearchIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Phobia World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />
      <Footer />
    </div>
  );
}
