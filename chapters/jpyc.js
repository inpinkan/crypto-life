// CRYPTO LIFE v1.0.45
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
  ['女の子','「……ちなみに、この本100G。」'],
  [s.name,'「ゲーム内通貨で売ってるんだ。」']
 ],[['値段と所持金を確認する',meetingPriceCheck]])
}
function meetingPriceCheck(){
 scene('book','heroThink','heroine','right','本を買う？');
 dialogue([
  [s.name,`「100Gか。今の所持金は500G。」`],
  ['女の子','「無理して買わなくてもいいよ。本は逃げないし。」'],
  [s.name,'「さっきも似たようなこと聞いた気がする。」'],
  ['女の子','「本屋では大事な格言なの。」']
 ],[['購入を考える',meetingPurchaseConfirm],['今日は棚に戻す',meetingNoBook]])
}
function meetingPurchaseConfirm(){
 scene('book','heroThink','heroine','right','購入確認');
 if(s.gold<100){
  dialogue([
   [s.name,`「……${s.gold}G。100Gには足りないな。」`],
   ['女の子','「じゃあ今日は立ち読みで得したってことで。」'],
   [s.name,'「前向きだな。」'],
   ['女の子','「お金が貯まったら、また来ればいいよ。」']
  ],[['棚に戻す',meetingAfterBook]]);
  return;
 }
 dialogue([
  [s.name,`「所持金500G。買うと100G使うから、残りは400G。」`],
  ['女の子','「ここで本当に買うか決めるんだね。」'],
  [s.name,'「勝手に財布から100G消えたら怖いからな。」'],
  ['女の子','「それはWeb3以前の問題だね。」']
 ],[['100Gで購入する',meetingBuyBook],['やっぱり買わない',meetingNoBook]])
}
function meetingBuyBook(){
 if(!s.bookOwned){
  purchaseBook('web3_beginner',{silent:true});
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
  [s.name,'「あったら100Gどころじゃ済まなそう。」'],
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
 ],[['次の日へ',walkingStart]]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}


// --- ウォーキング編 -------------------------------------------------------
function walkingStart(){
 s.chapter=5;unlockLog(14);save(true);setStoryBgm('walking');
 scene('townDay','heroNormal','kuroppy','right','ウォーキング編 — 次の日');
 dialogue([
  [s.name,'「昨日は散々だったな……。今日は平和に過ごしたい。」'],
  ['クロピー','「じゃあ今日は歩こ〜♪」'],
  [s.name,'「……歩くだけ？」'],
  ['クロピー','「歩くだけ！」'],
  [s.name,'「その言い方、逆に怪しいんだけど。」'],
  ['クロピー','「昨日のせいで疑い深くなってる〜！🐾💦」'],
  ['クロピー','「でもね、歩くことがJPYCにつながるアプリがあるんだよ。」'],
  [s.name,'「歩くことがJPYCに？」']
 ],[['どんなアプリか聞く',walkingJhoIntro]])
}
function walkingJhoIntro(){
 scene('townDay','heroThink','kuroppy','right','J歩（Jho）');
 dialogue([
  ['クロピー','「名前は“J歩”。スマホで歩いて、アプリの中でポイントを貯められるの。」'],
  [s.name,'「歩くだけで、いきなりWalletにJPYCが入るってこと？」'],
  ['クロピー','「そこは違うよ〜。まずJ歩の中でポイントを貯めるの。JPYCへの交換はその先。」'],
  [s.name,'「なるほど。歩数そのものがJPYCになるわけじゃないのか。」'],
  ['クロピー','「そうそう。JPYC編では買ってWalletへ送ったけど、こういう日常からJPYCにつながる入口もあるんだよ〜♪」'],
  [s.name,'「Web3って、取引所とWalletだけじゃないんだな。」']
 ],[['J歩を見てみる',walkingMeetHeroine]])
}
function walkingMeetHeroine(){
 scene('book','heroNormal','heroine','right','本屋の前');
 dialogue([
  ['？？？','「あれ……？」'],
  [s.name,'「あ。本屋の。」'],
  ['？？？','「こんにちは。今日は本を買いに？」'],
  [s.name,'「いや、今日は歩くだけらしい。」'],
  ['？？？','「歩くだけ……？」'],
  ['クロピー','「J歩の話してたの〜♪」'],
  ['？？？','「J歩なら、私も使ってますよ。」'],
  [s.name,'「えっ？」']
 ],[['Walletは怖くなかった？',walkingHerReason]])
}
function walkingHerReason(){
 scene('book','heroThink','heroine','right','彼女もJ歩ユーザー');
 dialogue([
  [s.name,'「でも前に、Walletを実際に触るのはまだちょっと怖いって言ってなかった？」'],
  ['？？？','「……覚えてたんですか。」'],
  [s.name,'「そりゃ覚えてるよ。筆記担当だっただろ。」'],
  ['？？？','「筆記担当って言い方、まだ続いてるんですね（笑）」'],
  ['？？？','「私は歩いてポイントを貯めてるところまでです。JPYCへの交換は、まだやってなくて。」'],
  [s.name,'「あー、なるほど。それなら話がつながった。」'],
  ['？？？','「調べるのは好きなんですけど、Walletを使うところになると慎重になっちゃって。」'],
  [s.name,'「そこは俺の方が少しだけ先輩か。」'],
  ['？？？','「少しだけ、ですか？」'],
  [s.name,'「昨日危うく詐欺に引っかかるところだったから、大きいことは言えない。」'],
  ['クロピー','「それ言っちゃうんだ〜！🐾」']
 ],[['J歩のことを教えてもらう',walkingInvite]])
}
function walkingInvite(){
 scene('book','heroSmile','heroine','right','招待コード');
 dialogue([
  ['？？？','「これからJ歩を始めるなら、招待コードがありますよ。」'],
  [s.name,'「そういうところは準備いいんだな。」'],
  ['？？？','「調べるのは得意だって言ったじゃないですか（笑）」'],
  ['クロピー','「筆記担当、つよい〜♪」'],
  ['？？？','「“JPR7DGF3”です。使うかどうかは自由ですけど、必要ならどうぞ。」'],
  [s.name,'「あとで忘れそうだな。」'],
  ['クロピー','「ITEMに入れておけばいいよ〜！」']
 ],[['J歩をITEMに登録する',walkingAddItem]])
}
function walkingAddItem(){
 addItem({type:'link',name:'J歩（Jho）',desc:'歩いてポイントを貯め、JPYCにつながるウォーキングアプリ。招待コードの利用は任意です。',url:'https://jho-official.web.app/#home',code:'JPR7DGF3',image:'assets/ui/jho_icon.webp'});
 scene('townDay','heroSmile','heroine','right','J歩をITEMに登録した');
 dialogue([
  [s.name,'「よし。これなら後から公式サイトも招待コードも確認できる。」'],
  ['？？？','「便利ですね、それ。」'],
  ['クロピー','「でしょ〜♪ じゃあ説明ばっかりしてないで、歩こ！」'],
  [s.name,'「今日は本当に平和なんだろうな？」'],
  ['クロピー','「歩くだけだってば〜！」'],
  ['？？？','「私も少し歩きます。せっかくなので。」']
 ],[['3人で歩いてみる',walkingTogether]])
}
function walkingTogether(){
 scene('townDay','heroSmile','heroine','right','Crypto Townを歩く', 'kuroppy');
 dialogue([
  ['クロピー','「てくてく〜♪ てくてく〜♪」'],
  [s.name,'「クロピー、それ歩いてるっていうか跳ねてない？」'],
  ['？？？','「歩数に入るんでしょうか（笑）」'],
  ['クロピー','「細かいことは気にしないの〜！」'],
  [s.name,'「でも不思議だな。昨日まではWalletとか秘密鍵とか、ずっと難しい話だったのに。」'],
  ['？？？','「こういう入口なら、Web3を知らない人でも始めやすそうですね。」'],
  [s.name,'「普段やってる“歩く”からつながるなら、確かに身構えなくていいかも。」'],
  ['クロピー','「Web3って、難しい言葉の中だけにあるわけじゃないんだよ〜♪」'],
  ['？？？','「……私もポイントが貯まったら、そのうちJPYCへの交換をやってみようかな。」'],
  [s.name,'「その時は一緒に確認しよう。Walletのところなら少しは手伝える。」'],
  ['？？？','「じゃあお願いします。実践担当さん。」'],
  [s.name,'「その呼び方、定着するの？」']
 ],[['ウォーキング編を終える',walkingComplete]])
}
function walkingNameAsk(){
 scene('townDay','heroThink','heroine','right','帰り道 — まだ聞いていなかったこと','kuroppy');
 dialogue([
  [s.name,'「……あのさ。」'],
  ['？？？','「はい？」'],
  [s.name,'「その……今さらなんだけど。」'],
  ['？？？','「？」'],
  [s.name,'「名前、まだ聞いてなかったなって。」'],
  ['？？？','「あ……。」'],
  [s.name,'「いや、本屋でも聞こうとしたんだけど、その時はクロピーが――」'],
  ['クロピー','「ボクのせいにしないで〜！🐾💦」'],
  ['？？？','「ふふっ。そうでしたね。」'],
  [s.name,'「……それで、名前……聞いてもいい？」']
 ],[['名前を聞く',walkingNameAnswer]])
}
function walkingNameAnswer(){
 s.heroineName='ユリ';s.nameRevealDone=true;save(true);
 scene('townDay','heroSmile','heroine','right','彼女の名前 — ユリ','kuroppy');
 dialogue([
  ['ユリ','「ユリです。」'],
  [s.name,'「ユリ……。」'],
  ['ユリ','「はい。よろしくお願いします、実践担当さん。」'],
  [s.name,'「その呼び方は続くんだ。」'],
  ['ユリ','「せっかくなので（笑）」'],
  ['クロピー','「ユリちゃん！ よろしく〜！ きゃわわ〜🐾✨」'],
  ['ユリ','「クロピーちゃんは、ずっとその調子ですね（笑）」'],
  [s.name,'「……ユリか。」'],
  ['ユリ','「なんですか？」'],
  [s.name,'「いや、なんでもない。」']
 ],[['次回へ',nameRevealBridgeComplete]])
}
function nameRevealBridgeComplete(){
 scene('townDay','heroSmile','heroine','right','名前を知った帰り道','kuroppy');
 dialogue([
  [s.name,'「じゃあ、またな。ユリ。」'],
  ['ユリ','「はい。また会いましょう。」'],
  ['クロピー','「次は何が起きるかな〜♪」'],
  [s.name,'「平和なのを頼む。」'],
  ['クロピー','「それはどうかな〜？ きゃわわ〜🐾」']
 ],[['MetaMaskの話を聞く',metamaskFrontStart]]);
}

// --- MetaMask前編 -------------------------------------------------------
function metamaskFrontStart(){
 s.chapter=6;setStoryBgm('metamask');
 scene('home','heroNormal','heroine','right','MetaMask前編 — もうひとつのWallet','kuroppy');
 dialogue([
  [s.name,'「そういえばユリ。Walletの本にMetaMaskってよく出てこなかった？」'],
  ['ユリ','「出てきました。自分で管理するタイプのWalletとして、かなり有名ですよね。」'],
  [s.name,'「さすが筆記担当。じゃあ使ってる？」'],
  ['ユリ','「…………。」'],
  [s.name,'「その間は何。」'],
  ['ユリ','「存在はよく知っています。アプリは……まだです。」'],
  ['クロピー','「知識は満点、実践はこれからきゃわ〜♪」'],
  ['ユリ','「言い方（笑）」'],
  [s.name,'「俺も入れてないし、ちょうどいいか。二人とも今日が初MetaMaskだな。」'],
  ['クロピー','「じゃあ一緒にやってみるきゃわ！ MetaMaskはセルフカストディアル、ノンカストディアルとも呼ばれるWallet。自分で資産へのアクセスを管理するタイプきゃわ。」'],
  [s.name,'「自由に使える代わりに、自分で守るものも増えるってことか。」'],
  ['ユリ','「そこがHashPort Walletとの大きな違いになりそうですね。」']
 ],[['公式のMetaMaskを確認する',metamaskInstall]]);
}
function metamaskInstall(){
 addItem({type:'link',name:'MetaMask',desc:'代表的なセルフカストディアルWallet。インストールや更新は公式サイト・正規アプリストアなど信頼できる配布元から確認する。',url:'https://metamask.io/'});
 scene('home','heroSmile','heroine','right','MetaMaskを準備する','kuroppy');
 dialogue([
  ['クロピー','「最初に大事なのは、検索結果の見た目だけで決めないこと。偽物を入れないように公式サイトや正規のアプリストアから確認するきゃわ。」'],
  [s.name,'「Walletを作る前からセキュリティが始まってるんだな。」'],
  ['ユリ','「偽物に秘密を渡したら、本物のWalletを安全に使う以前の問題ですもんね。」'],
  ['クロピー','「そういうこときゃわ。二人とも準備できた？」'],
  [s.name,'「できた。」'],
  ['ユリ','「私も入りました。……知ってるアプリなのに、実際に触るとちょっと緊張しますね。」'],
  ['クロピー','「その慎重さは大事きゃわ。じゃあ次は、秘密を扱う場所から確認してみよう！」']
 ],[['セキュリティ設定を確認する',metamaskSecurityMenu]]);
}
function metamaskSecurityMenu(){
 scene('home','heroNormal','heroine','right','MetaMaskのセキュリティ設定','kuroppy');
 dialogue([
  ['クロピー','「スマホ版なら、メニューの“三”から“設定”、それから“セキュリティとプライバシー”を開いてみるきゃわ。」'],
  [s.name,'「ここに大事なセキュリティ関係がまとまってるんだな。」'],
  ['ユリ','「リカバリーフレーズに関する項目もありますね。」'],
  [s.name,'「リカバリーフレーズ……Wallet編でも名前は聞いたけど、MetaMaskでは自分で管理するんだよな。」'],
  ['クロピー','「きゃわ。場所が分かったところで、表示する前に“何なのか”をちゃんと知っておこう。」'],
  ['ユリ','「先に意味を知ってから扱う。大事ですね。」']
 ],[['リカバリーフレーズを学ぶ',metamaskRecovery]]);
}
function metamaskRecovery(){
 scene('home','heroThink','heroine','right','Secret Recovery Phrase','kuroppy');
 dialogue([
  ['クロピー','「MetaMaskではSecret Recovery Phrase、略してSRPって呼ばれる大切な秘密があるきゃわ。ここでは“リカバリーフレーズ”って呼ぶね。」'],
  [s.name,'「パスワードとは違うの？」'],
  ['ユリ','「違います。端末やアプリを開くためのパスワードと、Walletを復元するための秘密は役割が別です。」'],
  ['クロピー','「きゃわ！ リカバリーフレーズを知った人はWalletを復元できる可能性がある。だからサポートを名乗る人にも渡さないきゃわ。」'],
  [s.name,'「じゃあ、忘れないようにスクショしておけば――」'],
  ['クロピー','「そこ待ったきゃわ！」'],
  ['ユリ','「写真って、設定によってクラウドへ同期されることがありますよね。」'],
  ['クロピー','「メモアプリも同期されることがあるきゃわ。オンラインに秘密のコピーを増やすほど、アカウントや端末を狙われた時の入口も増える。だから紙などオフラインで正確に控えて、安全な場所に保管するのが基本きゃわ。」'],
  [s.name,'「便利だから安全、とは限らないのか。」'],
  ['クロピー','「紙だって紛失や盗難には気をつけるきゃわ。大切なのは“秘密を誰にも見せず、なくさず、自分で守る”こと！」'],
  ['クロピー','「周りに人がいないことも確認して、本当に必要な時だけ慎重に表示して控えるきゃわ。」']
 ],[['安全な場所に控える',metamaskRecoveryCheck]]);
}
function metamaskRecoveryCheck(){
 scene('home','heroNormal','heroine','right','確認 — 大切なメモ','kuroppy');
 dialogue([
  ['クロピー','「CRYPTO LIFEには本物のリカバリーフレーズを入力しなくていいきゃわ。ゲームにも保存しないよ。」'],
  ['クロピー','「自分のリカバリーフレーズを、安全な方法で正確に控えたかだけ確認するきゃわ。」']
 ],[['はい、控えました',()=>{s.recoveryPhraseNoted=true;save(true);metamaskWhyOffline()}],['まだです',metamaskNotYet]]);
}
function metamaskNotYet(){
 scene('home','heroSmile','heroine','right','急がなくて大丈夫','kuroppy');
 dialogue([
  ['クロピー','「じゃあ、ここで待ってるきゃわ。大事なところだから急がなくていいよ。」'],
  ['ユリ','「こういうところは、早さより確実さですね。」'],
  [s.name,'「よし。ちゃんと確認してから進もう。」']
 ],[['控えたらもう一度確認する',metamaskRecoveryCheck]]);
}
function metamaskWhyOffline(){
 scene('home','heroThink','heroine','right','秘密を守るということ','kuroppy');
 dialogue([
  [s.name,'「そういえば、フリーWi-Fiにつないだらリカバリーフレーズがそのまま見られるってこと？」'],
  ['クロピー','「つないだだけで全部丸見え、って単純な話じゃないきゃわ。でも偽Wi-Fiやフィッシングみたいな余計な危険に近づくことはある。大事なWallet操作を、わざわざ信用できない通信環境でする必要はないきゃわ。」'],
  ['ユリ','「危険な入口を自分から増やさない、ですね。」'],
  [s.name,'「SNSにスクショを載せるのは……さすがに誰もしないだろ。」'],
  ['クロピー','「“Walletできた！”ってうれしくて画面を載せて、秘密まで写ったら大変きゃわ。公開された秘密は、投稿を消しても誰かがコピー済みかもしれない。」'],
  ['ユリ','「一度知られた秘密を、“知らなかった状態”には戻せませんからね。」'],
  ['クロピー','「もし秘密鍵やリカバリーフレーズを他人に知られた可能性があるなら、そのWalletを安全だと思い続けないこと。安全な新しいWalletへの資産移動などを考えるきゃわ。」'],
  [s.name,'「一瞬のうっかりが大きいんだな……。」'],
  [s.name,'「自分のWalletを持つって、自由になるだけじゃないんだな。」'],
  ['ユリ','「自分で管理するから、自分で守る。……本で読んだ時より実感があります。」'],
  [s.name,'「筆記担当も、今日は実践したな。」'],
  ['ユリ','「少しだけ昇格です（笑）」'],
  ['クロピー','「二人とも合格きゃわ〜♪」']
 ],[['MetaMask前編を終える',metamaskFrontComplete]]);
}
function metamaskFrontComplete(){
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('metamaskFront'))s.completedChapters.push('metamaskFront');
 s.metamaskFrontDone=true;s.chapter=7;unlockLog(10);save(true);setStoryBgm('metamask');
 scene('home','heroSmile','heroine','right','MetaMask前編 COMPLETE','kuroppy');
 dialogue([
  ['クロピー','「MetaMask前編 COMPLETE〜！ きゃわわ〜♪」'],
  [s.name,'「アプリを入れるだけのつもりが、秘密の管理が一番大事だったな。」'],
  ['ユリ','「ノンカストディアルWalletの“自分で管理する”って、こういう意味なんですね。」'],
  ['クロピー','「MetaMaskはITEMからいつでも公式サイトを確認できるきゃわ。」'],
  [s.name,'「よし。ここまでSAVEしておこう。」'],
  ['クロピー','「次回もお楽しみに〜！」']
 ],[]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}
// --- はじめてのBTC編 ----------------------------------------------------
function bitcoinIntroStart(){
 s.chapter=7;setStoryBgm('bitcoin');
 scene('home','heroNormal','heroine','right','はじめてのBTC編 — 少額から触ってみる','kuroppy');
 dialogue([
  [s.name,'「MetaMaskも触ったし、Walletのことは少しずつ分かってきたけど……そういえば俺、暗号資産そのものってほとんど買ってないな。」'],
  ['ユリ','「JPYCは触りましたけど、値段が動く暗号資産はまだでしたね。」'],
  [s.name,'「Bitcoinは最初から名前だけ知ってたのに、一周回ってまだ買ってない（笑）」'],
  ['クロピー','「じゃあ今日は“儲けるため”じゃなくて、“仕組みを覚えるため”に少額のBTCを見てみるきゃわ！」'],
  [s.name,'「少額って大事だな。いきなり大きい金額で試すのは怖いし。」'],
  ['ユリ','「初めての操作ほど、まず小さく確認する。送金の時にも使えそうな考え方ですね。」'],
  ['クロピー','「きゃわ！ Web3は取り消しにくい操作も多いから、可能なら少額テストしてから本番、は覚えておくといいきゃわ。」']
 ],[['Bitcoinって何？',bitcoinBasics]]);
}
function bitcoinBasics(){
 scene('home','heroThink','heroine','right','Bitcoinの基本','kuroppy');
 dialogue([
  [s.name,'「でも1BTCってものすごく高いよな。1枚まるごと買わないとダメなの？」'],
  ['ユリ','「いいえ。Bitcoinは小数単位で買えます。1BTCを丸ごと買う必要はありません。」'],
  ['クロピー','「数百円や数千円みたいな少額から買えるサービスもあるきゃわ。最低注文額は取引所やサービスごとに違うから、その時の公式画面を確認するきゃわ。」'],
  [s.name,'「それなら“Bitcoinを買う＝何百万円も必要”ではないんだ。」'],
  ['ユリ','「Bitcoinには発行上限があって、最終的に2,100万BTCまでと決められています。」'],
  [s.name,'「誰かが気分で無限に増やす仕組みじゃない、と。」'],
  ['クロピー','「新しいBTCはマイニングのブロック報酬などを通じて発行されて、その報酬には“半減期”があるきゃわ。」'],
  [s.name,'「半減期？ 持ってるBTCが半分になるとか？」'],
  ['ユリ','「それは嫌すぎます（笑）。半分になるのは、一定期間ごとの“新しいブロックを作った時の報酬”です。」']
 ],[['半減期をもう少し聞く',bitcoinHalving]]);
}
function bitcoinHalving(){
 scene('home','heroNormal','heroine','right','Bitcoinの半減期','kuroppy');
 dialogue([
  ['クロピー','「Bitcoinでは210,000ブロックごと、およそ4年ごとにブロック報酬が半分になるきゃわ。」'],
  ['ユリ','「2024年の半減期では、1ブロックあたりの報酬が6.25 BTCから3.125 BTCになりました。」'],
  [s.name,'「じゃあ新しく増えるペースがだんだん小さくなるんだな。」'],
  ['クロピー','「そうきゃわ。でも“半減期が来たら必ず値上がりする”って意味じゃないよ。価格は需要や市場環境など、いろんな要因で動くきゃわ。」'],
  [s.name,'「イベントがある＝絶対上がる、ではない。そこは分けて考えないとな。」'],
  ['ユリ','「あと、価格が下がっても、現物で持っているBTCの数量が自動で半分になるわけではありません。」'],
  [s.name,'「0.001 BTC持っていて値段が半分になったら、円で見た価値は下がるけど、0.001 BTCそのものは基本そのまま？」'],
  ['ユリ','「そういうことです。売却や送金などをしない限り、“値下がりしたから保有数量まで勝手に減る”というものではありません。」'],
  ['クロピー','「ただし価値が大きく下がる可能性や、Wallet・取引所・誤送金など別のリスクはあるから、“現物なら絶対安心”ではないきゃわ。」']
 ],[['国内取引所の画面を見てみる',bitcoinOkjIntro]]);
}
function bitcoinOkjIntro(){
 addOkjItem();
 scene('home','heroSmile','heroine','right','OKJ — 販売所と取引所','kuroppy');
 const intro=s.exchangeChoice==='OKJ'
  ?'「JPYC編で候補にしたOKJ、もう一回見てみよう。BTCの画面に“販売所”と“取引所”がある。」'
  :'「今回は販売所と取引所を比べやすいから、OKJの画面も見てみよう。公式リンクはITEMに入れておくきゃわ。」';
 dialogue([
  [s.name,intro],
  ['ユリ','「同じBTCを買う画面なのに、見た目がかなり違いますね。」'],
  ['クロピー','「販売所は“買値・売値”が中心のシンプルな画面。OKJが提示した価格を見て、購入や売却をする形きゃわ。」'],
  [s.name,'「大きい価格表示と“購入”“売却”ボタンの方か。これは分かりやすい。」'],
  ['ユリ','「もう一方の取引所は、赤と緑の数字がたくさん並んでいます。」'],
  ['クロピー','「それが“板”きゃわ。主に利用者の買いたい注文と売りたい注文が並んで、条件が合うと約定するよ。」'],
  [s.name,'「急にトレーダーの画面になった（笑）」']
 ],[['販売所と取引所の違いを知る',bitcoinMarketDifference]]);
}
function bitcoinMarketDifference(){
 scene('home','heroThink','heroine','right','販売所と取引所の使い分け','kuroppy');
 dialogue([
  [s.name,'「じゃあ販売所は初心者、取引所は上級者って覚えればいい？」'],
  ['クロピー','「そこまで単純じゃないきゃわ。仕組みと使い方が違う、と覚える方がいいよ。」'],
  ['ユリ','「販売所は提示された価格を確認して、簡単な操作ですぐ売買したい時に分かりやすいです。」'],
  [s.name,'「簡単なら、販売所だけでよくない？」'],
  ['クロピー','「販売所は交換業者が間に入って価格を提示してくれるぶん、取引所より売買のコストが少し高くなりやすいきゃわ。買値と売値の差もあるから、簡単さとコストの違いを知って使い分けるといいよ。」'],
  [s.name,'「簡単なぶん、お任せ代みたいなイメージか。じゃあ、この差ってガス代？」'],
  ['クロピー','「今回はガス代とは別きゃわ。取引所の中でBTCを売買する時のコストと、BTCを外のWalletへ送る時のネットワーク手数料は別物だよ。」'],
  ['ユリ','「取引所は板を使って自分で注文するぶん、販売所よりコストを抑えて取引できる場合があるんですね。」'],
  ['クロピー','「そうきゃわ。OKJでは成行注文や指値注文が使えるきゃわ。」'],
  [s.name,'「指値って、たとえば今より安い価格を指定して“ここまで下がったら買いたい”って注文を置く感じ？」'],
  ['ユリ','「はい。ただし条件に届いても、相手の注文や流動性によってすぐ全部が約定するとは限りません。」'],
  [s.name,'「成行は？」'],
  ['クロピー','「価格を指定せず、その時の板にある注文と成立させていく方法きゃわ。相場が動いていたり板が薄かったりすると、見ていた価格と実際の約定価格に差が出ることもあるよ。」'],
  [s.name,'「簡単そうに見える注文にも、それぞれ特徴があるんだな。」'],
  ['クロピー','「それとOKJでは、販売所は“入出金口座”、取引所は“取引口座”の残高を使う仕組み。取引所を使う時は口座間の振替が必要になる場合があるきゃわ。」'],
  ['ユリ','「同じアプリの中でも、資産がどの口座にあるかを見る必要があるんですね。」']
 ],[['少額の現物BTCを試す',bitcoinSmallSpot]]);
}
function bitcoinSmallSpot(){
 scene('home','heroSmile','heroine','right','少額で現物BTCを体験','kuroppy');
 dialogue([
  [s.name,'「よし。今回は仕組みを覚えるのが目的だし、少額だけ試してみる。」'],
  ['クロピー','「いいきゃわ。CRYPTO LIFEを進めるために本当に買う必要はないよ。主人公はストーリー上で少額の“現物BTC”を体験するきゃわ。」'],
  ['ユリ','「レバレッジをかけて値動きを大きくする取引ではなく、今回は実際のBTCを少量保有する現物ですね。」'],
  [s.name,'「国内の暗号資産サービスにも現物以外の取引を扱うところはあるけど、俺たちはまず現物から、と。」'],
  ['クロピー','「きゃわ。最初から難しいことを全部やる必要はないよ。」'],
  [s.name,'「……購入。っと。」'],
  ['ユリ','「どうです？」'],
  [s.name,'「……画面のBTC残高がちょっと増えた。」'],
  ['クロピー','「初めての現物購入、成功きゃわ〜！」'],
  [s.name,'「派手な演出はないんだな（笑）」'],
  ['ユリ','「でもこれで、ニュースで見るBTCが“自分とは関係ない数字”じゃなくなりましたね。」'],
  [s.name,'「値段が上下しても、まず“価格”と“持っているBTC数量”を分けて見る。そこも覚えておこう。」'],
  ['クロピー','「そして初めての操作は、無理に大きくやらず少額で確認。これは購入でも送金でも役に立つ考え方きゃわ！」']
 ],[['はじめてのBTC編を終える',bitcoinIntroComplete]]);
}
function bitcoinIntroComplete(){
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('bitcoinIntro'))s.completedChapters.push('bitcoinIntro');
 s.bitcoinIntroDone=true;s.chapter=8;unlockLog(15);save(true);setStoryBgm('bitcoin');
 scene('home','heroSmile','heroine','right','はじめてのBTC編 COMPLETE','kuroppy');
 dialogue([
  ['クロピー','「はじめてのBTC編 COMPLETE〜！ きゃわわ〜♪」'],
  [s.name,'「Bitcoinの半減期から、販売所と取引所まで一気につながったな。」'],
  ['ユリ','「知識だけで見ていた“板”も、意味が分かると少し怖くなくなりますね。」'],
  [s.name,'「いきなり大金じゃなくて、まず少額で触ってみる。これくらいが俺にはちょうどいい。」'],
  ['クロピー','「OKJの公式案内はITEMから確認できるきゃわ。実際の価格・最低注文額・手数料・取扱サービスは、その時の公式画面で確認してね。」'],
  [s.name,'「よし。ここまでSAVEしておこう。」'],
  ['クロピー','「次回もお楽しみに〜！」']
 ],[]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}

function walkingComplete(){
 if(replay?.active&&replay.chapter==='walking')return finishChapterReplay();
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('walking'))s.completedChapters.push('walking');
 s.walkingDone=true;s.chapter=6;save(true);setStoryBgm('walking');
 scene('townDay','heroSmile','heroine','right','ウォーキング編 COMPLETE','kuroppy');
 dialogue([
  ['クロピー','「ウォーキング編 COMPLETE〜！🐾✨」'],
  [s.name,'「今日は本当に歩いただけだったな。」'],
  ['クロピー','「たまには平和な日も必要なの〜♪」'],
  [s.nameRevealDone?'ユリ':'？？？','「でも、歩くことからJPYCにつながるって知れたのは面白かったです。」'],
  [s.name,'「買うだけじゃないって分かったのは大きいかも。」'],
  ['クロピー','「J歩の公式サイトと招待コードはITEMからいつでも確認できるよ〜。」'],
  [s.name,'「よし。ここまでSAVEしておこう。」'],
  ['クロピー','「ウォーキング編はここまで〜！🐾」']
 ],[['帰り道へ',walkingNameAsk]]);
}


// --- コンビニでJPYC!? 編 -----------------------------------------------
function convenienceJpycStart(){
 s.chapter=8;setStoryBgm('jpyc');
 scene('home','heroSmile','heroine','right','コンビニでJPYC!? 編 — 2026年8月のニュース','kuroppy');
 dialogue([
  [s.name,'「ユリ！ クロピー！ これ見て。ローソンでJPYCが使えるようになったって！」'],
  ['ユリ','「えっ。私たちがWalletで触った、あのJPYCですか？」'],
  ['クロピー','「おおっ、そこまで見つけたきゃわ！ ……でも主人公、見出しだけで走り出すのは待つきゃわ。」'],
  [s.name,'「え？ “ローソンでJPYC決済”って書いてあるけど。」'],
  ['ユリ','「……“実証実験”とも書いてありますね。」'],
  [s.name,'「実証実験？」'],
  ['クロピー','「そこが今日の大事ポイントきゃわ。“全国のローソンで誰でもJPYC払い開始！”という話ではないよ。」'],
  [s.name,'「危ない。もうコンビニ行く気だった（笑）」']
 ],[['何を実験したの？',convenienceJpycTakanawa]]);
}
function convenienceJpycTakanawa(){
 scene('home','heroNormal','heroine','right','高輪ゲートウェイシティ店の実証','kuroppy');
 dialogue([
  ['クロピー','「2026年8月6日、ローソン高輪ゲートウェイシティ店で、JPYCを使った決済の実証が行われたきゃわ。」'],
  ['ユリ','「Walletは……HashPort Wallet！」'],
  [s.name,'「最初に俺たちが作ったWalletじゃん！」'],
  ['クロピー','「きゃわ！ スマホ側で決済用のバーコードを表示して、ローソンのPOSレジで読み取る形が試されたよ。」'],
  [s.name,'「Web3だから、店員さんが毎回長いWallet Addressを入力するとかじゃないんだ。」'],
  ['ユリ','「普段のレジに近い操作で使えるかどうかも大切なんでしょうね。」'],
  ['クロピー','「決済がちゃんと動くかだけじゃなく、レジとの連携、決済にかかる時間、Walletの使いやすさなんかも確かめる実証きゃわ。」'],
  [s.name,'「“JPYCで買えた！”だけを試してるわけじゃないのか。」']
 ],[['もう一つの実証を見る',convenienceJpycOsaki]]);
}
function convenienceJpycOsaki(){
 scene('home','heroThink','heroine','right','大崎ではMetaMaskも','kuroppy');
 dialogue([
  ['ユリ','「あれ？ 8月17日にも別のローソンで実証しています。」'],
  [s.name,'「ゲートシティ大崎アトリウム店……こっちはMetaMaskって書いてある！」'],
  ['クロピー','「きゃわわ！ ついさっき勉強したMetaMaskが登場〜♪」'],
  [s.name,'「HashPort Wallet、JPYC、MetaMask……今までの話が急につながってきたな。」'],
  ['ユリ','「大崎の実証ではJPYCだけじゃなく、USDCやUSDTも対象だったんですね。」'],
  ['クロピー','「どれも価格を法定通貨などに連動させることを目指す“ステーブルコイン”の仲間きゃわ。ただし仕組みや発行者は同じではないよ。」'],
  [s.name,'「コンビニで暗号資産を使うって聞くと、BTCの値段を見ながらレジで払うのかと思ってた。」'],
  ['ユリ','「価格の安定を目指すステーブルコインだからこそ、日常決済との相性を試しているわけですね。」']
 ],[['じゃあ今もローソンで使える？',convenienceJpycReality]]);
}
function convenienceJpycReality(){
 scene('home','heroSmile','heroine','right','実証と正式導入は別','kuroppy');
 dialogue([
  [s.name,'「よし。じゃあJPYC入ってるし、からあげクン買ってくる。」'],
  ['クロピー','「だから待つきゃわーーー！」'],
  ['ユリ','「話、聞いてました？（笑）」'],
  [s.name,'「……関係者限定の実証でした。」'],
  ['クロピー','「正解きゃわ。2026年8月に行われた実証であって、現時点で“全国のローソンで一般のお客さんがJPYC払いできる”という意味ではないきゃわ。」'],
  ['ユリ','「ニュースで“実証”“検証”“予定”“正式提供”を区別するのって、Web3以外でも大事ですね。」'],
  [s.name,'「見出しだけだと、もうサービス開始したように感じちゃうもんな。」'],
  ['クロピー','「新しい技術ほど、何が“できた”のか、誰が“使える”のか、いつの話なのかまで見るきゃわ！」'],
  [s.name,'「でも、俺たちがゲームで触ってきたWalletやJPYCが、本当に街のレジで試されてるのはちょっとワクワクするな。」'],
  ['ユリ','「数年後にこのニュースを見返したら、“この頃はまだ実証だったんだ”って思うかもしれませんね。」'],
  ['クロピー','「その未来がどうなるかも含めて、Web3を見ていくきゃわ〜♪」']
 ],[['コンビニでJPYC!? 編を終える',convenienceJpycComplete]]);
}
function convenienceJpycComplete(){
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('convenienceJpyc'))s.completedChapters.push('convenienceJpyc');
 s.convenienceJpycDone=true;s.chapter=9;unlockLog(16);save(true);setStoryBgm('jpyc');
 scene('home','heroSmile','heroine','right','コンビニでJPYC!? 編 COMPLETE','kuroppy');
 dialogue([
  ['クロピー','「コンビニでJPYC!? 編 COMPLETE〜！ きゃわわ〜♪」'],
  [s.name,'「HashPort WalletもMetaMaskも、覚えた直後に現実の実証で出てくるとは思わなかった。」'],
  ['ユリ','「そして“実証された”と“正式に使える”は別。ニュースの読み方も一つ覚えましたね。」'],
  [s.name,'「次にローソンのニュースを見た時は、全国導入なのか、対象店舗はどこなのかまで確認する。」'],
  ['クロピー','「それでヨシきゃわ！」'],
  [s.name,'「よし。ここまでSAVEしておこう。」'],
  ['クロピー','「次回もお楽しみに〜！」']
 ],[]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}


// --- ところで、MetaMaskにはJPYCは無いの？編 -----------------------------
const JPYC_OFFICIAL_CONTRACT='0xE7C3D8C9a439feDe00D2600032D5dB0Be71C3c29';

function metamaskJpycStart(){
 s.chapter=9;setStoryBgm('cafe');
 scene('cafe','heroSmile','oldMan','right','喫茶クリプトへ','kuroppy');
 dialogue([
  [s.name,'「ここが“喫茶クリプト”か。いい雰囲気だな。」'],
  ['店主','「いらっしゃい。喫茶クリプトへようこそ。コーヒーでも飲みながら、ゆっくりしていってください。」'],
  ['クロピー','「きゃわ〜♪ Crypto Townの休憩スポットなの〜。」'],
  [s.name,'「店名はだいぶ休憩させる気ないけど（笑）」'],
  ['店主','「ははは。難しい話をする時ほど、温かい飲み物があるくらいがちょうどいいんですよ。」'],
  [s.name,'「じゃあ、ユリも呼んでちょっと聞きたいことがあるんだ。」'],
  ['店主','「どうぞどうぞ。私は店の仕事に戻ります。何かあれば声をかけてください。」']
 ],[['ユリと席につく',metamaskJpycQuestion]]);
}

function metamaskJpycQuestion(){
 scene('cafe','heroThink','heroine','right','ところで、MetaMaskにはJPYCは無いの？','kuroppy');
 dialogue([
  [s.name,'「そういえばさ。MetaMaskを入れたけど……JPYCって無いよね？」'],
  ['ユリ','「“無い”というより、MetaMaskの画面にまだ表示されていない可能性がありますね。」'],
  [s.name,'「え？ Walletに表示されてないのに？」'],
  ['クロピー','「Walletがすべてのトークンを最初から自動で一覧表示するとは限らないきゃわ。EVMのトークンは、コントラクトアドレスを使って手動で表示に追加できるよ。」'],
  [s.name,'「追加したらJPYCが新しく作られるの？」'],
  ['ユリ','「いいえ。トークンを追加する操作は、すでにブロックチェーン上にある資産をMetaMaskで認識・表示できるようにするイメージです。」'],
  [s.name,'「なるほど。“持ってない”と“画面に出てない”は別なのか。」']
 ],[['JPYCを追加してみる',metamaskJpycSafety]]);
}

function metamaskJpycSafety(){
 scene('cafe','heroSurprise','heroine','right','名前とアイコンだけで選ばない','kuroppy');
 dialogue([
  [s.name,'「じゃあ検索で“JPYC”って出たやつを選べばいい？」'],
  ['ユリ','「そこで名前とアイコンだけを信用するのはNGです。」'],
  [s.name,'「同じ名前って作れるの？」'],
  ['クロピー','「作れてしまうきゃわ。見た目がそれっぽくても、本物とは限らないよ。」'],
  ['ユリ','「暗号資産では、トークン名やロゴだけではなく“どのネットワークの、どのコントラクトアドレスか”を確認する習慣が大切です。」'],
  ['クロピー','「JPYC公式も偽JPYCへの注意を出していて、コントラクトアドレスを確認するよう案内しているきゃわ。」'],
  [s.name,'「今回は公式のアドレスが分かってるんだよね？」'],
  ['クロピー','「うん。今回使ってきたPolygon版JPYCの公式コントラクトアドレスはこれきゃわ。」'],
  ['クロピー','「'+JPYC_OFFICIAL_CONTRACT+'」'],
  ['クロピー','「このアドレス、あとで使えるようにITEMに入れておくきゃわ！」'],
  [s.name,'「助かる。これなら毎回探し直さなくていいな。」'],
  ['ユリ','「便利ですけど、実際に使う時はJPYC公式の最新情報でもう一度確認してくださいね。」']
 ],[['MetaMaskで追加する手順へ',metamaskJpycNetwork]]);
}

function metamaskJpycNetwork(){
 addItem({type:'normal',name:'JPYC Contract Address（Polygon）',desc:JPYC_OFFICIAL_CONTRACT+'\nJPYC公式情報で確認したPolygon版JPYCのコントラクトアドレス。実際に利用する際はJPYC公式情報でも最新の内容を再確認しよう。'});
 scene('cafe','heroReady','heroine','right','まずネットワークをPolygonに','kuroppy');
 dialogue([
  ['クロピー','「まずMetaMaskを開いて、接続先のネットワークがPolygonになっているか『トークン ▷』から確認するきゃわ。」'],
  [s.name,'「今回はPolygon版JPYCだから……Polygonを選ぶ。」'],
  ['ユリ','「そうです。同じトークン名でも、ネットワークが違えば別のブロックチェーンを見ています。」'],
  ['クロピー','「Polygonがまだ一覧に無ければ、ネットワーク選択から追加できるよ。MetaMaskの画面は更新で少し変わることがあるから、表示名も確認しながら進めるきゃわ。」'],
  [s.name,'「コントラクトアドレスだけ合ってればいいわけじゃなくて、先にネットワークも確認、と。」'],
  ['ユリ','「ちなみにJPYC公式ではEthereum・Avalanche C-Chain・Polygonに公式アドレスが案内されています。現在は同じ文字列のアドレスでも、ネットワークの確認は省略しないでください。」']
 ],[['Polygonを選んだ',metamaskJpycImport]]);
}

function metamaskJpycImport(){
 scene('cafe','heroThink','heroine','right','カスタムトークンを追加する','kuroppy');
 dialogue([
  ['クロピー','「ネットワークを確認したら、“トークン”を開いて“＋”からトークン追加へ進むきゃわ。」'],
  [s.name,'「検索画面が出た。」'],
  ['クロピー','「今回は正式なコントラクトアドレスが分かっているから、“カスタムトークン”を選ぶよ。」'],
  ['ユリ','「トークンアドレスの欄に、JPYC公式で確認したコントラクトアドレスを貼り付けます。」'],
  [s.name,'「'+JPYC_OFFICIAL_CONTRACT+'……これだな。」'],
  ['クロピー','「貼り付けたら内容を確認して“次へ”。そのあと“インポート”きゃわ。」'],
  [s.name,'「……JPYCが出た！」'],
  ['ユリ','「これでMetaMaskがPolygon上のJPYCを表示できるようになりましたね。」'],
  ['クロピー','「もしJPYCをまだ持っていなければ、表示を追加しても残高が勝手に増えるわけじゃないよ（笑）」'],
  [s.name,'「そこは分かってる（笑）」']
 ],[['今日のポイントを確認する',metamaskJpycLesson]]);
}

function metamaskJpycLesson(){
 scene('cafe','heroSmile','oldMan','right','コントラクトアドレスを確認する習慣','kuroppy');
 dialogue([
  ['店主','「おや、うまく表示できましたか？」'],
  [s.name,'「はい。JPYC、出ました。」'],
  ['店主','「それはよかった。では、そのJPYCが本物だと判断した理由は？」'],
  [s.name,'「……名前がJPYCだから、じゃない。」']
 ],[['ユリの答えを聞く',metamaskJpycLessonYuri]]);
}
function metamaskJpycLessonYuri(){
 scene('cafe','heroSmile','heroine','right','コントラクトアドレスを確認する習慣','kuroppy');
 dialogue([
  ['ユリ','「アイコンが同じだから、でもないですね。」'],
  [s.name,'「ネットワークをPolygonにして、JPYC公式でコントラクトアドレスを確認したから。」'],
  ['クロピー','「きゃわ！ 今日いちばん大事なのは“JPYCを表示できたこと”より、その確認のしかたなの〜。」'],
  [s.name,'「検索結果や見た目だけでポチッとしない。公式情報からアドレスを確認する。」'],
  ['ユリ','「Web3は似た名前のものが出てくることがありますからね。少し面倒でも、確認する癖が自分を守ります。」']
 ],[['店主の話を聞く',metamaskJpycLessonMaster]]);
}
function metamaskJpycLessonMaster(){
 scene('cafe','heroSmile','oldMan','right','コントラクトアドレスを確認する習慣','kuroppy');
 dialogue([
  ['店主','「うん。それならいい。」'],
  ['店主','「コーヒーもトークンも、ラベルだけで中身を決めつけないことです。」'],
  [s.name,'「店主、うまいこと言った（笑）」']
 ],[['この編を終える',metamaskJpycComplete]]);
}

function metamaskJpycComplete(){
 if(!Array.isArray(s.completedChapters))s.completedChapters=[];
 if(!s.completedChapters.includes('metamaskJpyc'))s.completedChapters.push('metamaskJpyc');
 s.metamaskJpycDone=true;s.chapter=10;unlockLog(17);save(true);setStoryBgm('cafe');
 scene('cafe','heroSmile','heroine','right','ところで、MetaMaskにはJPYCは無いの？編 COMPLETE','kuroppy');
 dialogue([
  ['クロピー','「“ところで、MetaMaskにはJPYCは無いの？編” COMPLETE〜！ きゃわわ〜♪」'],
  [s.name,'「無いんじゃなくて、表示されていないことがある。そこからもう勘違いしてたな。」'],
  ['ユリ','「そして、名前やアイコンよりもネットワークとコントラクトアドレス。」'],
  [s.name,'「実際に追加する時は、JPYCの公式情報でもう一度確認する。」']
 ],[['店主に挨拶する',metamaskJpycCompleteMaster]]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}


function metamaskJpycCompleteMaster(){
 scene('cafe','heroSmile','oldMan','right','ところで、MetaMaskにはJPYCは無いの？編 COMPLETE','kuroppy');
 dialogue([
  ['店主','「それを覚えて帰ってくれたなら、今日のコーヒーはいい仕事をしましたね。」'],
  [s.name,'「コーヒーの成果なのかな（笑）」'],
  ['クロピー','「喫茶クリプト、また来るきゃわ〜♪」'],
  [s.name,'「よし。ここまでSAVEしておこう。」'],
  ['クロピー','「次回もお楽しみに〜！」']
 ],[]);
 setTimeout(()=>document.querySelector('#save')?.classList.add('save-guide'),80);
}
