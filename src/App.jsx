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
      <div className=" dark:bg-gray-950 bg-gray-200 opacity-[93%] dark:opacity-[90%]  min-h-screen flex flex-col gap-10 px-6 py-20 font-Montserrat">
        <div className="text-center font-extrabold dark:text-gray-50 text-4xl tracking-wide ">
          MENU
        </div>
        {MenuData.map((item, index) => {
          return <SingleCategory data={item} key={index} />;
        })}
        <div className="text-center italic font-semibold text-xs dark:text-gray-400 text-gray-600">
          "Food is the ingredient that bind us together"
        </div>
      </div>
    </div>
  );
}

export default App;
