import { OrderQueue } from "./queue2.js";
const cafeQueue = new OrderQueue();

cafeQueue.addOrder(101, "สมชาย", "อเมริกาโน่ร้อน");
cafeQueue.addOrder(102, "วิภา", "ชาไทยเย็น");
cafeQueue.addOrder(103, "กิตติ", "มัทฉะลาเต้");

console.log("\n--- ดูออเดอร์ถัดไปที่ต้องทำ ---");
cafeQueue.peekNextOrder();

console.log("\n--- บาริสต้าเสิร์ฟออเดอร์ ---");
cafeQueue.serveOrder();

console.log("\n--- ดูออเดอร์ถัดไปอีกครั้ง ---");
cafeQueue.peekNextOrder();

console.log("\n--- ยกเลิกออเดอร์ #102 ---");
cafeQueue.cancelOrder(102);

console.log("\n--- ดูออเดอร์ถัดไปหลังยกเลิก ---");
cafeQueue.peekNextOrder();