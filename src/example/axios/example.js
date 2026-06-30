async function exchangeKakaoToken(accessToken) {
  const response = await fetch("https://api.fingoo.com/api/auth/kakao", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken }),
  });

  if (!response.ok) {
    throw new Error({response.status});
  }

  const data = await response.json();
  return data;
}

const { data } = await axios.post(url, body, {
  header: {
    'Authorization': `Bearer ${token}`
  }
})

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
  header: {
    'Content-Type': 'application/json',
  }
})