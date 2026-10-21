// PART 1: คลาส Data Model สำหรับเก็บข้อมูลแต่ละ Element
class ArrayElement {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
}
// PART 2: คลาส CustomArrayList จัดการแถวลำดับแบบครบทุกเมธอด
class CustomArrayList {
    constructor() {
        // 1. ขั้นตอนเริ่มต้น: สร้างช่องเก็บ Array ว่าง
        this.data = [];
    }
    // 1. push: เพิ่มสมาชิกใหม่ลงท้าย Array
    push(element) {
        this.data.push(element);
        return this.data.length;
    }

    // 2. unshift: เพิ่มสมาชิกใหม่ไว้หน้าสุดของ Array
    unshift(element) {
        this.data.unshift(element);
        return this.data.length;
    }

    // 3. insertAt: แทรกสมาชิก ณ ตำแหน่ง Index ที่กำหนด
    insertAt(index, element) {
        if (index < 0 || index > this.data.length) {
            console.log(`❌ Index [${index}] ออกนอกขอบเขต`);
            return false;
        }
        this.data.splice(index, 0, element);
        return true;
    }

    // 4. pop: ดึงและลบสมาชิกตัวท้ายสุดออก
    pop() {
        if (this.isEmpty()) return null;
        return this.data.pop();
    }

         // 5. shift: ดึงและลบสมาชิกตัวหน้าสุดออก
    shift() {
        if (this.isEmpty()) return null;
        return this.data.shift();
    }

          // 6. removeAt: ลบสมาชิก ณ ตำแหน่ง Index ที่กำหนด
    removeAt(index) {
        if (index < 0 || index >= this.data.length) {
            console.log(`❌ Index [${index}] ออกนอกขอบเขต`);
            return null;
        }
        return this.data.splice(index, 1)[0];
    }

           // 7. updateAt: แก้ไขข้อมูล ณ Index ที่ระบุ
    updateAt(index, newElement) {
        if (index < 0 || index >= this.data.length) {
            console.log(`❌ Index [${index}] ออกนอกขอบเขต`);
            return false;
        }
        this.data[index] = newElement;
        return true;
    }

        // 8. swap: สลับตำแหน่งสมาชิกระหว่าง 2 Index
    swap(index1, index2) {
        if (index1 < 0 || index1 >= this.data.length || 
            index2 < 0 || index2 >= this.data.length) {
            console.log("❌ Index ถูกต้อง ไม่สามารถสลับค่าได้");
            return false;
        }
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
        return true;
    }

    // 9. getAt: อ่านค่า ณ Index ที่ระบุ
    getAt(index) {
        if (index < 0 || index >= this.data.length) return null;
        return this.data[index];
    }

        // 10. searchById: ค้นหาข้อมูลตาม ID (Linear Search)
    searchById(id) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                return { element: this.data[i], index: i };
            }
        }
        return null;
    }

        // 11. findMin: หาข้อมูลที่มี value ต่ำที่สุด
    findMin() {
        if (this.isEmpty()) return null;
        let minEl = this.data[0];
        for (let i = 1; i < this.data.length; i++) {
            if (this.data[i].value < minEl.value) {
                minEl = this.data[i];
            }
        }
        return minEl;
    }

    // 12. findMax: หาข้อมูลที่มี value สูงที่สุด
    findMax() {
        if (this.isEmpty()) return null;
        let maxEl = this.data[0];
        for (let i = 1; i < this.data.length; i++) {
            if (this.data[i].value > maxEl.value) {
                maxEl = this.data[i];
            }
        }
        return maxEl;
    }

          // 13. size: ส่งคืนจำนวนสมาชิกทั้งหมด
    size() {
        return this.data.length;
    }

         // 14. isEmpty: เช็คว่า Array ว่างหรือไม่
    isEmpty() {
        return this.data.length === 0;
    }

    // 15. clear: ล้างข้อมูลทั้งหมดใน Array
    clear() {
        this.data = [];
        console.log("🧹 ล้างข้อมูลทั้งหมดใน Array เรียบร้อยแล้ว");
    }

    // 16. display: แสดงข้อมูลทั้งหมดใน Array พร้อมแสดง Index
    display() {
        console.log(`\n=== ข้อมูลใน Array (ขนาด: ${this.size()}) ===`);
        if (this.isEmpty()) {
            console.log("( Array ว่างเปล่า )");
        } else {
            this.data.forEach((item, index) => {
                console.log(`- Index [${index}] -> ID: ${item.id} | ชื่อ: ${item.name} | ค่า: ${item.value}`);
            });
        }
        console.log("==========================================");
    }
}
   class ArrayDriver {
    static run() {
        console.log("=== เริ่มต้นการใช้งาน CustomArrayList ===");
        const list = new CustomArrayList();

        // 1. เพิ่มข้อมูลต่อท้าย (Push)
        console.log("\n--- 1. ทดสอบ push() ---");
        list.push(new ArrayElement("E01", "สมชาย", 1500));
        list.push(new ArrayElement("E03", "กิตติ", 2500));
        list.display();
    }
}
// เรียกสั่งรันโปรแกรม 
ArrayDriver.run();
