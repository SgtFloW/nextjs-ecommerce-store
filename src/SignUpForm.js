import './style-bootstrap.css';

export default function SignUpForm(props) {
  return (
    <div className="container px-2">
      <div className="card mt-2">
        <div className="card-body">
          <form
            className="form-horizontal"
            onSubmit={(event) => props.createGuest(event)}
          >
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4 text-center">
                <input
                  className="form-control p-2 m-1"
                  onChange={(event) => props.handleChange('firstname', event)}
                  placeholder="Firstname"
                />
                <input
                  className="form-control p-2 m-1"
                  onChange={(event) => props.handleChange('lastname', event)}
                  placeholder="Lastname"
                />
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row">
              <div className="col-5"></div>
              <div className="col-2 text-center">
                <div className="btn-center">
                  <input type="submit" className="btn btn-block btn-primary " />
                </div>
              </div>
              <div className="col-5"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
