import { atom } from "recoil";
import { selector } from 'recoil';

export const countAtom = atom({
  key: "countAtom", // Ensure this key is unique across the app
  default: 0
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({get}) => {
    const count = get(countAtom);
    return count%2;
  }
})


// A webhook is a way for one system to send real-time data to another system when a specific event occurs. 
// It works as a user-defined HTTP callback, meaning when an event happens in one system, it triggers an HTTP 
// request to a specified URL in another system. Webhooks are commonly used for automation, real-time notifications, 
// and integrating different applications.

// 🔹 How Webhooks Work:
//    -Event Occurs – A specific action (e.g., user signup, payment success) happens in a system.
//    -Webhook Triggers – The system sends an HTTP request (usually POST) to a predefined webhook URL.
//    -Data is Sent – The request body contains relevant event data, usually in JSON or XML format.
//    -Webhook Receiver Processes Data – The receiving system processes the data and takes action accordingly.
// 🔹 Example Use Cases:
//    -Payment Processing – Stripe or PayPal sends a webhook when a payment is completed.
//    -CI/CD Deployment – GitHub triggers a webhook to notify a deployment service when new code is pushed.
//    -Messaging Apps – Slack or Discord webhooks send real-time messages to a channel.

// 🔹 Webhook Example (Express.js)
// If you’re using Node.js with Express, you can set up a webhook like this:

// const express = require("express");
// const app = express();
// app.use(express.json());
// app.post("/webhook", (req, res) => {
//     console.log("Webhook received:", req.body);
//     res.status(200).send("Webhook received!");
// });
// app.listen(3000, () => console.log("Server running on port 3000"));