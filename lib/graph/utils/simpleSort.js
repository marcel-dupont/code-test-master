
const simpleSort = ({ properties, sortKey = 'address', sortOrder = 'asc' }) => {
  // console.log(sortOrder);

  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  const map = properties.map((p, i) => ({ index: i, value: p[sortKey] }));
  const asc = sortOrder === 'asc';
  map.sort((a, b) => {
    const c = collator.compare(a.value, b.value);
    return asc ? c : -c;
  });

  return map.map(p => properties[p.index]);
};

export default simpleSort;
