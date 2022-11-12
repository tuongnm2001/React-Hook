import './Nav.scss'

const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/time">Timer Apps</a>
            <a href="/todo">Todo Apps</a>
            <a href="/secret">Secret</a>
        </div>
    );
}

export default Nav;