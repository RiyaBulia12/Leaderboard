const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hRxMzll3VGcCmThlmus9/scores';

export const getScores = async () => {
  const response = await fetch(baseUrl);
  const json = await response.json();
  return json.result;
};

export const postScore = async (bodyData) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(bodyData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
