const Home = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="min-h-screen">
      <h1>Home</h1>
      <p>Welcome to the homepage! Here you can find the latest updates.</p>
    </div>
  );
};

export default Home;
