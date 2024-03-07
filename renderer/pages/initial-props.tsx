import Link from 'next/link'
import { useRouter } from 'next/router'
import List from '../components/List'
import { User } from '../interfaces'
import { findAll } from '../utils/sample-api'

import CustomTitle from '@Components/title'

type Props = {
  items: User[]
  pathname: string
}

const customTitle = 'pinch! dev mode ~/WithInitalProps/'


const WithInitialProps = ({ items }: Props) => {
  const router = useRouter()

  return (
    <>
      <CustomTitle customTitle={customTitle} />
      <h1>List Example (as Function Component)</h1>
      <p>You are currently on: {router.pathname}</p>
      <List items={items} />
      <p>
        <Link href="/">Go home</Link>
      </p>
    </>
  )
}

export async function getStaticProps() {
  const items: User[] = await findAll()

  return { props: { items } }
}

export default WithInitialProps

