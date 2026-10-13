
import { SocialGraph } from "./SocialGraph.js";

export class SocialDriver {
    static run() {
        console.log(
            "=== เริ่มการทดสอบระบบโซเชียลเน็ตเวิร์กด้วย Graph ==="
        );

        const social = new SocialGraph();

        console.log(
            "\n--- 1. เพิ่มผู้ใช้งานและสร้างความสัมพันธ์เพื่อน ---"
        );

        social.addUser("aom", "ออม");
        social.addUser("bank", "แบงค์");
        social.addUser("chat", "ชาติ");
        social.addUser("dao", "ดาว");

        social.addFriendship("aom", "bank");
        social.addFriendship("aom", "chat");
        social.addFriendship("bank", "dao");

        console.log(
            "\n--- 2. ท่องเครือข่ายเพื่อนจาก 'aom' ด้วย BFS ---"
        );

        social.bfsExplore("aom");
    }
}

SocialDriver.run();
