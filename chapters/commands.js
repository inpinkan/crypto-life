// ゲームコマンド紹介編：Cafeで基本操作とSAVE引継ぎを学ぶ
const COMMANDS_STORY=[
 ['マスター','「NFTの冒険も一段落したね。今日はクリプトLIFEの操作を紹介しよう。」'],
 ['$player','「操作っていっても、画面のボタンを押すだけじゃないのか？」'],
 ['マスター','「画面下のHOME・BOOK SHOP・ITEM・LOGで、それぞれの場所を開けるよ。会話中は画面を押すと文章を進められる。」'],
 ['マスター','「一つの編が終わって、右上のSAVEが光ったら押してね。そこまでの冒険を保存できるよ。」'],
 ['マスター','「途中でもSAVEは押せるけれど、読んでいるセリフそのものは保存されないんだ。続きは章の進行状況に応じた場所から始まるよ。」'],
 ['$player','「なるほど。ひと区切りついたら、光ったSAVEを押すんですね。」'],
 ['$player','「SAVEの隣にある、あの小さな⚙️は何だ？」'],
 ['マスター','「設定タブだよ。押すとプレイヤー名を変更したり、音のON・OFF、PLAYER CARDの確認ができる。」'],
 ['$player','「⚙️小さくて気が付かなかったです。大きくならないかな。」'],
 ['$player','「あっ！いま大きくなった！」',()=>{s.settingsEnlarged=true}],
 ['マスター','「見つけやすくなったかな。設定にはSAVEデータの引継ぎ機能もあるよ。」'],
 ['マスター','「立ち上げてプレイするブラウザやSNSが違うと、新規の冒険として始まることがある。そんな時はまずSAVEしてから、設定で引継ぎコードを発行して、新しい場所で復元すれば続きから遊べるんだ。」'],
 ['$player','「ブラウザやSNSが変わっても、引継ぎコードがあれば大丈夫なんですね。」'],
 ['マスター','「そう。コードは大切に保管して、他人には見せないようにね。」'],
 ['マスター','「称号はもう二歩も三歩も進んだようだから、『クリプト冒険者』に変更しておいたよ。」'],
 ['$player','「はじめの一歩から、ちゃんと冒険者になったんだな！」']
];
function commandsStart(){
 s.chapter=14;setStoryBgm('cafe');
 scene('cafe','heroSmile','oldMan','right','ゲームコマンド紹介編');
 dialogue(COMMANDS_STORY.map(([a,b,onShow],i)=>[a==='$player'?s.name:a,b,()=>{if(onShow)onShow();const reveal=COMMANDS_STORY.findIndex(line=>typeof line[2]==='function');document.querySelector('#gameSettings').classList.toggle('settings-large',i>=reveal)}]),[['この編を終える',commandsComplete]]);
}
function commandsComplete(){
 const isReplay=!!replay?.active;
 if(!isReplay){
  if(!s.completedChapters.includes('commands'))s.completedChapters.push('commands');
  s.commandsDone=true;s.chapter=15;unlockLog(21);save(true);
 }
 scene('cafe','heroSmile','oldMan','right','ゲームコマンド紹介編 COMPLETE','kuroppy');
 dialogue([
  ['クロピー','「ゲームコマンド紹介編はこれでおわりきゃわ！ 小さな歯車も見つかったし、冒険の準備はばっちりきゃわ！」'],
  [s.name,'「称号も新しくなったしな。クリプト冒険者、か。ちょっとかっこいいじゃないか。」'],
  ['マスター','「うん。でも、立派な冒険者でもSAVEを忘れたら、今日の話をもう一杯おかわりだよ。」'],
  [s.name,'「コーヒーのおかわりなら歓迎だけど、それは困る！ 光ってるSAVE、ちゃんと押しておこう。」'],
  ['クロピー','「忘れ物はカップの底にもないきゃわ？ それじゃ、次回もお楽しみにきゃわ！」']
 ],isReplay?[['本編へ戻る',finishChapterReplay]]:[]);
 if(!isReplay)document.querySelector('#save')?.classList.add('save-guide');
}
