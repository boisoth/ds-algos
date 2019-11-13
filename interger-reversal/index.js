/**
 * Integer Reversal
 * -21 => -12
 */

function intRev(num) {
  let temp = num.toString().split(""); // 210 => "210" => ["2", "1", "0"]

  // temp[temp.length -1] // temp[2] == 0

  if (temp[temp.length - 1] == 0) {
    return false;
  } else {
    return (
      Math.sign(num) *
      parseInt(
        num
          .toString()
          .split("")
          .reverse()
          .join("")
      )
    );
  }
}

module.exports = intRev;
