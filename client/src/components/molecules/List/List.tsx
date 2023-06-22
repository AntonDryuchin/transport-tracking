import React, { useState } from "react";
import transportData from "../../../db.json";
import ListItem from "../../atoms/ListItem/ListItem";

export default function List() {
  const [list, setList] = useState(transportData.vehicles);
  console.log(list);

  const categories = list
    .map((item) => item.category)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  return (
    <>
      <select defaultValue="default">
        <option value="default" disabled>
          Выберите категорию
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select defaultValue="Списком">
        <option value="Списком">Списком</option>
        <option key="2" value="На карте">
          На карте
        </option>
      </select>

      <div className="list">
        {list.map((item) => (
          <ListItem
            id={item.id}
            driverName={item.driverName}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
}
