const formatDate = (postDate) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const d = new Date(postDate);

  const date = d.getDate();
  const monthIndex = d.getMonth();
  const year = d.getFullYear();

  const dateFormated = `${date} ${months[monthIndex]} ${year}`;
  return dateFormated;
};

export default formatDate;
