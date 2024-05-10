const SingleItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between gap-1">
      <div className="uppercase text-gray-950 font-bold text-sm">
        {item.itemName}
      </div>
      <div className="flex-1 overflow-hidden">
        <div>
          .............................................................................
        </div>
      </div>
      <div className="uppercase text-gray-950 font-bold text-sm">
        {item.rate}
      </div>
    </div>
  );
};

export default SingleItem;
