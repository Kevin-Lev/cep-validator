import CepList from '../../components/CepList';
import fetch from 'isomorphic-unfetch';

export default function CepsList({ ceps }) {
    return (
        <div>
            <CepList ceps={ceps} />
        </div>
    );
}

CepsList.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/ceps');
    const { data } = await res.json();

    return {
        ceps: data
    };
};
