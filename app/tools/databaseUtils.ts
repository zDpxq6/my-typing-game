import { openDB } from "idb";

export const saveSettings = async (settings: any) => {
  const db = await openDB("SettingsDatabase", 1, {
    upgrade(db) {
      db.createObjectStore("settingsStore", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });

  await db.put("settingsStore", settings);
};

export const saveHighScore = async (
  userId: string,
  taskId: string,
  score: number
) => {
  const db = await openDB("GameDatabase", 1, {
    upgrade(db) {
      const store = db.createObjectStore("highScores", {
        keyPath: "id",
        autoIncrement: true,
      });
      store.createIndex("userId", "userId");
      store.createIndex("taskId", "taskId");
    },
  });

  const tx = db.transaction("highScores", "readwrite");
  const store = tx.objectStore("highScores");

  const existingRecord = await store.index("userId").get(userId);

  if (existingRecord) {
    if (existingRecord.score < score) {
      await store.put({ ...existingRecord, score });
    }
  } else {
    await store.add({ userId, taskId, score });
  }

  await tx.done;
};
