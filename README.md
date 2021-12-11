# 手順

## webpack について

- npm install -Dで package をインストール(-D はローカルのみに node_module としてダウンロードできるオプション)
- npm run watch で webpack 起動 変更監視モード

---

# コーディングルール

## 画像について

- assets/img/ に各ページの名前毎にディレクトリを切って配置
  「common」には共通パーツで使用する画像を配置
  画像の命名規則は以下のとおり
  ・ロゴ→logo_company.jpg
  ・写真、図、イラスト→pic_about.jpg
  ・アイコン→ic_twitter.svg
  ・タイトル→ttl_01.png
  ・背景→bg_company.png
  ・ボタン→btn_primary.png
  ・バナー→bnr_pickup01.png
  ・テキスト→txt_title.png

## js について

- assets/js/modules 内に各機能ごとにファイルを作成して記述
  index.jsはエントリーポイントになっているのでファイル作成ごとに記述する
  必要であればライブラリも同階層に配置（例：swipper とか）

  - assets/js/polyfill 内にIEなどに対応するためのファイルを作成

- JavScriptと連動しているクラスには、クラス名にプレフィックスとして js\_を付与。
  ※こちらのクラスでスタイルは当てないこと

## css について

- assets/scss/ 内に記述

- CSSのプロパティ順序は要素の外側から内側への視覚順で記載
　https://zenn.dev/web_tips/articles/f1167f4314dcb3
　`.test {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin: 100px 0 0 0;
  padding: 50px 30px 10px 20px;
  width: 60vw;
  height: 100%;
  background-color: #fff;
  border-radius: 50px;
  font-size: 4.267vw;
  color: #000;
  font-weight: 900;
  font-family: var(--kiwimaru-font);
  text-decoration: none;
  letter-spacing: 1px;
  line-height: 1.7;
  cursor: pointer;
  transition: opacity 1s ease;
}`

- カラー定義は変数で管理
  assets/scss/global/\_variables.scss

- クラス名はFLOCSSを採用　https://haniwaman.com/flocss/
- 共通パーツ（ボタン、タイトル等）は assets/scss/components 配下に専用の scss ファイルで定義。
  コンポーネント（部品）はクラス名にプレフィックスとして componentの c\_を付与（ex. c_btn-lg）

- ページ固有のスタイル（書き捨て）は、assets/scss/pages 配下にページ専用の scss ファイルで定義。
  クラス名にプレフィックスとして p\_を付与（ex. p_about）

※理想は、components を組み合わせ、pages のスタイルで margin 等を指定しレイアウトしたいですが、デザインが上がってくる速度的にも難しいと思うので、各ページに対応した pages の scss ファイルが量産されていくかと思います。

- SP 時は、単位をすべて vw で変換しております。
  44 等の値は、デザインデータ（SP）の px 数値をそのままいれればok
  ex.
  `@include global.mq(sp) { .hoge{ height: f.sp(44); margin: f.sp(10 0 20 0); //複数指定も可 width: calc(f.sp(100) + 10px); //こちらは不可 width: f.sp(calc(100 + 100)); //こちらも不可 } }`

- `<div class="pc"></div>`　 pc 時表示、sp 時非表示
  `<div class="sp"></div>`　 pc 時非表示、sp 時表示

## distフォルダ について
- webpackで本番用に最適化したファイルを出力しているフォルダ　基本的に触らない

## git commit について

- gitmoji を使ってます
- ✨ feat: 〜 機能の追加・実装
  新機能っぽいものの原型が出来たときにこれでコミットする
- 📝 docs: 〜 ドキュメントのみの変更
  処理に直接関係のないテキストやコメントアウト、README などの追加・更新
- 🎨 style: 〜 UI やデザイン関連の変更やコード上のセミコロン云々など
- ♻️ refac: 〜 仕様や機能に影響がないコードの改善(リファクタリング)
- 🩹 fix: 〜 軽微な問題の修正
  ちょっとしたエラーの解決などはこれでコミット
  typo の修正もここ
- 🐛 bug: 〜 バグの修正
  「バグ」は正式運用後に出てきた問題に対してかな
- 🚧 work: 〜 コーディングや上記に含まれない作業など
  新機能実装までのコード書きなど。もくもくとコーディングをしている（コミットとしてはコレが一番多くなる）
  ライブラリの追加や更新、削除等もここ
  .gitignore ファイルの更新等もここ
