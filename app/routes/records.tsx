import React, { useState, useEffect } from "react";
import { useLocation } from "@remix-run/react";

export const Records = () => {
  const location = useLocation();
  const result: Map<string, { count: number; actuals: Set<string> }> =
    location.state ? location.state.result : new Map();

  return (
    <div>
      <p>きろく</p>
      <p>タイム</p>
      <p>まちがった入力</p>
      {result && result.size > 0 ? (
        <div>
          {Array.from(result).map(([key, value]) => (
            <div key={key}>
              {`${key}: ${Array.from(value.actuals).join(",")}`}
            </div>
          ))}
        </div>
      ) : (
        <div>なし</div>
      )}
    </div>
  );
};
export default Records;
