import { fetch } from 'node-fetch';

async function getRandomTsCode() {
  const res = await fetch('https://api.github.com/repos/project-classroom/challenge/contents/main.ts');
  const data = await res.json();
  return data.content;
}
