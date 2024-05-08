// const runtimeMultiplier = 1.0;

/** @param {NS} ns */
export async function main(ns) {
  let target = ns.args[0];
  let repeat = ns.args[1];
  let batch_land = ns.args[2];
  // let runtime = runtimeMultiplier * ns.getHackTime(target);
  
  do {
    if (batch_land) {
      // let currentTime = performance.now();
      // await ns.sleep((batch_land - currentTime) - runtime);
      await ns.sleep(batch_land);
    }
    await ns.hack(target);
  } while (repeat)

}