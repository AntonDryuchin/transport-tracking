import React from "react";
import "./ListItem.css";
import { useNavigate } from "react-router-dom";
import { ListItemProps } from "../../../types";

export default function ListItem(props: ListItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className="list-item"
      onClick={() => navigate(`/transport/${props.id}`)}
    >
      <span>TC#{props.id}</span>
      <span>{props.driverName}</span>
      <span>{props.category}</span>
    </div>
  );
}
