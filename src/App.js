import React from "react";
import "./App.css";
import moment from "moment";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

function Time() {

  const [time, setTime] = React.useState(moment.utc());
 
   React.useEffect(() => {
     setInterval(() => {
      setTime(moment.utc());
     }, 1000);
   }, []);
 
  return <span>{time.utcOffset("-04:58:17").format("dddd, MMMM Do YYYY, HH:mm:ss")} </span>;
  }

export default function App() {
  return (
    <><div id="clock"><Time></Time></div></>
    
  )
}
