import 'bootstrap/dist/css/bootstrap.min.css'
import CepInput from '../components/CepInput'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Header />
            <CepInput /> */}
            <Component {...pageProps} />
        </>
    )
}