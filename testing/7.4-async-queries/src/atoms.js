import axios from 'axios'
import { atom, selector } from "recoil";

// Atom should have a synchronous default value
export const notifications = atom({
    key: "networkAtom",
    default: {}  // Start with an empty object
});

// Async selector to fetch notifications
export const notificationsSelector = selector({
    key: "networkAtomSelector",
    get: async () => {
        try {
            await new Promise(r => setTimeout(r, 5000)) //sleeps for 5s
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        } catch (error) {
            console.error("Error fetching notifications:", error);
            return { networks: 5, jobs: 12, messaging: 10, notifications: 144 }; // Fallback values
        }
    },
});

// Selector to calculate total notifications
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return (allNotifications.networks || 0) + 
               (allNotifications.jobs || 0) + 
               (allNotifications.notifications || 0) + 
               (allNotifications.messaging || 0);
    }
});
