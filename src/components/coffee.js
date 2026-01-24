function Coffee(props) {
  return (
    <div className="rounded-3xl bg-[#FAECC1] p-3 shadow">
      <div className="flex justify-center">
        <img
          src="/coffee-cup.png"
          alt="Product"
          className="h-20 w-25 rounded-md"
        />
      </div>
      <h3 className="mt-2 text-center text-lg font-semibold">{props.name}</h3>
      <p className="text-3xl">₹{props.price}</p>
      <button className="mt-2 rounded-lg bg-[#4B2E2B] px-4 py-2 text-white hover:bg-[#38211E]">
        Add to Cart
      </button>
    </div>
  );
}

export default Coffee;
