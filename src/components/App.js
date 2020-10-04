import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h1>Hello</h1>
      <h4>Create Event</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input type="text" className="form-control" id="formEventTitle" placeholder="Title" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" placeholder="Title" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-danger">Delete All Events</button>
      </form>

      <h4>Events Table</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>

      </table>
    </div>
  );
}

export default App;
