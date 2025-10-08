const Container = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
