import React from "react";
import Image from "next/image";
import styles from "./roupas.module.css";
import MainHeader from "@/views/header/mainHeader";

export default function Roupas() {
  return (
    <div>
      <MainHeader/>

      <h1 style={{ textAlign:'center', paddingTop:50, paddingBottom:50, fontSize:50 }}>Nome da área</h1>
      <div>
        <div className={"styles.itendDiv"}></div>
      </div>

    </div>
  );
}
