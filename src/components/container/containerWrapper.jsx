const ContainerWrapper = ({ children }) => {
  return (
    <div className="flex justify-center px-4 my-8 mt-10">
      <div className="bg-white rounded-2xl p-5 xs:p-10 shadow">
        <h1 className="text-3xl text-center font-bold brand_name">Money Tracker</h1>
        {children}
      </div>
    </div>
  );
};

export default ContainerWrapper;