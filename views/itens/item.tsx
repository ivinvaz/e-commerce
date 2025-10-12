import React from "react";
import Image from "next/image";
import styles from "./item.module.css";
import MainHeader from "@/views/header/mainHeader";
import { FileX } from "lucide-react";

export default function Item() {

  const categoria = 'Roupas'
  const pecas = [
    { img: "link", nome: "Camiseta Eagles", preco: 60.0 },
    { img: "link", nome: "Calça jeans preta", preco: 70.0 },
    { img: "link", nome: "Calça jeans clara", preco: 75.0 },
    { img: "link", nome: "Camiseta Metallica", preco: 80.0 },
    { img: "link", nome: "Bermuda Jorts preta", preco: 60.0 },
    { img: "link", nome: "Calça baggy azul", preco: 120.0 },
    { img: "link", nome: "Calça baggy azul", preco: 120.0 },
  ];

  return (
    <>
      <MainHeader />
      <h1 className={styles.tituloPag}>
        {categoria}
      </h1>
      <div className={styles.itensContainer}>
        <ul className={styles.itensList}>
          {pecas.map((el, index) => (
            <li key={index} className={styles.listItem}>
              <img src={el.img} alt={el.nome} className={styles.itemImage} />
              <p>{el.nome}</p>
              <p>R${el.preco}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
