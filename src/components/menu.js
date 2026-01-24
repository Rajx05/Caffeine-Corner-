import Coffee from "./coffee";

// sample coffee data
let coffeeData = [
  {
    id: 1,
    name: "Cappuchino",
    price: 4.5,
  },

  {
    id: 2,
    name: "Adrak vali Chai",
    price: 0.5,
  },

  {
    id: 3,
    name: "Falooda",
    price: 0.5,
  },

  {
    id: 4,
    name: "Espresso",
    price: 3.0,
  },

  {
    id: 5,
    name: "Latte",
    price: 4.0,
  },

  {
    id: 6,
    name: "Mocha",
    price: 4.75,
  },

  {
    id: 7,
    name: "Americano",
    price: 3.5,
  },

  {
    id: 8,
    name: "Macchiato",
    price: 4.25,
  },

  {
    id: 9,
    name: "Cortado",
    price: 3.75,
  },

  {
    id: 10,
    name: "Flat White",
    price: 4.5,
  },

  {
    id: 11,
    name: "Affogato",
    price: 5.0,
  },
];

function Menu() {
  return (
    <>
      <div className="grid auto-cols-[minmax(0,1fr)] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5">
        {/* Conditional Rendering */}
        {coffeeData.map((coffee) => (
          <Coffee name={coffee.name} price={coffee.price} key={coffee.id} />
        ))}
      </div>
    </>
  );
}

export default Menu;
