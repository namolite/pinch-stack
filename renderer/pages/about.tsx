import Link from 'next/link'

import CustomTitle from '@Components/title'

const customTitle = 'pinch! dev mode ~/about/'

const AboutPage = () => (
  <>
    <CustomTitle customTitle={customTitle} />
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </>
)

export default AboutPage
