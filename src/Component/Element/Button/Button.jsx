const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, variant, onClick = () => {} } = props;
  return (
    <>
      <button className={`${variant} text-white font-bold py-1 px-4 lg:py-2 lg:px-6 rounded-3xl font-light mt-6 `} type="submit" onClick={() => onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
