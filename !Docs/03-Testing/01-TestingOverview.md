# Testing Code

Testing is a huge part of coding. We haven't touched it until now because it adds a complete new layer to the dev cycle, and a ton of complexity. That being said, it will be a huge part of all projects you will work on moving forward - expect to be asked about testing in any interview, and be prepared to write tests for the code that you'll be writing at any job.

## Types of Tests

- Unit Testing - Tests Specific pieces of functionality in a program or application.
- E2E (End to End) Testing - Tests the ENTIRE program from start to finish. Usually used by testing all moving pieces together.
- Integration Testing - Very similar to E2E but only tests a couple pieces that work together instead of the whole
- UAT (User Acceptance Testing) - This is basically your beta of an application. You let the user play around with it and see if it works for them. Ideally this is the last step of the process and if it goes well the application is either fully deployed or, if it already was deployed, changed from a beta/ in dev status to stable / production.

## When to Test

One of the big things about testing is knowing when to test and when not to. The 'when not to' is partially decided by your employer and partially decided by common sense. One of the big things to think about when testing is this: `What will happen if this breaks?`. Sometimes people go overboard with testing, and while that's not inherently a problem, it can lead to wasted time. Think of it in non programming terms - let's say you have to do a series of tasks at a job and you want to make sure you can actually do them. Which ones below make sense to actually test:

1. Clocking in for the Day
2. Washing your hands
3. Driving a forklift
4. Logging inventory
5. Completing End-of-Year Financial information

Now let's think of that in terms of code. What are some things about an app that you absolutely would and/or SHOULD test?

One thing to keep in mind about testing is that it's typically one of the first things to get dropped from the docket if you're behind schedule. Usually, if the team is behind, they only test the most important features and then push it off to QA (which is MUCH cheaper), or even to production and just do bug fixes later. If you asked programmers how often they test, the answer is usually: `Not as often as I should.`
