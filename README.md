# Youtube Subscribers

This project is a backend application that provides APIs for managing YouTube subscibers.

The APIs provided by this application include the following:-

-> `GET /subscribers`: Returns an array of all subscribers in the database.

-> `GET /subscribers/names`: Returns an array of all subscribers with only two fields name and subscribedChannel.

-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

## Prerequisites

Before running this application, you must have the following installed:

Node.js

MongoDB

## Installation

1. Clone this repository:

```bash
 git clone "https://github.com/jayant753/Get-youtube-subscribers.git"
```

2. Install dependencies:

```bash
 npm install
```

3. Create a .env file and add monogodb uri and port.

4. Create a database:

```bash
node ./src/createDatabase.js
```

5. Start the application:

```bash
 node ./src/index.js
```

6. Run tests:

```bash
npm test 







