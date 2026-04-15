const Container = ({ children }) => {
  return (
    <div className=" flex flex-1 items-center justify-center bg-zinc-50 font-sans">
      {children}
    </div>
  );
};

export default Container;
