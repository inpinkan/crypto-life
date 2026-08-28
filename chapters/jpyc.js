// CRYPTO LIFE v1.0.21
// JPYC編：JPYC・チェーン・ガス代・取引所・送金を、実体験と会話でつなぐ。

function jpycStart(){
 scene('townDay','heroThink','kuroppy','right','JPYC編でやることを確認しよう');
 unlockLog(7);
 dialogue([
  ['クロピー','「JPYC編へようこそ〜♪ 今回はちょっぴり長いけど、だいじょうぶ！ 終わるころにはWallet・チェーン・ガス代・取引所・送金が、ぜ〜んぶ一本につながるよ🐾」'],
  [s.name,'「いきなり情報量が多そうだな……。」'],
  ['クロピー','「だから最初に目次を見よっ♪ 今回は途中で“実際にお金を使う場面”もあるから、先に全体を知ってから進もうね。」'],
  ['クロピー','「1. JPYCってなに？　2. JPYCの3つのチェーン　3. 今回はPolygon版を使う　4. JPYC EXで約1,000円分を発行　5. Walletで確認　6. ガス代とPOL　7. 取引所でPOLを用意　8. WalletへPOLを送金　9. WalletでJPYCとPOLを確認。」'],
  [s.name,'「つまり、お金を使うのはJPYCの発行とPOLの購入？」'],
  ['クロピー','「そう。目安はJPYCが約1,000円、POLも練習用として約1,000円。合計で約2,000円を使う想定だよ。ただし金額や最低数量、サービスの条件は変わることがあるから、実際の画面を必ず確認してね。」'],
  [s.name,'「ゲームに2,000円払うわけじゃなくて、JPYCとPOLが自分の資産として残るんだよね。」'],
  ['クロピー','「その通り。しかも、いきなり支払いへ進まない。まず“何のために使うのか”を理解してからだよ。」']
 ],[['JPYCって何？',jpycBasics]])
}

function jpycBasics(){
 scene('townDay','heroThink','kuroppy','right','JPYCの正体を知ろう');
 dialogue([
  [s.name,'「JPYCって、Bitcoinみたいに値段が上がったり下がったりする暗号資産なの？」'],
  ['クロピー','「JPYCは、日本円と1:1で価値が連動するように設計された日本円建てステーブルコインだよ。ざっくり言えば、“ブロックチェーン上で扱えるデジタルな円”に近い感覚。」'],
  [s.name,'「1 JPYCなら、だいたい1円ということ？」'],
  ['クロピー','「JPYC EXでは日本円と1:1で発行・償還される仕組みだよ。Bitcoinみたいに値上がりを期待して持つものとは役割が違うんだ。」'],
  [s.name,'「じゃあ銀行の残高と同じ？」'],
  ['クロピー','「そこも少し違う。JPYCはブロックチェーン上のトークン。Walletで持って、送ったり受け取ったり、対応サービスで使ったりできる。」'],
  [s.name,'「なるほど。“円っぽい価値”だけど、動く場所はブロックチェーンなんだ。」'],
  ['クロピー','「そう！ そして、ここから今日の本題。“どのブロックチェーンにいるJPYCなのか”が大事になる。」']
 ],[['JPYCのチェーンを見てみる',jpycChains]])
}

function jpycChains(){
 scene('townDay','heroSurprise','kuroppy','right','同じJPYCでもチェーンが違う？');
 dialogue([
  ['クロピー','「現在のJPYCは、Ethereum・Polygon・Avalancheの3つのチェーンに対応しているよ。」'],
  [s.name,'「JPYCは一つなのに、3種類あるってこと？」'],
  ['クロピー','「価値の基準は同じJPYC。でも“どのチェーン上にあるか”が違う。前にWallet編で“送る時はネットワークも確認しよう”って聞いたの覚えてる？」'],
  [s.name,'「ああ。Addressだけじゃなくてネットワークも確認するって話。」'],
  ['クロピー','「その“ネットワーク”を、ここからはもう少し細かく“チェーン”として見ていこう。」'],
  [s.name,'「Walletのトークンアイコンの右隅に、小さいマークが付いてることあるよね。」'],
  ['クロピー','「そこ！ 大きいアイコンは“何のトークンか”。右隅の小さいマークは“どのチェーンにいるか”を見る目印になることが多いんだ。」'],
  ['クロピー','「JPYCでも、EthereumならETH、PolygonならPOL、AvalancheならAVAXという、そのチェーンを動かす暗号通貨がある。」'],
  [s.name,'「チェーンのマークになってる暗号通貨が、そのチェーンの手数料にも使われる？」'],
  ['クロピー','「基本はその理解でOK！ トークンを動かす時のネットワーク手数料、いわゆる“ガス代”に使われるんだ。」']
 ],[['3つを整理する',chainFuelTalk]])
}

function chainFuelTalk(){
 scene('townDay','heroThink','kuroppy','right','チェーンとガス代を結びつけよう');
 dialogue([
  ['クロピー','「整理すると――EthereumでJPYCを動かすならETH、PolygonならPOL、AvalancheならAVAX。JPYCに限らず、そのチェーン上のトークンを動かす時は、基本的にチェーンの手数料用通貨が必要になる。」'],
  [s.name,'「JPYCを1,000円分持ってても、POLが0ならPolygon上で自由に送れないことがあるのか。」'],
  ['クロピー','「そう。これが初心者がハマりやすいところ。トークンはあるのに“燃料”がない状態だね。」'],
  [s.name,'「右隅の小さいマークを見る意味がやっと分かってきた。」'],
  ['クロピー','「ちなみにWalletやサービスによっては“ガスレス”で、サービス側が手数料を負担してくれる場合もある。でも、それは基本ルールが消えたわけじゃない。まずは“本来はチェーンの手数料用通貨が必要”と覚えておこう。」'],
  [s.name,'「今回はPolygon版JPYCを使うから、JPYCとPOLの2つをWalletに用意するわけだ。」'],
  ['クロピー','「せいか〜い♪ じゃあ、まずJPYCから用意してみよっ！」']
 ],[['JPYC EXへ進む準備をする',jpycExIntro]])
}

function jpycExIntro(){
 addItem({type:'link',name:'JPYC EX 公式',desc:'JPYCの発行・償還を行う公式サービス。利用時はリンク先の条件・本人確認・対応チェーン・金額を必ず確認する。',url:'https://jpyc.co.jp/'});
 scene('townDay','heroReady','kuroppy','right','JPYC EXで発行する前に確認しよう');
 dialogue([
  ['クロピー','「ここから最初のお金を使う場面だよ。ドキドキするけど、ひとつずつ確認すれば大丈夫♪ JPYC EXで、今回はPolygon版JPYCを約1,000円分用意するのを目安にしよう。」'],
  [s.name,'「JPYC EXって取引所？」'],
  ['クロピー','「ちょっと違う。JPYC EXはJPYCの発行と償還を行う公式サービス。発行では日本円を入金して、自分が登録したWallet AddressへJPYCを発行してもらう。」'],
  [s.name,'「つまり“取引所でJPYCを買う”じゃなくて、“JPYC EXで発行する”なんだ。」'],
  ['クロピー','「そう。登録や本人確認が必要になるし、実際の最低金額や手順はサービス側で変更されることがある。ITEMに公式リンクを入れたから、画面の案内を優先してね。」'],
  ['クロピー','「そしてチェーン選択では“Polygon”を確認。EthereumやAvalancheを選ぶと、この後用意する手数料用通貨も変わるよ。」'],
  [s.name,'「今回はJPYC（Polygon）。ここは間違えない。」']
 ],[['JPYC EXを開いて発行してくる',jpycExAction],['まだお金は使わず説明を続ける',jpycExLearnOnly]])
}

function jpycExLearnOnly(){
 scene('townDay','heroNormal','kuroppy','right','実践はあとでもOK');
 dialogue([
  ['クロピー','「もちろん、今すぐ発行しなくても大丈夫。この先の流れだけ学んでから、あとで実践してもいいよ。」'],
  [s.name,'「先に全部理解してから戻ってくるのもありなんだな。」'],
  ['クロピー','「うん。実際のお金を動かす時は“分からないまま押す”をしないことが一番大事。」']
 ],[['発行した場合の流れを見てみる',()=>afterJpycIssued(true)]])
}

function jpycExAction(){
 scene('townDay','heroReady','kuroppy','right','JPYC発行を確認しよう');
 dialogue([
  ['クロピー','「JPYC EXの公式画面で、Polygon版を選んで発行手続きを進めてね。Wallet Addressとチェーンを最後にもう一度確認！」'],
  [s.name,'「発行が終わったら、このゲームへ戻ってくればいい？」'],
  ['クロピー','「うん。反映に少し時間がかかる場合もあるから、慌てずWallet側も確認しよう。」']
 ],[['JPYCの発行ができた',()=>afterJpycIssued(false)],['いったん戻る',jpycExIntro]])
}

function afterJpycIssued(simulated=false){
 unlockLog(8);
 if(!simulated&&!s.jpycPrepared){s.jpycPrepared=true;gain(55,3,3,1,8)}
 scene('townDay',simulated?'heroThink':'heroSmile','kuroppy','right','WalletでJPYCを確認しよう');
 dialogue([
  [s.name,simulated?'「実際に発行したら、Walletではここを確認すればいいんだね。」':'「Walletを見たらJPYCがある！」'],
  ['クロピー','「まず大きいアイコンと残高を確認。そして今日のポイント、右隅のチェーンマークも見てみよう。」'],
  [s.name,'「Polygonのマーク。つまり、このJPYCはPolygonチェーン上にいる。」'],
  ['クロピー','「その通り。これで“JPYCを持つ”ところまではできた。でも、ここで一つ問題。」'],
  [s.name,'「……POLがない？」'],
  ['クロピー','「だいせいか〜い♪ JPYCを普通にオンチェーン送金する時のガス代に使う、Polygonの手数料用通貨POLも準備してみよう！」']
 ],[['POLはどこで手に入れる？',exchangeIntro]])
}

function exchangeIntro(){
 scene('townDay','heroThink','kuroppy','right','取引所の役割を知ろう');
 dialogue([
  [s.name,'「JPYCはJPYC EXで発行できたけど、POLはどこで手に入れるの？」'],
  ['クロピー','「ここで暗号資産取引所の出番だよ〜♪ 日本円を入金してPOLを買って、それを自分のWalletへ送るんだ。」'],
  [s.name,'「なるほど。取引所で買っただけだと、まだ自分のWalletにはないんだ。」'],
  ['クロピー','「そう。取引所の口座内にあるPOLを、自分のWallet Addressへ“出金・送付”して初めて、さっきのJPYCと同じWallet側で確認できる。」'],
  [s.name,'「どこの取引所を使う？」'],
  ['クロピー','「今回の候補はBITPOINTかOKJ。どちらを使う場合でも、“POLを現物で買えること”と“Polygonネットワークで自分のWalletへ送れること”を、その時点の公式画面で確認しよう。」'],
  ['クロピー','「取引所はルールが変わることがあるよ。出金最低数量、手数料、送付先登録後の待機時間などもあるから、ゲームの文章より公式画面を優先してね。」']
 ],[['BITPOINTを候補にする',bitpointPath],['OKJを候補にする',okjPath]])
}

function bitpointPath(){
 addBitpointItem();
 s.exchangeChoice='BITPOINT';save(true);
 exchangePurchaseTalk();
}

function okjPath(){
 addOkjItem();
 s.exchangeChoice='OKJ';save(true);
 exchangePurchaseTalk();
}

function exchangePurchaseTalk(){
 scene('townDay','heroReady','kuroppy','right','POLを購入しよう');
 const ex=s.exchangeChoice||'取引所';
 dialogue([
  ['クロピー',`「今回は${ex}を候補に進めよう。ここが2回目の“実際にお金を使う場面”だよ。」`],
  [s.name,'「目安は約1,000円分のPOLだったね。」'],
  ['クロピー','「うん。ただし、ガス代そのものに1,000円必要という意味じゃないよ。練習用の保有分としての目安。購入最低額や出金最低数量もあるから、実際の条件に合わせよう。」'],
  [s.name,'「日本円を入金して、POLを現物で買う。」'],
  ['クロピー','「うんうん♪ 今回はむずかしい取引はしなくて大丈夫！ “現物”でPOLを買えばOKだよ。買えたら、次は取引所から自分のWalletへ送ろう！」']
 ],[['POLを購入できた',withdrawPolTalk],['まだ購入せず流れだけ見る',withdrawPolTalk]])
}

function withdrawPolTalk(){
 scene('townDay','heroThink','kuroppy','right','取引所からWalletへPOLを送ろう');
 dialogue([
  ['クロピー','「ここは慎重にいこうね。まずHashPort WalletでPOLを選んで、“受け取る”を押してみて♪ 0xから始まるAddressが表示されたら、それをコピーしよう！」'],
  [s.name,'「この0xから始まるAddressを、取引所の送付先に入れるんだね。」'],
  ['クロピー','「そうそう♪ そして取引所側ではネットワークが“Polygon”になっていることも確認！ Addressとネットワークはセットでチェックだよ。」'],
  [s.name,'「POLを送るんだから、POLを選ぶだけじゃダメ？」'],
  ['クロピー','「うん。取引所によっては同じ銘柄でも複数ネットワークに対応することがあるの。だから“通貨名だけ”で決めず、0xから始まるAddressとPolygonの両方を確認してね。」'],
  [s.name,'「Wallet編で聞いた話がここで実際に出てくるんだ。」'],
  ['クロピー','「そう！ それから取引所側には、送付先登録後の待機時間や出金制限がある場合もある。すぐ送れなくても、無理に別ルートへ変えず公式案内を確認しよう。」'],
  [s.name,'「送金したらWallet側でPOLが増えるのを待つ。」'],
  ['クロピー','「その通り〜♪ チェーン上で処理されるから、反映まで少し時間がかかることもあるよ。あわてず待ってみようね。」']
 ],[['WalletへのPOL送金ができた',walletPolCheck],['今日は送金せず説明だけ進む',walletPolCheck]])
}

function walletPolCheck(){
 if(!s.polPrepared){s.polPrepared=true;gain(65,3,4,2,null)}
 s.skills[4][1]=true;save(true);
 scene('townDay','heroSmile','kuroppy','right','JPYCとPOLを並べて確認しよう');
 dialogue([
  [s.name,'「WalletにJPYCとPOLが並んだ。」'],
  ['クロピー','「やった〜♪ ここが今日のゴール！ 大きいJPYCアイコンは“使いたいトークン”。PolygonのPOLは“そのチェーンを動かす燃料”として使われるよ。」'],
  [s.name,'「同じWalletの中でも役割が違うんだな。」'],
  ['クロピー','「そう。そしてJPYCだけのルールじゃない。Ethereum上のトークンならETH、Avalanche上ならAVAX、BNB ChainならBNB……というように、チェーンごとの手数料用通貨がある。」'],
  [s.name,'「Wallet編で“ネットワークを確認”と言われた意味が、ようやく実感できた気がする。」'],
  ['クロピー','「それが今回の一番大事なところ。JPYCを覚えるだけじゃなく、“トークンはどのチェーンにいて、何をガス代に使うのか”まで見えるようになった。」']
 ],[['取引所リンクを確認する',jpycExchangeLinkReview]])
}

function jpycExchangeLinkReview(){
 scene('townDay','heroSmile','kuroppy','right','取引所リンクも持っておこう');
 dialogue([
  ['クロピー','「そうだっ♪ 最後に、取引所のリンクもITEMに入れておく？」'],
  [s.name,'「最初に使わなかった方も、あとで見られるようにできる？」'],
  ['クロピー','「もちろん！ BITPOINTとOKJ、必要な方だけでも、両方でもOKだよ。すでに持っているリンクは重複しないから安心してね🐾」']
 ],[
  ['BITPOINTをITEMへ追加',()=>{addBitpointItem();jpycExchangeLinkReviewDone()}],
  ['OKJをITEMへ追加',()=>{addOkjItem();jpycExchangeLinkReviewDone()}],
  ['両方ITEMへ追加',()=>{addBitpointItem();addOkjItem();jpycExchangeLinkReviewDone()}],
  ['このままでOK',jpycExchangeLinkReviewDone]
 ])
}

function addBitpointItem(){
 addItem({type:'link',name:'BITPOINT 公式',desc:'POLなどを扱う国内暗号資産取引所の候補。購入・出金条件は利用時点の公式画面で確認する。',url:'https://www.bitpoint.co.jp/'});
}

function addOkjItem(){
 addItem({type:'link',name:'OKJ 紹介リンク',desc:'POLなどを扱う国内暗号資産取引所の候補。紹介リンクから口座開設へ進める。購入・出庫条件は利用時点の公式画面で確認する。',url:'https://www.okj.com/account/join?invitation=9084E81&type=0'});
}

function jpycExchangeLinkReviewDone(){
 s.jpycExchangeLinkReviewed=true;save(true);
 scene('townDay','heroSmile','kuroppy','right','JPYC編をまとめよう');
 dialogue([
  ['クロピー','「これで取引所の案内もバッチリ♪ ITEMからいつでも見返せるよ。」'],
  [s.name,'「よし。最後にJPYC編をまとめよう。」']
 ],[['JPYC編をまとめる',jpycChapterComplete]])
}

function jpycChapterComplete(){
 unlockLog(9);
 if(replay?.active&&replay.chapter==='jpyc'){
  scene('townDay','heroSmile','kuroppy','right','JPYC編 REPLAY COMPLETE');
  dialogue([
   ['クロピー','「JPYC編の復習はここまで！ JPYC・チェーン・ガス代・取引所のつながり、思い出せた？」'],
   [s.name,'「今度は右隅のチェーンマークをちゃんと見るよ。」'],
   ['クロピー','「じゃあ、本編の最新地点へ戻ろう！」']
  ],[['最新の進行へ戻る',finishChapterReplay]]);
  return;
 }
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('jpyc'))s.completedChapters.push('jpyc');
 s.chapter=3;save(true);
 scene('townDay','heroSmile','kuroppy','right','JPYC編 COMPLETE');
 dialogue([
  ['クロピー','「JPYC編 COMPLETE〜！ やったね♪ 今回は長かった〜！」'],
  [s.name,'「でもJPYCだけじゃなくて、Wallet、チェーン、ガス代、取引所、送金がつながった。」'],
  ['クロピー','「それが狙い！ “このトークンは何？”だけじゃなく、“どのチェーン？ 手数料は何？”まで見る癖が付けば、Web3の見え方がかなり変わるよ。」'],
  [s.name,'「JPYCにはEthereum・Polygon・Avalancheがあって、今回はPolygon版を使った。だからPOLを用意した。」'],
  ['クロピー','「かんぺき〜♪ 忘れたらLOGへ！ JPYC編をクリアした後は、JPYC編の最初のLOGにも↻頭出しが付くよ🐾」'],
  ['クロピー','「ここまでの進行をSAVEしておこう。ちょっと街を歩いてみよっか♪」']
 ],[['本屋の前を通ってみる',meetingStart]]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
 const dialog=document.querySelector('#dialogBox');
 if(dialog&&!document.querySelector('#jpycCompleteNote')){
  const note=document.createElement('div');note.id='jpycCompleteNote';note.className='chapter-complete';
  note.innerHTML='JPYC編 COMPLETE ✓<br>JPYC・CHAIN・GAS・EXCHANGE・TRANSFER';dialog.appendChild(note);
 }
}


// ===== 出会い編 / セキュリティ編 v1.0.22 =====
function meetingStart(){
 s.chapter=3;unlockLog(11);save(true);setStoryBgm('meeting');
 scene('book','heroThink',null,'left','出会い編 — 本屋で');
 dialogue([
  [s.name,'「JPYC編もひと区切りついたし……今日はちょっと寄り道していくか。」'],
  [s.name,'「この本屋、前から気になってたんだよな。Web3の本もあるかな。」']
 ],[['店の奥を見てみる',meetingShelf]])
}
function meetingShelf(){
 scene('book','heroNormal',null,'left','Web3コーナー');
 dialogue([
  [s.name,'「NFT、DeFi、Blockchain……急に難しそうなタイトルが増えたな。」'],
  [s.name,'「ん？ “はじめてのWeb3”。これなら俺でも読めそうだ。」']
 ],[['本を手に取る',meetingBump]])
}
function meetingBump(){
 scene('book','heroSurprise','heroine','right','同じ本');
 dialogue([
  ['女の子','「あっ。」'],
  [s.name,'「あ。」'],
  ['女の子','「……その本、取る？」'],
  [s.name,'「いや、どうぞ。俺はまだ表紙を見てただけだから。」'],
  ['女の子','「ふふっ。じゃあ半分ずつ読む？」'],
  [s.name,'「本を半分にするの！？」'],
  ['女の子','「冗談。そんな顔すると思わなかった。」'],
  [s.name,'「初対面でいきなり切断案を出されたら驚くって。」']
 ],[['少し話してみる',meetingTalk1]])
}
function meetingTalk1(){
 scene('book','heroThink','heroine','right','本から覚えたこと');
 dialogue([
  ['女の子','「Web3、勉強してるの？」'],
  [s.name,'「最近ね。Walletを用意して、JPYCとPOLを入れるところまでやった。」'],
  ['女の子','「え、もう実際に触ってるんだ。私は逆。本ばっかり読んでて、触る方はまだ少し怖い。」'],
  [s.name,'「てっきり詳しい人かと思った。」'],
  ['女の子','「本の中だけなら強いよ。Wallet、チェーン、ガス代……テストならたぶん勝てる。」'],
  [s.name,'「実技試験になったら？」'],
  ['女の子','「……急にお腹が痛くなるかも。」'],
  [s.name,'「逃げる気だ。」'],
  ['女の子','「作戦と言って。」']
 ],[['その本、どんな本？',meetingBookIntro]])
}
function meetingBookIntro(){
 scene('book','heroNormal','heroine','right','はじめてのWeb3');
 dialogue([
  ['女の子','「これ、用語集だけじゃないんだよ。短い豆知識のあとに初級クイズがあるの。」'],
  [s.name,'「それいいな。会話の途中で毎回“ガス代とは――”って説明されるより、自分で戻って確認できる。」'],
  ['女の子','「そうそう。忘れるのって普通だし。必要なときにもう一回読めばいいの。」'],
  [s.name,'「なんか先生みたいだな。」'],
  ['女の子','「先生じゃありません。本屋に長居してる人です。」'],
  [s.name,'「それはそれで説得力あるな。」'],
  ['女の子','「……ちなみに、この本120G。」'],
  [s.name,'「ゲーム内通貨で売ってるんだ。」']
 ],[['値段と所持金を確認する',meetingPriceCheck]])
}
function meetingPriceCheck(){
 scene('book','heroThink','heroine','right','本を買う？');
 dialogue([
  [s.name,`「120Gか。今の所持金は500G。」`],
  ['女の子','「無理して買わなくてもいいよ。本は逃げないし。」'],
  [s.name,'「さっきも似たようなこと聞いた気がする。」'],
  ['女の子','「本屋では大事な格言なの。」']
 ],[['購入を考える',meetingPurchaseConfirm],['今日は棚に戻す',meetingNoBook]])
}
function meetingPurchaseConfirm(){
 scene('book','heroThink','heroine','right','購入確認');
 if(s.gold<120){
  dialogue([
   [s.name,`「……${s.gold}G。120Gには足りないな。」`],
   ['女の子','「じゃあ今日は立ち読みで得したってことで。」'],
   [s.name,'「前向きだな。」'],
   ['女の子','「お金が貯まったら、また来ればいいよ。」']
  ],[['棚に戻す',meetingAfterBook]]);
  return;
 }
 dialogue([
  [s.name,`「所持金500G。買うと120G使うから、残りは380G。」`],
  ['女の子','「ここで本当に買うか決めるんだね。」'],
  [s.name,'「勝手に財布から120G消えたら怖いからな。」'],
  ['女の子','「それはWeb3以前の問題だね。」']
 ],[['120Gで購入する',meetingBuyBook],['やっぱり買わない',meetingNoBook]])
}
function meetingBuyBook(){
 if(!s.bookOwned){
  s.gold-=120;s.bookOwned=true;
  addItem({type:'normal',name:'はじめてのWeb3',desc:'本屋で120Gで購入した入門書。Wallet・チェーン・ガス代・セキュリティなどの豆知識と初級クイズが載っている。'});
  save(true);
 }
 scene('book','heroSmile','heroine','right','はじめてのWeb3を購入');
 dialogue([
  [s.name,'「よし、買った。」'],
  ['女の子','「おめでとう。今日から本棚の肥やし第一号。」'],
  [s.name,'「読む前提で買ったんだけど！？」'],
  ['女の子','「ふふっ。じゃあクイズで負けないようにね。」'],
  [s.name,'「さっき“実技はお腹痛くなる”って言ってた人には負けたくないな。」'],
  ['女の子','「言ったな〜？」']
 ],[['もう少し話す',meetingAfterBook]])
}
function meetingNoBook(){
 scene('book','heroNormal','heroine','right','今日は買わない');
 dialogue([
  [s.name,'「今日はやめておく。JPYC編で覚えたこともまだ整理できてないし。」'],
  ['女の子','「いいと思う。買っただけで賢くなる本はないからね。」'],
  [s.name,'「あったら120Gどころじゃ済まなそう。」'],
  ['女の子','「あったら私が先に買ってる。」']
 ],[['もう少し話す',meetingAfterBook]])
}
function meetingAfterBook(){
 scene('book','heroNormal','heroine','right','それぞれの覚え方');
 dialogue([
  ['女の子','「でも面白いね。私は本から入って、あなたは実際にWalletから入った。」'],
  [s.name,'「同じWeb3でも入口が逆なんだな。」'],
  ['女の子','「だから話したら、お互い知らないこと埋められるかも。」'],
  [s.name,'「じゃあ次に会ったら、俺が実技担当？」'],
  ['女の子','「私は筆記担当。いいチームじゃない？」'],
  [s.name,'「……あ、そういえば名前――」']
 ],[['名前を聞く',meetingKuroppyEntrance]])
}
function meetingKuroppyEntrance(){
 scene('book','heroSurprise','heroine','center','クロピー登場','kuroppy');
 dialogue([
  ['クロピー','「いたぁ〜〜！！ だーよし〜！🐾」'],
  [s.name,'「うわっ、クロピー！？」'],
  ['クロピー','「急に本屋へ入っていくから探したよ〜！ ボクを置いてかないでよぉ〜！」']
 ],[['女の子を見る',meetingIntroduceKuroppy]])
}
function meetingIntroduceKuroppy(){
 scene('book','heroNormal','heroine','center','はじめまして？','kuroppy');
 dialogue([
  ['女の子','「……かわいい。」'],
  [s.name,'「第一声それ？」'],
  ['女の子','「だって、かわいいものはかわいいでしょ。」'],
  ['クロピー','「えへへ〜♪ ボク、クロピー！ だーよしのWeb3相棒だよ〜🐾」'],
  ['女の子','「クロピー……よろしく。私は――」'],
  ['店員の声','「まもなく閉店のお時間です。」'],
  ['女の子','「あ、もうこんな時間！」'],
  [s.name,'「今ちょうど名前を――」'],
  ['女の子','「次に会ったらね。実技担当さん。」'],
  ['クロピー','「えっ！？ だーよし、いつの間に実技担当になったの〜！？」']
 ],[['彼女を見送る',meetingFarewell]])
}
function meetingFarewell(){
 scene('book','heroThink',null,'left','名前を聞きそびれた');
 dialogue([
  [s.name,'「……行っちゃった。」'],
  ['クロピー','「ねえねえ、誰だったの？ お友だち？」'],
  [s.name,'「今日初めて会った。」'],
  ['クロピー','「名前は？」'],
  [s.name,'「聞こうとした瞬間、お前が飛び込んできた。」'],
  ['クロピー','「ボ、ボクのせいなの〜！？🐾💦」'],
  [s.name,'「まあ、“次に会ったら”って言ってたし。」'],
  ['クロピー','「じゃあまた会えるよ〜♪ 今度はボクも最初から混ぜてね！」'],
  [s.name,'「はいはい。」']
 ],[['本屋を出る',meetingFinish]])
}
function meetingFinish(){
 if(replay?.active&&replay.chapter==='meeting'){
  scene('townDay','heroSmile','kuroppy','right','出会い編 REPLAY COMPLETE');
  dialogue([['クロピー','「出会い編の復習はここまで〜♪」'],[s.name,'「あの本屋での出会い、ちゃんと思い出せた。」']],[['最新の進行へ戻る',finishChapterReplay]]);
  return;
 }
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('meeting'))s.completedChapters.push('meeting');
 s.meetingDone=true;s.chapter=4;scene('townDay','heroSmile','kuroppy','right','出会い編 COMPLETE');setStoryBgm('meeting');save(true);
 dialogue([
  ['クロピー','「本屋に寄っただけなのに、新しい出会いがあったね〜♪」'],
  [s.name,'「本で覚える人と、実際に触って覚える人か。話してみると結構違うんだな。」'],
  ['クロピー','「次に会ったら名前を聞かなきゃね！」'],
  [s.name,'「今度は邪魔するなよ。」'],
  ['クロピー','「まだ言うの〜！？🐾💦」']
 ],[['街を歩く',securityStart]])
}

function securityStart(){
 s.chapter=4;unlockLog(12);save(true);setStoryBgm('meeting');
 scene('townDay','heroNormal','kuroppy','right','セキュリティ編 — 帰り道');
 dialogue([
  ['クロピー','「本屋たのしかったね〜♪ あの子、また会えるかな？」'],
  [s.name,'「たぶん。また本屋にいそうな気がする。」'],
  ['クロピー','「次は名前！ 絶対聞くんだよ〜。」'],
  [s.name,'「誰のせいで聞けなかったと思ってるんだ。」'],
  ['クロピー','「うぅ……それはもう忘れよ〜？🐾💦」']
 ],[['街を歩く',securityApproach]])
}
function securityApproach(){
 setStoryBgm('security');
 scene('townDay','heroNormal','scammer','right','見知らぬ男');
 dialogue([
  ['？？？','「すみません。少しよろしいですか？」'],
  [s.name,'「俺ですか？」'],
  ['？？？','「はい。Walletをご利用ですよね。最近、一部のアカウントで認証エラーが確認されていまして。」'],
  [s.name,'「認証エラー？」'],
  ['？？？','「念のため確認をおすすめしています。放置すると資産へアクセスできなくなる場合があります。」']
 ],[['話を聞く',securityConcern]])
}
function securityConcern(){
 scene('townDay','heroThink','scammer','right','少しずつ不安になる');
 dialogue([
  [s.name,'「資産って……JPYCとか？」'],
  ['？？？','「もちろん可能性はあります。POLなども含め、Wallet内の資産全般です。」'],
  ['クロピー','「えっ……さっき入れたばっかりなのに〜。」'],
  [s.name,'「どうやって確認するんですか？」'],
  ['？？？','「ご安心ください。数分で終わります。」'],
  ['クロピー','「数分なら……やった方がいいのかなぁ？」']
 ],[['確認方法を聞く',securityDemand]])
}
function securityDemand(){
 scene('townDay','heroNormal','scammer','right','要求');
 dialogue([
  ['？？？','「まずWalletの秘密鍵、もしくはリカバリーフレーズをご用意ください。」'],
  [s.name,'「……秘密鍵？」'],
  ['？？？','「はい。本人確認に必要です。できれば今すぐお願いします。」'],
  ['クロピー','「ひ、秘密鍵って……人に見せていいものだっけ？」'],
  ['？？？','「今回は緊急対応です。このままでは資産が失われる恐れがあります。」'],
  [s.name,'「失われるって……！」']
 ],[['秘密鍵を探そうとする',securityPanic],['ちょっと待つ',securityQuestion]])
}
function securityPanic(){
 setStoryBgm('security');
 scene('townDay','heroSurprise','scammer','right','焦り');
 dialogue([
  [s.name,'「どこだ！？ Walletの設定？ 何か保存したっけ？」'],
  ['クロピー','「だーよし、落ち着いて〜！ ……ってボクも全然落ち着いてない〜！🐾💦」'],
  ['？？？','「急いでください。時間が経つほど復旧が難しくなります。」'],
  [s.name,'「そんなこと言われたら余計焦るって！」'],
  ['クロピー','「でも……Walletを作ったとき、秘密鍵を紙に書いたりしたっけ？」'],
  [s.name,'「……あれ？」']
 ],[['HashPort Walletを思い出す',securityRealize]])
}
function securityQuestion(){
 scene('townDay','heroThink','scammer','right','違和感');
 dialogue([
  [s.name,'「本人確認なのに、なんで秘密鍵が必要なんですか？」'],
  ['？？？','「特別な復旧処理です。通常とは異なります。」'],
  ['クロピー','「“特別”とか“今すぐ”とか……なんか急がせる言葉ばっかりだよ〜。」'],
  [s.name,'「それに、HashPort Walletを作ったとき……秘密鍵なんて受け取ったっけ？」'],
  ['？？？','「とにかくWalletを確認してください。」']
 ],[['HashPort Walletを確認する',securityRealize]])
}
function securityRealize(){
 stopStoryBgm();
 scene('townDay','heroThink','scammer','right','……ない');
 dialogue([
  [s.name,'「…………。」'],
  ['クロピー','「あった？」'],
  [s.name,'「ない。」'],
  ['クロピー','「え？」'],
  [s.name,'「HashPort Walletって、俺が秘密鍵やリカバリーフレーズを直接管理する方式じゃなかったよな。」'],
  ['クロピー','「…………あ。」'],
  [s.name,'「じゃあこの人、“俺が持ってないもの”を今すぐ教えろって言ってる？」'],
  ['クロピー','「…………。」'],
  [s.name,'「最初から無理じゃん！」'],
  ['クロピー','「ほんとだぁ〜〜！！🐾💦」']
 ],[['相手を見る',securityGone]])
}
function securityGone(){
 stopStoryBgm();
 scene('townDay','heroSurprise',null,'left','……消えた');
 dialogue([
  [s.name,'「……あれ？」'],
  ['クロピー','「いない。」'],
  [s.name,'「さっきまでそこにいたよな？」'],
  ['クロピー','「いた！ 絶対いたよ〜！」'],
  [s.name,'「俺たちがWallet見てる間に消えたのか……。」'],
  ['クロピー','「秘密鍵が出てこないって分かって、逃げたのかな。」'],
  [s.name,'「……ってことは、やっぱり。」']
 ],[['何が起きたか整理する',securityReveal]])
}
function securityReveal(){
 setStoryBgm('meeting');
 scene('townDay','heroThink','kuroppy','right','詐欺だった');
 dialogue([
  ['クロピー','「Walletのトラブルを装って、不安にさせて、秘密情報を聞き出そうとしてたんだと思う。」'],
  [s.name,'「“資産が消える”“今すぐ”“緊急対応”……考える時間をなくそうとしてたのか。」'],
  ['クロピー','「うん。秘密鍵やリカバリーフレーズを管理するWalletなら、絶対に相手へ渡しちゃダメ。」'],
  [s.name,'「今回はHashPort Walletだったから、そもそも要求がおかしいって途中で気づけた。」'],
  ['クロピー','「でも、“秘密鍵を持ってないWalletだから全部安全！”ではないよ。」'],
  [s.name,'「偽サイトとか？」'],
  ['クロピー','「そう。認証情報を盗んだり、危ない操作をさせたり、別の方法でだます人もいるからね。」']
 ],[['今回のことを覚えておく',securityLesson]])
}
function securityLesson(){
 unlockLog(13);
 scene('townDay','heroNormal','kuroppy','right','焦ったときほど確認');
 dialogue([
  [s.name,'「あの人、最初は普通に親切そうだったな。」'],
  ['クロピー','「だから怖いんだよ〜。最初から“ボク詐欺師です！”って来てくれたら簡単なのに。」'],
  [s.name,'「それは商売にならないだろ。」'],
  ['クロピー','「詐欺を商売って言わないの〜！🐾💦」'],
  [s.name,'「でも覚えた。急かされても、その場で秘密情報を渡さない。公式アプリや公式サイトから自分で確認する。」'],
  ['クロピー','「正解〜♪ あと、分からなかったら一人で決めずに調べる！」'],
  [s.name,'「……本屋のあの子なら、こういう話も本で知ってそうだな。」'],
  ['クロピー','「次に会ったら聞いてみよ〜♪ 名前もね！」']
 ],[['セキュリティ編を終える',securityComplete]])
}
function securityComplete(){
 if(replay?.active&&replay.chapter==='security')return finishChapterReplay();
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('security'))s.completedChapters.push('security');
 s.securityDone=true;s.chapter=5;save(true);setStoryBgm('meeting');
 scene('townDay','heroSmile','kuroppy','right','セキュリティ編 COMPLETE');
 dialogue([
  ['クロピー','「セキュリティ編 COMPLETE〜！ いや〜、寿命が3分くらい縮んだよ〜🐾」'],
  [s.name,'「短いな。」'],
  ['クロピー','「ボクの3分は大事なの！」'],
  [s.name,'「まあ、JPYCもPOLも無事。秘密情報も渡してない。」'],
  ['クロピー','「でもねぇ〜。HashPort Walletだから100％安心！……ってわけでもないんだよ〜。」'],
  [s.name,'「えっ。秘密鍵がないから助かったんじゃないの？」'],
  ['クロピー','「今回はね♪ でも一度詐欺に狙われたアドレスは、また怪しい誘いの標的になることもあるの。」'],
  [s.name,'「じゃあ、ずっと同じアドレスを使えば安心……とは限らないのか。」'],
  ['クロピー','「そうそう。怪しいことが続くなら、新しいWalletアカウントを作って、安全を確認した資産を移すのも対策だよ〜。」'],
  [s.name,'「もし本当に資金を抜かれたWalletだったら？」'],
  ['クロピー','「そのアドレスは“もう大丈夫っしょ〜”って使い続けない！ 新しいWalletへ避難を考える！」'],
  [s.name,'「友達が詐欺に遭って“助けて！”って来ることもありそうだな。」'],
  ['クロピー','「あるある〜。そんな時も、焦って送られたリンクを開いたり、言われるままWalletをつないだりしないこと！」'],
  [s.name,'「助ける側まで一緒に引っかかったら大惨事だな……。」'],
  ['クロピー','「Walletが守ってくれる部分と、自分で守る部分。両方そろってセキュリティなのだ〜🐾✨」'],
  [s.name,'「なるほど。道具が安全でも、使う人まで自動で安全になるわけじゃない、と。」'],
  ['クロピー','「そのとおり〜♪ ここまでの進行をSAVEしておこう！」'],
  [s.name,'「よし。今日はちゃんと保存して終わろう。」'],
  ['クロピー','「それじゃあ、次回もお楽しみに〜！🐾」']
 ],[]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}
