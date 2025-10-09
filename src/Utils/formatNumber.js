function formatNumber(num, digits = 1) {
  const suffixes = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
  ];

  const selectedSuffix = suffixes
    .slice()
    .reverse()
    .find((suffix) => num >= suffix.value);

  if (selectedSuffix) {
    const formattedNum = (num / selectedSuffix.value).toFixed(digits);

    return (
      (formattedNum.endsWith(".0") ? formattedNum.slice(0, -2) : formattedNum) +
      selectedSuffix.symbol
    );
  }

  return num.toString();
}

export default formatNumber;
