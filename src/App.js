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

  return <span>{time.utcOffset("-04:58:17").format("dddd, MMMM Do YYYY, HH:mm:ss")}</span>;
}

export default function App() {
  return (
    <>
      <div>
        <div id="clock"><Time></Time> BT</div>
      </div>

      <footer class="fixed bottom-0 left-0 z-20 w-full p-4">
        <div class="text-sm text-gray-500 text-center sm:text-center dark:text-gray-400">
          <span>Bean Time is the Official Time Zone of the Furry Universe</span>
        </div>
      </footer>

    </>

  )
}
