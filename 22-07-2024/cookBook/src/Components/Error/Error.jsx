function Error({ message }) {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500">
        404 | Not Found
      </h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
