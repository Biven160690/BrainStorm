import { Outlet } from 'react-router';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import { useStyles } from '../../theme/style';

function Layout() {
  const { wrapper, main } = useStyles()

  return (
    <div className={wrapper}>
      <Header />
      <main className={main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
