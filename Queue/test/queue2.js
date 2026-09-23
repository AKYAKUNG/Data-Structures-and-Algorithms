import { Node } from "./node.js";

class OrderNode {
    constructor(orderNo, customerName, menu) {
        this.orderNo = orderNo;
        this.customerName = customerName;
        this.menu = menu;
        this.next = null;
    }
}

export class OrderQueue {

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
    cancelOrder(orderNo) {
        if (this.length === 0) {
            console.log("ไม่มีออเดอร์ในคิว");
            return;
        }
        // ถ้าเป็นออเดอร์แรก
        if (this.first.orderNo === orderNo) {
            this.serveOrder();
            console.log(
                `❌ ยกเลิกออเดอร์ #${orderNo} เรียบร้อยแล้ว`
            );
            return;
        }
        let prev = this.first;
        let curr = this.first.next;

        while (curr) {
            if (curr.orderNo === orderNo) {
                prev.next = curr.next;
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

