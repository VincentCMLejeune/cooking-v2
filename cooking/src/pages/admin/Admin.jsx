import "./Admin.css";

// import { backupData, restoreData } from "../../data/dataHandler";
import jsonBackup from "../../data/backupData.json";
import jsonData from "../../data/data.json";

export default function Admin() {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Dcember",
  ];

  const getDayWithSuffix = (day) => {
    const st = [1, 21, 31];
    const nd = [2, 22];
    const rd = [3, 23];
    if (st.includes(day)) return `${day}st`;
    if (nd.includes(day)) return `${day}nd`;
    if (rd.includes(day)) return `${day}rd`;
    return `${day}th`;
  };

  const getFullDate = (date) => {
    date = new Date(date);
    let formattedDate = "";
    formattedDate += week[date.getDay()];
    formattedDate += " " + getDayWithSuffix(date.getDate());
    formattedDate += " " + month[date.getMonth()];
    return formattedDate;
  };

  return (
    <div className="admin">
      <div>Where to add edit and delete</div>
      <div>Last backup: {getFullDate(jsonBackup.lastSaved)}</div>
      <div>
        {/* <button onClick={backupConfirm}>Backup Data</button>
        <button onClick={restoreConfirm}>Restore Data</button> */}
      </div>
    </div>
  );
}
