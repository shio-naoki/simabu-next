import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { Header } from "@/src/components/Header/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/src/utils/fetcher";

const User = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <Header />
        </div>
        <ul>
          <li>name : {user?.name}</li>
          <li>username : {user?.username}</li>
          <li>phone : {user?.phone}</li>
        </ul>
      </main>
    </>
  );
};

export default User;