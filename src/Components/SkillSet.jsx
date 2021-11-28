import React from 'react'

function SkillSet(props) {
    return (
        <div className="col-md-6 progress_bar_container">
        <div className="progress"    style={{ height:"30px"}}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${props.value.level}%`}}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
          { `${props.value.language}  ${" -  "}
            ${ props.value.level}%`}
          </div>
        </div>
      </div>
    )
}

export default SkillSet
