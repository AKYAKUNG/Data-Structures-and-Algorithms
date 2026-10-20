class EmployeeItem {
    constructor(empId, name, department) {
        this.empId = empId;
        this.name = name;
        this.department = department;
    }
}

class EmployeeArrayList {
    constructor() {
        this.list = [];
    }

    add(employee) {
        this.list.push(employee);
    }

    insertAt(index, employee) {
        if (index < 0 || index > this.list.length) {
            console.log("❌ Index ไม่ถูกต้อง");
            return;
        }

        this.list.splice(index, 0, employee);
    }

    removeAt(index) {
        if (index < 0 || index >= this.list.length) {
            console.log("❌ Index ไม่ถูกต้อง");
            return;
        }

        const removed = this.list.splice(index, 1)[0];

        console.log(
            `🗑️ ลบข้อมูล: [${removed.empId}] ${removed.name} เรียบร้อยแล้ว`
        );
    }

    searchById(empId) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].empId == empId) {
                return {
                    index: i,
                    employee: this.list[i]
                };
            }
        }

        return null;
    }

    displayAll() {
        for (let i = 0; i < this.list.length; i++) {
            const emp = this.list[i];

            console.log(
                `- Index [${i}] -> [${emp.empId}] ชื่อ: ${emp.name} | แผนก: ${emp.department}`
            );
        }
    }
}

class EmployeeDriver {
    static run() {
        console.log("=== เริ่มการทดสอบระบบจัดการพนักงานด้วย Array ===");

        const empList = new EmployeeArrayList();

        console.log("\n--- 1. เพิ่มข้อมูลพนักงานต่อท้าย (Add) ---");

        empList.add(new EmployeeItem("101", "สมชาย", "IT"));
        empList.add(new EmployeeItem("103", "กิตติ", "Finance"));

        console.log("\n--- 2. แทรกพนักงานที่ Index 1 (InsertAt) ---");

        empList.insertAt(
            1,
            new EmployeeItem("102", "วิภา", "HR")
        );

        empList.displayAll();

        console.log("\n--- 3. ค้นหาพนักงานรหัส 102 (Linear Search) ---");

        const result = empList.searchById("102");

        if (result !== null) {
            const emp = result.employee;

            console.log(
                `✅ พบข้อมูลที่ Index [${result.index}]: [${emp.empId}] ${emp.name} | แผนก: ${emp.department}`
            );
        } else {
            console.log("❌ ไม่พบข้อมูลพนักงาน");
        }

        console.log("\n--- 4. ลบข้อมูลพนักงานที่ Index 0 (RemoveAt) ---");

        empList.removeAt(0);

        console.log("\n--- รายชื่อคงเหลือใน Array ---");

        empList.displayAll();
    }
}

EmployeeDriver.run();
