// Ideal input
// [1.5, "+", 20, "-", 5, "x", 25, "%", "/", -2, "-", 1, "+", 2, "^", 2, "x", 3, "^", 2, "+", 50, "%"]

/* Strategy 2: Evaluate by segments */

// Function expects array of inputs to start and end with a string representing a number.
function calculate(userInputs) {
  const dummyData = [1, "+", 2, "^", 2, "X", 3, "^", 2, "+", 50, "%"];
  // Create variables
  // const originalEquation = [...userInputs];
  const originalEquation = [...dummyData];
  const exponentSegmentedEquation = [];
  const segments = [];
  let segment = [];

  // Build up segments and provide reference in copied equation.
  // Exponents
  for (let i = 0; i < originalEquation.length; i++) {
    const current = originalEquation[i];
    const prev = originalEquation[i - 1];
    const next = originalEquation[i + 1];
    const afterNext = originalEquation[i + 2];
    const prevMap = {
      current: prev,
      prev: originalEquation[i - 2],
      next: current,
      afterNext: next,
    };
    // Expression is in progress
    if (isPartOfExponentExpression(current, prev, next, afterNext)) {
      segment.push(current);
      // Expression is done
      if (i === originalEquation.length - 1) {
        segments.push(segment);
        exponentSegmentedEquation.push(segments[segments.length - 1]);
        segment = [];
      }
    } else if (
      !isPartOfExponentExpression(current, prev, next, afterNext) &&
      isPartOfExponentExpression(
        prevMap.current,
        prevMap.prev,
        prevMap.next,
        prevMap.afterNext
      )
    ) {
      segments.push(segment);
      exponentSegmentedEquation.push(segments[segments.length - 1], current);
      segment = [];
    } else {
      exponentSegmentedEquation.push(current);
    }
  }

  console.log("segments: ", segments);
  console.log("exponentSegmentedEquation: ", exponentSegmentedEquation);

  // Multiplication and Division
  const segmentedMultDivEquation = [];
  for (let i = 0; i < exponentSegmentedEquation.length; i++) {
    const current = exponentSegmentedEquation[i];
    const prev = exponentSegmentedEquation[i - 1];
    const next = exponentSegmentedEquation[i + 1];
    const afterNext = exponentSegmentedEquation[i + 2];
    const prevMap = {
      current: prev,
      prev: exponentSegmentedEquation[i - 2],
      next: current,
      afterNext: next,
    };
    // MultDiv is in progress
    // (current 1 prev undefined, next +, afterNext 2 99%) (afterNext [2, "^", 2])
    // (isPartOfMultDivExpression false 99%) (false)
    // (current + prev 1, next [2, "^", 2], afterNext X 60%) (True)
    // (isPartOfMultDivExpression evaluates false 60%) (evaluates false)
    if (isPartOfMultDivExpression(current, prev, next, afterNext)) {
      segment.push(current);
      // MultDiv is done
      if (i === exponentSegmentedEquation.length - 1) {
        segments.push(segment);
        segmentedMultDivEquation.push(segments[segments.length - 1]);
        segment = [];
      }
    } else if (
      // (!isPartOfMultDivExpression evaluates true 75%) (evaluates true)
      // (!isPartOfMultDivExpression evaluates true 50%) (evaluates true)
      !isPartOfMultDivExpression(current, prev, next, afterNext) &&
      // (isPartOfMultDivExpression evaluates false 50%) (evaluates false)
      isPartOfMultDivExpression(
        prevMap.current,
        prevMap.prev,
        prevMap.next,
        prevMap.afterNext
      )
    ) {
      segments.push(segment);
      segmentedMultDivEquation.push(segments[segments.length - 1], current);
      segment = [];
    } else {
      // (segmentedMultDivEquation []) ([])
      // (segmentedMultDivEquation [1] 99%) ([1])
      segmentedMultDivEquation.push(current);
      // (segmentedMultDivEquation [1]) ([1])
      // (segmentedMultDivEquation [1, "+"] 50%) (True)
    }
  }

  // (segments [[2, "^", 2], [3, "^", 2], [[2, "^", 2], "X", [3, "^", 2]] 25%) ([[2, "^", 2], [3, "^", 2], ["%"]])
  console.log("segments: ", segments);
  // (segmentedMultDivEquation [1, "+", [[2, "^", 2], "x", [3, "^", 2]], "+", 50, "%"] 15%) ([1, "+", [2, "^", 2], "x", [3, "^", 2], "+", 50, ["%"]])
  console.log("segmentedMultDivEquation: ", segmentedMultDivEquation);

  // Calculate result
  // Convert percentages
  for (let i = 0; i < segments.length; i++) {
    const convertedPercentageSegment = [];

    for (let j = 0; j < segments[i].length; j++) {
      const current = segments[i][j];
      const next = segments[i][j + 1];

      if (typeof current === "number" && next === "%") {
        convertedPercentageSegment.push(current / 100);
      } else if (current !== "%") {
        convertedPercentageSegment.push(current);
      }
    }

    segments[i] = convertedPercentageSegment;
  }
  // Evaluate expressions
  for (let i = 0; i < segments.length; i++) {
    let accumulator = 0;
    let currentValue = 0;
    let haveSeenFirstNumber = false;

    for (let j = 0; j < segments[i].length; j++) {
      const current = segments[i][j];
      let executeOperation = function () {};

      if (typeof current === "number" && haveSeenFirstNumber === false) {
        haveSeenFirstNumber = true;
        accumulator = current;
      } else if (isOperator(current)) {
        executeOperation = fetchOperatorFunction(current);
      } else if (typeof current === "number" && haveSeenFirstNumber) {
        currentValue = current;
        accumulator = executeOperation(accumulator, currentValue);
      }
    }

    segments[i].length = 0;
    segments[i] = accumulator;
  }

  // Evaluate sum and difference
  for (let i = 0; i < segmentedMultDivEquation.length; i++) {
    const current = segmentedMultDivEquation[i];
    const next = segmentedMultDivEquation[i + 1];
    let accumulator = 0;
    let currentValue = 0;
    let haveSeenFirstNumber = false;
    let executeOperation = function () {};

    if (typeof current === "number" && haveSeenFirstNumber === false) {
      haveSeenFirstNumber = true;
      if (next === "%") {
        accumulator = current / 100;
      } else {
        accumulator = current;
      }
    } else if (isOperator(current)) {
      executeOperation = fetchOperatorFunction(current);
    } else if (
      typeof current === "number" &&
      haveSeenFirstNumber &&
      next === "%"
    ) {
      currentValue = current;
      accumulator = executeOperation(
        accumulator,
        accumulator * (currentValue / 100)
      );
    } else {
      currentValue = current;
      accumulator = executeOperation(accumulator, currentValue);
    }
    return accumulator;
  }
}

// 5%

function isPartOfExponentExpression(current, prev, next, afterNext) {
  // () ()
  // Check number
  if (
    typeof current === "number" &&
    (next === "^" || prev === "^" || (next === "%" && afterNext === "^"))
  ) {
    // (true 60%) (true)
    return true;
  }
  // Check ^ and %
  if (current === "^" || current === "%") {
    // (false 99%) (True)
    return true;
  }

  return false;
}

function isPartOfMultDivExpression(current, prev, next, afterNext) {
  // Check array and number
  if (
    (Array.isArray(current) || typeof current === "number") &&
    (prev === "/" || prev === "X" || next === "/" || next === "X")
  ) {
    return true;
  }
  // Check percentage
  if (
    typeof current === "number" &&
    next === "%" &&
    (prev === "/" || prev === "X" || afterNext === "/" || afterNext === "X")
  ) {
    return true;
  }
  // Check * /
  if (current === "/" || current === "X") {
    return true;
  }

  return false;
}

function isOperator(element) {
  if (
    element === "+" ||
    element === "-" ||
    element === "X" ||
    element === "/" ||
    element === "^"
  ) {
    return true;
  }
  return false;
}

function fetchOperatorFunction(operator) {
  if (operator === "+") {
    return function (x, y) {
      return x + y;
    };
  }
  if (operator === "-") {
    return function (x, y) {
      return x - y;
    };
  }
  if (operator === "X") {
    return function (x, y) {
      return x * y;
    };
  }
  if (operator === "/") {
    return function (x, y) {
      return x / y;
    };
  }
  if (operator === "^") {
    return function (x, y) {
      return Math.pow(x, y);
    };
  }
}

export default calculate;
