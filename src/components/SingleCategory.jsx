import SingleItem from './SingleItem';

const SingleCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="border-2 border-gray-500 rounded-xl p-8">
      <div className="flex items-center justify-between mb-8 gap-1">
        <div className="h-1 bg-red-800 w-full rounded-2xl"></div>
        <div className="uppercase px-3 font-extrabold text-lg whitespace-nowrap text-gray-100 tracking-widest bg-red-800 -skew-x-6 rounded-sm">
          {data.category}
        </div>
        <div className="h-1 bg-red-800 w-full rounded-2xl"></div>
      </div>
      <div className="flex flex-col gap-3">
        {data.category !== 'beverages' &&
          data.items.map((item, index) => {
            return <SingleItem item={item} key={index} />;
          })}
      </div>
      <div className="flex flex-col gap-8 pt-3">
        {data.category === 'beverages' &&
          data.items.map((item, index) => {
            return (
              <div>
                <div className="mb-5 flex justify-center">
                  <h1 className="py-1 uppercase text-gray-100 font-bold tracking-wide text-center bg-red-800 px-3 -skew-x-6 rounded-sm">
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
