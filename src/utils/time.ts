export const formatTimezoneOffset = (rawOffset: number, dstOffset: number) => {
  const totalOffset = rawOffset + dstOffset;
  const sign = totalOffset >= 0 ? '+' : '-';
  const absOffset = Math.abs(totalOffset);
  const hours = Math.floor(absOffset / 3600);
  const minutes = Math.floor((absOffset % 3600) / 60);
  const formattedOffset = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  return `GMT${formattedOffset}`;
};
