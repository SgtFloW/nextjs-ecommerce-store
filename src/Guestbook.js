import './style-bootstrap.css';

export default function Guestbook(props) {
  return (
    <div className="container px-2">
      <div className="card">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col">Firstnme</th>
                <th scope="col">Lastname</th>
                <th scope="col">Attending</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.__guestList.map((guest) => {
                return (
                  <tr key={guest.id} className="text-center">
                    <th scope="col">{guest.id}</th>
                    <td>{guest.firstName}</td>
                    <td>{guest.lastName}</td>
                    <td>{guest.attending === true ? 'Yes' : 'No'}</td>
                    <td>
                      <button
                        className="btn btn-secondary m-1"
                        onClick={() => props.toggleAttentance(guest.id)}
                      >
                        Toggle Attentance
                      </button>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => props.deleteGuest(guest.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
