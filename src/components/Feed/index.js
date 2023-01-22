import styles from "../../styles/Feed.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Feed() {
    return (
        <>
            <div className={styles.containerGrid}>
                <div className={styles.rightContent}>
                    <section className={styles.stories}>
                        <div className={styles.storyItems}>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                            <div className={styles.storyItem}>
                                <div className={styles.storyBorder}>
                                    <Image
                                        src="/images/profile-j.png"
                                        width={56}
                                        height={56}
                                        alt="profile image"
                                    />
                                </div>
                                <p>username</p>
                            </div>
                        </div>
                    </section>
                    <div className={styles.postContent}>
                        <div className={styles.post}>
                            <header>
                                <div className={styles.postProfile}>
                                    <div className={styles.postBorder}>
                                        <Image
                                            src="/images/profile-j.png"
                                            width={56}
                                            height={56}
                                            alt="profile image"
                                        />
                                    </div>
                                    <p>username</p>
                                </div>
                                <Image
                                    src="/images/icons/More.png"
                                    width={24}
                                    height={24}
                                    alt="opções"
                                />
                            </header>
                            <Image
                                src="/images/profile-j.png"
                                width={614}
                                height={500}
                                alt="Post image"
                                className={styles.postImage}
                            />
                            <footer className={styles.postFooter}>
                                <div className={styles.comment}>
                                    <div className={styles.icons}>
                                        <div className={styles.iconRight}>
                                            <Image
                                                src="/images/icons/Like.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/Comment.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/SharePosts.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                        </div>
                                        <Image
                                            className={styles.iconLeft}
                                            src="/images/icons/Save.png"
                                            width={24}
                                            height={24}
                                            alt="Booksmark"
                                        ></Image>
                                    </div>
                                    <p className={styles.commentLikes}>
                                        1.023 likes
                                    </p>
                                    <span>username</span>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Esse eveniet enim amet
                                        0saepe autem exercitationem quasi
                                        eligendi quisquam laborum architecto
                                        deserunt ipsum fugiat, in adipisci
                                        temporibus alias cumque aliquid ex!
                                    </p>
                                    <p className={styles.showComments}>
                                        View all 100 comments
                                    </p>
                                    <p className={styles.timePost}>
                                        1 HOUR AGO
                                    </p>
                                </div>
                                <div className={styles.addComment}>
                                    <div className={styles.inputComment}>
                                        <Image
                                            src="/images/icons/Emoji.png"
                                            width={24}
                                            height={24}
                                            alt="Emoji"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Add comment"
                                        />
                                    </div>
                                    <button type="submit">Post</button>
                                </div>
                            </footer>
                        </div>
                        <div className={styles.post}>
                            <header>
                                <div className={styles.postProfile}>
                                    <div className={styles.postBorder}>
                                        <Image
                                            src="/images/profile-j.png"
                                            width={56}
                                            height={56}
                                            alt="profile image"
                                        />
                                    </div>
                                    <p>username</p>
                                </div>
                                <Image
                                    src="/images/icons/More.png"
                                    width={24}
                                    height={24}
                                    alt="opções"
                                />
                            </header>
                            <Image
                                src="/images/profile-j.png"
                                width={614}
                                height={500}
                                alt="Post image"
                                className={styles.postImage}
                            />
                            <footer className={styles.postFooter}>
                                <div className={styles.comment}>
                                    <div className={styles.icons}>
                                        <div className={styles.iconRight}>
                                            <Image
                                                src="/images/icons/Like.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/Comment.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/SharePosts.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                        </div>
                                        <Image
                                            className={styles.iconLeft}
                                            src="/images/icons/Save.png"
                                            width={24}
                                            height={24}
                                            alt="Booksmark"
                                        ></Image>
                                    </div>
                                    <p className={styles.commentLikes}>
                                        1.023 likes
                                    </p>
                                    <span>username</span>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Esse eveniet enim amet
                                        0saepe autem exercitationem quasi
                                        eligendi quisquam laborum architecto
                                        deserunt ipsum fugiat, in adipisci
                                        temporibus alias cumque aliquid ex!
                                    </p>
                                    <p className={styles.showComments}>
                                        View all 100 comments
                                    </p>
                                    <p className={styles.timePost}>
                                        1 HOUR AGO
                                    </p>
                                </div>
                                <div className={styles.addComment}>
                                    <div className={styles.inputComment}>
                                        <Image
                                            src="/images/icons/Emoji.png"
                                            width={24}
                                            height={24}
                                            alt="Emoji"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Add comment"
                                        />
                                    </div>
                                    <button type="submit">Post</button>
                                </div>
                            </footer>
                        </div>
                        <div className={styles.post}>
                            <header>
                                <div className={styles.postProfile}>
                                    <div className={styles.postBorder}>
                                        <Image
                                            src="/images/profile-j.png"
                                            width={56}
                                            height={56}
                                            alt="profile image"
                                        />
                                    </div>
                                    <p>username</p>
                                </div>
                                <Image
                                    src="/images/icons/More.png"
                                    width={24}
                                    height={24}
                                    alt="opções"
                                />
                            </header>
                            <Image
                                src="/images/profile-j.png"
                                width={614}
                                height={500}
                                alt="Post image"
                                className={styles.postImage}
                            />
                            <footer className={styles.postFooter}>
                                <div className={styles.comment}>
                                    <div className={styles.icons}>
                                        <div className={styles.iconRight}>
                                            <Image
                                                src="/images/icons/Like.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/Comment.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/SharePosts.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                        </div>
                                        <Image
                                            className={styles.iconLeft}
                                            src="/images/icons/Save.png"
                                            width={24}
                                            height={24}
                                            alt="Booksmark"
                                        ></Image>
                                    </div>
                                    <p className={styles.commentLikes}>
                                        1.023 likes
                                    </p>
                                    <span>username</span>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Esse eveniet enim amet
                                        0saepe autem exercitationem quasi
                                        eligendi quisquam laborum architecto
                                        deserunt ipsum fugiat, in adipisci
                                        temporibus alias cumque aliquid ex!
                                    </p>
                                    <p className={styles.showComments}>
                                        View all 100 comments
                                    </p>
                                    <p className={styles.timePost}>
                                        1 HOUR AGO
                                    </p>
                                </div>
                                <div className={styles.addComment}>
                                    <div className={styles.inputComment}>
                                        <Image
                                            src="/images/icons/Emoji.png"
                                            width={24}
                                            height={24}
                                            alt="Emoji"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Add comment"
                                        />
                                    </div>
                                    <button type="submit">Post</button>
                                </div>
                            </footer>
                        </div>
                        <div className={styles.post}>
                            <header>
                                <div className={styles.postProfile}>
                                    <div className={styles.postBorder}>
                                        <Image
                                            src="/images/profile-j.png"
                                            width={56}
                                            height={56}
                                            alt="profile image"
                                        />
                                    </div>
                                    <p>username</p>
                                </div>
                                <Image
                                    src="/images/icons/More.png"
                                    width={24}
                                    height={24}
                                    alt="opções"
                                />
                            </header>
                            <Image
                                src="/images/profile-j.png"
                                width={614}
                                height={500}
                                alt="Post image"
                                className={styles.postImage}
                            />
                            <footer className={styles.postFooter}>
                                <div className={styles.comment}>
                                    <div className={styles.icons}>
                                        <div className={styles.iconRight}>
                                            <Image
                                                src="/images/icons/Like.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/Comment.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                            <Image
                                                src="/images/icons/SharePosts.png"
                                                width={24}
                                                height={24}
                                                alt="Booksmark"
                                            ></Image>
                                        </div>
                                        <Image
                                            className={styles.iconLeft}
                                            src="/images/icons/Save.png"
                                            width={24}
                                            height={24}
                                            alt="Booksmark"
                                        ></Image>
                                    </div>
                                    <p className={styles.commentLikes}>
                                        1.023 likes
                                    </p>
                                    <span>username</span>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Esse eveniet enim amet
                                        0saepe autem exercitationem quasi
                                        eligendi quisquam laborum architecto
                                        deserunt ipsum fugiat, in adipisci
                                        temporibus alias cumque aliquid ex!
                                    </p>
                                    <p className={styles.showComments}>
                                        View all 100 comments
                                    </p>
                                    <p className={styles.timePost}>
                                        1 HOUR AGO
                                    </p>
                                </div>
                                <div className={styles.addComment}>
                                    <div className={styles.inputComment}>
                                        <Image
                                            src="/images/icons/Emoji.png"
                                            width={24}
                                            height={24}
                                            alt="Emoji"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Add comment"
                                        />
                                    </div>
                                    <button type="submit">Post</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
                <div className={styles.leftContent}>
                    <div className={styles.profileSection}>
                        <div className={styles.profile}>
                            <div className={styles.avatar}>
                                <Image
                                    src="/images/profile-j.png"
                                    width={56}
                                    height={56}
                                    alt="avatar profile"
                                />
                            </div>
                            <div className={styles.username}>
                                <p>jadsonhudson</p>
                                <p>jadsonhudson</p>
                            </div>
                        </div>
                        <Link href="#">switch</Link>
                    </div>
                    <div className={styles.suggestions}>
                        <span>Suggestions For You</span>
                        <button type="button">See All</button>
                    </div>
                    <div className={styles.follows}>
                        <div className={styles.follow}>
                                <Image
                                    src="/images/profile-j.png"
                                    width={32}
                                    height={32}
                                    alt="image follow"
                                />
                            <div className={styles.profileName}>
                                <p>username</p>
                                <span>Followed by hudson + 2 more</span>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div className={styles.follow}>
                                <Image
                                    src="/images/profile-j.png"
                                    width={32}
                                    height={32}
                                    alt="image follow"
                                />
                            <div className={styles.profileName}>
                                <p>username</p>
                                <span>Followed by hudson + 2 more</span>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div className={styles.follow}>
                                <Image
                                    src="/images/profile-j.png"
                                    width={32}
                                    height={32}
                                    alt="image follow"
                                />
                            <div className={styles.profileName}>
                                <p>username</p>
                                <span>Followed by hudson + 2 more</span>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div className={styles.follow}>
                                <Image
                                    src="/images/profile-j.png"
                                    width={32}
                                    height={32}
                                    alt="image follow"
                                />
                            <div className={styles.profileName}>
                                <p>username</p>
                                <span>Followed by hudson + 2 more</span>
                            </div>
                            <button>Follow</button>
                        </div>
                    </div>
                    <footer>
                        
                    </footer>
                </div>
            </div>
        </>
    );
}
