# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a Library that attempts to make working with the component paradigm easier and more fun. React hooks allow for easy state management and running functions on value changes. JSX allows injecting JavaScript directly into the HTML to control how components are rended with the full power of JavaScript. All of this is just to make it easier to put down what is in your head onto the page, simliar to what Vue and Angular attempt to solve in different ways.

1. What does it mean to think in react?

Thinking in react means to think of elements on the page as components, what states they have, what functions run when those states change, the structure of those components in JSX. Putting yourself in a mind set where your thoughts cna be directly tanspiled to React components is really what it means to think in React.

1. Describe state.

State is any given data that a component holds. This can include data that is rendered to a page or just some behind the sense data that the component is holding. With hooks when the data is changed this will trigger a rerender. Effects will also be applied when state is changed.

1. Describe props.

Props are the data passwed into a component. They are like arugments for the component. You can pass is callback functions, primatives or even variables as props. This props can be be referenced inside the component and control logic, styling or anything thing that state could.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are changes that occur outside of the component scope. For example pulling in data from an API or logging data, anything that is not part of the component should use an effect. The `useEffect()` hook takes in two arguments. The first being a callback function to run when the effect is triggered and the second being an array of state or prop values to tigger this effect when any of these are changed.

