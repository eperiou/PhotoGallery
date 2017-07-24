This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


To run repo type

    npm install && npm start


The above commands will install dependencies and start a development server to  start the App using Webpack.


To build this component I utilized create-react-app to rapidly bootstrap the repo with a transpiler and basic file structure.

Since building this component required an API call to load data, I needed to utilize the willComponentMount Method to ensure the data
was loaded prior to component rendering. The API call was done with Axios, reset the state of the index component and passes
the props to our PhotoGallery. The gallery made use of Bootstraps Carousel to make a easy to use and intuitive slideshow.

The carousel can be input into any project since it's just a bootstrap component, but to use my whole project would require a
transpiler such as babel with webpack, or browserify.

To build this component took around 2-3 hours, from bootstrap to finished product. I used Postman to test the api endpoint and
sample the data before making my request. I also leveraged, eslint and Proptypes to ensure that my code is clean and that my passed
data is typed at rendering.
