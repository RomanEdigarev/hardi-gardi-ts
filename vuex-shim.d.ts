import { Store } from "vuex";

declare module "@vue/runtime-core" {
  export type State = {
    loading: boolean;
  };
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
