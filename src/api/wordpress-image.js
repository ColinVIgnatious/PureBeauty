// pages/api/wordpress-image.js

import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;
  const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5hbWUiOiJ3cGN1c3RvbWVyIiwiaWF0IjoxNzExMDQxMjg1LCJleHAiOjE4Njg3MjEyODV9.J2bF8FQ_CwcYFq4vQnzcFBRhYugTFYZLkquw91iQ4QE";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      responseType: 'arraybuffer', // Set responseType to arraybuffer to handle binary data
    });

    res.setHeader('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status || 500).send(error.message);
  }
}
