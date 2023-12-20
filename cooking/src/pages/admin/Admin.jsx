import "./Admin.css";

import { backupData, restoreData } from "../../data/dataHandler";

export default function Admin() {
  // TO DO ADD POPUPS TO CONFIRM
  const backupConfirm = () => {
    backupData();
  };
  const restoreConfirm = () => {
    restoreData();
  };

  return (
    <div className="admin">
      <div>Where to add edit and delete</div>
      {/* TO DO KEEP TRACK DATE LAST BACKUP */}
      <div>Last backup:</div>
      <div>
        <button onClick={backupConfirm}>Backup Data</button>
        <button onClick={restoreConfirm}>Restore Data</button>
      </div>
    </div>
  );
}
