import React from "react";
import styles from "./login.module.css";
import MainHeader from "@/views/header/mainHeader";
import { FileX } from "lucide-react";
import Image from "next/image";

export default function Register() {

  return (
      <div className={styles.loginContainer}>
        <div className={styles.loginDiv}>
            <div className={styles.item3}>
                <FileX  style={{display:'flex', justifyContent:'center'}} width={45} height={75}/>
            </div>
        
            <h1 style={{display:'flex', justifyContent:'center', marginTop:'25px'}} >Registre sua Conta</h1>

            <div className={styles.item9}>
                <p style={{paddingRight:'10px'}}>E-mail:</p>
                <input className={styles.itemInput2} type="text" placeholder="Seu e-mail"/>
                <br />  
                <p style={{paddingRight:'10px'}}>Senha:</p>
                <input className={styles.itemInput2} type="text" placeholder="Sua senha"/>
                <br />  
                <p style={{paddingRight:'10px'}}>Confirme sua senha:</p>
                <input className={styles.itemInput2} type="text" placeholder="Confirme sua senha"/>
                <br />  
                <div className={styles.item10}>
                    <input type="checkbox" placeholder="Lembre-se"/>
                    <p>Lembre-me</p>
                </div>
            </div>

            <div className={styles.item3}>
                <button className={styles.buttonItem}>Criar Conta</button>
            </div>


            <div className={styles.item6}>
                <a href="">Termos de uso</a>
                <br />
                <a href="">Política de privacidade</a>
            </div>
        </div>
      </div>
  );
}
