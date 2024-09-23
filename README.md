# weather

## 参照
- [Gemini 関数呼び出しで Cloud Run を使用する方法](
https://codelabs.developers.google.com/codelabs/how-to-cloud-run-gemini-function-calling)
- [GSOD](https://console.cloud.google.com/marketplace/product/noaa-public/gsod)

## 概要

関数呼び出し機能を利用して、Geminiに過去日のデータへのアクセス権を付与します。
[Gemini 関数呼び出しで Cloud Run を使用する方法](
https://codelabs.developers.google.com/codelabs/how-to-cloud-run-gemini-function-calling)をクロ-ン、少し修正してコミットしている。
違いは、Geminiに現在ではなく、過去日のデータへのアクセス権を付与していることです。

## 機能

1. 過去データをシミュレートするために、3か所の過去日の天気情報を返す気象サービスのエンドポイントを作成する。
2. 関数呼び出しを使用して過去日の天気情報を取得する。
3. Gemini を利用したチャットアプリを作成する。

## 特徴

1. Geminiの関数呼び出し
2. BigQueryの利用
3. Gemini 搭載の chatbot アプリを Cloud Run サービスとしてデプロイ

## デモ

https://frontend-wjgwi4dszq-uc.a.run.app

次のプロンプトを入力すると出力する。
```
What's is the Weather in Tokyo 2023-12-31 ?
What's is the Weather in Tokyo Intl 2023-12-31 ?
What's is the Weather in Tokyo Heliport 2023-12-31 ?
```
## TODO
- BigQueryの利用