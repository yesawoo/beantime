import React from "react";
import "./App.css";
import moment from "moment";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

var BEANTIME = "-04:00:00";

String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

var x = BEANTIME;
x = x.replaceAt(4, "5").replaceAt(5, "8").replaceAt(7, "1").replaceAt(8, "7");
BEANTIME = x;

function Time() {
  const [time, setTime] = React.useState(moment.utc());

  React.useEffect(() => {
    setInterval(() => {
      setTime(moment.utc());
    }, 1000);
  }, []);

  return <span>{time.utcOffset(BEANTIME).format("dddd, MMMM Do YYYY, HH:mm:ss")}</span>;
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
