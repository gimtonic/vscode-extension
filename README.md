# Пример vsCode-extension

1. Устанавливаем глобально

```bash
npm install -g yo generator-code
```

2. Создаем бойлерплан с помощью

```bash
yo code
```

3. Открываем тестовую страницу с помощью Run
4. Открываем на ней devTools с помощью CTRL+R CTRL+P (вводим DevTools)

5. Генерируем типы для .env

```bash
cd api/
npx gen-env-types .env -o src/types/env.d.ts -e .
```