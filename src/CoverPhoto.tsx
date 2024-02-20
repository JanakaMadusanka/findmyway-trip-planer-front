import "bootstrap/dist/css/bootstrap.min.css";
function CoverPhoto() {
  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">Find My Way Trip</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          "Find My Way Trip" is a locally-owned, small-scale travel agency
          dedicated to providing exceptional travel experiences to their
          customers. The agency needs several key features which help to its
          success.The app will offer features to successfully organize the trip.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Customize Section
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            System Section
          </button>
        </div>
      </div>
      <div className="container px-5">
        <img
          src="./public/travel_1.jpg"
          className="img-fluid border rounded-3 shadow-lg mb-4"
          alt="Travel image"
          width="1100"
          height="500"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default CoverPhoto;
