import React from "react";
import colors from "@/utils/data.js";

function statusLookup(partId: number, colorId: string) {
  return "unkown";
}

function AllColorStatus({ partId = 0 }) {
  return (
    <div>
      {colors.map((singleColor, i) => (
        <div className="color-row">
          <div className="table-id">{singleColor.Lid}</div>
          <div
            className="flag"
            style={{ backgroundColor: "#" + singleColor.color }}
          >
            {singleColor.BLName.length == 0
              ? singleColor.LName
              : singleColor.BLName}
          </div>
          <div className="flag flag-status flag-unknown">
            {statusLookup(partId, singleColor.Lid)}
          </div>
        </div>
        // <Comment comment={singleComment} key={i + " " + singleComment.id} />
      ))}
    </div>
  );
}

export default AllColorStatus;
