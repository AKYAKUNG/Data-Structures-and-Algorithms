class ProductItem {
    constructor(productId, productName, price, stock) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.stock = stock;
    }
}

class StockArrayList {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    calculateTotalValue() {
        let total = 0;

        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.products[i].stock;
        }

        return total;
    }

    findMinPriceProduct() {
        if (this.products.length === 0) {
            return null;
        }

        let minProduct = this.products[0];

        for (let i = 1; i < this.products.length; i++) {
            if (this.products[i].price < minProduct.price) {
                minProduct = this.products[i];
            }
        }

        return minProduct;
    }

    swapProducts(index1, index2) {
        if (
            index1 < 0 ||
            index1 >= this.products.length ||
            index2 < 0 ||
            index2 >= this.products.length
        ) {
            console.log("❌ Index ไม่ถูกต้อง");
            return;
        }

        const temp = this.products[index1];

        this.products[index1] = this.products[index2];
        this.products[index2] = temp;
    }

    displayAll() {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];

            console.log(
                `- [${i}] #${product.productId} ${product.productName} | ราคา: ${product.price} บาท | คงเหลือ: ${product.stock}`
            );
        }
    }
}

class StockDriver {
    static run() {
        console.log("=== เริ่มการทดสอบระบบคลังสินค้าด้วย Array ===");

        const stock = new StockArrayList();

        console.log("\n--- 1. เพิ่มสินค้าเข้าคลัง ---");

        stock.addProduct(
            new ProductItem("P01", "โน้ตบุ๊ก", 25000, 5)
        );

        stock.addProduct(
            new ProductItem("P02", "เมาส์ไร้สาย", 550, 20)
        );

        stock.addProduct(
            new ProductItem("P03", "คีย์บอร์ดกลไก", 2500, 10)
        );

        stock.displayAll();

        console.log("\n--- 2. สินค้าราคาต่ำสุด ---");

        const minProduct = stock.findMinPriceProduct();

        if (minProduct !== null) {
            console.log(
                `📦 สินค้าราคาต่ำสุด: #${minProduct.productId} (${minProduct.productName}) ราคา ${minProduct.price} บาท`
            );
        } else {
            console.log("❌ ไม่มีสินค้าในคลัง");
        }

        console.log("\n--- 3. คำนวณมูลค่าสินค้าคงคลังรวม ---");

        console.log(
            `💰 มูลค่าสินค้าทั้งหมดในสต็อก: ${stock.calculateTotalValue()} บาท`
        );

        console.log("\n--- 4. ทดสอบสลับตำแหน่ง Index [0] กับ Index [1] ---");

        stock.swapProducts(0, 1);

        stock.displayAll();
    }
}

StockDriver.run();
