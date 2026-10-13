
import { Node } from "./Node.js";

export class SocialGraph {
    constructor() {
        this.users = new Map();
    }

    // 1. เพิ่มผู้ใช้งาน
    addUser(username, fullName) {
        if (this.users.has(username)) {
            return false;
        }

        const user = new Node(username, fullName);
        this.users.set(username, user);

        return true;
    }

    // 2. เพิ่มความสัมพันธ์เพื่อนแบบสองทาง
    addFriendship(username1, username2) {
        const user1 = this.users.get(username1);
        const user2 = this.users.get(username2);

        if (!user1 || !user2 || username1 === username2) {
            return false;
        }

        if (user1.friends.includes(user2)) {
            return false;
        }

        user1.friends.push(user2);
        user2.friends.push(user1);

        return true;
    }

    // 3. BFS สำรวจเครือข่ายเพื่อน
    bfsExplore(startUsername) {
        const startUser = this.users.get(startUsername);

        if (!startUser) {
            console.log("ไม่พบผู้ใช้งานที่ระบุ");
            return [];
        }

        const queue = [startUser];
        const visited = new Set([startUsername]);
        const result = [];

        while (queue.length > 0) {
            const current = queue.shift();

            result.push(current);

            for (const friend of current.friends) {
                if (!visited.has(friend.username)) {
                    visited.add(friend.username);
                    queue.push(friend);
                }
            }
        }

        console.log("🔍 ลำดับการสำรวจเพื่อน (BFS):");

        result.forEach((user, index) => {
            console.log(
                `- [${index + 1}] @${user.username} (${user.fullName})`
            );
        });

        console.log(
            `✅ สำรวจเครือข่ายครอบคลุม ${result.length} คนสำเร็จ`
        );

        return result;
    }
}
