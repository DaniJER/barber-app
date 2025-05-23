async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function Postpages() {
  const posts = await loadPost();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.id}</p>
        </div>
      ))}
    </div>
  );
}
export default Postpages;
