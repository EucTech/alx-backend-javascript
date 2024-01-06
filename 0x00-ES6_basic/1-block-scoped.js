export default function taskBlock(trueOrFalse) {
  const mytask = true;
  const mytask2 = false;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    return [task, task2];
  }

  return [mytask, mytask2];
}
