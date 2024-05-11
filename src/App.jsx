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
      <div className="w-full bg-gray-200 opacity-[93%] min-h-screen flex flex-col gap-4 px-3 pb-12 font-Montserrat">
        <div className="mb-6 w-full mt-10">
          <img src="/logo.svg" alt="" className="w-60 mx-auto" />
          <div className="flex flex-col gap-6 items-center justify-between my-8">
            <div className="text-center text-black font-bold flex flex-col gap-2 w-full text-sm">
              <div className="w-[85%] mx-auto bg-red-800 text-gray-100 py-2 rounded-sm uppercase text-sm font-bold">
                Free Home Delivery Available !
              </div>
              <div>Delivery Time: 12PM - 2AM</div>
              <div>Contact: &nbsp;9811198594 &nbsp;|&nbsp; 056-000000</div>
            </div>
          </div>
        </div>
        <div className="text-center font-extrabold text-4xl tracking-wide mb-6">
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
