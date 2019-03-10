# Sprint Challenge: Redux - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Redux, Redux I - II and Async Redux I - II. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout Redux and your command of the concepts and techniques in the Redux I - II and Async Redux I - I modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build the Smurfs village once again, only this time, you will utilize Redux as your state management. Don't use any old code from your previous Smurfs Sprint Challenge. Build this challenge from the ground up using Redux.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Using Redux, we mix up how we use state and keep track of it throughout our app. Rather than having a state object in a number of class components, all state is based in a single redux store. In effect, we consolidate all state that we'd normally find throughout our entire application into a single, centrally-located object. Instead of seperating the state, we now use reducers to handle our data store, based on actions calls.
In effect, our store _holds_ our data, our reducers _change_ our data, our actions tells the reducers _what happened_, which prompts the reducers to change it. 

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?
At it's core, it's a matter of scope. Application state is (as it's name suggests) app-wide, meaning that it's a global state. Components and their state, on the other hand, are local only to said component. Therefore, components outside of that one with state are unaware of any state - unless it was passed to them via props from the stateful component. 
When multiple components are dependent on state, it would be best to use Application state. Normally, you'd have to build numerous handler functions and pass state key-value pairs through props of countless components. As your applications scale, your code becomes unwieldy, with many components having more than a dozen props that are passed down to lower components. In such cases, it might be better to use Application state with redux. With it, your store just floats at the very top of your app and you can connect to it whenever and wherever you want to and designate the exact slice of state you need. This would be overkill for smaller apps of course.

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`redux-thunk` is a piece of middleware that we can use in combination with redux. In essence, middleware enables us to modify data before it gets passed to the general component. It is somewhat similar in function to React Lifecycle methods, in that way. Thunk gives us access to `dispatch` actions. With it, we can use asynchronous functions in our action creators. All of a sudden, it becomes possible for us to make HTTP requests (optionally via `axios`) from inside our action creators.

## Project Set Up

Follow these steps to set up your project:

- [x] `fork & clone` this repository.
- [x] `cd` into the forked copy of this repository.
- [x] **RUN** `yarn` to retrieve all `server-side` the dependencies.
- [x] **RUN** `yarn start` or `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [x] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an empty Array `[]` returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [x] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [x] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [x] **cd** into `smurfs` and run `yarn` to retrieve the client side dependencies.
- [x] **RUN** `yarn start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`.
We've added a typical `redux` file structure for you:

```
src
  - components
  - reducers
    - index.js
  - actions
    - index.js
```

This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Start in the `index.js` file by following all the prompts there to ensure that `Redux-Thunk` is wired up properly.
- [x] Because `Redux-Thunk` is wired up as a middleware for this project. Be sure to utilize thunks when appropriate:

```js
return dispatch => {
  dispatch({ type: FOO_ACTION_TYPE });
  promise.then(({ data }) => {
    dispatch({ type: ANOTHER_ACTION_TYPE, payload: data });
  });
};
```

**API Design** - This is how you'll interface with the API and what is required from every endpoint.

### GET '/smurfs'

- [x] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [x] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  }
];
```

### POST '/smurfs'

- [x] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [x] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  },
  {
    name: 'Sleepy',
    age: 200,
    height: '5cm',
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: 'Sleepy',
    age: 200,
    height: '5cm',
    id: 1
  }
];
```
