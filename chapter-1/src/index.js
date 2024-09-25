import ReactDOM from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className='container p-0 bg-white'>
            <nav className='navbar sticky-top navbar-light bg-dark mb-3'>
                <h1 className='navbar-brand text-light ms-4'>Rick and Morty</h1>
            </nav>

            <List />
        </div>
    );
}
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);