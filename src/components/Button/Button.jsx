const Button = ({ handleClick, color, children, className }) => {
  console.log(children);
  return (
    <button
      onClick={handleClick}
      className={className}
      style={{ color: color }}
    >
      {children}
    </button>
  );
};

export default Button;
