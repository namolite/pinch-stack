import Head from "next/head";

export default function Title({ customTitle }: string | any) {
  return (<Head><title>{`${customTitle}`}</title></Head>)
}