
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  function superbowlWin(recordData) {
    const winRecord = recordData.find(entry => entry.result === "W");

    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined; 
    }
  }
  console.log(superbowlWin(record)); 
  