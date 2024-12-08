import React from "react";

export const Form = ({ gettingWeather }) => {
  return (
    <div>
      <h2>Enter a City</h2>
      <form onSubmit={gettingWeather}>
        <input type="text" name="city" placeholder="City" />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};
