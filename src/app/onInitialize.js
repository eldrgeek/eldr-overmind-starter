import { logLoader } from "../util/logloader";
import design from "../design/designer";
logLoader(module);
export const onInitialize = async (
  { state, actions, effects },
  app,
  reinit
) => {
  logLoader("onInitialize");
  // console.log("dev", design, actions._dev);
  // if(!reinit)
  // const app1 = await app
  app.actions._dev.setDesignFromText(design);
  // if(reinit) app.actions._dev.setDesignFromText({state,actions,effects},design)
  // console.log('on initialize', state, actions, effects);
};
