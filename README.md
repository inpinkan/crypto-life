
## v1.0.15 JPYC Chapter
- 既存LOGの見た目・復習機能を維持し、各編の先頭LOGだけに `↻` 頭出しマークを付ける基盤を追加。
- Wallet編は LOG 002 から「Wallet編を最初から再プレイ」が可能。Wallet編クリア済みの時だけ表示。
- 再プレイ中は本編セーブを上書きせず、途中終了または再プレイ完了で本編の最新進行へ復帰。
- `MOBILE_TEST.txt` / `mobile_test_server.bat` は本体未参照の補助ファイルだったため削除。

# CRYPTO LIFE v1.0.15 — JPYC Chapter Update

- 起動順を「フェイドイン → 保持 → フェイドアウト → ローディング」に変更。
- 添付のオープニング画像とローダーキャラクター画像を採用。
- ローダーキャラクターは読み込み進捗に合わせてバー上を移動。
- 全画像プリロードを廃止し、現在章（prologue_wallet）で必要な画像だけをプリロード。
- Wallet編の物語・会話内容は維持。

# CRYPTO LIFE v1.0.12 — Dialogue Chapter Foundation

## 主な更新
- 序盤を「一本道に見える」構成へ再設計。
- 主人公の疑問 → NPCの回答 → 主人公の確認 → 追加説明、という会話のキャッチボールへ全面改稿。
- Wallet / Address / 秘密鍵 / リカバリーフレーズ / HashPort Wallet の説明を初心者向けに細分化。
- 選択肢は序盤では原則1つ。知識が増えた後に分岐を増やせる設計へ。
- 「会話を終える」を「会話をやり直す」へ変更し、現在の会話の先頭へ戻る動作に修正。
- 会話・物語を `chapters/prologue_wallet.js` に分離。今後 `jpyc.js`、`nft.js` 等の章ファイルを追加可能。
- HTML本体から旧序章・Wallet会話コードを削除。旧会話と新会話の二重保持はしていない。
- 画像アセットは変更していない。

## ファイル構成
- `index.html` — ゲームエンジン/UI/状態管理
- `chapters/prologue_wallet.js` — 序章〜Wallet編の会話・進行


## v1.0.8 Dialogue Engine Fix
- v1.0.7をベースに会話進行エンジンを監査・修正。
- 初回再生で主人公だけ／店主だけが連続して見える原因だった「二重クリック進行」を削除。
- 旧：#text と #dialogBox の両方が advanceDialogue() を呼ぶ重複経路。
- 新：#dialogBox の1経路だけで会話進行を管理。
- 文字表示中のクリックは「全文表示」のみ。次のクリックで「次の1セリフ」へ進む。
- 1操作=1セリフ進行へ統一。
- typeState を導入し、タイプライター状態と会話位置の同期を一本化。
- finishDialogue/showLine 時にタイプライター状態を明示リセット。
- 「ひとつ前へ」はセリフ戻りではなく場面戻りなので「ひとつ前の場面へ」に表記変更。
- chapters/prologue_wallet.js の会話データは変更していない。
- 旧・重複したクリック経路は残していない。


## v1.0.12 Preload + Dialogue Stability
- v1.0.8をベースに更新。
- 起動直後にCRYPTO LIFE専用LOADING画面を追加。
- 初期背景・キャラクター画像をプリロードし、完了するまでゲーム操作を開始できない。
- 読み込み完了後のみ「TAP TO START」を有効化。
- chapterスクリプトはHTMLの通常script読込完了後にpreload処理へ入るため、会話データ未登録状態で開始しない。
- 会話クリックに短い入力ロックを追加。連打入力を蓄積せず、前のクリックを次セリフへ持ち越さない。
- タイプライター中のクリックは全文表示のみ。その後の独立したクリックで次のセリフへ進む。
- showLine開始時にも短い入力ガードを入れ、話者・本文・立ち絵更新中の連打競合を防止。
- 会話データ、ストーリー、画像ファイル自体は変更していない。
- v1.0.8の一本化済み会話進行経路を維持し、旧・重複クリック経路は追加していない。


## v1.0.12 修正
- 「ひとつ前へ」は同一会話内では直前の1発言へ戻るよう修正。
- クロピー初登場会話を維持し、LOG確認後に会話へ戻る導線を追加。
- HashPort Wallet公式案内ITEMに公式URLを設定。既存セーブの取得済みITEMも移行時に補完。
- Wallet編の終端を明示し、LOG確認で行き止まりにならないよう修正。
- HTML/章ファイルの表示バージョンをv1.0.12へ統一。



## v1.0.13 Opening Separation / Loader Mascot Cutout
- v1.0.12をベースに、指定された微調整2点のみを実施。
- フェイドイン → 保持 → フェイドアウト → ローディングの順序は維持。
- オープニング/ローディング中は既存の開始画面（NEW GAME / CONTINUE / SETTINGS）を完全非表示。
- `TAP TO START` を押した時点ではじめて既存開始画面を表示するため、フェイド中への割り込みを解消。
- ローディング用キャラクターは画像外周につながる黒背景だけを透明化。
- キャラクター中央の黒い顔は保持し、四角い背景だけを除去。
- 旧 `loader_icon.png` は残さず `loader_icon_transparent.png` へ完全置換。
- 現在章だけをプリロードするv1.0.12の方式はそのまま維持。
- Wallet編の会話・進行内容には変更なし。


## v1.0.15 additions
- Added JPYC chapter with chapter overview before spending money.
- Covers JPYC, Ethereum / Polygon / Avalanche, gas and native tokens.
- Adds JPYC EX flow, POL purchase/withdrawal learning path, and wallet confirmation.
- Added JPYC replay head at LOG 007 after chapter completion.
- Existing localStorage save key is unchanged for backward compatibility.
