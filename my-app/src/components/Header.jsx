import logo from '../media/pngegg.png';
import './Header.css';

export default function Header() {
    return (
        <header className="App-header">
            <ul>
                <li> 
                    <img src={logo} alt="logo" />
                </li>
                <li> <h2> DevOps Essentials </h2></li>
            </ul>
        </header>
    )
}
