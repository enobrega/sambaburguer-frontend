import Image from "next/image";
import styles from "./page.module.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/image/menu.png"
          alt="Cardápio"
          width={792}
          height={1160}
          priority
        />

        <a href="https://wa.me/5581998928225" className={styles.cta}>
          <FaWhatsapp />
          Peça pelo Whatsapp
        </a>
        
        <Link href="/" className={styles.menu}>
          Voltar
        </Link>

      </main>
    </div>
  );
}
