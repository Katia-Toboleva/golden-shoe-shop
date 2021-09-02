# golden-shoe-shop

## Table of Contents
1. [Description](#description)
2. [Technologies](#technologies)
3. [Demo](#demo)
4. [Installation and viewing](#installation-and-viewing)
5. [Implementation, observations, other notes](#implementation-observations-other-notes)


## Context:
The app consists of a proposal for a Shoe company that wants to update their existing website in order to improve their sales. For a demo with a client, the following pages of the website have been developed in order to show possible improvements:

1. Homepage
2. Womens' section
3. Item modal (opens on choosing an item in women's section)
4. Shopping cart/checkout
5. FAQs page
6. Chat

## Functionality and features:
The task is implemented as a SPA written using ReactJS and NodeJS. The data is saved with MongoDB and is fetched by API endpoints (/categories and /items). The app state is managed by Redux and the project is set up using Webpack.

### Responsive
The app is built Mobile first. Media queries and responsive design techniques (%, relative length units em and rem, displays flex and grid, etc.) are applied to make sure the app adjusts to all view ports.
</br>
//for demo: see Homepage, Women's section

### Availability checks
The functionality is in place to check whether an item and its models (color, size options) are available or not. If they are not, the UI reflects that accordingly and does not allow the user to choose unavailable options.
</br>
</br>
Additional availability checks: for items added to the cart, once the user clicks on the cart, the availability is re-checked again by calling an endpoint with items ids and selected filters to make sure the items are still available.
</br>
//for demo: see Women's section, Item modal and Cart

### Filtering and sorting
Filtering is implemented in the endpoint /items. By choosing filters in UI, the user can get items according to specific type, colour and size. Several filters can be applied at the same time and trigerred and reset using buttons.
</br>
</br>
Sorting is also implemented to sort items by price (low->high, high->low, availability). This sorts the array of fetched items and can be used in combination with Filters applied.
</br>
//for demo: see Women's section

### Intuitive UI: item selection
Improvements in the flow of choosing an item in UI: when clicking on a item, a model opens up where the user can see more information and photos of the shoe (currently implemented a carousel with 3 different perspectives) and in all  available colours and sizes. In addition, there is button that opens up a Size Guide. Once the size, colour and quantity are chosen, the item can be added to the cart.
</br>
//for demo: see Item modal (opens on choosing an item in women's section)

### Chat button
As a future implementation, a chat can be added to the website which can be either a chatbot (for example, it can be implemented with AWS Lex) or a customer service agent. For the cases when the chat is not available, the user is offered to check a FAQs page or send an email.
//for demo: accessible in all the app

### FAQs
An accordion with some frequently asked questions and information about online sales, returns, deliveries, etc. This pages can be accessed both through the links in the footer and chat button.
//for demo: chat button, FAQs page


## Technologies:
React, React Hooks, React Router, Redux state management, JavaScript, APIs, Async promises and fetch, localStorage, TDD Testing setup(Jest, Enzyme), SCSS and CSS modules, CSS Animation, Express, MongoDB, Webpack, Babel, Eslint, Stylelint.

## Demo:
1.

2.

## Installation and viewing
1. Clone the repo in your code editor
2. Install NPM packages `npm install`
3. Run the server: `npm run server`
4. View the project in the browser: `npm start`



### Additional implementations
In addition to current code of the task, I believe the following implementations would be beneficial:</br>

- Additional testing with Jest could be implemented in order to check the logic of the filters and other utilities.
