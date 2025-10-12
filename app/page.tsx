import Image from "next/image";
import styles from "./page.module.css";
import Item from '@/views/itens/item';
import Group from '@/views/group/group';
import Login from '@/views/login/login'
import Register from '@/views/login/register'

export default function Home() {
  return (
    <>
      <Login/>
    </>
  );
}
