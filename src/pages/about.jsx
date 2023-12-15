import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Footer } from "@/src/components/Footer/Footer";
import { Logo } from "@/src/components/logo/logo";
import { Headline } from "@/src/components/Headline";
import { HeaderLogo } from "@/src/components/HeaderLogo";
import { Header } from "@/src/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function About({
  foo,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {
  return (
    <>
      <Head>
        <title>about page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Headline title="About page">
            <code className={styles.code}>about</code>
          </Headline>
          <Header />

          {isShow ? <h1>{foo}</h1> : null}
          <button href="/about" onClick={handleClick}>
            ボタン
          </button>
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

          <HeaderLogo />
        </div>
        <Logo />
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <Footer />
      </main>
    </>
  );
}
