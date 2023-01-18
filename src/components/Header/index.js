import Link from 'next/link'
import Image from "next/image";
import styles from '../../styles/Header.module.css'
export default function Header(){
  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="#">
          <Image src="/images/Logo.png" width={100} height={30} alt="Logo" className={styles.headerImage}/>
        </Link>
        <div className={styles.fakeInput}>
          <div className={styles.searchIcon}>
            <Image src="/images/icons/Search.png" width={22} height={22} alt="icone de busca"/>
          </div>
          <input type="search" placeholder="pesquisar..."/>
        </div>
        <div className={styles.navBar}>
          <Link href="#"><Image src="/images/icons/Home-fill.png" width={22} height={22} alt='Home'/></Link>
          <Link href="#"><Image src="/images/icons/Messenger.png" width={22} height={22} alt='Messenger'/></Link>
          <Link href="#"><Image src="/images/icons/NewPosts.png" width={22} height={22} alt='New post'/></Link>
          <Link href="#"><Image src="/images/icons/FindPeople.png" width={22} height={22} alt='Find people'/></Link>
          <Link href="#"><Image src="/images/icons/ActivityFeed.png" width={22} height={22} alt='Activity feed'/></Link>
          <Link href="#"><Image src="/images/Profile-Pic-S.png" width={22} height={22} alt='Profile'/></Link>
        </div>
      </div>
    </header>
    </>
  )
}