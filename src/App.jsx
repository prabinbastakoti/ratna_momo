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
        <img src="/logo.png" alt="" className="w-60 mx-auto mb-10" />
        <div className="flex flex-col gap-6 items-center justify-between mb-6">
          <div className="text-center text-black font-bold flex flex-col gap-2">
            <div className="bg-green-800 text-gray-100 px-3 py-2 rounded-sm">
              Delivery Available
            </div>
            <div>Delivery Time: 12PM To 2AM</div>
            <div>Contact: &nbsp;9811198594 &nbsp;|&nbsp; 056-000000</div>
          </div>
        </div>
      </div>
      <div className="absolute w-full pt-[520px] bg-gray-200 opacity-90 min-h-screen flex flex-col gap-10 px-6 pb-20 font-Montserrat">
        <div className="text-center font-extrabold text-4xl tracking-wide ">
          MENU
        </div>
        {MenuData.map((item, index) => {
          return <SingleCategory data={item} key={index} />;
        })}
        <div className="text-center italic font-semibold text-xs">
          "Food is the ingredient that bind us together"
        </div>
      </div>
    </div>
  );
}

export default App;
