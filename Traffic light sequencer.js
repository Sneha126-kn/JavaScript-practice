function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  }

  for (let cycle = 0; cycle < cycles; cycle++) {
    for (let i = 0; i < config.phases.length; i++) {
      const phase = config.phases[i];

      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
        continue;
      }

      console.log(`Switching to ${phase.color} for ${phase.duration} s`);
    }
  }
}


function generateTimeline(config, cycles) {
  const timeline = [];
  let elapsedTime = 0;

  for (let cycle = 0; cycle < cycles; cycle++) {
    for (let i = 0; i < config.phases.length; i++) {
      elapsedTime += config.phases[i].duration;
      timeline.push(elapsedTime);
    }
  }

  return timeline;
}
