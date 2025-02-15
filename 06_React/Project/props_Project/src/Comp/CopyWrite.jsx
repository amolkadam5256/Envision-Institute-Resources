const CopyWrite = ({ text }) => {
    return (
      <p className="mt-5 text-secondary text-center">
        &copy; {new Date().getFullYear()} {text}
      </p>
    );
  };
  
  export default CopyWrite;
  