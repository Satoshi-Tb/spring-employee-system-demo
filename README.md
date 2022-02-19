# spring-employee-system-demo

## SpringとReactを用いたCRUDアプリケーション

学習元動画:[Spring Boot + React Full Stack Web Application with Tailwind CSS](https://www.youtube.com/watch?v=J3iiiLrT1ic&t=4217s)

### 技術スタック
* バックエンド（APIサーバー）
  * Java
  * Spring Boot
  * H2データベース
* フロントエンド
  * React
  * Tailwind CSS
  
### 学習メモ
* リポジトリ構成
  * バックエンドとフロントエンドを同一リポジトリに配置
  * sparse-checkout 使って、バックエンド、フロントエンド関心のある部分だけローカルで編集
* バックエンド
  * DB操作はJPAで実施。MyBatisとは異なり、デフォルトではSQL不要。
  * モデルとエンティティを分ける。
    * モデル ビュー側で利用。
    * エンティティ DB操作で使用。
* フロントエンド
