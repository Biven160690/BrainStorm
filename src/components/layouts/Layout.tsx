import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import { LayoutsProps } from '../types/type';
import { useStyles } from '../../theme/style'

function Layout({ children }: LayoutsProps) {
  const { wrapper, main } = useStyles()
  return (
    <div className={wrapper}>
      <Header />
      <main className={main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
