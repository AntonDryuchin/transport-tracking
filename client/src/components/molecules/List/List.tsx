import React, { useState, ChangeEvent, useContext } from "react";
import transportData from "../../../db.json";
import ListItem from "../../atoms/ListItem/ListItem";
import Map from "../../atoms/Map/Map";
import { LangContext } from "../../../context/LangContext";

interface Location {
  latitude: number;
  longitude: number;
}

interface Vehicle {
  id: number;
  category: string;
  driverName: string;
  driverPhoneNumber: string;
  location: Location;
}

interface Filters {
  categories: string;
  view: string;
}

const initialState: Filters = {
  categories: "All",
  view: "List",
};

export default function List() {
  const lang = useContext(LangContext);

  const [list, setList] = useState<Vehicle[]>(transportData.vehicles);
  const [filters, setFilters] = useState<Filters>(initialState);
  const [tempView, setTempView] = useState<string>(filters.view);

  //   console.log(list);

  const categories = transportData.vehicles
    .map((item) => item.category)
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === "view") {
      setTempView(event.target.value);
    } else {
      setFilters({ ...filters, [event.target.name]: event.target.value });
    }
  };

  const handleFilterApply = () => {
    setFilters({ ...filters, view: tempView });
    if (filters.categories === "All") {
      setList(transportData.vehicles);
    } else {
      setList(
        transportData.vehicles.filter(
          (item) =>
            filters.categories === "All" || item.category === filters.categories
        )
      );
    }
  };

  return (
    <>
      <label>
        {lang.lang === "en" ? "Filter by category: " : "Фильтр по категории: "}
        <select
          name="categories"
          defaultValue="All"
          onChange={handleFilterChange}
        >
          <option value="All">
            {lang.lang === "en" ? "All categories" : "Все категории"}
          </option>
          {categories.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label>
        {lang.lang === "en" ? "View: " : "Вид: "}
        <select name="view" value={tempView} onChange={handleFilterChange}>
          <option key="1" value="List">
            {lang.lang === "en" ? "List" : "Списком"}
          </option>
          <option key="2" value="Map">
            {lang.lang === "en" ? "Map" : "На карте"}
          </option>
        </select>
      </label>

      <button onClick={handleFilterApply}>
        {lang.lang === "en" ? "Apply" : "Применить"}
      </button>

      {filters.view === "List" && (
        <div className="list">
          {list.map((item: Vehicle) => (
            <ListItem
              key={item.id}
              id={item.id}
              driverName={item.driverName}
              category={item.category}
            />
          ))}
        </div>
      )}

      {filters.view === "Map" && <Map list={list} />}
    </>
  );
}
