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

// โครงสร้าง OrderNode
class OrderNode {
    constructor(orderNo, customerName, menu) {
        this.orderNo = orderNo;
        this.customerName = customerName;
        this.menu = menu;
        this.next = null;
    }
}

// โครงสร้าง OrderQueue
class OrderQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    addOrder(orderNo, customerName, menu) {
        const newNode = new OrderNode(
            orderNo,
            customerName,
            menu
        );

        const waitingQueue = this.length;
        const waitingTime = waitingQueue * 3;

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        console.log(
            `☕ รับออเดอร์ #${orderNo} (คุณ${customerName} - ${menu}) | คิวก่อนหน้า: ${waitingQueue} | เวลารอ: ${waitingTime} นาที`
        );
    }

    serveOrder() {
        if (this.length === 0) {
            console.log("ไม่มีออเดอร์ในคิว");
            return;
        }

        const servedOrder = this.first;

        this.first = this.first.next;
        this.length--;

        if (this.length === 0) {
            this.last = null;
        }

        console.log(
            `🔔 เสิร์ฟออเดอร์ #${servedOrder.orderNo} เรียบร้อยแล้ว`
        );
    }

    peekNextOrder() {
        if (this.length === 0) {
            console.log("ไม่มีออเดอร์ในคิว");
            return;
        }

        const nextOrder = this.first;

        console.log(
            `👀 ออเดอร์ถัดไป: #${nextOrder.orderNo} (คุณ${nextOrder.customerName} - ${nextOrder.menu})`
        );
    }

    // Bonus: ยกเลิกออเดอร์
    cancelOrder(orderNo) {
        if (this.length === 0) {
            console.log("ไม่มีออเดอร์ในคิว");
            return;
        }

        // กรณีเป็นออเดอร์แรก
        if (this.first.orderNo === orderNo) {
            this.serveOrder();

            console.log(
                `❌ ยกเลิกออเดอร์ #${orderNo} เรียบร้อยแล้ว`
            );

            return;
        }

        // ตัวชี้ 2 ตัว
        let prev = this.first;
        let curr = this.first.next;

        while (curr !== null) {

            if (curr.orderNo === orderNo) {

                // ข้าม Node ที่ต้องการลบ
                prev.next = curr.next;

                // ถ้าเป็น Node สุดท้าย
                if (curr === this.last) {
                    this.last = prev;
                }

                this.length--;

                console.log(
                    `❌ ยกเลิกออเดอร์ #${orderNo} เรียบร้อยแล้ว`
                );

                return;
            }

            prev = curr;
            curr = curr.next;
        }

        console.log(`ไม่พบออเดอร์ #${orderNo}`);
    }
}


// ========================================
// ทดสอบระบบ
// ========================================

const cafeQueue = new OrderQueue();

cafeQueue.addOrder(101, "สมชาย", "อเมริกาโน่ร้อน");
cafeQueue.addOrder(102, "วิภา", "ชาไทยเย็น");
cafeQueue.addOrder(103, "กิตติ", "มัทฉะลาเต้");

console.log("\n--- ก่อนยกเลิก ---");
cafeQueue.peekNextOrder();

console.log("\n--- ยกเลิกออเดอร์ #102 ---");
cafeQueue.cancelOrder(102);

console.log("\n--- หลังยกเลิก ---");
cafeQueue.peekNextOrder();