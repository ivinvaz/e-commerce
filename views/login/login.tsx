import React from "react";
import styles from "./login.module.css";
import MainHeader from "@/views/header/mainHeader";
import { FileX } from "lucide-react";
import Image from "next/image";

export default function Login() {

  return (
      <div className={styles.loginContainer}>
        <div className={styles.loginDiv}>
            <div className={styles.item3}>
                <FileX  style={{display:'flex', justifyContent:'center'}} width={45} height={75}/>
            </div>
        
            <h1 style={{display:'flex', justifyContent:'center', marginTop:'25px'}} >Acesse sua Conta</h1>

            <div className={styles.item1}>
                <p style={{paddingRight:'10px'}}>E-mail:</p>
                <input className={styles.itemInput} type="text" placeholder="e-mail"/>
            </div>

            <div className={styles.item1}>
                <p style={{paddingRight:'10px'}}>Senha:</p>
                <input className={styles.itemInput} type="text" placeholder="senha"/>
            </div>


            <div className={styles.item5}>
                <div className={styles.item2}>
                    <input type="checkbox" placeholder="Lembre-se"/>
                    <p>Lembre-me</p>
                </div>
                <a href="">Esqueceu senha?</a>
            </div>

            <div className={styles.item3}>
                <button className={styles.buttonItem}>Entrar</button>
                <div className={styles.item7}>
                    <Image src='/line.png' alt='' width={190} height={1}/>
                    <p className={styles.item8}>ou</p>
                    <Image src='/line.png' alt='' width={190} height={1}/>
                </div>
                <div className={styles.item4}>
                    <p>Ainda não tem conta?</p>
                    <button className={styles.buttonItem}>Registrar</button>
                </div>
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
