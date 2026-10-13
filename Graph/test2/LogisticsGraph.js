
import { Node } from "./Node.js";

export class LogisticsGraph {
    constructor() {
        this.cities = new Map();
    }

    // 1. เพิ่มเมือง
    addCity(cityCode, cityName) {
        if (this.cities.has(cityCode)) {
            return false;
        }

        const city = new Node(cityCode, cityName);
        this.cities.set(cityCode, city);

        return true;
    }

    // 2. เพิ่มเส้นทางแบบ Weighted Undirected Graph
    addRoute(cityCode1, cityCode2, distance) {
        const city1 = this.cities.get(cityCode1);
        const city2 = this.cities.get(cityCode2);

        if (
            !city1 ||
            !city2 ||
            cityCode1 === cityCode2 ||
            !Number.isFinite(distance) ||
            distance < 0
        ) {
            return false;
        }

        const exists = city1.routes.some(
            route => route.targetCity === cityCode2
        );

        if (exists) {
            return false;
        }

        city1.routes.push({
            targetCity: cityCode2,
            distance: distance
        });

        city2.routes.push({
            targetCity: cityCode1,
            distance: distance
        });

        return true;
    }

    // 3. DFS ตรวจสอบว่ามีเส้นทางไปถึงเมืองเป้าหมายหรือไม่
    dfsHasPath(startCode, targetCode, visited = new Set()) {
        const startCity = this.cities.get(startCode);
        const targetCity = this.cities.get(targetCode);

        if (!startCity || !targetCity) {
            return false;
        }

        if (startCode === targetCode) {
            return true;
        }

        visited.add(startCode);

        for (const route of startCity.routes) {
            if (!visited.has(route.targetCity)) {
                if (
                    this.dfsHasPath(
                        route.targetCity,
                        targetCode,
                        visited
                    )
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    // 4. คำนวณระยะทางรวมของทุกเส้นทาง
    calculateTotalNetworkDistance() {
        let totalDistance = 0;

        for (const city of this.cities.values()) {
            for (const route of city.routes) {
                totalDistance += route.distance;
            }
        }

        // กราฟเป็นแบบสองทาง จึงต้องหาร 2
        return totalDistance / 2;
    }
}
