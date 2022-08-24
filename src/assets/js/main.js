import '../css/main.css';
import { getScores, postScore } from './api.js';

const scoreTable = document.getElementById('scoreTable');
const name = document.getElementById('name');
const score = document.getElementById('score');
const submitBtn = document.getElementById('submitBtn');
const refreshBtn = document.getElementById('refreshBtn');
const successMsg = document.getElementById('success');

const createScoreBoard = (board) => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.setAttribute('class', 'data');
  td.innerHTML = `${board.user}: ${board.score}`;
  tr.appendChild(td);
  scoreTable.appendChild(tr);
};

const loadScore = async () => {
  const getRes = await getScores();
  getRes.forEach((result) => {
    createScoreBoard(result);
  });
};

const refresh = () => {
  scoreTable.innerHTML = '';
  loadScore();
};

const removeMessage = () => {
  successMsg.innerHTML = '';
};

const submitScore = () => {
  const postBody = {
    user: name.value,
    score: score.value,
  };
  postScore(postBody);
};

const submit = () => {
  if (Number.isNaN(Number(score.value))) {
    successMsg.innerHTML = 'Only digits allowed for score';
    successMsg.style.cssText = 'color:red;';
  } else if (name.value !== '' && score.value !== '') {
    submitScore();
    successMsg.innerHTML = 'Scores successfully added';
    successMsg.style.cssText = 'color:green;';
    name.value = '';
    score.value = '';
    name.focus();
  } else {
    successMsg.innerHTML = 'Empty fields not allowed';
    successMsg.style.cssText = 'color:red;';
  }
  successMsg.classList.remove('hidden');
};

loadScore();
submitBtn.addEventListener('click', submit);
refreshBtn.addEventListener('click', refresh);
name.addEventListener('keydown', removeMessage);
score.addEventListener('keydown', removeMessage);
