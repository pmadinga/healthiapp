import '../assets/styles/globals.css'
import LayoutComponent from '../components/Layout.component'

function MyApp({ Component, pageProps }) {
  return (

      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
 
  )
}

export default MyApp
