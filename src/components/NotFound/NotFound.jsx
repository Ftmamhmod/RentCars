import notFound from "../../assets/imges/not-found/404-not-found.png";

export const NotFound = () => {
  return (
    <div className="w-50 h-30 flex justify-content-center align-items-center m-auto text-center">
      <img src={notFound} alt="not found" className="img-fluid h-40" />
      <a className="btn btn-primary m-auto" href="/">
        Back to home
      </a>
    </div>
  );
};
