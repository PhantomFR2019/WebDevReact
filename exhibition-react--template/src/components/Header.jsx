// This is my custom header for the project.
// It includes my name and a way to contact me directly via email.

function Header() {
    return (
        <header className="header" style={{ background: "linear-gradient(90deg, #222 0%, #444 100%)", color: "#eaeaea" }}>
            <h1 style={{ color: "#eaeaea" }}>Web Design React Practice</h1>
            <nav>
                {/* Click my name to send me an email! */}
                <a
                  href="mailto:stevemarc2024@gmail.com"
                  style={{
                    color: "#cccccc",
                    textDecoration: "none",
                    fontWeight: 500,
                    letterSpacing: "0.04em"
                  }}
                >
                  Steven M
                </a>
            </nav>
        </header>
    )
}

export default Header