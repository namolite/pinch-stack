import Head from "next/head";

export default function CustomTitle({ customTitle }: string | any) {
  return (<Head><title>{`${customTitle}`}</title></Head>)
}