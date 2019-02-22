const testCards = [
  {
    "question": "What is T.D.D.?",
    "answer": "Test Driven Development",
    "type": "Multi",
    "key": 1
  },
  {
    "question": "What are the four phases of testing?",
    "answer": "Setup, Execution, Assertion, & Teardown",
    "type": "Multi",
    "key": 2
  },
  {
    "question": "What do we test?",
    "answer": "The outcome or result of a particular piece of code execution.",
    "type": "Multi",
    "key": 3
  },
  {
    "question": "What is an Assertion Library?",
    "answer": "A package of assertion functionality.",
    "type": "Multi",
    "key": 4
  },
  {
    "question": "What is a Testing Framework?",
    "answer": "A library that determines how tests are organized and executed.",
    "type": "Multi",
    "key": 5
  },
  {
    "question": "What is the difference between a Testing Framework and Assertion Library?",
    "answer": "",
    "type": "Multi",
    "key": 6
  },
  {
    "question": "What happens in the Setup phase of testing?",
    "answer": "Setup the conditions required to execute the action on your tests.",
    "type": "Multi",
    "key": 7
  },
  {
    "question": "What happens in the Execution phase of testing?",
    "answer": "Execute some action on your test.",
    "type": "Multi",
    "key": 8
  },
  {
    "question": "What happens in the Assertion phase of testing?",
    "answer": "Assert that the action you did had the results you expect.",
    "type": "Multi",
    "key": 9
  },
  {
    "question": "What happens in the Teardown phase of testing?",
    "answer": "Clean up any resources you used in your test (this is done automatically the majority of the time)",
    "type": "Multi",
    "key": 10
  },
  {
    "question": "What happens in an Assertion?",
    "answer": "An expression containing some testable logic.",
    "type": "Multi",
    "key": 11
  },
  {
    "question": "What is a Hook?",
    "answer": "A process that is kept outside the describe blocks and automatically runs before or after your tests as you've specified.",
    "type": "Multi",
    "key": 12
  },
  {
    "question": "What is a Describe block?",
    "answer": "A block of code that encapsulates the order of operations for each inidividual smaller test within a suite.",
    "type": "Multi",
    "key": 13
  },
  {
    "question": "https://drive.google.com/file/d/18Rq4YYcmF8vmcijT_5pANP0JELKG6gJg/view",
    "answer": "assert",
    "type": "blank",
    "key": 14
  },
  {
    "question": "https://drive.google.com/file/d/1kKG1Zz9ECsZzeiD7Nsao2o1ZZoLfSfvB/view?usp=drive_open",
    "answer": "pirate.",
    "type": "missing",
    "key": 15
  },
  {
    "question": "https://drive.google.com/file/d/1h-E5jcrMPdYmnt3o4LA2_y09Sc9ctjL4/view",
    "answer": "equal",
    "type": "blank",
    "key": 16
  },
  {
    "question": "https://drive.google.com/file/d/106nlLgOL4ke7qr3wef84EYK8YqUil3Tf/view",
    "answer": "Blackbeard",
    "type": "missing",
    "key": 17
  },
  {
    "question": "https://drive.google.com/file/d/1EeGyM7Il6md5FOWVH_6x32RLdgypqToC/view",
    "answer": "Unicorn",
    "type": "blank",
    "key": 18
  },
  {
    "question": "https://drive.google.com/file/d/153eIlbqZ3ionD8jvQDCUzFlToakcBKcL/view",
    "answer": "deepEqual",
    "type": "blank",
    "key": 19
  },
  {
    "question": "https://drive.google.com/file/d/17kkeSw71_QZP-VoPC_rYMW3sjJMUFY_l/view",
    "answer": "difference",
    "type": "blank",
    "key": 20
  },
  {
    "question": "https://drive.google.com/file/d/1Qo0HPZyke38EhkqFebEaezyoSP3_HTQG/view",
    "answer": "it",
    "type": "missing",
    "key": 21
  },
  {
    "question": "https://drive.google.com/file/d/1VK7zGgvwMB61NBaSBgsY3ETmXHfURTLg/view?usp=drive_open",
    "answer": "isObject",
    "type": "blank",
    "key": 22
  },
  {
    "question": "https://drive.google.com/file/d/1ksfzJHvGhVGapcFmddj8Lbcwv9CGDaJW/view",
    "answer": "simulate",
    "type": "blank",
    "key": 23
  },
  {
    "question": "https://drive.google.com/file/d/1q4O78uAfk4mf8UghcNFSGVgHk2wub3Xi/view",
    "answer": "wrapper",
    "type": "blank",
    "key": 24
  },
  {
    "question": "https://drive.google.com/file/d/1wFRT95h0-otkK1ITDF0z5OYD5ZYmR80a/view",
    "answer": "1",
    "type": "blank",
    "key": 25
  },
  {
    "question": "https://drive.google.com/open?id=1GnbI099_QMnFEMmJ2PqPjclMhx7T7VkP&authuser=0",
    "answer": "FilterControls",
    "type": "blank",
    "key": 26
  },
  {
    "question": "https://drive.google.com/file/d/1XhVPHZJOP-dgm5GenpXiM17Z0IUYFQ8y/view?usp=drive_open",
    "answer": ".toEqual",
    "type": "blank",
    "key": 27
  },
  {
    "question": "https://drive.google.com/file/d/1XhVPHZJOP-dgm5GenpXiM17Z0IUYFQ8y/view?usp=drive_open",
    "answer": "instance()",
    "type": "missing",
    "key": 28
  },
  {
    "question": "https://drive.google.com/file/d/1XQvw_KpUYXPrmhjJzp1phq4w3q6fpJPk/view",
    "answer": "find",
    "type": "blank",
    "key": 29
  },
  {
    "question": "https://drive.google.com/file/d/1QURGctYOmtLfMYL9HpMcwFg1_GMST-Vc/view",
    "answer": "toMatchSnapshot()",
    "type": "blank",
    "key": 30
  }
]