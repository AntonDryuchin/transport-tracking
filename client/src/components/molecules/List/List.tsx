import React, { useState, ChangeEvent, useContext } from "react";
import "./List.css";
import transportData from "../../../db.json";
import ListItem from "../../atoms/ListItem/ListItem";
import { LangContext } from "../../../context/LangContext";
import { Filters, Vehicle } from "../../../types";
import YMap from "../../atoms/YMap/YMap";

const initialState: Filters = {
  categories: "All",
  view: "List",
};

export default function List() {
  // получение из контекста значения настроек языка
  const lang = useContext(LangContext);

  const [list, setList] = useState<Vehicle[]>(transportData.vehicles); //список транспортных стредств загружается из db.json
  const [filters, setFilters] = useState<Filters>(initialState); //фильтры для отображения
  const [tempView, setTempView] = useState<string>(filters.view); // временная настройка режима отображения карты до нажатия кнопки "ПРИМЕНИТЬ"

  //преобразование массива ТС в массив строк, уникальных категорий ТС (для выпадающего списка)
  const categories = transportData.vehicles
    .map((item) => item.category)
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

  //смена режима отображения и фильтров категорий
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === "view") {
      setTempView(event.target.value);
    } else {
      setFilters({ ...filters, [event.target.name]: event.target.value });
    }
  };

  //обработчик клика кнопки "ПРИМЕНИТЬ", устанавливает выбор режима КАРТА-СПИСОК и фильтрует исходные данные по категории
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
    <div className="main-container">
      <h3>
        {lang.lang === "en" ? "Transport tracking" : "Отслеживание транспорта"}
      </h3>
      <div className="filter-container">
        <label>
          {lang.lang === "en" ? "Category: " : "Категории: "}
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
      </div>

      {filters.view === "List" && (
        <div className="list-container">
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

      {filters.view === "Map" && <YMap list={list} mode="All" />}
    </div>
  );
}
