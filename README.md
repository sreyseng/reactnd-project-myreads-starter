# MyReads Project

## Purpose

Explore react fundamentals utilizing React, ReactDOM, and React Router DOM by adding interacton and functionality to an existing static application.

## Features

- The application contains three bookshelves (Currently Reading, Want to Read, Read).
- Each book has control that allows switching between shelves.
  - The control defaults to appropriate shelf.
- `Main page` has a link to `Search page` with path `/search`
- `Search page` allows you to search for books to add to library.
  - Each book has the same control as the `Main page` that allows switching between shelves
  - When a book shows up in a search and the book is already on the shelf, the control should default to the appropriate shelf.
- `Search page` has a link to `Main page` with path `/`
- Changes are reflected instantly with Book switch shelves (on both the `Main page` and `Search page`)

## Demo

![Application](demo/demo.gif)

## To start the project:

- install all project dependencies with `npm install`
- start the development server with `npm start`
