

const Footer = () => {
  return (
    <div className=" py-9">
      <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 lg:w-1/6 mb-4">
            
            <h1 className="text-white  text-2xl"> Language School</h1>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-4">
            <h2 className="text-white font-semibold mb-3">Contact</h2>
            <p className="text-gray-400">123 Street, City</p>
            <p className="text-gray-400">info@example.com</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-4">
            <h2 className="text-white font-semibold mb-3">Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Home</li>
              <li className="mb-2">Courses</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8 text-white" />
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()}  Language School. All rights reserved.</p>
          <p>Designed and developed by Sanoar Hossan</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
