"use client";

import React from "react";
import Image from "next/image";
import styles from "./mainHeader.module.css";
import Script from "next/script";
import { useEffect, useState, useRef } from "react";
import { ShoppingCart, CircleUserRound , ChevronUp } from "lucide-react";


export default function MainHeader() {

  const categorias = ['Calças','Bermudas','Camisetas','Camisas','Regatas']
  const colecoes = ['Coleção primavera','Coleção outono','Coleção verão','Coleção inverno']

  function handleAbrirModal(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

    //evita o comportamento padrão
    event.preventDefault();

    //adiciona o id do modal a ser aberto e os outros ids
    const id = event.currentTarget.className;
    const ids = ['itens1','itens2','itens3','perfilItem'];

    //fecha os modais dos ids que não estiverem sendo abertos
    ids.forEach((el)=> {if (id == el) ids.splice(ids.indexOf(el),1)})
    ids.forEach((el)=>{ const mod = document.getElementById("tab"+el); if(mod) mod.style.display = 'none';})

    //abre o modal do id
    const modal = document.getElementById("tab"+id);
    if(modal){
      const computedDisplay = window.getComputedStyle(modal).display;
      modal.style.display = computedDisplay === "none" ? "flex" : "none";
    }
  }


  return (
    <>
        <div className={styles.headerContainer}>
          <nav className={styles.headerNav}>
              <ul className={styles.headerListItens}>
                <li><a style={{fontWeight:'bold'}} className={"itens1"} onClick={handleAbrirModal} href="../roupas/roupas.tsx">Roupas</a></li>
                <li><a style={{fontWeight:'bold'}} className={"itens2"} onClick={handleAbrirModal} href="../colecoes/colecoes.tsx">Coleções</a></li>
                <li><a style={{fontWeight:'bold'}} className={"itens3"} onClick={handleAbrirModal} href="../sobre/sobre.tsx">Sobre</a></li>
              </ul>
              <ul className={styles.headerListSet}>
                <li><a href="" className={"perfilItem"}><ShoppingCart width={25} height={25} strokeWidth={2}/></a></li>
                <li><a href="" className={"perfilItem"} onClick={handleAbrirModal}><CircleUserRound width={25} height={25} strokeWidth={2}/></a></li>
              </ul>
          </nav>
          <div id='tabitens1' className={styles.tab1} >
            <ChevronUp style={{ display: 'block', margin: '0 auto' }}/>
            <ul className={styles.itensTablist}>
              {categorias.map((item,index)=>(
                <li className={styles.itensTab} key={index}><a href="">{item}</a></li>
              ))}
            </ul>
          </div>
          <div id='tabitens2' className={styles.tab2}>
            <ChevronUp style={{ display: 'block', margin: '0 auto' }}/>
            <ul className={styles.itensTablist}>
              {colecoes.map((item,index)=>(
                <li className={styles.itensTab} key={index}><a href="">{item}</a></li>
              ))}
            </ul>
          </div>
          <div id='tabitens3' className={styles.tab3}>
            <ChevronUp style={{ display: 'block', margin: '0 auto' }}/>
            <ul className={styles.itensTablist}>
              <li className={styles.itensTab}>Lojas perto de você</li>
              <li className={styles.itensTab}>Política de usuário</li>
              <li className={styles.itensTab}>Sobre nós</li>
            </ul>
          </div>
          <div id='tabperfilItem' className={styles.tabUser}>
            <ChevronUp style={{ display: 'block', margin: '0 auto' }}/>
            <ul className={styles.itensTablist}>
              <li className={styles.itensTab}>Perfil</li>
              <li className={styles.itensTab}>Minhas compras</li>
              <li className={styles.itensTab}>Configurações</li>
              <li className={styles.itensTab}>Sair</li>
            </ul>
          </div>
        </div>

    </>
  );
}