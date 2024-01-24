const Error = ({ children }) => {
  return (
    <div className="font-bold uppercase text-white bg-red-600  p-3 text-center">
      {children}
    </div>
  );
};

export default Error;
