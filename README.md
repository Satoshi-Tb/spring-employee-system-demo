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
  * 非同期操作時のsetState実装はメモリリークの問題なし。警告は無視してよい。  
    公式で言及有り[^1]。V18から警告でなくなる。
[^1]:[Update to remove the "setState on unmounted component" warning #82](https://github.com/reactwg/react-18/discussions/82)
  * コンポーネントはもう少し細かく分割したほうがよいかもしれない。例えば、1行テキストや、ボタンなど。
  * Tailwind CSSを使う場合、共通CSSの扱いはどうするのが良いか。classを定義するか。
