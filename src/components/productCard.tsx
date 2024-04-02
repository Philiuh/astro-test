import { useState } from "react";
import type { CardProps } from "../types";

export default function Card({ title, description, image }: CardProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="product__card">
      <img src={image} alt={`${title} image`} />
      <h2 onClick={() => setOpen((prev) => !prev)}>{title}</h2>
      {isOpen && <p>{description}</p>}
    </div>
  );
}
