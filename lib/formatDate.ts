const formatDate = (postDate) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepember",
    "October",
    "November",
    "December",
  ];
  const d = new Date(postDate);

  const date = d.getDate();
  const monthIndex = d.getMonth();
  const year = d.getFullYear();

  const dateFormated = `${months[monthIndex]} ${date}, ${year}`;
  return dateFormated;
};

export default formatDate;
