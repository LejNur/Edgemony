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
  return (
    <aside className="sideBar">
      <h2>SideBar</h2>
      <a href="#">Management</a>
      <a href="#">Settings</a>
      <a href="#">Support</a>
      <a href="#">Dashboard</a>
    </aside>
  );
}

function PostList() {
  return (
    <section>
      <h2>Blog</h2>
      <div role="list">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}

function Post() {
  return (
    <article role="list-item">
      <h3>Qui est esse</h3>
      <small>Written By ...</small>
      <p>
        est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis qui aperiam non debitis possimus qui neque nisi nulla
      </p>
    </article>
  );
}

export { Main };
