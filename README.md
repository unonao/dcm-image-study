# dcm-image-study
React + cornerstone tools + Firebase を利用した医療画像の勉強サイト


## 開発の準備
### 1. Firebase CLI のインストール

windows:
```
npm install -g firebase-tools
```

mac,linux:
```
curl -sL https://firebase.tools | bash
```

### 2. ライブラリのインストール(最初か、他の人が新しいライブラリをpackage-lock.jsonに加えるたびに行う)
```
npm install
```

### 3. .env ファイルについて Y.H さんに聞く
.envファイルはセキュリティの観点から公開しないこと


-----

## ローカルでの起動方法
```
npm start
```

-----

## デプロイの仕方
### 1. Firebase CLIにLogin
```
$ firebase login
```

### 2. buildファイルの作成
```
$ npm run build
```

### 3. deployする
```
$ firebase deploy
```
