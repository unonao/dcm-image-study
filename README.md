# dcm-image-study
医療画像の勉強サイト

# 開発の仕方
詳細は CONTRIBUTING.md を参照


# Structure
React + React router

```
react-todo-list
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public ← buildする必要のないコンテンツを配置する(画像など)
│   ├── favicon.ico ← ブラウザのタグに表示されるIcon
│   ├── index.html ← 【重要】メインのHTMLファイル
│   └── manifest.json <- ウェブアプリマニフェスト
└── src ← buildが必要なソースコードを配置する
    ├── App.css ← Appコンポーネント用のCSSファイル
    ├── App.js ← Appコンポーネントの定義ファイル
    ├── App.test.js ← Appコンポーネントのテストファイル(`$ npm test` にて使用される)
    ├── index.css ← HTML全体に適用するCSSファイル
    ├── index.js ← 【重要】ビルド時のエントリーポイント、ReactコンポーネントをHTMLへの適用やservice workerの登録を行っている。
    ├── logo.svg ← ぐるぐる回っているロゴ
    └── serviceWorker.js ← service workerで動作させるソースコードファイル(今回は扱わない)
```

- Creat React app : https://create-react-app.dev/docs/getting-started
    - このソースコードは元々は create react app で作成しています
    - 基本のフォルダ構成：https://create-react-app.dev/docs/folder-structure
- [Facebook公式のcreate-react-appコマンドを使ってReact.jsアプリを爆速で作成する](https://qiita.com/chibicode/items/8533dd72f1ebaeb4b614)
    - npm の使い方とか分かりやすいですかね
- React router : https://reactrouter.com/web/guides/quick-start
    - npm install react-router-dom でインストール済み
    - Creat React app してできたファイルを React router が使うように書き換えています。
