import {
  getCurrentInstance,
  inject,
  markRaw,
  effectScope,
  ref,
  reactive,
  computed,
  toRefs,
} from "vue-demi";

const piniaSymbol = Symbol("pinia");

function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  const pinia = markRaw({
    install(app) {
      pinia._a = app;
      app.provide(piniaSymbol, pinia);
    },
    _s: new Map(),
    state,
  });
  return pinia;
}

function createOptionsStore(id, options, pinia) {
  const { state, getters, actions } = options;
  const initState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initState) pinia.state.value[id] = state();
    const localState = toRefs(pinia.state.value[id]);
    return Object.assign(
      localState,
      actions,
      Object.keys(getters).reduce((prev, name) => {
        prev[name] = markRaw(
          computed(() => {
            const store = pinia._s.get(id);
            return getters[name].call(store, store);
          })
        );
        return prev;
      }, {})
    );
  }
  store = reactive({
    _p: pinia,
    $id: id,
  });
  pinia._s.set(id, store);
  const setupStore = setup();
  for (const key in setupStore) {
    //TODO 处理 actions 和 getters
    const prop = setupStore[key];
  }
  Object.defineProperty(store, "_p", {
    enumerable: false,
  });
  Object.assign(store, setupStore);
  return store;
}

function defineStore(id, options) {
  function useStore() {
    const currentInstance = getCurrentInstance();
    const pinia = currentInstance && inject(piniaSymbol);
    if (!pinia._s.get(id)) {
      createOptionsStore(id, options, pinia);
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}

export { createPinia, defineStore };
