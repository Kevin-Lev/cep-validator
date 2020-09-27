import Header from '../components/Header'
import CepList from "../components/CepList"
import fetch from 'isomorphic-unfetch'

export default function CepsList({ ceps }) {
    return (
        <div>
            <Header />
            <CepList ceps={ceps} />
        </div>
    )
}

CepsList.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/ceps')
    const { data } = await res.json()

    console.log('data')
    console.log(data)

    return {
        ceps: data
    }
}
