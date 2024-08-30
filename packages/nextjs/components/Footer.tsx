/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="bg-[#0A0F29] text-white md:px-16 lg:px-24 w-full">
      <div className="bg-[#0A0F29] h-[500px] text-white flex flex-col justify-center items-center">
        <div className="max-w-[544px] mx-auto text-center">
          <h1 className="font-[700] text-[54px]">
            Get started <span className="text-[#2F66F6]">today</span>
          </h1>
          <p className="text-[18px] font-normal">Connecting Talent, Transcending Boundaries</p>
          <div>
            <form className="max-w-md mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">email</label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add email"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-[#2F66F6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center py-5">
        <h2 className="font-oleo font-[700] text-[31.33px]">AdwumaPa</h2>
        <div className="flex space-x-4">
          <p className="text-[16px] font-[500]">Privacy Policy</p>
          <p className="text-[16px] font-[500]">Terms and conditions</p>
        </div>
      </div>
    </div>
  );
};
