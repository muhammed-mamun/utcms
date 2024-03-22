import capImg from '../../assets/Cap.png';
import heroImg from '../../assets/left-bg.png';
const Login = () => {
  return (
    <div className="flex md:flex flex-col md:flex-row  h-screen ">
      <div className="hidden md:block md:w-7/12 bg-cover bg-no-repeat " style={{
        backgroundImage: `url(${heroImg})`
      }}>
        <div class="w-full h-full flex 
             bg-blue-600/30 backdrop-brightness-75">
               <div className='pl-4 pt-10'>

            <div className='flex mb-5'>
                <img src={capImg} alt="cap" /> 
                <h2 className='text-4xl text-white'>UTCMS</h2>   
            </div>            
            <div>
                <h2 className='text-3xl text-white underline'>As Teacher:</h2>
                <ul className='list-disc text-white ml-10'>
                    <li>Connect With You Students</li>
                    <li>Get Schedule Based Notifications</li>
                    <li>Manage Meetings</li>
                    <li>Manage Announcements</li>
                    <li>Manage Academic Progress </li>
                </ul>

            </div>
            <div className='pt-2'>
                <h2 className='text-3xl text-white underline'>As Teacher:</h2>
                <ul className='list-disc text-white ml-10'>
                    <li>Connect With You Students</li>
                    <li>Get Schedule Based Notifications</li>
                    <li>Manage Meetings</li>
                    <li>Manage Announcements</li>
                    <li>Manage Academic Progress </li>
                </ul>

            </div>

            
        <button class="bg-[#d9d9d9] max-w-xs mt-20 ml-10 hover:bg-blue-900  text-[#0886BC] font-bold py-2 px-4 rounded-lg w-full pb-4 ">
              Learn more
            </button>
        </div> 
        </div>
        
      </div>

      <div className="w-full md:w-5/12 md:pt-20 p-8">
        <div className="px-4 md:py-10 rounded-lg shadow-sm pl-4 pt-32">
          <div className="pb-2">
            <h3 className="text-2xl text-[#202934]">Sign in</h3>
            <span className="text-xs pb-4 text-[#0886BC]">
              sign in with your email and password
            </span>
          </div>
          <hr className="h-[2px] bg-black mx-4 mb-4" />
          <div className=''>
            <label className="input bg-white input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <label className="input input-bordered bg-white  flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
           <div className="w-full flex justify-center pt-2">
           <button class="bg-[#0886BC] max-w-xs mx-auto hover:bg-blue-900  text-[#D9D9D9] font-bold py-2 px-4 rounded-lg w-full">
              Log in
            </button>
           </div>
           <p className='italic text-[#0886BC] text-base text-start pt-4 pb-4 pl-2'>Don't Have an Account?<span className='underline font-bold'> <a href="#">Sign Up Here</a></span> as Teacher or Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
