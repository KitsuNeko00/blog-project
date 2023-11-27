interface IInputValues {
  nickName?: string;
  email: string;
  password: string;
}

async function authApi(
  userData: IInputValues,
  apiUrl: string
): Promise<{ response: Response; data: string }> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.text();
  return { response, data };
}

export default authApi;
