# Eco - DeerHacks 2024 🦌
## Inspiration 💡:
Every year, the world wastes about 2.5 billion tons of food, with the United States alone discarding nearly 60 million tons. This staggering waste inspired us to create eco, an app focused on food sustainability and community generosity.

## What it does ⚙️:
eco leverages advanced Computer Vision technology, powered by YOLOv8 and OpenCV, to detect fruits, vegetables, and groceries while accurately predicting their expiry dates. The app includes a Discord bot that notifies users of impending expirations and alerts them about unused groceries. Users can easily generate delicious recipes using OpenAI's API, utilizing ingredients from their fridge. Additionally, eco features a Shameboard to track and highlight instances of food waste, encouraging community members to take responsibility for their consumption habits.

## How we built it 🦾:
For the frontend, we chose React, Typescript, and TailwindCSS to create a sleek and responsive interface. The database is powered by Supabase Serverless, ensuring reliable and scalable data management. The heart of eco is its advanced Computer Vision model, developed with Python, OpenCV, and YOLOv8, allowing us to accurately predict expiry dates for fruits, vegetables, and groceries. We leveraged OpenAI's API to generate recipes based on expiring foods, providing users with practical and creative meal ideas. Additionally, we integrated a Discord bot using JavaScript for seamless communication and alerts within our Discord server.

## Challenges we ran into ✍🏽:
During development, we encountered significant challenges with WebSockets and training the Computer Vision model. These hurdles ignited our passion for problem-solving, driving us to think creatively and push the boundaries of innovation. Through perseverance and ingenuity, we not only overcame these obstacles but also emerged stronger, armed with newfound skills and a deepened resolve to tackle future challenges head-on.

## Accomplishments that we're proud of 🏆:
We take pride in our adaptive approach, tackling challenges head-on to deliver a fully functional app. Our successful integration of Computer Vision, Discord Bot functionality, and recipe generation showcases our dedication and skill in developing eco.

## What we learned 🧠:
Building eco was a transformative journey that taught us invaluable lessons in teamwork, problem-solving, and the seamless integration of technology. We immersed ourselves in the intricacies of Computer Vision, Discord bot development, and frontend/backend development, elevating our skills to new heights. These experiences have not only enriched our project but have also empowered us with a passion for innovation and a drive to excel in future endeavors.

Eco is not just an app; it's a movement towards a more sustainable and generous community. Join us in reducing food waste and fostering a sense of responsibility towards our environment with eco.

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
