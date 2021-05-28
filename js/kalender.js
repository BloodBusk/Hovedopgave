let kalenderInsert = document.getElementById("kalenderInsert");
let kalenderDayNames = document.getElementById("kalenderDayNames");
let kalenderDays = document.getElementById("kalenderDays");
let date = document.getElementById("date");
let month = document.getElementById("month");

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Juni",
  "Juli",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let daysNameArr = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
let daysArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

//get current month
let d = new Date();
let currentMonth = months[d.getMonth()];

//makes a list of days name
let makeDaysName = (i) => {
  let daysName = document.createElement("div");
  daysName.setAttribute("class", "dayName");
  daysName.innerHTML = daysNameArr[i];
  return daysName;
};

//makes a list of dates in a month
let makeDays = (i) => {
  let days = document.createElement("p");
  days.setAttribute("class", "days");
  days.setAttribute("id", "dayId" + i);
  days.innerHTML = daysArr[i];
  return days;
};

//gets current date of targeted element
let getDate = (e) => {
  let dateP = e.target;
  date.innerHTML = "Du har valgt dato " + dateP.innerHTML + ". af " + currentMonth; 
};

//prints out days
for (let i = 0; i < daysNameArr.length; i++) {
  kalenderDayNames.appendChild(makeDaysName(i));
}

//prints out dates
for (let i = 0; i < daysArr.length; i++) {
  kalenderDays.appendChild(makeDays(i));
  document.getElementById("dayId" + i).addEventListener("click", getDate);
}

//shows current month
month.innerHTML = currentMonth;
