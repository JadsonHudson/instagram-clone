import styles from "../../styles/Feed.module.css";
import Image from 'next/image'
export default function Feed() {
    return (
        <>
            <div className={styles.containerGrid}>
              <div className={styles.rightContent}>
                <section className={styles.stories}>
                  <div className={styles.storyItems}>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.storyBorder}>
                        <Image src="/images/profile-j.png" width={56} height={56} alt="profile image"/>
                      </div>
                      <p>username</p>
                    </div>
                  </div>
                </section>
              </div>
              <div className={styles.leftContent}></div>
            </div>
        </>
    );
}
