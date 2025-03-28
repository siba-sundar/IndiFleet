
import { useNavigate } from 'react-router-dom';
import Image4 from '/Image 4.webp';
import Image1 from '/Image 1.webp';
import Image2 from '/Image 2.webp';

const SignInCard = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/auth/signupcard');
};

  return (
    <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-6xl mx-8 my-4 border-2 border-grey h-auto rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side with Background and Text */}
        <div className="bg-brandPrimary flex flex-col items-start justify-center px-12 py-12 rounded-xl">
          <h1 className="text-white text-4xl font-bold mb-4">Welcome Back!</h1>
          <h3 className="font-semibold text-white text-lg">
            Please choose how you want <br /> to sign in.
          </h3>
        </div>
  
        {/* Right Side with Cards */}
        <div className="flex flex-col justify-center px-12 py-12">
          <div className="grid grid-cols-1 gap-8">
             {/* Card 3 */}
             <div
              className="bg-white shadow-md p-8 flex items-center cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 transition duration-300"
              onClick={() => navigate('/auth/signin-company')}
            >
              <img src={Image2} alt="Logo" className="w-16 h-16 mr-6" />
              <div>
                <h3 className="text-lg font-semibold">Company Member</h3>
              </div>
            </div>
           
            {/* Card 1 */}
            <div
              className="bg-white shadow-md p-8 flex items-center cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 transition duration-300"
              onClick={() => navigate('/auth/signint-driver')}
            >
              <img src={Image4} alt="Logo" className="w-16 h-16 mr-6" />
              <div>
                <h3 className="text-lg font-semibold">Truckers</h3>
              </div>
            </div>
  
            {/* Card 2 */}
            <div
              className="bg-white shadow-md p-8 flex items-center cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 transition duration-300"
              onClick={() => navigate('/auth/signin-partner')}
            >
              <img src={Image1} alt="Logo" className="w-16 h-16 mr-6" />
              <div>
                <h3 className="text-lg font-semibold">Business Partners</h3>
              </div>
            </div>

            <div className="flex gap-2 text-center justify-center ">
                <h4>Not registered yet?</h4>
                <button className="font-semibold" onClick={handleSignUp}>
                Sign Up
                </button>
            </div>
  
           
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default SignInCard;