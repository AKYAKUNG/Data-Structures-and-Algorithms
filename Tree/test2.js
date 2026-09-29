// ============================================================
// PART 1: ProductNode
// ============================================================

class ProductNode {
    constructor(productId, productName, price, stock) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.stock = stock;

        this.left = null;
        this.right = null;
    }
}


// ============================================================
// PART 2: StockTree
// ============================================================

class StockTree {
    constructor() {
        this.root = null;
    }


    // --------------------------------------------------------
    // 1. เพิ่มสินค้าเข้าคลัง
    // --------------------------------------------------------

    addProduct(productId, productName, price, stock) {

        const newNode = new ProductNode(
            productId,
            productName,
            price,
            stock
        );

        // ถ้าต้นไม้ว่าง
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {

            // ถ้า productId น้อยกว่า
            // ให้ไปทางซ้าย
            if (productId < current.productId) {

                if (current.left === null) {
                    current.left = newNode;
                    return;
                }

                current = current.left;
            }

            // ถ้า productId มากกว่า
            // ให้ไปทางขวา
            else if (productId > current.productId) {

                if (current.right === null) {
                    current.right = newNode;
                    return;
                }

                current = current.right;
            }

            // ถ้า productId ซ้ำ
            else {
                console.log(
                    `⚠️ รหัสสินค้า ${productId} มีอยู่แล้ว`
                );
                return;
            }
        }
    }


    // --------------------------------------------------------
    // 2. คำนวณมูลค่าสินค้ารวมทั้งหมด
    // --------------------------------------------------------

    calculateTotalValue(node = this.root) {

        // ถ้าไม่มี Node
        if (node === null) {
            return 0;
        }

        // มูลค่าของสินค้าปัจจุบัน
        const currentValue =
            node.price * node.stock;

        // คำนวณฝั่งซ้าย
        const leftValue =
            this.calculateTotalValue(node.left);

        // คำนวณฝั่งขวา
        const rightValue =
            this.calculateTotalValue(node.right);

        // รวมทั้งหมด
        return currentValue + leftValue + rightValue;
    }


    // --------------------------------------------------------
    // 3. ค้นหารหัสสินค้าที่น้อยที่สุด
    // --------------------------------------------------------

    findMinProductId() {

        // ถ้าไม่มีสินค้า
        if (this.root === null) {
            return null;
        }

        let current = this.root;

        // เดินไปทางซ้ายจนสุด
        while (current.left !== null) {
            current = current.left;
        }

        return current;
    }
}


// ============================================================
// PART 3: StockDriver
// ============================================================

class StockDriver {

    static run() {

        console.log(
            "=== เริ่มการทดสอบระบบคลังสินค้า BST ==="
        );

        const stockTree = new StockTree();


        // ----------------------------------------------------
        // 1. เพิ่มรายการสินค้าเข้าคลัง
        // ----------------------------------------------------

        console.log(
            "\n--- 1. เพิ่มรายการสินค้าเข้าคลัง ---"
        );

        stockTree.addProduct(
            500,
            "คีย์บอร์ด",
            1000,
            50
        );

        stockTree.addProduct(
            200,
            "เมาส์ไร้สาย",
            500,
            50
        );

        stockTree.addProduct(
            700,
            "จอคอมพิวเตอร์",
            3000,
            30
        );


        // ----------------------------------------------------
        // 2. ค้นหารหัสสินค้าน้อยที่สุด
        // ----------------------------------------------------

        console.log(
            "\n--- 2. ค้นหารหัสสินค้าน้อยที่สุดในคลัง ---"
        );

        const minProduct =
            stockTree.findMinProductId();

        console.log(
            `📦 รหัสสินค้าน้อยที่สุด: ` +
            `#${minProduct.productId} ` +
            `(${minProduct.productName})`
        );


        // ----------------------------------------------------
        // 3. คำนวณมูลค่าสินค้ารวม
        // ----------------------------------------------------

        console.log(
            "\n--- 3. คำนวณมูลค่าสินค้ารวมทั้งคลัง ---"
        );

        const totalValue =
            stockTree.calculateTotalValue();

        console.log(
            `💰 มูลค่าสินค้าทั้งหมดในสต็อก: ` +
            `${totalValue} บาท`
        );
    }
}


// ============================================================
// เริ่มต้นโปรแกรม
// ============================================================

StockDriver.run();