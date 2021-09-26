## 環境構築手順
### npm nodeのインストール
npm nodeを入れてない場合これを見ながら進めてください 
https://reffect.co.jp/html/npm-install-in-mac

### アプリケーションの起動

1. ソースコードをcloneする
```
git clone https://github.com/sugimoto-ecn/tomomin_front.git
```

2. パッケージのインストール
```
npm install
```

3. アプリの起動

```
npm start
```

4. 動作確認
```
http://localhost:3000
```

5. 停止
```
ctrl+c
```


## コーディングルール


### ページの作成時

- ボタン、カード等色々なところで再利用できるパーツはcomponents/atomsの中にコンポーネントで切り出す

- atoms同士でセットになって再利用できるパーツをcomponents/molecules

- パーツのまとまりでありロジックを持つものcomponent/organisms

- ページ作成時にはレイアウトを使用component/templateのコンポーネントをimportする