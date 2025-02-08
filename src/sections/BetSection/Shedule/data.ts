function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function createArrayWithRange(countObjects, turnoverMin, turnoverMax, percentMin, percentMax) {
  const array: any = [];
  for (let i = 0; i < countObjects; i++) {
    // array.push({
    //   turnover: Math.floor(getRandomValue(turnoverMin, turnoverMax)), // Случайное целое в диапазоне
    //   percent: parseFloat(getRandomValue(percentMin, percentMax).toFixed(2)), // Случайное число с 2 знаками после запятой
    // });

    const percent = parseFloat(getRandomValue(percentMin, percentMax).toFixed(2));
    const turnover = Math.floor(
      turnoverMax -
        ((percent - percentMin) / (percentMax - percentMin)) * (turnoverMax - turnoverMin),
    );

    array.push({ turnover, percent });
  }

  // Дополнительно сортируем массив на случай разрывов
  array.sort((a, b) => b.percent - a.percent);

  return array;
}

export const Exchanger = {
  option1: {
    withUrl: createArrayWithRange(12, 0, 1000000, 5.2, 6.3),
    withoutUrl: createArrayWithRange(12, 0, 1000000, 5.3, 6.5),
  },
  option2: {
    withUrl: createArrayWithRange(10, 1000000, 10000000, 5.2, 6),
    withoutUrl: createArrayWithRange(12, 1000000, 10000000, 5.2, 6.3),
  },
  option3: {
    withUrl: createArrayWithRange(9, 10000000, 100000000, 5, 5.9),
    withoutUrl: createArrayWithRange(12, 10000000, 100000000, 5.1, 6),
  },
  option4: {
    withUrl: createArrayWithRange(12, 100000000, 500000000, 5.2, 6.3),
    withoutUrl: createArrayWithRange(12, 100000000, 500000000, 5, 5.9),
  },
};

export const Crypto = {
  option1: {
    withUrl: createArrayWithRange(12, 0, 1000000, 5.2, 6.3),
    withoutUrl: createArrayWithRange(12, 0, 1000000, 5.3, 6.5),
  },
  option2: {
    withUrl: createArrayWithRange(10, 1000000, 10000000, 5.1, 6),
    withoutUrl: createArrayWithRange(12, 1000000, 10000000, 5.2, 6.3),
  },
  option3: {
    withUrl: createArrayWithRange(9, 10000000, 100000000, 5, 5.9),
    withoutUrl: createArrayWithRange(12, 10000000, 100000000, 5.1, 6),
  },
  option4: {
    withUrl: createArrayWithRange(12, 100000000, 500000000, 4.9, 6),
    withoutUrl: createArrayWithRange(12, 100000000, 500000000, 5, 5.9),
  },
};

export const Wallet = {
  option1: {
    withUrl: createArrayWithRange(12, 0, 1000000, 6.6, 8.6),
    withoutUrl: createArrayWithRange(12, 0, 1000000, 6.6, 8.4),
  },
  option2: {
    withUrl: createArrayWithRange(10, 1000000, 10000000, 6.5, 8.3),
    withoutUrl: createArrayWithRange(12, 1000000, 10000000, 6.5, 8.3),
  },
  option3: {
    withUrl: createArrayWithRange(9, 10000000, 100000000, 6.1, 7),
    withoutUrl: createArrayWithRange(12, 10000000, 100000000, 6.3, 8.3),
  },
  option4: {
    withUrl: createArrayWithRange(12, 100000000, 500000000, 5.9, 7),
    withoutUrl: createArrayWithRange(12, 100000000, 500000000, 6.1, 7),
  },
};

export const Ecommerce = {
  option1: {
    withUrl: createArrayWithRange(12, 0, 100000, 6.6, 8.6),
    withoutUrl: createArrayWithRange(12, 0, 100000, 6.6, 8.4),
  },
  option2: {
    withUrl: createArrayWithRange(10, 100000, 500000, 6.5, 8.3),
    withoutUrl: createArrayWithRange(12, 100000, 500000, 6.5, 8.3),
  },
  option3: {
    withUrl: createArrayWithRange(9, 500000, 1000000, 6, 8.2),
    withoutUrl: createArrayWithRange(12, 500000, 1000000, 6.3, 8.3),
  },
  option4: {
    withUrl: createArrayWithRange(12, 1000000, 5000000, 5.9, 8),
    withoutUrl: createArrayWithRange(12, 1000000, 5000000, 6, 8.2),
  },
  option5: {
    withUrl: createArrayWithRange(8, 5000000, 10000000, 5.8, 8),
    withoutUrl: createArrayWithRange(12, 5000000, 10000000, 5.8, 7.8),
  },
  option6: {
    withUrl: createArrayWithRange(10, 10000000, 50000000, 5.7, 7.8),
    withoutUrl: createArrayWithRange(12, 10000000, 50000000, 5.8, 8),
  },
};
