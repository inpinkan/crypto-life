// CRYPTO LIFE v1.0.49
// 序章〜Wallet編。物語・会話をHTML本体から分離し、今後「JPYC編」「NFT編」などを追加できる構成。
function begin(){refresh();startAudio();s.history=[];claimDailyBonus();if(s.chapter===0)go(homeIntro);else go(resume)}
function resume(){
 if((s.completedChapters||[]).includes('metamaskJpyc')||s.metamaskJpycDone)return metamaskJpycComplete();
 if((s.completedChapters||[]).includes('convenienceJpyc')||s.convenienceJpycDone)return metamaskJpycStart();
 if((s.completedChapters||[]).includes('bitcoinIntro')||s.bitcoinIntroDone)return convenienceJpycStart();
 if((s.completedChapters||[]).includes('metamaskFront')||s.metamaskFrontDone)return bitcoinIntroStart();
 if((s.completedChapters||[]).includes('walking'))return s.nameRevealDone?metamaskFrontStart():walkingNameAsk();
 if((s.completedChapters||[]).includes('security'))return walkingStart();
 if((s.completedChapters||[]).includes('meeting'))return securityStart();
 if((s.completedChapters||[]).includes('jpyc')){
  if(!s.jpycExchangeLinkReviewed)return jpycExchangeLinkReview();
  return meetingStart();
 }
 if((s.completedChapters||[]).includes('wallet'))return jpycStart();
 s.walletPrepared?afterWallet():townArrival()
}

function homeIntro(){
 scene('home','heroThink',null,'left','Crypto Townへ行ってみよう');
 dialogue([
  [s.name,'「最近、ニュースでもSNSでも“暗号資産”って言葉をよく見るようになったな。」'],
  [s.name,'「Bitcoinは名前くらい知ってる。NFTも聞いたことはある。でも……何がどうつながってるのかは全然分からない。」'],
  [s.name,'「そういえば大学で、“分からないならCrypto Townへ行ってみれば？”って話してる人がいたっけ。」'],
  [s.name,'「見るだけならタダだし……行ってみるか。」']
 ],[['Crypto Townへ行ってみる',()=>{s.chapter=1;unlockLog(1);save(true);townArrival()}]])
}

function townArrival(){
 scene('townDay','heroNormal',null,'left','まずは街を見てみよう');
 dialogue([
  [s.name,'「ここがCrypto Townか。もっと怪しい場所を想像してたけど、普通に店が並んでるな。」'],
  [s.name,'「……BOOK、WALLET、NFT、JNC。読めるけど、意味が分からない看板の方が多い。」'],
  [s.name,'「ん？ あのWALLETって店、“はじめての人はこちら”って書いてある。」'],
  [s.name,'「Walletって財布だよな。暗号資産と何の関係があるんだろう。まずはあそこに聞いてみよう。」']
 ],[['WALLETの店へ入る',walletDoor]])
}

function townLook(){
 scene('townDay','heroNormal',null,'left','WALLETの店へ行ってみよう');
 dialogue([
  [s.name,'「分からない言葉ばかりだけど、全部を一度に覚える必要はないよな。」'],
  [s.name,'「まずは入口に“はじめての人はこちら”って書いてあったWALLETの店。そこから聞いてみよう。」']
 ],[['WALLETの店へ入る',walletDoor]])
}

function walletDoor(){
 scene('wallet','heroNormal','walletOwner','right','店主にWalletのことを聞いてみよう');
 if(!s.met.walletOwner){
  s.met.walletOwner=true;save(true);
  dialogue([
   ['店主','「いらっしゃい！ ……その顔、初めて来たな？」'],
   [s.name,'「はい。Crypto Town自体が初めてです。入口に“はじめての人はこちら”ってあったので来たんですけど……。」'],
   ['店主','「なるほど。それならここで合ってる。俺はこのWallet案内所の店主だ。みんなそのまま“店主”って呼ぶから、君もそれでいいぞ。」'],
   [s.name,'「じゃあ店主さん。いきなりなんですけど……Walletって、普通の財布とは違うんですか？」'],
   ['店主','「いい質問だ。名前のせいで、最初はそこを勘違いしやすい。順番に話そう。」']
  ],[['Walletの話を聞く',walletIntro]])
 }else{
  dialogue([
   ['店主','「お、戻ってきたな。さっきの続きからやるか？」'],
   [s.name,'「はい。まだ頭の中で整理しきれてないので、もう少し教えてください。」']
  ],[['Walletの話を続ける',walletIntro]])
 }
}

function walletIntro(){
 scene('wallet','heroThink','walletOwner','right','Walletの役割を知ろう');unlockLog(2);s.skills[0][1]=true;save(true);
 dialogue([
  [s.name,'「Walletって聞くと、スマホの中にBitcoinとかJPYCを入れて持ち歩くイメージなんですけど。」'],
  ['店主','「そう思うよな。でも実は、“コインそのものがWalletアプリの中に入っている”わけじゃないんだ。」'],
  [s.name,'「え？ Walletなのに、中に入ってないんですか？」'],
  ['店主','「そこが最初の大事なところだ。暗号資産の残高や取引の記録は、基本的にはBlockchain側に記録されている。Walletは、その記録にアクセスして、自分の資産を確認したり、受け取ったり、送ったりするための道具なんだ。」'],
  [s.name,'「……じゃあWalletは“コインを入れる箱”というより、“Blockchainにある自分の資産を扱うための入口”？」'],
  ['店主','「その理解でいい。最初はそれで十分だ。」'],
  [s.name,'「でも今、さらっとBlockchainって言いましたよね。そこもちゃんとは分かってないです。」'],
  ['店主','「はは、当然だ。今は“みんなで確認できる取引記録がある場所”くらいに思っておけばいい。仕組みそのものはBOOKの店で詳しく聞ける。今日はWalletを使うために必要なところから覚えよう。」'],
  [s.name,'「なるほど。全部を一気に覚えるんじゃなくて、必要になった順に覚えていけばいいんですね。」'],
  ['店主','「そういうこと。じゃあ次は、Walletを使うと必ず目にする“Address”の話をしよう。」']
 ],[['Addressって何ですか？',addressTalk]])
}

function addressTalk(){
 scene('wallet','heroThink','walletOwner','right','Addressの役割を知ろう');unlockLog(3);s.skills[1][1]=true;save(true);
 dialogue([
  [s.name,'「Addressって、英語の住所ですよね。暗号資産にも住所があるんですか？」'],
  ['店主','「かなり近い。誰かから暗号資産を受け取る時に、“ここへ送ってください”と相手へ伝える宛先がAddressだ。」'],
  [s.name,'「銀行の口座番号みたいな感じ？」'],
  ['店主','「役割のイメージとしては近い。ただし、Addressは長い英数字になっていたり、使うBlockchainによって形式が違ったりする。だから送る時は“文字が合っているか”だけじゃなく、“どのネットワークで送るのか”も大事になる。」'],
  [s.name,'「ネットワークまで？ 間違えたらどうなるんです？」'],
  ['店主','「取り戻すのが難しくなることがある。だから実際に送る時は、宛先とネットワークを一緒に確認する。このゲームでも後で実際にやるから、その時に一つずつ見よう。」'],
  [s.name,'「Addressは、人に教えても大丈夫なんですか？」'],
  ['店主','「受け取りに使うものだから、基本的には相手へ伝えて使う情報だ。ただし――ここで絶対に混ぜちゃいけないものがある。」'],
  [s.name,'「……秘密鍵とか？」'],
  ['店主','「お、言葉は聞いたことがあるんだな。そう。Addressと秘密鍵はまったく扱いが違う。」']
 ],[['秘密鍵との違いを聞く',secretTalk]])
}

function secretTalk(){
 scene('wallet','heroSurprise','walletOwner','right','公開情報と秘密情報を区別しよう');unlockLog(4);s.skills[2][1]=true;save(true);
 dialogue([
  [s.name,'「Addressは相手に教えていい。でも秘密鍵はダメ……ということですか？」'],
  ['店主','「その通り。まずそこをはっきり分けよう。Addressは“受け取り先として見せる情報”。秘密鍵やリカバリーフレーズは“資産を動かす権限につながる秘密情報”だ。」'],
  [s.name,'「もし秘密鍵を誰かに教えたら？」'],
  ['店主','「相手に資産を動かされる危険がある。だから、親切そうなサポート担当を名乗る相手でも渡さない。DMで聞かれても渡さない。入力を促す怪しいサイトにも入れない。」'],
  [s.name,'「公式っぽい画面でも？」'],
  ['店主','「“公式っぽい”と“公式”は別物だ。検索広告や偽サイトが使われることもある。だから公式の入口を自分で確認する癖が大切なんだ。」'],
  [s.name,'「ちょっと怖くなってきました。」'],
  ['店主','「怖がらせたいわけじゃないぞ。ルールを知らずに触る方が怖いんだ。逆に“何を見せてよくて、何を絶対に渡さないか”が分かれば、かなり防げる。」'],
  [s.name,'「Addressは公開側。秘密鍵やリカバリーフレーズは秘密側。まずはこれを忘れない。」'],
  ['店主','「うん。それで十分。じゃあ、最初に実際に触るWalletを一つ紹介しようか。」']
 ],[['最初のWalletについて聞く',hashportTalk]])
}

function hashportTalk(){
 addItem({type:'link',name:'HashPort Wallet 公式案内',desc:'店主から受け取ったWeb3リンクアイテム。Walletを実際に準備する段階で、検索結果ではなく公式の入口を確認するために使う。',url:'https://wallet.hashport.com/'});
 scene('wallet','heroThink','walletOwner','right','最初のWallet候補を知ろう');unlockLog(5);
 dialogue([
  [s.name,'「初心者なら、最初はどのWalletを使えばいいんですか？」'],
  ['店主','「Walletにはいろいろある。最初から全部を比較すると余計に分からなくなるから、このゲームの序盤ではHashPort Walletを使って基本操作を覚えてみよう。」'],
  [s.name,'「どうしてそれなんです？」'],
  ['店主','「序盤ではまず、Walletを開く、Addressを確認する、暗号資産を受け取る、使う――この流れに集中したいからだ。秘密鍵やリカバリーフレーズを自分で管理する自己管理型Walletは、その意味を理解してから触った方がいい。」'],
  [s.name,'「じゃあHashPort Walletだけ覚えればいい？」'],
  ['店主','「いや、それも違う。これは“最初の練習相手”だ。後でMetaMaskのような自己管理型Walletも扱う。その時には、管理する責任がどう変わるのかも比べよう。」'],
  [s.name,'「段階を踏むわけですね。」'],
  ['店主','「そう。それと、さっき偽サイトの話をしただろ？ 公式の案内を探し直さなくていいように、“HashPort Wallet 公式案内”を君のITEMに入れておいた。」'],
  [s.name,'「ITEMって、ゲームの持ち物だけじゃないんだ。」'],
  ['店主','「この街では現実で使うWeb3の道具箱にもなる。必要になった時にそこから確認すればいい。」'],
  [s.name,'「ここまで聞いたら、実際にWalletを触ってみたくなってきました。」']
 ],[['HashPort Walletを準備してみる',prepareWallet]])
}

function prepareWallet(){
 if(!s.walletPrepared){s.walletPrepared=true;s.skills[3][1]=true;gain(45,2,1,1,6)}
 scene('wallet','heroSmile','walletOwner','right','次はJPYCを知ろう');
 dialogue([
  ['店主','「よし。これで最初のWalletを準備するところまで来たな。」'],
  [s.name,'「最初は“アプリにコインを入れるだけ”だと思ってたのに、AddressとかBlockchainとか、意外と奥がありますね。」'],
  ['店主','「でも一つずつなら整理できただろ？ Walletは資産を扱う入口。Addressは受け取り先。秘密鍵やリカバリーフレーズは他人に渡さない。」'],
  [s.name,'「はい。まだBlockchainはよく分かってないけど、今すぐ全部分からなくてもいいってことも分かりました。」'],
  ['店主','「その調子だ。次はWalletへ実際に何かを受け取ってみよう。この街なら、まずJPYCだな。」'],
  [s.name,'「JPYC……また新しい言葉が出てきた。」'],
  ['店主','「ははっ。だから面白いんだ。今日はここまで。街へ戻れば、次に何を調べればいいか見えてくるさ。」']
 ],[['街へ戻る',()=>{s.chapter=2;save(true);afterWallet()}]])
}

function afterWallet(){
 scene('townDay','heroSmile','kuroppy','right','次はJPYCを知ろう');
 if(!s.met.kuroppy){
  s.met.kuroppy=true;save(true);
  dialogue([
   [s.name,'「Walletは準備できた。次はJPYCか……。どこで聞けばいいんだろう。」'],
   ['クロピー','「その顔は、“次にどこへ行けばいいんだ”って顔だね！」'],
   [s.name,'「うわっ！ ……しゃべった？」'],
   ['クロピー','「しゃべるよ！ ぼくはクロピー。Crypto Townで迷った人にヒントを届ける案内役！」'],
   [s.name,'「ちょうどよかった。店主から“次はJPYC”って言われたんだけど、そもそもJPYCが何なのか分からなくて。」'],
   ['クロピー','「じゃあ次はそこからだね。あと、さっき店主から聞いたWalletの話はLOGに整理されてるよ。後で“あれ何だっけ？”ってなったら読み返してみて。」'],
   [s.name,'「会話を全部暗記しなくていいのは助かる……。」'],
   ['クロピー','「でも、何気ない一言が後で役に立つこともあるからね。気になった話は覚えておくといいかも！」']
  ],[['LOGを確認してみる',openLogTab]])
 }else{
  dialogue([
   ['クロピー','「おかえり！ Walletの話で忘れたところがあればLOGで確認できるよ。」'],
   [s.name,'「まず一度整理してから、JPYCのことを調べてみるよ。」']
  ],[['LOGを確認する',openLogTab]])
 }
}

function openLogTab(){
 logReturnFn=afterLogReview;
 showPanel('log');
 toast('取得したLOGを押して復習したら、「会話へ戻る」でクロピーとの会話を続けられます。');
}

function afterLogReview(){
 scene('townDay','heroThink','kuroppy','right','次はJPYCを知ろう');
 dialogue([
  [s.name,'「LOG、思ったより細かく残ってるんだな。WalletとAddress、それから秘密情報の違いも後から確認できる。」'],
  ['クロピー','「そうそう。全部を一度で覚えなくて大丈夫。町で聞いた話をLOGで整理して、必要になった時に思い出せばいいんだよ。」'],
  [s.name,'「店主が“次はJPYC”って言ってたのも覚えてる。Walletを準備しただけじゃ、まだ何も受け取ってないもんな。」'],
  ['クロピー','「いいところに気づいたね。次は“JPYCってそもそも何？”から調べると、Walletを何のために使うのかがもっとつながってくるよ。」'],
  [s.name,'「よし。次はJPYCだ。」']
 ],[['Wallet編を終えて次へ進む',walletChapterComplete]])
}

function walletChapterComplete(){
 if(replay?.active&&replay.chapter==='wallet'){
  scene('townDay','heroSmile','kuroppy','right','Wallet編 REPLAY COMPLETE');
  dialogue([
   ['クロピー','「Wallet編の復習はここまで！ 必要になった時は、LOGの ↻ からまた最初に戻れるよ。」'],
   [s.name,'「一度聞いた話でも、もう一回やると見え方が変わるな。」'],
   ['クロピー','「じゃあ、本編の続きへ戻ろう！」']
  ],[['最新の進行へ戻る',finishChapterReplay]]);
  return;
 }
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('wallet'))s.completedChapters.push('wallet');
 s.chapter=2;
 save(true);

 scene('townDay','heroSmile','kuroppy','right','Wallet編 COMPLETE');
 dialogue([
  ['クロピー','「ここまででWallet編は終了だよ！ Walletが“コインを入れる箱”ではなく、ブロックチェーン上の資産を扱うための入口だってこと、最初よりかなり見えてきたんじゃないかな。」'],
  [s.name,'「うん。最初はWalletって聞いて、本当に財布みたいなものだと思ってた。でもAddressや秘密情報のことまで聞くと、ただのアプリじゃないって分かったよ。」'],
  ['クロピー','「それで十分！ 一度で全部暗記する必要はないよ。忘れた時はITEMやLOGに戻ればいいし、前に聞いた話が後の事件や選択肢につながることもあるからね。」'],
  [s.name,'「そういえば、次はJPYCだったよな。名前は聞いたことがあるけど……Bitcoinみたいな“仮想通貨”と同じものなのかな？」'],
  ['クロピー','「そこ、次の編でちゃんと整理しよう。JPYCと暗号資産は何が違うのか、JPYCはどこで手に入れるのか、“取引所で買うものなの？”って疑問も順番に見ていくよ。」'],
  [s.name,'「おすすめの取引所とかも、そのうち分かる？」'],
  ['クロピー','「うん。ただし“おすすめ”は人によって変わるし、サービスの取扱状況も変わるから、名前だけで決めないこと。次の編では、まず取引所ってそもそも何をする場所なのかから比べよう。」'],
  ['クロピー','「その前に、ここまでの進行を保存しておこう！ 画面右上のSAVEを押してね。保存できたらWallet編は一区切り。次は――JPYC編！」']
 ],[['JPYC編へ進む',jpycStart]]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
 const dialog=document.querySelector('#dialogBox');
 if(dialog && !document.querySelector('#walletCompleteNote')){
   const note=document.createElement('div');
   note.id='walletCompleteNote';
   note.className='chapter-complete';
   note.innerHTML='WALLET編 COMPLETE ✓<br>NEXT：JPYC編 — 「JPYCと暗号資産の違い」「JPYCはどこで手に入れる？」「取引所って何？」';
   dialog.appendChild(note);
 }
}
