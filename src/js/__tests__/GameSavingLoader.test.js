/* eslint-disable import/named */
import GameSavingLoader from '../GameSavingLoader';
import { saveData } from '../reader';
import GameSaving from '../gamesaving';

const hitman = new GameSaving(JSON.parse(saveData));

// Задача - "Promises"

test('Test 1', (done) => {
  GameSavingLoader.load().then((result) => {
    expect(result).toEqual(hitman);
  }).catch((err) => err);
  done();
});
