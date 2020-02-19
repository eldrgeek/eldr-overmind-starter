import { logLoader } from "../util/logloader";
logLoader(module);
export const onInitialize = ({ state, actions, effects }, instance) => {
  logLoader("onInitialize");

  // console.log('on initialize', state, actions, effects);
};
