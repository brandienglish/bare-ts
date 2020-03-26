import * as React from "react";
import { IChirp } from "../client/utils/types";
// import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

const HomeChirpCard: React.FC<HomeChirpCardProps> = _props => {
  const history = useHistory();

  return (
    <div className="col-md-6 mx-1">
      <div
        onClick={() => history.push(`/details/${_props.chirp.id}`)}
        className="card my-2 shawdow"
      >
        <div className="card-body text-center">
          <h4 className="card-title">@{_props.chirp.username}</h4>
          <p className="card-text">{_props.chirp.message}</p>
          {/* <Link to={`/details/${_props.chirp.id}`}>View</Link> */}
        </div>
      </div>
    </div>
  );
};

interface HomeChirpCardProps {
  chirp: IChirp;
}

export default HomeChirpCard;
