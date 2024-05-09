const SingleItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="uppercase text-red-600 font-bold tracking-wide">
        {item.itemName}
      </div>
      <div className="uppercase text-gray-950 font-bold tracking-wide">
        {item.rate}
      </div>
    </div>
  );
};

export default SingleItem;
