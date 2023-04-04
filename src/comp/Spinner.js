import loading from './loading.gif';

const Spinner = () => {
        return (
            <div className='d-flex justify-content-center' style={{ height: '100%', position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', }}>
                <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }


export default Spinner;