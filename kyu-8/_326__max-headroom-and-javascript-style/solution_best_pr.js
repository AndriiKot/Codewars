const getMax1 = () => ({ name: 'Max Headroom' });
const getMax2 = () => ({ name: 'Max Headroom' });

// or
{
  var max = {
    name: 'Max Headroom',
  };

  const getMax2 = () => max;
  const getMax1 = () => max;
}
