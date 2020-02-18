const doLog = true;
const logComponents = false;
const logApp = true;
const logUtil = true;
export const logLoader = module => {
  if (doLog) {
    if (module.id) {
      if (
        (module.id.match(/\/components\//) && logComponents) ||
        (module.id.match(/\/app\//) && logApp) ||
        (module.id.match(/\/util\//) && logUtil)
      )
        console.log("loaded", module.id);
    } else {
      console.log("executed", module);
    }
  }
};
