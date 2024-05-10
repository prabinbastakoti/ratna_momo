import MenuData from '../menuData.js';
import SingleCategory from './components/SingleCategory.jsx';

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="mb-3 absolute z-10 w-full pt-10">
        <img src="/logo.png" alt="" className="w-60 mx-auto mb-12" />
        <div className="flex flex-col gap-6 items-center justify-between mb-6">
          <div className="text-center text-black font-bold flex flex-col gap-2 w-full">
            <div className="w-[70%] mx-auto bg-green-800 text-gray-100 py-3 rounded-sm uppercase tracking-wider text-sm">
              Home Delivery Available
            </div>
            <div>Delivery Time: 12PM To 2AM</div>
            <div>Contact: &nbsp;9811198594 &nbsp;|&nbsp; 056-000000</div>
          </div>
        </div>
      </div>
      <div className="w-full pt-[550px] bg-gray-50 opacity-90 min-h-screen flex flex-col gap-4 px-6 pb-20 font-Montserrat">
        <div className="text-center font-extrabold text-4xl tracking-wide ">
          MENU
        </div>
        {MenuData.map((item, index) => {
          return <SingleCategory data={item} key={index} />;
        })}
        <div className="text-center italic font-semibold text-xs mt-8">
          "Roll with Us for a Taste Adventure!"
        </div>
      </div>
    </div>
  );
}

export default App;
