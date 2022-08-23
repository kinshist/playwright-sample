# Nuxt 3 & playwright E2Etest sample

Nuxt3でplaywrightを使ってE2Eテストをするサンプルです。



## Setup

```bash
# yarn
yarn install

# npm
npm install
```

## コマンドについて

```bash
# 開発環境立ち上げ
npm run dev
```

```bash
# 一括テストを実行
npm run test
```

## ファイル構成

Nuxt のデフォルト構成 + 以下

- playwright.config.js

  Playwright設定


- test/playwright

  playwright の E2Eテストファイル

- test-results

  エラー時のスクリーンショット保存先

## テスト要件

以下のテスト要件を満たすテストケースを作成。

### トップページ

1. h1タグのテキストが”h1ですよ”になっている
2. h2タグのテキストが”h2ですよ”になっている
3. リンククリックで「sample1」ページに遷移

### sample1ページ

1. 初期表示のh1が”エリアを選択してください。”と”都道府県”である
2. 初期表示のセレクトボックスの初期表示が”選択してください”である
3. "北海道"エリアを選択で都道府県に”北海道”が表示される
4. "東北"エリアを選択で都道府県に”青森県”が表示される
5. "関東"エリアを選択で都道府県に”千葉県”が表示される
6. "関西"エリアを選択で都道府県に”都道府県が未登録です。”が表示される


## コード生成

任意のページを開いてブラウザ上でテストを行うと自動でテストコードを生成します。
今回は手動でコード作成しましたが長いテストケースでは有用です。

以下のコードはローカル環境ですが、外部ページでも可能です。

```
npx playwright codegen localhost:3000/sample1/
```

## 参考
https://github.com/matsuoshi/nuxt-jest-playwright

https://www.cresco.co.jp/blog/entry/14335/