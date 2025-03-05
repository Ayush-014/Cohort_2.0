import PriceCart from "../../components/PriceCart";

export default {
  component: PriceCart,
};

export const SmallAmount = {
  args: {
    title: "Upcoming Payout",
    amt: "213.00",
    order: "12",
    date: "Yesterday",
    time: "8:10 PM",
    primary: true,
  },
};

export const BigAmount = {
  args: {
    title: "Next Payout",
    amt: "2,312.23",
    order: "23",
    date: "Today",
    time: "4:00 PM",
    primary: true,
  },
};