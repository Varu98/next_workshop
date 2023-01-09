import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import NestedLayout from "../components/layouts/NestedLayout";
import Layout from "../components/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Workshop</title>
      </Head>
      <main className="min-h-[calc(100vh-18vh)]">
        <h1 className="text-2xl">Bello Next Workshop</h1>
      </main>
    </>
  );
}

