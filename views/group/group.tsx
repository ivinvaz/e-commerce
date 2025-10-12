import React from "react";
import Image from "next/image";
import styles from "./group.module.css";
import MainHeader from "@/views/header/mainHeader";
import { FileX } from "lucide-react";

export default function Group() {

  const categoria = 'Coleções'
  const pecas = [
    { img: "link", nome: "Coleção verão"},
    { img: "link", nome: "Coleção primavera"},
    { img: "link", nome: "Coleção outono"},
    { img: "link", nome: "Coleção inverno"},
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
