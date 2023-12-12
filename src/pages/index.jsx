import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer/Footer";
import { Headline } from "@/src/components/Headline";
import { Headerlogo } from "@/src/components/Headerlogo";
import { Header } from "@/src/components/Header/Header";
import { Logo } from "@/src/components/logo/logo";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>index page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Headline title="Index page!!">
            <code className={styles.code}>index</code>
          </Headline>
          <Header />
          <a href="/about" onClick={handleClick}>
            ボタン
          </a>
          <Headerlogo />
        </div>
        <Logo />

        <Footer />
      </main>
    </>
  );
}