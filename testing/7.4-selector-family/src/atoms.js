import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosSelectorFamily = selectorFamily({
  key: "todoSelectorFamily",
  get: (id) => async () => {
    // try{
    //   const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
    //   return res.data.todo;
    // } catch (error) {
      console.error("Error fetching notifications:", error);
      return {
        id: 1,
        title: "Go to Gym",
        description: "Hit the gym from 7-9"
    }
    // }
  },

});

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: {
    id: 1,
    title: "Go to Gym",
    description: "Hit the gym from 7-9"
}, // Initially set to null
});
