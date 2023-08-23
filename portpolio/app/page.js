import Image from "next/image";
import "../styles/global.css";
import Hero from "@/components/Home/hero";
import Layout from "@/components/Layout/page";

export default function Home(){
  return(
    <Layout>
        <section class="flex min-h-screen flex-col items-center jusify-center text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero></Hero>
          </div>
        </section>
    </Layout>
  )
};