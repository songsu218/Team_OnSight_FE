export const getInitials = (str) => {
  const INITIALS = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  return str
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0) - 44032;
      if (code >= 0 && code <= 11171) {
        return INITIALS[Math.floor(code / 588)];
      }
      return char;
    })
    .join('');
};

export const filterCenters = (centers, searchTerm, selectedDistrict) => {
  const termInitials = getInitials(searchTerm);
  return centers.filter((center) => {
    const centerInitials = getInitials(center.center);
    return (
      (center.center.includes(searchTerm) ||
        centerInitials.includes(termInitials)) &&
      (selectedDistrict === '전체' || center.gu === selectedDistrict)
    );
  });
};
