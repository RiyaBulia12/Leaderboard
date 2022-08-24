const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/90yo8SECzswGWAW8W1Yn/scores';

export const getScores = async () => {
  const response = await fetch(baseUrl).then((response) => response.json());
  return response.result;
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
