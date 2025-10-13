const findStrangeValue = () => NaN;

{
  function findStrangeValue() {
    return +'YOLO';
  }
}

{
  function findStrangeValue() {
    return +{};
  }
}

{
  function findStrangeValue() {
    return 0 / 0;
  }
}

{
  function findStrangeValue() {
    return parseInt('');
  }
}
