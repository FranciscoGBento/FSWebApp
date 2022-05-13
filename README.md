# Iron GP

<br>

## Description

Search platform for restaurants in Barcelona and creating the favorite list of restaurants.

<br>

## User

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up.
- **sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **edit user** - As a user I want to be able to edit my profile.
- **tabs** - Home page, Teams, Grand Prix, Standings/Calendar, Login, Profile
- **Teams list** - As a user I want to see the list of F1 teams with pilots, create a new team
- **Grand Prix** - Check circuits. (Best lap, pilots and standings, markable race)
- **Pilots** - As a user I want to see more details about the pilot.
- **Calender** - As a user I want to see the Grand Prix information when I click the date.
- **Profile** - As a user I want to see the list of my favourite teams and my information account.

## Server Routes (Back-end):

| **Method** | **Route**                           | **Description**                                                          | Request - Body                        |
| ---------- | ----------------------------------- | ------------------------------------------------------------------------ | ------------------------------------- |
| `GET`      | `/`                                 | Main page route. Renders home `index` view.                              |                                       |
| `GET`      | `/login`                            | Renders `login` form view.                                               |                                       |
| `POST`     | `/login`                            | Sends Login form data to the server.                                     | { email, password }                   |
| `GET`      | `/signup`                           | Renders `signup` form view.                                              |                                       |
| `POST`     | `/signup`                           | Sends Sign Up info to the server and creates user in the DB.             | { email, password }                   |
| `GET`      | `/logout`                           | Renders `index` form view.                                               |                                       |
| `GET`      | `/private/edit-profile`             | Private route. Renders `edit-profile` form view.                         |                                       |
| `PUT`      | `/private/edit-profile`             | Private route. Sends edit-profile info to server and updates user in DB. | {name, email, password, imageUrl }    |
| `GET`      | `/private/teams-list`               | Private route. Render the `teams-list` view.                             |                                       |
| `POST`     | `/private/teams-list/`              | Private route. Adds a new team for the current user.                     | { name, Trophies, country, imageUrl } |
| `DELETE`   | `/private/teams-list/:teamsId`      | Private route. Deletes the existing team from the current user.          |                                       |
| `GET`      | `/pilots`                           | Renders `pilots` view. {name, age, nationality, trophies, imageUrl}      |                                       |
| `GET`      | `/pilots/details/:pilotsId`         | Renders `pilots-details` view for the particular pilot.                  |
|            |
| `GET`      | `/calendar`                         | Renders `calendar` view for the calendar/standings.                      |
|            |
| `GET`      | `/calendar/grand-prix/:grandprixId` | Renders `grandprix-details` view for the particular Grand Prix.          |
|            |

## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  imageUrl: String,
}

```

Teams model

```javascript
{
  name: String,
  Trophies: Number,
  country: String,
  imageUrl: String
}

```

Pilots model

```javascript
{
  name: String,
  age: Number,
  nationality: String,
  trophies: String,
  imageUrl: String
}

```

<br>

## API's

ERGAST F1 API - https://documenter.getpostman.com/view/11586746/SztEa7bL
RAPID F1 API - https://api-sports.io/documentation/formula-1/v1

<br>

## Backlog

[See the Trello board.](https://trello.com/b/enapNIqr/projeto2)

<br>

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/FranciscoGBento/FSWebApp)

[Deploy Link](https://fsweb-app.herokuapp.com/)

<br>

### Contributors

Francisco Bento - [`FranciscoGBento`](https://github.com/FranciscoGBento) - [`https://www.linkedin.com/in/francisco-bento`]()

Pedro Costa - [`pedrocncosta`](https://github.com/pedrocncosta) - [`https://www.linkedin.com/in/pedro-cn-costa/`]()
