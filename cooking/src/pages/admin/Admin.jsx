import "./Admin.css";

import Marmitton from "../../components/marmitton/Marmitton";

import jsonBackup from "../../data/backupData.json";
// import jsonData from "../../data/data.json";

import { getFullDate } from "./FormatDate";

export default function Admin() {
  return (
    <div className="admin">
      <div>Last backup: {getFullDate(jsonBackup.lastSaved)}</div>
      <Marmitton />
    </div>
  );
}
