const ErrorMessage = ({ message }) => {
    if (!message) return null;
  
    return (
      <div className="bg-red-100 text-red-600 p-2 rounded-md text-center mt-4">
        {message}
      </div>
    );
  };
  
  export default ErrorMessage;
  