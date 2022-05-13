# Iron GP

<br>

## Description

Iron GP is a application where we can search for F1 information.

<br>

## User

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage with all the sortcuts.
- **sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **edit user** - As a user I want to be able to edit my profile.
- **nav** - Home page, Teams, Pilots,  Standings/Calendar, , Buy Ticket,  Login, Profile
- **Teams** - As a user I want to see the list of F1 teams with their own information.
- **Pilots** - As a user I want to see more details about the pilot.
- **Schedule** - As a user I want to see the Grand Prix information when I click the date.
- **Profile** - As a user I want to see the list of my favourite teams and my information account.

## Server Routes (Back-end):

| **Method** | **Route**                           | **Description**                                                          | Request - Body                        |
| ---------- | ----------------------------------- | ------------------------------------------------------------------------ | ------------------------------------- |
| `GET`      | `/`                                 | Main page route. Renders home `index` view.                              |                                       |
| `GET`      | `/login`                            | Renders `login` form view.                                               |                                       |
| `POST`     | `/login`                            | Sends Login form data to the server  and redirect to homepage after created.                                     | { email, password }                   |
| `GET`      | `/signup`                           | Renders `login` form view                                               |                                       |
| `POST`     | `/signup`                           | Sends Sign Up info to the server and creates user in the DB. and redirect to homepage after created.          | { name, email, password, imageUrl}                   |
| `GET`      | `/logout`                           | Renders `index` form view.                                               |                                       |
| `DELETE`   | `/private/profile/` | Private route. Deletes the existing user account.|                                                          |
| `GET`      | `/private/profile`             | Private route. Renders `profile` form view.                         |                                       |
| `PUT`      | `/private/profile`             | Private route. Sends profile info to server and updates user in DB and add favourite team, pilot and GP circuit. | {name, email, password, imageUrl }   |
| `GET`      | `/private/teams-list`               | Private route. Render the `teams-list` view.                             |                                       |
| `GET`      | `/private/teams-list/:teamsId`               | Private route. Render the `teams-details` view.                             |     {imageUrl, name, country, teamChief, championships, firstEntry}                                  |        |                                       |
| `GET`      | `/pilots-list`                           | Renders `pilots` view.       |                                       |
| `GET`      | `/pilots-list/details/:pilotsId`         | Renders `pilots-details` view for the particular pilot.                  | {name, age, nationality, podiums, imageUrl, championships}
|            |
| `GET`      | `/calendar`                         | Renders `calendar` view for the calendar of the current season standings.                      |
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
  teamChief: String,
  championships: Number,
  country: String,
  firstEntry: Number,
  imageUrl: String
}

```

Pilots model

```javascript
{
  name: String,
  age: Number,
  nationality: String,
  podiums: Number,
  championships: Number,
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
