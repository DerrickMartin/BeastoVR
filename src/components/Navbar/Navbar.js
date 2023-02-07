import '.NavbarStyles.css';

function Navbar() {

        return (
        <header className='app-header'>
            <div className='Logo'>
                <h1>
                    <a
                        className="App-Logo-Text"
                        href="https://www.tehbeasto.cloud"
                        target="_blank"
                        rel="noopener noreferrer">てベ-スと
                    </a>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>Avatars</li>
                    <li>Worlds</li>
                    <li>Clothes</li>
                </ul>
            </div>

        </header>
        )

}
 export default Navbar