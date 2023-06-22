import React, { useState } from "react";
import transportData from "../../../db.json";
import ListItem from "../../atoms/ListItem/ListItem";
import Map from "../../atoms/Map/Map";

const initialState = {
  categories: "All",
  view: "List",
};

export default function List() {
  const [list, setList] = useState(transportData.vehicles);
  const [filters, setFilters] = useState(initialState);

  const categories = transportData.vehicles
    .map((item) => item.category)
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

  const handleFilterChange = (event: any) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleFilterApply = () => {
    if (filters.categories === "All") {
      setList(transportData.vehicles);
    } else {
      setList(
        transportData.vehicles.filter((item) =>
          filters.categories === "All"
            ? true
            : item.category === filters.categories
        )
      );
    }
  };

  return (
    <>
      <select
        name="categories"
        defaultValue="All"
        onChange={handleFilterChange}
      >
        <option value="All">Все категории</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select name="view" defaultValue="List" onChange={handleFilterChange}>
        <option key="1" value="List">
          Списком
        </option>
        <option key="2" value="Map">
          На карте
        </option>
      </select>

      <button onClick={handleFilterApply}>Применить</button>
      {filters.view === "List" ? (
        <div className="list">
          {list.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              driverName={item.driverName}
              category={item.category}
            />
          ))}
        </div>
      ) : (
        <Map {...list} />
      )}
    </>
  );
}
