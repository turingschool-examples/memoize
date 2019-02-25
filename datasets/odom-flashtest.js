const testCards = [
  {
    "question": "What is T.D.D.?",
    "answer": "Test Driven Development",
    "type": "Multi",
    "id": 1
  },
  {
    "question": "What are the four phases of testing?",
    "answer": "Setup, Execution, Assertion, & Teardown",
    "type": "Multi",
    "id": 2
  },
  {
    "question": "What do we test?",
    "answer": "The outcome or result of a particular piece of code execution.",
    "type": "Multi",
    "id": 3
  },
  {
    "question": "What is an Assertion Library?",
    "answer": "A package of assertion functionality.",
    "type": "Multi",
    "id": 4
  },
  {
    "question": "What is a Testing Framework?",
    "answer": "A library that determines how tests are organized and executed.",
    "type": "Multi",
    "id": 5
  },
  {
    "question": "What is the difference between a Testing Framework and Assertion Library?",
    "answer": "A testing library is a library that determines how tests are organized and a Library is a package of assertion functionality.",
    "type": "Multi",
    "id": 6
  },
  {
    "question": "What happens in the Setup phase of testing?",
    "answer": "Setup the conditions required to execute the action on your tests.",
    "type": "Multi",
    "id": 7
  },
  {
    "question": "What happens in the Execution phase of testing?",
    "answer": "Do some action on your test.",
    "type": "Multi",
    "id": 8
  },
  {
    "question": "What happens in the Assertion phase of testing?",
    "answer": "Ensure that the action you did had the results you expect.",
    "type": "Multi",
    "id": 9
  },
  {
    "question": "What happens in the Teardown phase of testing?",
    "answer": "Clean up any resources you used in your test (this is done automatically the majority of the time)",
    "type": "Multi",
    "id": 10
  },
  {
    "question": "What happens in an Assertion?",
    "answer": "An expression containing some testable logic.",
    "type": "Multi",
    "id": 11
  },
  {
    "question": "What is a Hook?",
    "answer": "A process that is kept outside the describe blocks and automatically runs before or after your tests as you've specified.",
    "type": "Multi",
    "id": 12
  },
  {
    "question": "What is a Describe block?",
    "answer": "A block of code that encapsulates the order of operations for each inidividual smaller test within a suite.",
    "type": "Multi",
    "id": 13
  },
  {
    "question": "https://i.ibb.co/1zsYCJ1/Screen-Shot-2019-02-22-at-10-36-14-AM-1.png",
    "answer": "assert",
    "type": "blank",
    "id": 14
  },
  {
    "question": "https://i.ibb.co/M7bbJVf/Screen-Shot-2019-02-22-at-10-40-22-AM.png",
    "answer": "pirate.",
    "type": "missing",
    "id": 15
  },
  {
    "question": "https://i.ibb.co/HYhXD1Y/Screen-Shot-2019-02-22-at-10-38-40-AM.png",
    "answer": "equal",
    "type": "blank",
    "id": 16
  },
  {
    "question": "https://i.ibb.co/1zsYCJ1/Screen-Shot-2019-02-22-at-10-36-14-AM-1.png",
    "answer": "Blackbeard",
    "type": "missing",
    "id": 17
  },
  {
    "question": "https://i.ibb.co/q5nHjJq/Screen-Shot-2019-02-22-at-10-55-24-AM.png",
    "answer": "Unicorn",
    "type": "blank",
    "id": 18
  },
  {
    "question": "https://i.ibb.co/j51YQdf/Screen-Shot-2019-02-22-at-11-01-35-AM.png",
    "answer": "deepEqual",
    "type": "blank",
    "id": 19
  },
  {
    "question": "https://i.ibb.co/4SbwCzd/Screen-Shot-2019-02-22-at-11-01-07-AM.png",
    "answer": "difference",
    "type": "blank",
    "id": 20
  },
  {
    "question": "https://i.ibb.co/YjPSLKQ/Screen-Shot-2019-02-22-at-11-08-43-AM.png",
    "answer": "it",
    "type": "missing",
    "id": 21
  },
  {
    "question": "https://i.ibb.co/WyC7ktB/Screen-Shot-2019-02-22-at-11-20-40-AM.png",
    "answer": "isObject",
    "type": "blank",
    "id": 22
  },
  {
    "question": "https://i.ibb.co/4RmcDr3/Screen-Shot-2019-02-22-at-11-32-37-AM.png",
    "answer": "simulate",
    "type": "blank",
    "id": 23
  },
  {
    "question": "https://i.ibb.co/16Kc6jz/Screen-Shot-2019-02-22-at-11-32-00-AM.png",
    "answer": "wrapper",
    "type": "blank",
    "id": 24
  },
  {
    "question": "https://i.ibb.co/BcFqtWD/Screen-Shot-2019-02-22-at-11-38-33-AM.png",
    "answer": "1",
    "type": "blank",
    "id": 25
  },
  {
    "question": "https://i.ibb.co/Cz51Wsh/Screen-Shot-2019-02-22-at-11-41-28-AM.png",
    "answer": "FilterControls",
    "type": "blank",
    "id": 26
  },
  {
    "question": "https://i.ibb.co/2jVw1MQ/Screen-Shot-2019-02-22-at-11-44-31-AM.png",
    "answer": ".toEqual",
    "type": "blank",
    "id": 27
  },
  {
    "question": "https://i.ibb.co/njbDpFr/Screen-Shot-2019-02-24-at-9-37-16-PM.png",
    "answer": "instance()",
    "type": "missing",
    "id": 28
  },
  {
    "question": "https://i.ibb.co/ncmPM22/Screen-Shot-2019-02-22-at-11-52-35-AM.png",
    "answer": "find",
    "type": "blank",
    "id": 29
  },
  {
    "question": "https://i.ibb.co/R4hNsLq/Screen-Shot-2019-02-22-at-11-54-23-AM.png",
    "answer": "toMatchSnapshot()",
    "type": "blank",
    "id": 30
  }
]

export default testCards;