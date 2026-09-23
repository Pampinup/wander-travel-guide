import RestaurantCard from "./RestaurantCard";

function Restaurants({ cityData }) {
  if (!cityData) {
    return null;
  }

  return (
    <section className="restaurants" id="restaurants">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">FOOD & DRINK</p>

          <h2>Where to eat in {cityData.city}</h2>
        </div>

        <div className="restaurants-grid">
          {cityData.restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={`${restaurant.name}-${index}`}
              name={restaurant.name}
              description={restaurant.description}
              address={restaurant.address}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Restaurants;
