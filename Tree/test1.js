// ============================================================
// PART 1: EmployeeNode
// คลาสสำหรับเก็บข้อมูลพนักงานแต่ละคน
// ============================================================

class EmployeeNode {
    constructor(empId, name, department) {
        this.empId = empId;
        this.name = name;
        this.department = department;

        // ตัวชี้ไปยัง Node ทางซ้ายและขวา
        this.left = null;
        this.right = null;
    }
}


// ============================================================
// PART 2: EmployeeTree
// คลาสสำหรับจัดการ Binary Search Tree
// ============================================================

class EmployeeTree {
    constructor() {
        this.root = null;
    }

    // --------------------------------------------------------
    // 1. เพิ่มข้อมูลพนักงานลงใน BST
    // --------------------------------------------------------
    insertEmployee(empId, name, department) {

        const newNode = new EmployeeNode(
            empId,
            name,
            department
        );

        // ถ้าต้นไม้ว่าง ให้ Node ใหม่เป็น Root
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // เริ่มเปรียบเทียบจาก Root
        let current = this.root;

        while (true) {

            // empId น้อยกว่า → ไปทางซ้าย
            if (empId < current.empId) {

                // ถ้าด้านซ้ายว่าง ให้เพิ่มตรงนี้
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }

                // ถ้าไม่ว่าง ให้เลื่อนลงไปทางซ้าย
                current = current.left;

            }

            // empId มากกว่า → ไปทางขวา
            else if (empId > current.empId) {

                // ถ้าด้านขวาว่าง ให้เพิ่มตรงนี้
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }

                // ถ้าไม่ว่าง ให้เลื่อนลงไปทางขวา
                current = current.right;

            }

            // empId ซ้ำ
            else {
                console.log(`⚠️ รหัสพนักงาน ${empId} มีอยู่ในระบบแล้ว`);
                return;
            }
        }
    }


    // --------------------------------------------------------
    // 2. ค้นหาข้อมูลพนักงานด้วย empId
    // --------------------------------------------------------
    searchEmployee(empId) {

        let current = this.root;

        while (current !== null) {

            // พบข้อมูล
            if (empId === current.empId) {
                return current;
            }

            // ค่าที่ค้นหาน้อยกว่า → ไปซ้าย
            if (empId < current.empId) {
                current = current.left;
            }

            // ค่าที่ค้นหามากกว่า → ไปขวา
            else {
                current = current.right;
            }
        }

        // ค้นหาไม่พบ
        return null;
    }


    // --------------------------------------------------------
    // 3. แสดงข้อมูลแบบ In-Order Traversal
    // --------------------------------------------------------
    displayInOrder(node = this.root) {

        // ถ้าไม่มี Node ให้จบการทำงาน
        if (node === null) {
            return;
        }

        // 1. ไปซ้าย
        this.displayInOrder(node.left);

        // 2. แสดงข้อมูลของ Node ปัจจุบัน
        console.log(
            `- [${node.empId}] ชื่อ: ${node.name} | แผนก: ${node.department}`
        );

        // 3. ไปขวา
        this.displayInOrder(node.right);
    }
}


// ============================================================
// PART 3: EmployeeDriver
// คลาสสำหรับทดสอบการทำงาน
// ============================================================

class EmployeeDriver {

    static run() {

        console.log(
            "=== เริ่มการทดสอบระบบจัดเก็บพนักงานด้วย BST ==="
        );

        const empTree = new EmployeeTree();


        // ----------------------------------------------------
        // 1. เพิ่มข้อมูลพนักงาน
        // ----------------------------------------------------

        console.log("\n--- 1. เพิ่มข้อมูลพนักงานเข้าต้นไม้ ---");

        empTree.insertEmployee(
            105,
            "สมชาย",
            "IT"
        );

        empTree.insertEmployee(
            102,
            "วิภา",
            "HR"
        );

        empTree.insertEmployee(
            108,
            "กิตติ",
            "Finance"
        );

        empTree.insertEmployee(
            101,
            "อนันต์",
            "IT"
        );


        // ----------------------------------------------------
        // 2. แสดงข้อมูลเรียงตามรหัส
        // ----------------------------------------------------

        console.log(
            "\n--- 2. แสดงรายชื่อพนักงานเรียงตามรหัส (In-Order) ---"
        );

        empTree.displayInOrder();


        // ----------------------------------------------------
        // 3. ค้นหารหัส 102
        // ----------------------------------------------------

        console.log(
            "\n--- 3. ค้นหาพนักงานรหัส 102 ---"
        );

        const employee102 = empTree.searchEmployee(102);

        if (employee102 !== null) {

            console.log(
                `✅ พบข้อมูล: [${employee102.empId}] ` +
                `${employee102.name} | แผนก: ${employee102.department}`
            );

        } else {

            console.log("❌ ไม่พบข้อมูลพนักงานรหัส 102");
        }


        // ----------------------------------------------------
        // 4. ค้นหารหัส 999
        // ----------------------------------------------------

        console.log(
            "\n--- 4. ค้นหาพนักงานรหัส 999 (ไม่มีในระบบ) ---"
        );

        const employee999 = empTree.searchEmployee(999);

        if (employee999 !== null) {

            console.log(
                `✅ พบข้อมูล: [${employee999.empId}] ` +
                `${employee999.name} | แผนก: ${employee999.department}`
            );

        } else {

            console.log(
                "❌ ไม่พบข้อมูลพนักงานรหัส 999"
            );
        }
    }
}


// ============================================================
// เริ่มต้นโปรแกรม
// ============================================================

EmployeeDriver.run();