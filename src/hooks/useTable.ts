import { ref } from "vue";

export function useTable(apiUrl: string) {
  const state = ref<{
    total: number;
    query: Record<string, any>;
    list: string[];
  }>({
    total: 0,
    query: {
      page: 1,
      size: 10,
    },
    list: [],
  });

  function fetchList() {
    state.value.total = 100;
    state.value.list = [];
  }

  function resetQuery() {
    state.value.query = {
      page: 1,
      size: 10,
    };
  }

  return {
    state,
    fetchList,
    resetQuery,
  };
}
