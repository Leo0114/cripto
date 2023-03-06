const Error = ({ children }) => {
  return (
    <div className=" rounded-xl bg-red-700 text-white text-xl p-4 uppercase font-bold text-center">
      {children}
    </div>
  );
};

export default Error;
