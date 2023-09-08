# ReactJest

## 開発サーバー立ち上げ時

```
docker exec -it reactjest npm run dev
```

## React Testing Library + JEST 環境構築
JEST https://github.com/cossack910/ReactJest/issues/1
<br>
React Testing Library https://github.com/cossack910/ReactJest/issues/2

## 環境構築

clone と立ち上げ時

```
docker exec -it reactjest npm install
docker exec -it reactjest npm run build
```

新規プロジェクト立ち上げ

```
docker-compose run --rm reactjest npm create vite@latest .
```
