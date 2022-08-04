import Layout from '../components/Layout'
import '../styles/main.css';
import '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
