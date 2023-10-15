---
sidebar_position: 2
---

# 規程・ガイドライン集の更新ガイドライン

このガイドラインは、規程・ガイドライン集の各種ドキュメント類および[公開サイト](https://regulations.sre-next.org)を更新するための開発フローについて記載します。

## 公開サイトの構成について

[公開サイト](https://regulations.sre-next.org)は AWS Amplify でホストされた静的サイトです。[Docusaurus](https://docusaurus.io/)という、ドキュメント公開用の静的サイトジェネレーターを利用しています。

## サイト更新の大まかな流れ

[GitHub Flow](https://docs.github.com/ja/get-started/quickstart/github-flow)に準拠して開発します。

main ブランチが[公開サイト](https://regulations.sre-next.org)と同期されるため、原則として main ブランチからブランチを切ってローカル開発し、main ブランチに対してプルリクエストを出してください。

作成するブランチの命名規則は厳密には定めませんが、何を行っているかわかりやすい名前で作成し、他のブランチや過去のブランチ名と極力かぶらないように作成してください。

プルリクエストのレビューおよびマージは原則として法人の理事が実施します。

## ローカル開発

[本リポジトリ](https://github.com/sre-next/corporate-regulations)をクローンし、 `npm install`後に、 `npm run start`することで、開発環境が立ち上がります。
フォルダー名やドキュメントのファイル名の変更をする際は、一度開発環境を停止してから変更しないとエラーが出ます。

Docusaurus を使ったサイト開発方法について、詳しくは Docusaurus の[ドキュメント](https://docusaurus.io/docs/category/getting-started)を参照してください。

## プルリクエスト～デプロイ

ローカルで開発後、main ブランチに対してプルリクエストを出してください。マージされると[公開サイト](https://regulations.sre-next.org)にも自動で変更が反映されます（ビルド&デプロイに数分かかります）
