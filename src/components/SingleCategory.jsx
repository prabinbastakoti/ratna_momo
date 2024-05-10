import SingleItem from './SingleItem';

const SingleCategory = ({ data }) => {
  return (
    <div className="px-8 pb-8">
      <div className="flex items-center justify-between mb-8 gap-1">
        <div className="h-1 bg-red-800 w-full rounded-2xl"></div>
        <div className="uppercase px-3 font-extrabold text-lg whitespace-nowrap text-gray-100 tracking-widest bg-red-800 -skew-x-6 rounded-sm">
          {data.category}
        </div>
        <div className="h-1 bg-red-800 w-full rounded-2xl"></div>
      </div>
      <div className="flex flex-col gap-3">
        {data.category !== 'beverages' &&
          data.category !== 'special item' &&
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
      <div>
        {data.category === 'special item' && (
          <div>
            <div className="flex items-center justify-center">
              <img
                src="/special1.jpg"
                alt=""
                className="w-44 h-44 object-cover"
              />
              <img
                src="/special2.jpg"
                alt=""
                className="w-44 h-44 object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 mt-8 text-center">
              <h1 className="font-bold text-lg uppercase text-red-800">
                {data.items[0].itemName}
              </h1>
              <h2 className="font-bold">
                Rs. {data.items[0].rate} per 8 pieces
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
