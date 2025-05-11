import Image from "next/image";
import styles from "./page.module.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/image/sb.png"
          alt="Next.js logo"
          width={300}
          height={301}
          priority
        />

        <Link href="/cardapio" className={styles.menu}>
          Veja o Cardápio
        </Link>

        <a href="https://wa.me/5581998928225" className={styles.cta}>
          <FaWhatsapp fontSize={32}/>
          Peça pelo Whatsapp
        </a>

      </main>
      <footer className={styles.footer}>
        <h4>Rua Cinquenta e Dois, 6 - CEP: 53545-690</h4>
        <h4>Caetés III - Abreu e Lima - Recife-PE</h4>
        <h3 style={{ color: "#f48222" }}>Contato:81 99892-8225</h3>
      </footer>
    </div>
  );
}
