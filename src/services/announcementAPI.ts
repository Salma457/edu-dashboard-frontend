import axios from "axios";

export const fetchAnnouncements = async () => {
  const res = await axios.get("http://localhost:5000/api/announcements");
  return res.data;
};
