import React, { useState } from 'react';

const dataList = [{
  id: 1,
  title: 'Anand Krishna',
  date: 'Feb 11',
  imgUrl: 'http://placehold.it/64x64',
  message: "Some quick example text to build on the card title and make up the bulk of the card's content."
}, {
  id: 2,
  title: 'Anand Krishna',
  date: 'Feb 11',
  imgUrl: 'http://placehold.it/64x64',
  message: "Some quick example text to build on the card title and make up the bulk of the card's content."
}, {
  id: 3,
  title: 'Anand Krishna',
  date: 'Feb 11',
  imgUrl: 'http://placehold.it/64x64',
  message: "Some quick example text to build on the card title and make up the bulk of the card's content."
}, {
  id: 4,
  title: 'Anand Krishna',
  date: 'Feb 11',
  imgUrl: 'http://placehold.it/64x64',
  message: "Some quick example text to build on the card title and make up the bulk of the card's content."
}];

function FillPanel() {
  const [comment, setComment] = useState('');
  const [toggle, setToggle] = useState(false);
  const [eye, setEye] = useState(false);
  const [funnel, setFunnel] = useState(false);

  const setCommentValue = (e) => {
    setComment(e.target.value);
  }

  const onClickFilter = (val) => {
    if (val === 'TOGGLE') {
      setToggle(!toggle);
    } else if (val === 'EYE') {
      setEye(!eye);
    } else {
      setFunnel(!funnel);
    }
  }

  return (
    <div className="fill-panel">
      <form>
        <div className="mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Make a comment"
            value={comment}
            style={comment ? { height: '90px' } : null}
            onChange={setCommentValue}
          />
        </div>

        <button type="button" className="btn btn-default">Cancel</button>
        <button type="button" className="btn btn-primary" disabled={!comment}>Submit</button>
      </form>

      <div className="section">
        <div className="title">The defaul</div>

        <div className="card">
          {
            dataList.map(_id =>
              <div className="card-body" key={_id.id}>
                <img src={_id.imgUrl} alt={_id.title} />

                <div className="message">
                  <div className="card-title">
                    <h6>{_id.name}</h6>
                    <small>{_id.date}</small>
                  </div>

                  <p className="card-text">{_id.message}</p>

                  <div className="actions">
                    <a href="#" className="card-link">Reply</a>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="footer">
        <a className="nav-link active" href="#" onClick={() => onClickFilter('TOGGLE')}>
          <i className={['bi', toggle ? 'bi-toggle-off' : 'bi-toggle-on'].join(" ")}></i>
          <span>All Screen Comments</span>
        </a>

        <a className="nav-link active" href="#" onClick={() => onClickFilter('EYE')}>
          <i className={['bi', eye ? 'bi-eye-slash' : 'bi-eye'].join(" ")}></i>
        </a>

        <a className="nav-link active" href="#" onClick={() => onClickFilter('FUNNEL')}>
          <i className="bi bi-funnel-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default FillPanel;
