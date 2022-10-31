import Head from "next/head";
import styles from "../styles/Home.module.scss";

import MasterHeader from "components/common/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Production Timeline</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MasterHeader />

      <main className={""}></main>

      <footer className={""}></footer>
    </div>
  );
}