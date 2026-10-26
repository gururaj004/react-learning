import React from "react";
import { Bookmark } from "lucide-react";
function Boxes(props) {
  
  return (
    
      <div className="child">
        <div className="top">
          <img src={props.logo}></img>
          <button >
            Save <Bookmark />
          </button>
        </div>
        <div className="centre">
          <h3>{props.company}</h3>
          <h4>{props.post}</h4>
        </div>
        <div className="bottom">
          <div>
          <h5>{props.pay}</h5>
          <h5> {props.location}</h5>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>

      </div>
  );
}

export default Boxes;
