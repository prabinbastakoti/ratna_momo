import SingleItem from './SingleItem';

const SingleCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="border-2 border-gray-500 rounded-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="h-1 bg-red-600 w-full rounded-2xl"></div>
        <div className="uppercase px-3 font-extrabold text-lg whitespace-nowrap text-gray-950 tracking-widest">
          {data.category}
        </div>
        <div className="h-1 bg-red-600 w-full rounded-2xl"></div>
      </div>
      <div className="flex flex-col gap-3">
        {data.category !== 'beverage' &&
          data.items.map((item, index) => {
            return <SingleItem item={item} key={index} />;
          })}
      </div>
      <div className="flex flex-col gap-8">
        {data.category === 'beverage' &&
          data.items.map((item, index) => {
            return (
              <div>
                <div className="mb-5">
                  <h1 className="pb-2 uppercase border-b-2 border-red-600 text-gray-950 font-bold tracking-wide text-center">
                    {item.type}
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  {item.item.map((item, index) => {
                    return <SingleItem item={item} key={index} />;
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SingleCategory;
