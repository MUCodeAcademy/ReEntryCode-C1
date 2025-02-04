import '../CSS/Footer.css';

function Footer() {

    return (
        <div>
            <footer>
                <p>&copy; Justin Luce 2025</p>
                <button onClick={() => {
                    document.documentElement.scrollTop = 0;
                }}
                >Back to top</button>
            </footer>
        </div>
    )
}

export default Footer;