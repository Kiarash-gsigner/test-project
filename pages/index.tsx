import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import ShopList from '../components/ShopList'
import axios from "axios"
import { GetStaticProps, GetStaticPaths, GetServerSideProps, InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>


export default function Home({products}: PageProps) {
        console.log(products)

  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <ShopList products={products}/>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps =  async function (context: GetServerSidePropsContext) {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()

    return {
        props: {
            products: data
        }
    }

};
