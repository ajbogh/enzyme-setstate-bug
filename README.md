# enzyme-setstate-bug

## Instructions:

1) Clone project to your local environment
2) `npm install`
3) `npm run test`

Notice that the `mySpy` function was not called.
Also notice that the only console message is the `changeName called` message.

The componentDidUpdate function did not execute when the component itself called a setState.
