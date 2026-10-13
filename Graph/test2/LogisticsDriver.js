
import { LogisticsGraph } from "./LogisticsGraph.js";

export class LogisticsDriver {
    static run() {
        console.log(
            "=== เริ่มการทดสอบระบบขนส่งสินค้าด้วย Weighted Graph ==="
        );

        const logistics = new LogisticsGraph();

        console.log(
            "\n--- 1. เพิ่มเมืองและเส้นทางเชื่อมต่อพร้อมระยะทาง ---"
        );

        logistics.addCity("BKK", "กรุงเทพ");
        logistics.addCity("NAK", "โคราช");
        logistics.addCity("CKM", "เชียงใหม่");

        logistics.addRoute("BKK", "NAK", 250);
        logistics.addRoute("NAK", "CKM", 600);

        console.log(
            "\n--- 2. ตรวจสอบเส้นทางขนส่งจาก BKK ถึง CKM (DFS) ---"
        );

        const hasPath = logistics.dfsHasPath("BKK", "CKM");

        if (hasPath) {
            console.log(
                "🛣️ พบเส้นทางเชื่อมต่อระหว่าง BKK และ CKM"
            );
        } else {
            console.log(
                "❌ ไม่พบเส้นทางเชื่อมต่อระหว่าง BKK และ CKM"
            );
        }

        console.log(
            "\n--- 3. คำนวณระยะทางรวมของโครงข่ายถนนทั้งหมด ---"
        );

        const totalDistance =
            logistics.calculateTotalNetworkDistance();

        console.log(
            `📍 ระยะทางรวมในระบบขนส่งทั้งหมด: ${totalDistance} กิโลเมตร`
        );
    }
}

LogisticsDriver.run();
