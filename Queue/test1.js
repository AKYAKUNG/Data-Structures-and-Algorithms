// โครงสร้าง Node สำหรับโจทย์คิว
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// โครงสร้าง Queue ตั้งต้น
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
}


// ========================================
// 1.1 Class TransactionNode
// ========================================

class TransactionNode {
    constructor(txnId, accountNo, amount) {
        this.txnId = txnId;
        this.accountNo = accountNo;
        this.amount = amount;
        this.next = null;
    }
}


// ========================================
// Class TransactionQueue
// ========================================

class TransactionQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }


    // ========================================
    // 1.2 enqueueTransaction()
    // ========================================

    enqueueTransaction(txnId, accountNo, amount) {

        // สร้าง Node ใหม่
        const newNode = new TransactionNode(
            txnId,
            accountNo,
            amount
        );

        // ถ้าคิวว่าง
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }

        // ถ้าคิวไม่ว่าง
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }


    // ========================================
    // 1.3 processTransaction()
    // ========================================

    processTransaction() {

        // ตรวจสอบว่าคิวว่างหรือไม่
        if (this.length === 0) {
            console.log("ไม่มีรายการในคิว");
            return;
        }

        // เก็บ Node ตัวแรกที่กำลังจะนำออก
        const processedNode = this.first;

        // เลื่อน first ไปยัง Node ถัดไป
        this.first = this.first.next;

        // ลดจำนวนสมาชิกใน Queue
        this.length--;

        // ถ้าคิวว่างหลังจากนำรายการออก
        if (this.length === 0) {
            this.last = null;
        }

        console.log(
            `ประมวลผล ${processedNode.txnId} | บัญชี ${processedNode.accountNo} | จำนวนเงิน ${processedNode.amount} บาท`
        );
    }


    // ========================================
    // 1.4 displaySummary()
    // ========================================

    displaySummary() {

        let current = this.first;
        let totalAmount = 0;

        // ถ้าคิวว่าง
        if (this.length === 0) {
            console.log("ไม่มีรายการในคิว");
            console.log("ยอดเงินคงเหลือรวม: 0 บาท");
            return;
        }

        // วนดูข้อมูลทุก Node
        while (current) {

            console.log(
                `${current.txnId} | บัญชี: ${current.accountNo} | จำนวนเงิน: ${current.amount} บาท`
            );

            // รวมยอดเงิน
            totalAmount += current.amount;

            // ไปยัง Node ถัดไป
            current = current.next;
        }

        console.log(`ยอดเงินคงเหลือรวม: ${totalAmount} บาท`);
    }
}


// ========================================
// ชุดข้อมูลทดสอบโจทย์ที่ 1
// ========================================

const bankQueue = new TransactionQueue();

// ทดลองใส่ข้อมูลเข้าคิว 3 รายการ
bankQueue.enqueueTransaction("TXN001", "123-4-56789-0", 500);
bankQueue.enqueueTransaction("TXN002", "111-2-33333-4", 1200);
bankQueue.enqueueTransaction("TXN003", "999-8-77777-6", 300);

console.log("--- รายการทั้งหมดในคิว ---");
bankQueue.displaySummary();

console.log("\n--- เริ่มประมวลผลคิวแรก ---");
bankQueue.processTransaction();

console.log("\n--- รายการคงเหลือในคิว ---");
bankQueue.displaySummary();