const SingleItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="uppercase dark:text-gray-50 text-gray-950 text-sm font-bold tracking-wide">
        {item.itemName}
      </div>
      <div className="text-base uppercase text-red-600 font-bold tracking-wide">
        {item.rate}
      </div>
    </div>
  );
};

export default SingleItem;
