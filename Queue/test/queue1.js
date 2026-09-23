import { Node } from "./node.js";

class TransactionNode {
    constructor(txnId, accountNo, amount) {
        this.txnId = txnId;
        this.accountNo = accountNo;
        this.amount = amount;
        this.next = null;
    }
}

export class TransactionQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueueTransaction(txnId, accountNo, amount) {
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