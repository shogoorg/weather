# weather

## 参照
- [Gemini 関数呼び出しで Cloud Run を使用する方法](
https://codelabs.developers.google.com/codelabs/how-to-cloud-run-gemini-function-calling)
- [GSOD](https://console.cloud.google.com/marketplace/product/noaa-public/gsod)

## 概要

関数呼び出し機能を利用して、Geminiに毎年最終日のデータへのアクセス権を付与します。

## 機能

1. 過去データをシミュレートするために、東京の3か所の毎年最終日の天気情報を返す気象サービスのエンドポイントを作成する。
2. 関数呼び出しを使用して毎年最終日の天気情報を取得する、Gemini を利用したチャットアプリを作成する。

## 特徴

1. Geminiの関数呼び出し
2. Google BigQuery API の利用
3. Gemini 搭載の chatbot アプリを Cloud Run サービスとしてデプロイする