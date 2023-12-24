import "./Admin.css";

// import { backupData, restoreData } from "../../data/dataHandler";
import jsonBackup from "../../data/backupData.json";
import jsonData from "../../data/data.json";

export default function Admin() {
  return (
    <div className="admin">
      <div>Where to add edit and delete</div>
      <div>Last backup: {jsonBackup.lastSaved}</div>
      <div>
        {/* <button onClick={backupConfirm}>Backup Data</button>
        <button onClick={restoreConfirm}>Restore Data</button> */}
      </div>
    </div>
  );
}
