import { TransactionQueue } from "./queue1.js";

const bankQueue = new TransactionQueue();

bankQueue.enqueueTransaction("TX001", "123-456", 1000);
bankQueue.enqueueTransaction("TX002", "987-654", 2500);
bankQueue.enqueueTransaction("TX003", "555-888", 500);

bankQueue.displaySummary();

console.log("\n--- ประมวลผลรายการแรก ---");
bankQueue.processTransaction();

console.log("\n--- สรุปคิวคงเหลือ ---");
bankQueue.displaySummary();