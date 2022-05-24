import React from "react";

const Filters = {
  Category: function ({ name }) {
    const handleOnChange = (e) => {};
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            type="radio"
            onChange={handleOnChange}
            name="category"
            value={name}
            className="custom-control-input"
            id={name}
            checked=""
          />
          &nbsp;
          <label className="custom-control-label" for={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
  Filter: function ({ name }) {
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            name={name}
            onChange={() => {}}
            type="checkbox"
            className="custom-control-input"
            id={name}
          />
          &nbsp;
          <label className="custom-control-label" for={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
};
export default Filters;
