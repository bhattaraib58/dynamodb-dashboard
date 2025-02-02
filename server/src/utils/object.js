export function pick(object = {}, keys = []) {
  const result = {};
  const filteredKeys = Object.keys(object).filter((key) => keys.includes(key));

  filteredKeys.forEach((key) => {
    if (!Boolean(object[key])) return;

    result[key] = object[key];
  });

  return result;
}

export function isPartialMatchWith(object = {}, source = {}, keys = []) {
  let match = true;

  for (const key of keys) {
    match &&= object[key] === source[key];
  }

  return match;
}

export function chunk(array = [], size) {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}
