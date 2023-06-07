import { Link, useRouteError } from "react-router-dom";
import errorimg from '../../assets/errorimg.gif'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='text-center w-7xl mx-auto'>
            <img className='w-7xl mx-auto' src={errorimg} alt="" />

            <div className='w-7xl mx-auto text-center'>
          
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-blue-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
        </div>
    );
};

export default ErrorPage;