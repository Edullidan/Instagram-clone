module.exports = {
  extends: ["next", "next/core-web-vitals"],
  rules: {
    // Добавьте свои правила ESLint здесь
    "react/no-unescaped-entities": "off", // Отключить проверку на неэкранированные апострофы
    'jsx-a11y/alt-text': 'off',
  },
};
