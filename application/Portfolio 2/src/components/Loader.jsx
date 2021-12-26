import './Loader.css';

export default function Loader () {
    return (
        <div className="loader">
            <div className="loader-content">
                <h1 id='loader-title'>Loading...</h1>
                <span id='loader-bar'></span>
                <p id='loader-subtitle'>alpha-test ver 0.0.1</p>
            </div>
        </div>
    );
}