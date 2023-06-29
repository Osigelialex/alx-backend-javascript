export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    queue.unshift(mathFunction());
  } catch (error) {
    queue.unshift(`Error: ${error.message}`);
  }
  return queue;
}
