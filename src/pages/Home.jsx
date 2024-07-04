function Home() {
  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
      <br />
      <p className="text-xl">
        This is the protected home page. Only registered users can access this
        content.
      </p>
    </div>
  );
}

export default Home;
