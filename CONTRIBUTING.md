# 開発の仕方

# 概要について
React で開発します。

# 手元での実行の仕方
まずは必要なライブラリをダウンロードしてくる必要があります。
以下のコマンドを実行してみましょう。
```
npm install
```
node_modules というフォルダが作成されて、必要なライブラリがその中にダウンロードされます。
このような外部からダウンロードできるファイルは github にアップロードしないのが基本なので、git の管理対象から外れています。

そのあとに
```
npm start
```
と実行すると http://localhost:3000/ からアクセスができます。

# git での開発について
ブランチの構成には以下の形になっています。
───── main: 基本的には完成形
└── develop: 開発途中の中心となるブランチ
         └── その他: 何か機能追加や修正する際のブランチ
その他は自分でdevelop からブランチを切るときに命名して下さい
参考：https://qiita.com/c6tower/items/fe2aa4ecb78bef69928f

# ライブラリ
- React: 基本は勉強しておいて下さい
- React router: あるURLを与えたときに、どんなページを表示するかを制御します
- react-cornerstone-viewport: cornerstone tools を react で用いるために使います。具体例とかはここから見て下さい。
    - https://github.com/cornerstonejs/react-cornerstone-viewport
    - https://react.cornerstonejs.org/

# 参考資料
- React Hello world: https://ja.reactjs.org/docs/hello-world.html
    - React の基本がわかるので一通り読んでおくと良い
- [今から始めるReact入門 〜 React の基本](https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048)
- React : https://reactjs.org/
