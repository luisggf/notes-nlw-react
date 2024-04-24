# Description
Web app to listen to audio notes and save them as text.

# Concepts used in this project
- React
- Vite
- Tailwind
- Radix UI
- Speech recognition API
- Responsiveness

# Libraries and commands used in this project:

Init a vite project (requires NodeJS)
```npm create vite@latest```

Tailwind as a CSS styling and mapping library:
```npm install -D tailwindcss postcss autoprefixer```
```npx tailwindcss init -p```

Radix as UI-component library
```npm install @radix-ui/react-dialog```

Date-formating library
```npm install date-fns```

Icon library
```npm install lucide-react```

Toast messages library
```npm install sonner```

Typing for browser-native speech recognition API
```npm i -D @types/dom-speech-recognition```


# To run this project:

Install the dependencies
```npm i```

Start the app
```npm run dev```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

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
