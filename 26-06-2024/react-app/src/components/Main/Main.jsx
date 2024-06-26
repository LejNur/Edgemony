import posts from "../../assets/data/posts.json";
import "./Main.css";

function Main() {
  return (
    <main>
      <div className="container">
        <div className="main-grid">
          <Aside />
          <PostList />
        </div>
      </div>
    </main>
  );
}

function Aside() {
  const sideItems = [
    { label: "Management", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Support", href: "#" },
    { label: "Dashboard", href: "#" },
  ];

  return (
    <aside className="sideBar">
      <h2>Menu</h2>
      {sideItems.map((sideItem, index) => (
        <a key={`${sideItem.label}-${index}`} href={sideItem.href}>
          {sideItem.label}
        </a>
      ))}
    </aside>
  );
}

function PostList() {
  return (
    <section className="blog-section">
      <h2>Blog</h2>
      <div className="list">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.body}
            userID={post.userId}
            img={post.img}
          />
        ))}
      </div>
    </section>
  );
}

function Post(props) {
  const { title, content, userID, img } = props;
  return (
    <article role="list-item">
      <img src={img} alt="avatar" className="avatar-img" />
      <h2>{title}</h2>
      <small>UserID {userID}</small>
      <p>{content}</p>
    </article>
  );
}

export { Main };
