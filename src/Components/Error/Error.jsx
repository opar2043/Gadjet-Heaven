
import { FaExclamationTriangle } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';


const Error = () => {
   const navigate = useNavigate();
   function gotonavigate(){
      navigate('/')
   }

  return (
    <div className="h-[400px] mx-auto bg-gradient-to-r rounded-3xl bg-red-500 flex items-center justify-center text-white p-4">
      <div className="text-center bg-white text-red-500 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <FaExclamationTriangle className="text-6xl mb-4 mx-auto animate-pulse" />
        <h1 className="text-4xl font-bold mb-4">404......</h1>
        <p className="text-lg mb-6">We didn't find the page. Please try again later.</p>
        <button 
          onClick={gotonavigate}
          className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200">
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
