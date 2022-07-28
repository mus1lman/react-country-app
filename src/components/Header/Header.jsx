import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header-wrapper">
        <a className="header-link" href="#">
          Where in the world?
        </a>
        <p className="dark">Dark mode</p>
      </div>
    </div>
  );
};

export default Header;
