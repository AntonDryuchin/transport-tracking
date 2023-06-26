import React from "react";
import "./ListItem.css";
import { useNavigate } from "react-router-dom";

export type IListItemProps = {
  id: number;
  category: string;
  driverName: string;
};

export default function ListItem(props: IListItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className="list-item"
      onClick={() => navigate(`/transport/${props.id}`)}
    >
      <p>TC#{props.id}</p>
      <p>{props.driverName}</p>
      <p>{props.category}</p>
    </div>
  );
}
