import Cookies from "js-cookie";

const API_URL = "https://payout.myzyro.com/api/ZyroBanking/UserLogin";

export const login = async (credentials) => {
//   const response = await axios.post(`${API_URL}/login`, credentials);
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    const errorText = await response.text(); // Capture response text for error logging
    throw new Error(`Network response was not ok: ${errorText}`);
  }
  const result = await response.json();
  Cookies.set("name", result.data.name);
  Cookies.set("mobile", result.data.mobile);
  Cookies.set("email", result.data.emailId);
  Cookies.set("isActive", result.data.isActive);
  Cookies.set("walletId", result.data.walletId);
  Cookies.set("aesKey", result.data.aesKey);
  Cookies.set("token", result.data.token);
  console.log("Success:", result);
  return response.data;
};   



