import { defineStore } from "pinia";

import { useTable } from "@/hooks/useTable";

const table = useTable("/person");

/**
 * ?? How to compose with reusable composition api state and actions
 */
export const useHomeStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: "useHomeStore",
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: "Eduardo",
    table: table.state,
  }),
  // optional getters
  getters: {
    doubleCount() {
      return this.counter * 2;
    },
    // use getters in other getters
    doubleCountPlusOne() {
      return this.doubleCount * 2 + 1;
    },
    table() {
      return table;
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
  },
});
