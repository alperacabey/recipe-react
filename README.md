# React + TypeScript + Vite

### 3rd party libraries
- **react-router-dom** (router)
- **@testing-library/react** (unit testing utility library)
- **jest** (testing framework)
- **axios** (http client)
- **react-markdown**

---
### Styles
Styles were written in accordance with [BEM](https://getbem.com/) methodology.

---
### Folder structure

    ├── public                  # Shared files
    ├── src                     # Source files
    │   ├── asseets             # Style files
    |   |   ├── **/*.scss
    │   ├── components          # Reusable components
    |   |   ├── **/*.tsx
    │   ├── router              # Routes
    │   ├── services            # Socket and api gateways
    |   |   ├── *.ts
    │   ├── pages               # Pages
    |   |   ├── *.tsx

### Requirements

- [Node.js](https://nodejs.org/) v16 or newer.

### Installation

- Clone the repo - `git clone https://github.com/alperacabey/recipe-react.git`.
- Install project dependencies — `npm install` or `yarn`.
- Launch the app — `npm run dev` or `yarn dev`

   **Client** will become available at [http://localhost:3000](http://localhost:3000/)
   
- Run the tests — `npm run test` or `yarn test`

### Available Scripts

- `dev`
- `build`
- `lint`
- `test`
