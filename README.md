# Node.js Multi-Page Website

A simple responsive multi-page website served with Node.js's built-in `http` and `fs` modules. The project contains Home, About, Services, Contact, and custom 404 pages.

## Features

- Responsive modern dark UI
- Home, About, Services, and Contact pages
- Node.js HTTP server
- File-based routing
- Custom 404 page
- No external npm packages required

## Technologies Used

- HTML5
- CSS3
- Node.js
- Built-in Node.js modules:
  - `http`
  - `fs`

## Project Structure

```text
├── index.js
├── index.html
├── about.html
├── services.html
├── contact.html
└── README.md
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/contact` | Contact |
| Any unknown route | 404 Page Not Found |

## How to Run the Project

### 1. Install Node.js

Download and install a current Node.js version, then verify it:

```bash
node --version
```

### 2. Open the project folder in a terminal

```bash
cd path/to/node-multipage-website
```

### 3. Start the server

```bash
node index.js
```

### 4. Open the website

```text
http://localhost:9094
```

## Current Code Review

### Main runtime error

The server uses:

```js
fs.readFile("./index.html", "utf-8", ...)
```

### Other issues and improvements

1. The server does not send a successful `Content-Type: text/html` header for normal HTML routes.
2. File-reading errors return the message `Something went wrong...` but still use the default successful HTTP status instead of status code `500`.
3. The `server.listen()` callback does not receive an `err` argument, so checking `if (!err)` there is unnecessary.
4. Strict route checks do not support trailing slashes such as `/about/`.
5. A URL containing a query string, such as `/about?source=home`, will return the 404 page.
6. The Contact form has no `action`, `method`, or backend handler, so it does not save or send messages.
7. The “Start Your Project” button on the Contact page is not linked to another page or action.
8. About-page team images do not have meaningful `alt` attributes.
9. Much of the same CSS and navigation markup is duplicated across every HTML file.
10. Images and fonts depend on external websites and may not load without internet access.

## Recommended Server Improvements

- Use `res.writeHead()` or `res.setHeader()` for correct response headers.
- Return status code `500` when a file cannot be read.
- Parse URLs with the built-in `URL` class.
- Use a reusable function to serve HTML files.
- Add a POST route if the Contact form should work.
- Move shared CSS into one separate stylesheet.

## Example Test URLs

```text
http://localhost:9094/
http://localhost:9094/about
http://localhost:9094/services
http://localhost:9094/contact
http://localhost:9094/unknown
```

## Author

Meet Patel
