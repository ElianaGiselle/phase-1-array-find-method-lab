// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin (record) {
  let findWin = record.find (({result})=> result === "W")
    if (findWin){
        return findWin ["year"]
    }
}