import { Queue } from "./queue.js";

// 1. สร้าง Queue ใหม่พร้อมข้อมูลตัวแรก (1)
let myQueue = new Queue(1);

// 2. เพิ่มข้อมูลเข้าคิว (Enqueue)
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("--- สภาพ Queue หลังสร้างและ Enqueue (1, 2, 3) ---");
console.log(myQueue);
console.log("ความยาวของ Queue:", myQueue.length);

// 3. เอาข้อมูลออกจากคิว (Dequeue)
console.log("\n--- ทดสอบ Dequeue (เอาข้อมูลออกทีละตัว) ---");
console.log("ตัวที่เอาออกครั้งที่ 1:", myQueue.dequeue()?.value); // ควรได้ 1
console.log("ตัวที่เอาออกครั้งที่ 2:", myQueue.dequeue()?.value); // ควรได้ 2

console.log("\n--- สภาพ Queue ปัจจุบัน ---");
console.log(myQueue);
console.log("ความยาวคงเหลือ:", myQueue.length);