import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <h1 className={classes.h1}>Ecommerce</h1>
      <section>
        <button>Celulares</button>
        <button>Celulares</button>
        <button>Celulares</button>
      </section>
    </nav>
  );
};

export default NavBar;
