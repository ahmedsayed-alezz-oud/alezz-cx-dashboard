(function(){
'use strict';
var INSP=[{"n": "Customer First", "ar": "العميل أولًا", "idea": "نبدأ دائمًا من حاجة العميل، لا مما يريحنا نحن.", "tip": "قبل كل رد اسأل نفسك: ما الذي يحتاجه هذا العميل ليغلق موضوعه اليوم؟ ثم اكتب الرد الذي يعطيه ذلك مباشرة.", "mot": "ردّك قد يكون الفرق بين عميل يغادر وعميل يعود لسنوات."}, {"n": "Respond Fast", "ar": "السرعة في الرد", "idea": "نرد ضمن زمن الرد المعتمد، ولا يبقى عميل بلا رد.", "tip": "لا تنتهِ ورديتك وفي القناة رسالة بلا رد. وإن لم تستطع الحل اليوم، أخبر العميل بما ستفعله وبموعد التحديث القادم.", "mot": "الرد المبكر يُهدّئ العميل حتى قبل أن تحل مشكلته."}, {"n": "Ownership", "ar": "المسؤولية", "idea": "من يفتح الحالة يتبنّاها حتى تُغلق، ولا نقول «ليس من اختصاصي».", "tip": "ما فتحته تتابعه حتى يُغلق. وإن لزم تحويله فحوّله باسم المستلم وبالتفاصيل كاملة، حتى لا يعيد العميل قصته من البداية.", "mot": "«ليس من اختصاصي» جملة لا يسمعها العميل الذي وجد من يتبنى مشكلته."}, {"n": "Trust", "ar": "كسب الثقة", "idea": "نتواصل بوضوح واحترام ومعلومات دقيقة وصادقة، دون ضغط.", "tip": "لا تعد بتعويض أو بموعد قبل التأكد من صلاحيتك ومن الواقع. وعد صغير تفي به أفضل من وعد كبير تتأخر فيه.", "mot": "الثقة تُبنى بوعود صغيرة متكررة الوفاء."}, {"n": "Know the Why", "ar": "اعرف السبب", "idea": "لا نكتفي بحل العَرَض؛ نسجّل السبب لنمنع تكراره.", "tip": "سجّل سبب كل تواصل وكل شكوى بدقة. السبب المتكرر هو الذي سيوفّر علينا مئات الرسائل لاحقًا.", "mot": "من يعرف السبب يستطيع أن يمنع التكرار."}, {"n": "Act Early", "ar": "المبادرة", "idea": "نبلغ العميل بالمشكلة قبل أن يسأل، ونقترح معها الحل.", "tip": "إن عرفت بتأخر طلب قبل أن يسأل العميل، فأبلغه أنت أولًا ومعه الحل المقترح.", "mot": "العميل الذي تبلغه بالمشكلة قبل أن يكتشفها يثق بك أكثر."}, {"n": "High Standards", "ar": "معايير عالية", "idea": "نعالج الخطأ المتكرر من جذره، لا نرقّعه كل يوم.", "tip": "إذا تكرر الخطأ نفسه (نقص، تلف، تأخير) فلا تكتفِ بتعويضه كل مرة. اذكره في تسليم الوردية مع أمثلة حتى يُعالج من أصله.", "mot": "الجودة عادة يومية، لا حدث موسمي."}, {"n": "Results That Count", "ar": "نتائج تُحسب", "idea": "نركّز على ما يحرّك النتائج: الأقدم والأهم أولًا.", "tip": "ابدأ بالأقدم والأهم: الحالة المتأخرة وشكاوى الجهات الرسمية قبل الاستفسار البسيط.", "mot": "يوم بلا متأخرات إنجاز يستحق أن تفتخر به."}, {"n": "Honest Reviews", "ar": "التقييم الصادق", "idea": "لا نطلب من العميل تغيير تقييمه ولا نقدّم له مقابلًا؛ نكسب التقييم بجودة الخدمة.", "tip": "في اتصال استعادة العميل غير الراضي: ادعُه لتحديث تقييمه إن أراد، دون ضغط أو مقابل، واحترم رفضه.", "mot": "التقييم الصادق وإن كان أقل أغلى من تقييم مصطنع."}, {"n": "Fair Resolution", "ar": "حل عادل من أول مرة", "idea": "نحرص أن ينتهي التواصل الأول بحل عادل، قبل أن يتحول الاستفسار إلى شكوى.", "tip": "اجعل هدفك أن ينتهي التواصل الأول بحل، حتى لا يتحول الاستفسار إلى شكوى رسمية (وزارة التجارة، تابي، تمارا).", "mot": "أفضل شكوى هي التي لم تُرفع أصلًا."}];
var MKTS=['KSA','UAE'];
var COLORS=['#C9A84C','#2D6B97','#C0392B','#1D9E75','#7F77DD','#D85A30','#6B7280','#B8860B'];
var DEF_DEPT='إدارة خدمة وتجربة العملاء / Customer Experience Management';
var PRIORITY={high:'High · عالية',med:'Med · متوسطة',low:'Low · منخفضة'};

function $(i){return document.getElementById(i)}
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function clone(x){return JSON.parse(JSON.stringify(x))}
function uid(p){return p+Date.now().toString(36)+Math.random().toString(36).slice(2,5)}
function isObj(x){return x&&typeof x==='object'&&!Array.isArray(x)}
function merge(a,b){for(var k in b){if(isObj(b[k])){if(!isObj(a[k]))a[k]={};merge(a[k],b[k])}else a[k]=b[k]}return a}
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function sleep(ms){return new Promise(function(r){setTimeout(r,ms)})}

/* ---------- state ---------- */
var CFG=window.CX_CONFIG||{};
var USER_DOMAIN='@users.alezz-oud.com';
var ROLE_AR={pending:'قيد الاعتماد',employee:'موظف',supervisor:'مشرف',manager:'مدير',viewer:'متابعة فقط'};
var ROLES=['pending','employee','supervisor','manager','viewer'];
var content={sections:[],news:[],kpis:[]};
var day=blankDay();
var ui={view:'tasks',sec:'all',edit:false,markets:{KSA:true,UAE:true},collapsed:{},open:{}};
var env={sb:null,me:null,role:'none',canEdit:false,canWrite:false,isMgr:false,sees:false,failed:false,inApp:false};
var pend={},inflight={},flushTimer=null,flushing=false,inspI=0;
var srv={sections:{},tasks:{},kpi_groups:{},kpi_items:{},news:{}};
var TABLES={sections:['sections','tasks'],kpis:['kpi_groups','kpi_items'],news:['news']};
var loadSeq=0,daySeq=0,saving=0,contentTimer=null,dayTimer=null,profTimer=null,subscribed=false,polling=false;
var team={recs:[],users:[]};
var sigC={};
var BUCKET='news-images';

function blankDay(){return {items:{},kpi:{},fields:{}}}
function S(){return content.sections}
function setRole(p){
  env.me=p;env.role=(p&&p.active!==false&&p.role)?p.role:'none';
  env.canWrite=env.role==='employee'||env.role==='supervisor'||env.role==='manager';
  env.canEdit=env.role==='supervisor'||env.role==='manager';
  env.isMgr=env.role==='manager';
  env.sees=env.role==='supervisor'||env.role==='manager'||env.role==='viewer';
}
function prepContent(){
  content.news.forEach(function(n,i){if(!n.id)n.id='n_'+i});
  content.kpis.forEach(function(g,i){if(!g.id)g.id='g'+i});
  if(ui.sec!=='all'&&!S().some(function(s){return s.id===ui.sec}))ui.sec='all';
}
function loadPrefs(){
  var r=lsGet('ALEZZ_CX_UI');if(!r)return;
  try{var p=JSON.parse(r);if(p.markets){MKTS.forEach(function(m){if(typeof p.markets[m]==='boolean')ui.markets[m]=p.markets[m]})}
    if(p.sec)ui.sec=p.sec;if(['tasks','news','kpi','team','users'].indexOf(p.view)>-1)ui.view=p.view}catch(e){}
}
function savePrefs(){lsSet('ALEZZ_CX_UI',JSON.stringify({sec:ui.sec,view:ui.view,markets:ui.markets}))}

/* ---------- persistence (Supabase) ---------- */
function setSync(){
  var el=$('syncChip'),t,c='';
  if(env.failed){t='تعذّر الحفظ · Save failed';c='bad'}
  else if(!env.me){t='غير متصل · Signed out';c='warn'}
  else{t=(env.canWrite||env.canEdit?'مباشر · Live':'عرض فقط · View only')+' — '+(env.me.full_name||'')+' · '+ROLE_AR[env.role];c=(env.canWrite||env.canEdit)?'live':'warn'}
  el.className='sync '+c;el.textContent=t;
}
function fail(e){
  console.warn('cx',e);env.failed=true;setSync();
  var m=(e&&(e.message||e.code))||'';
  toast(/permission|policy|42501|JWT|401|403/i.test(m)?'ليس لديك صلاحية لهذا الإجراء · No permission':'تعذّر الحفظ، ستُعاد المحاولة · Could not save, retrying',true);
}
function chk(p){return Promise.resolve(p).then(function(r){if(r&&r.error)throw r.error;return r})}
function rowsOf(key){
  var out=[];
  if(key==='sections'){
    S().forEach(function(s,i){
      out.push(['sections',{id:s.id,label:s.label||'',label_ar:s.labelAr||'',color:s.color||COLORS[0],sort:i}]);
      s.items.forEach(function(t,j){out.push(['tasks',{id:t.id,section_id:s.id,ar:t.ar||'',en:t.en||'',ar_sub:t.arSub||'',en_sub:t.enSub||'',priority:t.priority||'med',sort:j}])});
    });
  }else if(key==='kpis'){
    content.kpis.forEach(function(g,i){
      out.push(['kpi_groups',{id:g.id,g:g.g||'',sort:i}]);
      g.items.forEach(function(k,j){out.push(['kpi_items',{id:k.id,group_id:g.id,ar:k.ar||'',en:k.en||'',def:k.def||'',target:k.t||'',sort:j}])});
    });
  }else if(key==='news'){
    content.news.forEach(function(n){out.push(['news',{id:n.id,day:n.date||todayStr(),tag:n.tag||'',title:n.title||'',body:n.text||'',pin:!!n.pin,images:(n.images||[]).map(function(a){return {id:a.id}})}])});
  }
  return out;
}
function persist(key){
  if(!env.sb||!env.canEdit)return Promise.resolve();
  var tabs=TABLES[key],cur={},ups={},dels={};
  tabs.forEach(function(t){cur[t]={};ups[t]=[];dels[t]=[]});
  rowsOf(key).forEach(function(r){cur[r[0]][r[1].id]=r[1]});
  tabs.forEach(function(t){
    Object.keys(cur[t]).forEach(function(id){if(srv[t][id]!==JSON.stringify(cur[t][id]))ups[t].push(cur[t][id])});
    Object.keys(srv[t]).forEach(function(id){if(!cur[t][id])dels[t].push(id)});
  });
  tabs.forEach(function(t){ups[t].forEach(function(r){srv[t][r.id]=JSON.stringify(r)});dels[t].forEach(function(id){delete srv[t][id]})});
  saving++;
  var p=Promise.resolve();
  tabs.forEach(function(t){if(ups[t].length)p=p.then(function(){return chk(env.sb.from(t).upsert(ups[t]))})});
  tabs.slice().reverse().forEach(function(t){if(dels[t].length)p=p.then(function(){return chk(env.sb.from(t).delete().in('id',dels[t]))})});
  return p.then(function(){env.failed=false;setSync()},function(e){fail(e);return loadContent()}).then(function(){saving--});
}
async function loadContent(){
  if(!env.sb)return;
  var seq=++loadSeq,sb=env.sb;
  var r=await Promise.all([
    sb.from('sections').select('*').order('sort'),sb.from('tasks').select('*').order('sort'),
    sb.from('kpi_groups').select('*').order('sort'),sb.from('kpi_items').select('*').order('sort'),
    sb.from('news').select('*').order('day',{ascending:false}).order('created_at',{ascending:false})]);
  if(seq!==loadSeq)return;
  for(var i=0;i<r.length;i++)if(r[i].error){fail(r[i].error);return}
  var secs=r[0].data.map(function(s){return {id:s.id,label:s.label,labelAr:s.label_ar,color:s.color,items:[]}}),byS={};
  secs.forEach(function(s){byS[s.id]=s});
  r[1].data.forEach(function(t){var s=byS[t.section_id];if(s)s.items.push({id:t.id,en:t.en,enSub:t.en_sub,ar:t.ar,arSub:t.ar_sub,priority:t.priority})});
  var gs=r[2].data.map(function(g){return {id:g.id,g:g.g,items:[]}}),byG={};
  gs.forEach(function(g){byG[g.id]=g});
  r[3].data.forEach(function(k){var g=byG[k.group_id];if(g)g.items.push({id:k.id,ar:k.ar,en:k.en,def:k.def,t:k.target})});
  var news=r[4].data.map(function(n){return {id:n.id,date:n.day,tag:n.tag,title:n.title,text:n.body,pin:n.pin,images:Array.isArray(n.images)?n.images:[]}});
  content={sections:secs,kpis:gs,news:news};
  ['sections','kpis','news'].forEach(function(key){
    TABLES[key].forEach(function(t){srv[t]={}});
    rowsOf(key).forEach(function(q){srv[q[0]][q[1].id]=JSON.stringify(q[1])});
  });
  if(env.failed&&!Object.keys(pend).length){env.failed=false}
  renderAll();
}
function dayDate(){return $('checkDate').value||todayStr()}
function dayId(){return dayDate()+'_'+$('shiftSel').selectedIndex}
function pendKey(){return 'ALEZZ_CX_PEND_'+(env.me?env.me.id:'x')}
function savePend(){
  if(!env.me)return;
  var all={};Object.keys(inflight).forEach(function(k){all[k]=clone(inflight[k])});
  Object.keys(pend).forEach(function(k){all[k]=merge(all[k]||{},clone(pend[k]))});
  try{if(Object.keys(all).length)localStorage.setItem(pendKey(),JSON.stringify(all));else localStorage.removeItem(pendKey())}catch(e){}
}
function restorePend(){
  try{var r=localStorage.getItem(pendKey());if(!r)return;var o=JSON.parse(r);Object.keys(o).forEach(function(k){pend[k]=merge(pend[k]||{},o[k])})}catch(e){}
}
function commit(patch){
  if(!env.canWrite)return;
  merge(day,clone(patch));
  var p=clone(patch);delete p.kpi;
  if(!p.items&&!p.fields)return;
  var id=dayId();pend[id]=merge(pend[id]||{},p);savePend();
  clearTimeout(flushTimer);flushTimer=setTimeout(flush,300);
}
async function flush(){
  if(flushing||!env.sb||!env.canWrite)return;
  flushing=true;var bad=false;
  try{
    var ids=Object.keys(pend);
    for(var k=0;k<ids.length;k++){
      var id=ids[k],p=pend[id];delete pend[id];inflight[id]=p;
      var pr=id.split('_');
      var r=await env.sb.rpc('save_record',{p_day:pr[0],p_shift:parseInt(pr[1],10),p_items:p.items||{},p_fields:p.fields||{}});
      if(r.error){pend[id]=merge(clone(p),pend[id]||{});delete inflight[id];throw r.error}
      delete inflight[id];
    }
    env.failed=false;
  }catch(e){bad=true;fail(e)}
  savePend();flushing=false;
  if(Object.keys(pend).length){flushTimer=setTimeout(flush,bad?3000:100)}else setSync();
}
async function flushNow(){
  clearTimeout(flushTimer);
  for(var n=0;n<40&&(flushing||Object.keys(pend).length);n++){await flush();await sleep(60)}
}
function saveKpi(id,val){
  if(!env.canEdit)return;
  day.kpi[id]={a:val};
  chk(env.sb.from('kpi_values').upsert({day:dayDate(),kpi_id:id,value:val})).then(function(){env.failed=false;setSync()},fail);
}
async function openDay(){
  day=blankDay();applyDay();
  await flushNow();
  await loadDay();
}
async function loadDay(){
  if(!env.sb||!env.me)return;
  var d=dayDate(),sh=$('shiftSel').selectedIndex,seq=++daySeq,sb=env.sb;
  var jobs=[sb.from('kpi_values').select('kpi_id,value').eq('day',d)];
  jobs.push(env.canWrite?sb.from('day_records').select('items,fields').eq('day',d).eq('shift',sh).eq('user_id',env.me.id).maybeSingle():Promise.resolve({data:null}));
  jobs.push(env.sees?sb.from('day_records').select('user_id,items,fields,updated_at').eq('day',d).eq('shift',sh):Promise.resolve({data:[]}));
  var r=await Promise.all(jobs);
  if(seq!==daySeq||d!==dayDate()||sh!==$('shiftSel').selectedIndex)return;
  for(var i=0;i<r.length;i++)if(r[i].error){fail(r[i].error);return}
  var nd=blankDay();
  (r[0].data||[]).forEach(function(x){nd.kpi[x.kpi_id]={a:x.value}});
  if(r[1].data){merge(nd,{items:clone(r[1].data.items||{}),fields:clone(r[1].data.fields||{})})}
  var id=dayId();
  if(inflight[id])merge(nd,clone(inflight[id]));
  if(pend[id])merge(nd,clone(pend[id]));
  day=nd;team.recs=r[2].data||[];
  applyDay();renderTeam();
}
async function loadPeople(){
  if(!env.sb||!env.sees)return;
  var r=await env.sb.from('profiles').select('*').order('created_at');
  if(r.error){fail(r.error);return}
  team.users=r.data||[];renderUsers();renderTeam();updateTabs();
}

/* ---------- team + users views ---------- */
function updateTabs(){
  $('vt_team').hidden=!env.sees;
  $('vt_users').hidden=!env.isMgr;
  var pc=team.users.filter(function(u){return u.role==='pending'&&u.active}).length;
  var b=$('vt_users_cnt');b.textContent=pc?'('+pc+')':'';
  $('pendBanner').hidden=!(env.isMgr&&pc);
  if(pc)$('pendBanner').textContent='يوجد '+pc+' حساب/حسابات بانتظار اعتمادك — افتح تبويب «المستخدمون».';
  if(!env.sees&&(ui.view==='team'))ui.view='tasks';
  if(!env.isMgr&&ui.view==='users')ui.view='tasks';
}
function personName(id){var u=team.users.find(function(x){return x.id===id});return u?u.full_name||u.email:'—'}
function recStats(r){
  var it=r.items||{},d=0,iss=0,notes=0;
  Object.keys(it).forEach(function(k){var x=it[k]||{};if(x.done)d++;if(x.issue)iss++;if(x.note)notes++});
  return {done:d,issues:iss,notes:notes};
}
function fmtTime(ts){if(!ts)return '—';try{var d=new Date(ts);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}catch(e){return '—'}}
function taskIndex(){var m={};S().forEach(function(s){s.items.forEach(function(t){m[t.id]={t:t,s:s}})});return m}
function renderTeam(){
  if(!$('teamBody')||!env.sees)return;
  var total=S().reduce(function(a,s){return a+s.items.length},0);
  var staff=team.users.filter(function(u){return u.active&&(u.role==='employee'||u.role==='supervisor'||u.role==='manager')});
  var byU={};team.recs.forEach(function(r){byU[r.user_id]=r});
  var rows=staff.map(function(u){return {u:u,r:byU[u.id]||null}});
  team.recs.forEach(function(r){if(!staff.some(function(u){return u.id===r.user_id}))rows.push({u:{id:r.user_id,full_name:personName(r.user_id),role:'employee'},r:r})});
  rows.sort(function(a,b){return (b.r?1:0)-(a.r?1:0)||String(a.u.full_name).localeCompare(String(b.u.full_name),'ar')});
  var started=rows.filter(function(x){return x.r}).length,sumPct=0,sumIss=0;
  rows.forEach(function(x){if(x.r){var s=recStats(x.r);sumPct+=total?s.done/total:0;sumIss+=s.issues}});
  var avg=started?Math.round(sumPct/started*100):0;
  $('teamSum').innerHTML='<div class="sum-card"><div class="sum-val">'+started+'/'+rows.length+'</div><div class="sum-lbl">بدأوا · Started</div></div>'
    +'<div class="sum-card"><div class="sum-val">'+avg+'%</div><div class="sum-lbl">متوسط الإنجاز · Avg</div></div>'
    +'<div class="sum-card"><div class="sum-val" style="color:#c23b3b">'+sumIss+'</div><div class="sum-lbl">مشاكل · Issues</div></div>'
    +'<div class="sum-card"><div class="sum-val">'+total+'</div><div class="sum-lbl">مهام · Tasks</div></div>';
  var idx=taskIndex(),h='';
  if(!rows.length)h='<div class="news-empty">لا يوجد موظفون معتمدون بعد.</div>';
  rows.forEach(function(x){
    var s=x.r?recStats(x.r):{done:0,issues:0,notes:0},p=total?Math.round(s.done/total*100):0,open=!!ui.open[x.u.id];
    h+='<div class="t-row'+(x.r?'':' idle')+'"><button type="button" class="t-head" data-act="teamToggle" data-id="'+esc(x.u.id)+'" aria-expanded="'+open+'">'
      +'<span class="t-name">'+esc(x.u.full_name||'—')+'<small>'+esc(ROLE_AR[x.u.role]||'')+'</small></span>'
      +'<span class="t-bar"><span style="width:'+p+'%"></span></span>'
      +'<span class="t-num">'+(x.r?s.done+'/'+total+' ('+p+'%)':'لم يبدأ')+'</span>'
      +'<span class="t-iss'+(s.issues?' bad':'')+'">'+(x.r?s.issues+' ⚠':'')+'</span>'
      +'<span class="t-time">'+(x.r?fmtTime(x.r.updated_at):'')+'</span></button>';
    if(open&&x.r){
      var it=x.r.items||{},ls='';
      Object.keys(it).forEach(function(id){
        var v=it[id]||{},m=idx[id];if(!m)return;
        if(v.issue||v.note)ls+='<li class="'+(v.issue?'iss':'')+'"><b>'+esc(m.s.labelAr)+' · '+esc(m.t.ar||m.t.en)+'</b><span>'+esc(v.note||'')+'</span></li>';
      });
      var f=x.r.fields||{};
      h+='<div class="t-detail">'+(ls?'<ul>'+ls+'</ul>':'<div class="news-empty">لا ملاحظات أو مشاكل مسجّلة.</div>')
        +(f.hodComment?'<div class="t-cmt"><b>تعليق/تصعيد:</b> '+esc(f.hodComment)+'</div>':'')
        +(f.signTime?'<div class="t-cmt"><b>الاعتماد:</b> '+esc(f.sigInput||'')+' — '+esc(f.signTime)+'</div>':'')+'</div>';
    }
    h+='</div>';
  });
  $('teamBody').innerHTML=h;
  $('teamHint').textContent=dayDate()+' · '+$('shiftSel').value;
}
function renderUsers(){
  if(!$('usersBody')||!env.isMgr)return;
  var us=team.users.slice().sort(function(a,b){return (a.role==='pending'?0:1)-(b.role==='pending'?0:1)||String(a.full_name).localeCompare(String(b.full_name),'ar')});
  var h='';
  us.forEach(function(u){
    var me=env.me&&u.id===env.me.id;
    h+='<div class="u-row'+(u.role==='pending'&&u.active?' pending':'')+'"><div class="u-main"><b>'+esc(u.full_name||'—')+'</b><span class="u-mail">'+esc((u.email||'').replace(USER_DOMAIN,' (اسم مستخدم)'))+'</span></div>'
      +'<select class="role-sel" data-id="'+esc(u.id)+'" aria-label="Role"'+(me?' disabled':'')+'>'+ROLES.map(function(r){return '<option value="'+r+'"'+(u.role===r?' selected':'')+'>'+ROLE_AR[r]+'</option>'}).join('')+'</select>'
      +'<label class="u-act"><input type="checkbox" class="act-chk" data-id="'+esc(u.id)+'"'+(u.active?' checked':'')+(me?' disabled':'')+'> فعّال</label></div>';
  });
  $('usersBody').innerHTML=h||'<div class="news-empty">لا يوجد مستخدمون.</div>';
}
function updateUser(id,patch){
  chk(env.sb.from('profiles').update(patch).eq('id',id)).then(function(){toast('تم التحديث · Updated');loadPeople()},function(e){fail(e);loadPeople()});
}

/* ---------- realtime + polling ---------- */
function typing(){var a=document.activeElement;return a&&/^(TEXTAREA|INPUT)$/.test(a.tagName)&&a.closest&&a.closest('#app')&&!document.querySelector('.modal-ov')}
function onContentEvt(){
  clearTimeout(contentTimer);
  contentTimer=setTimeout(function wait(){if(saving||typing()){contentTimer=setTimeout(wait,1200);return}loadContent()},400);
}
function onDayEvt(){
  clearTimeout(dayTimer);
  dayTimer=setTimeout(function wait(){if(flushing||Object.keys(pend).length||typing()){dayTimer=setTimeout(wait,1200);return}loadDay()},500);
}
function onProfEvt(){clearTimeout(profTimer);profTimer=setTimeout(function(){refreshProfile();loadPeople()},500)}
function subscribe(){
  if(subscribed||!env.sb)return;subscribed=true;
  try{
    var ch=env.sb.channel('cx-live');
    ['sections','tasks','kpi_groups','kpi_items','news'].forEach(function(t){ch.on('postgres_changes',{event:'*',schema:'public',table:t},onContentEvt)});
    ['kpi_values','day_records'].forEach(function(t){ch.on('postgres_changes',{event:'*',schema:'public',table:t},onDayEvt)});
    ch.on('postgres_changes',{event:'*',schema:'public',table:'profiles'},onProfEvt);
    ch.subscribe();
  }catch(e){console.warn('realtime',e)}
}
function startPoll(){
  if(polling)return;polling=true;
  setInterval(function(){
    if(document.visibilityState!=='visible'||!env.sb)return;
    refreshProfile();
    if(env.inApp&&!saving&&!typing()){loadContent();if(!flushing&&!Object.keys(pend).length)loadDay();loadPeople()}
  },30000);
}
async function refreshProfile(){
  if(!env.sb||!env.me)return;
  var r=await env.sb.from('profiles').select('*').eq('id',env.me.id).maybeSingle();
  if(r.error||!r.data)return;
  var was=env.role;setRole(r.data);
  if(was!==env.role){
    if(env.role==='none'||env.role==='pending'){if(env.inApp)location.reload();else showPending()}
    else if(!env.inApp)showApp();
    else{renderAll();loadDay();loadPeople()}
  }
}

/* ---------- auth + screens ---------- */
function showScreen(which){
  $('authScreen').hidden=which!=='auth';$('pendingScreen').hidden=which!=='pending';$('app').hidden=which!=='app';
  env.inApp=which==='app';
}
function showAuth(){showScreen('auth')}
function showPending(){
  showScreen('pending');$('pendName').textContent=(env.me&&env.me.full_name)||'';
  var m=env.role==='none'?'تم إيقاف حسابك. تواصل مع المدير.':'تم إنشاء حسابك وهو بانتظار اعتماد المدير. ستُفتح اللوحة تلقائيًا فور الاعتماد.';
  $('pendMsg').textContent=m;subscribe();startPoll();
}
function toEmail(v){
  v=v.trim();
  if(v.indexOf('@')>-1)return v.toLowerCase();
  return v.toLowerCase().replace(/\s+/g,'')+USER_DOMAIN;
}
function authMsg(t,ok){var e=$('auMsg');e.textContent=t||'';e.hidden=!t;e.className='au-msg'+(ok?' ok':'')}
function mapErr(e){
  var m=(e&&e.message)||'';
  if(/invalid login/i.test(m))return 'اسم المستخدم/البريد أو كلمة المرور غير صحيحة';
  if(/already registered|already been registered/i.test(m))return 'هذا الحساب موجود مسبقًا، استخدم تسجيل الدخول';
  if(/at least/i.test(m))return 'كلمة المرور قصيرة (8 أحرف على الأقل)';
  if(/not confirmed/i.test(m))return 'فعّل بريدك الإلكتروني أولًا ثم سجّل الدخول';
  if(/rate limit|too many/i.test(m))return 'محاولات كثيرة، انتظر قليلًا ثم أعد المحاولة';
  if(/valid email|invalid format|unable to validate email/i.test(m))return 'صيغة البريد/اسم المستخدم غير صحيحة';
  return 'تعذّر تنفيذ الطلب: '+m;
}
var authMode='login';
function setAuthMode(m){
  authMode=m;
  $('auName').closest('.field').hidden=m!=='register';
  $('auTabLogin').classList.toggle('active',m==='login');$('auTabReg').classList.toggle('active',m==='register');
  $('auGo').textContent=m==='login'?'دخول · Sign in':'إنشاء حساب · Register';
  $('auPw').setAttribute('autocomplete',m==='login'?'current-password':'new-password');
  authMsg('');
}
async function doAuth(){
  var name=$('auName').value.trim(),idv=$('auId').value.trim(),pw=$('auPw').value;
  if(authMode==='register'&&name.length<3){authMsg('اكتب اسمك الكامل (3 أحرف على الأقل)');return}
  if(!idv){authMsg('اكتب اسم المستخدم أو البريد');return}
  if(idv.indexOf('@')<0&&!/^[a-z0-9._-]{3,}$/i.test(idv)){authMsg('اسم المستخدم بحروف إنجليزية وأرقام فقط (3 أحرف على الأقل)، أو استخدم بريدك الإلكتروني');return}
  if(pw.length<8){authMsg('كلمة المرور 8 أحرف على الأقل');return}
  var btn=$('auGo');btn.disabled=true;authMsg('');
  try{
    var email=toEmail(idv),r;
    if(authMode==='register')r=await env.sb.auth.signUp({email:email,password:pw,options:{data:{full_name:name}}});
    else r=await env.sb.auth.signInWithPassword({email:email,password:pw});
    if(r.error){authMsg(mapErr(r.error));return}
    if(!r.data||!r.data.session){authMsg('تم إنشاء الحساب. افتح بريدك وفعّل الحساب ثم سجّل الدخول.',true);return}
    await enter(r.data.session);
  }catch(e){authMsg(mapErr(e))}
  finally{btn.disabled=false}
}
async function enter(session){
  var pr=await env.sb.from('profiles').select('*').eq('id',session.user.id).maybeSingle();
  if(pr.error||!pr.data){showAuth();authMsg('تعذّر تحميل الحساب، حاول مرة أخرى');return}
  setRole(pr.data);
  if(!env.canWrite&&!env.canEdit&&!env.sees){showPending();return}
  await showApp();
}
async function showApp(){
  showScreen('app');
  restorePend();
  if(env.role==='viewer'&&ui.view==='tasks')ui.view='team';
  updateTabs();renderAll();
  subscribe();startPoll();
  await Promise.all([loadContent(),loadPeople()]);
  await openDay();
  flush();
}
async function logout(){
  try{await flushNow()}catch(e){}
  try{await env.sb.auth.signOut()}catch(e){}
  location.reload();
}

/* ---------- rendering ---------- */
function badge(p){return p==='high'?'<span class="priority high">High</span>':p==='med'?'<span class="priority med">Med</span>':'<span class="priority low">Low</span>'}
function inView(s){return ui.sec==='all'||ui.sec===s.id}
function itemSt(id){var x=day.items[id]||{},m=x.mkts||{};return {done:!!x.done,issue:!!x.issue,mk:{KSA:!!m.KSA,UAE:!!m.UAE},note:x.note||''}}

function renderTabs(){
  var h='<button class="brand-tab'+(ui.sec==='all'?' active':'')+'" id="tab_all" data-act="sec" data-id="all" aria-pressed="'+(ui.sec==='all')+'" title="All sections">الكل <span class="tab-cnt" id="tc_all">0/0</span></button>';
  S().forEach(function(s,i){
    h+='<button class="brand-tab'+(ui.sec===s.id?' active':'')+'" id="tab_'+esc(s.id)+'" data-act="sec" data-id="'+esc(s.id)+'" aria-pressed="'+(ui.sec===s.id)+'" title="'+esc(s.label)+'">'+(i+1)+' · '+esc(s.labelAr)+' <span class="tab-cnt" id="tc_'+esc(s.id)+'">0/0</span></button>';
  });
  h+='<button class="brand-tab add edit-only" data-act="addSec">+ قسم جديد</button>';
  $('secTabs').innerHTML=h;
}
function rowHtml(i,k,n,sec){
  var tools='<div class="row-tools">'
    +'<button class="mini" data-act="mvTask" data-id="'+esc(i.id)+'" data-d="-1"'+(k===0?' disabled':'')+' aria-label="Move up">↑</button>'
    +'<button class="mini" data-act="mvTask" data-id="'+esc(i.id)+'" data-d="1"'+(k===n-1?' disabled':'')+' aria-label="Move down">↓</button>'
    +'<button class="mini" data-act="editTask" data-id="'+esc(i.id)+'">تعديل · Edit</button>'
    +'<button class="mini danger" data-act="delTask" data-id="'+esc(i.id)+'">حذف · Delete</button></div>';
  return '<div class="check-row" id="row_'+esc(i.id)+'" data-id="'+esc(i.id)+'">'
    +'<input class="cb" type="checkbox" aria-label="'+esc(i.en||i.ar)+'">'
    +'<div class="c-en"><div class="item-en">'+esc(i.en)+badge(i.priority)+'</div>'+(i.enSub?'<div class="item-sub-en">'+esc(i.enSub)+'</div>':'')+'</div>'
    +'<div class="c-ar"><div class="item-ar">'+esc(i.ar)+'</div>'+(i.arSub?'<div class="item-sub-ar">'+esc(i.arSub)+'</div>':'')+'</div>'
    +'<div class="mkts">'+MKTS.map(function(m){return '<label class="mkt"><input class="mkt-cb" type="checkbox" data-m="'+m+'"><span>'+m+'</span></label>'}).join('')+'</div>'
    +'<textarea class="note" placeholder="Add note... / ملاحظة" aria-label="Notes"></textarea>'+tools+'</div>';
}
function renderTasks(){
  var h='';
  S().forEach(function(sec){
    var col=ui.collapsed[sec.id];
    h+='<section class="section-card" id="card_'+esc(sec.id)+'"><div class="section-hdr" data-act="collapse" data-id="'+esc(sec.id)+'" role="button" tabindex="0" aria-expanded="'+(!col)+'">'
      +'<span class="dot" style="background:'+esc(sec.color)+'"></span><span class="title-en">'+esc(sec.label)+'</span><span class="title-ar">'+esc(sec.labelAr)+'</span><span class="count" id="cnt_'+esc(sec.id)+'">0/'+sec.items.length+'</span>'
      +'<span class="sec-tools"><button class="mini" data-act="editSec" data-id="'+esc(sec.id)+'">تعديل القسم</button><button class="mini" data-act="delSec" data-id="'+esc(sec.id)+'">حذف القسم</button></span>'
      +'<span class="toggle">'+(col?'▼':'▲')+'</span></div><div class="sec-body"'+(col?' hidden':'')+'>'
      +'<div class="col-headers"><div></div><div class="col-h" style="text-align:left">Check Item (EN)</div><div class="col-h" style="text-align:right">بند الفحص (AR)</div>'+MKTS.map(function(m){return '<div class="col-h">'+m+'</div>'}).join('')+'<div class="col-h">Notes / ملاحظات</div></div>';
    sec.items.forEach(function(i,k){h+=rowHtml(i,k,sec.items.length,sec)});
    if(!sec.items.length)h+='<div class="news-empty" style="margin:12px">لا توجد مهام في هذا القسم بعد.</div>';
    h+='<div class="add-row"><button class="action" data-act="addTask" data-id="'+esc(sec.id)+'">+ إضافة مهمة · Add task</button></div></div></section>';
  });
  $('checklistContainer').innerHTML=h;
  applyView();
}
function applyView(){S().forEach(function(s){var c=$('card_'+s.id);if(c)c.hidden=!inView(s)})}

function newsImgs(x){
  var im=Array.isArray(x.images)?x.images.filter(function(a){return a&&a.id}):[];
  if(!im.length)return '';
  return '<div class="news-imgs">'+im.map(function(a){var u=sigC[a.id]?sigC[a.id].url:'';return '<button type="button" class="thumb" data-act="img" data-path="'+esc(a.id)+'" aria-label="عرض المرفق · View attachment"><img data-path="'+esc(a.id)+'" src="'+esc(u)+'" alt="مرفق · Attachment"></button>'}).join('')+'</div>';
}
async function signed(paths){
  var need=paths.filter(function(p){return !sigC[p]||Date.now()-sigC[p].t>45*60000});
  if(!need.length||!env.sb)return;
  var r=await env.sb.storage.from(BUCKET).createSignedUrls(need,3600);
  (r.data||[]).forEach(function(x){if(x&&x.signedUrl)sigC[x.path]={url:x.signedUrl,t:Date.now()}});
}
function hydrateImgs(){
  var els=Array.prototype.slice.call(document.querySelectorAll('#newsBody img[data-path]'));
  var paths=els.map(function(e){return e.dataset.path});
  if(!paths.length)return;
  signed(paths).then(function(){els.forEach(function(e){var s=sigC[e.dataset.path];if(s&&e.getAttribute('src')!==s.url)e.src=s.url})},function(){});
}
function renderNews(){
  var n=content.news.slice().sort(function(x,y){return (y.pin?1:0)-(x.pin?1:0)||String(y.date||'').localeCompare(String(x.date||''))});
  $('newsCount').textContent=n.length;
  var c=$('vt_news_cnt');c.textContent=n.length?'('+n.length+')':'';
  var h='<button class="action edit-only" data-act="addNews">+ رسالة جديدة · New message</button>';
  if(!n.length)h+='<div class="news-empty">لا توجد رسائل حاليًا. ستظهر هنا رسائل وأخبار الإدارة عند إضافتها.</div>';
  n.forEach(function(x){
    h+='<div class="news-item'+(x.pin?' pin':'')+'"><div class="news-meta">'+(x.tag?'<span class="news-tag">'+esc(x.tag)+'</span>':'')+'<span>'+esc(x.date||'')+'</span>'+(x.pin?'<span>مثبّتة · Pinned</span>':'')+'</div>'
      +'<div class="news-title">'+esc(x.title)+'</div><div class="news-text">'+esc(x.text)+'</div>'
      +newsImgs(x)
      +'<div class="news-tools"><button class="mini" data-act="editNews" data-id="'+esc(x.id)+'">تعديل</button><button class="mini danger" data-act="delNews" data-id="'+esc(x.id)+'">حذف</button></div></div>';
  });
  $('newsBody').innerHTML=h;
  hydrateImgs();
}
function renderKpi(){
  var h='';
  content.kpis.forEach(function(g){
    h+='<tr class="kpi-grp"><td colspan="4">'+esc(g.g)+'<span class="kpi-tools"><button class="mini" data-act="addKpi" data-id="'+esc(g.id)+'">+ مؤشر</button><button class="mini" data-act="editGroup" data-id="'+esc(g.id)+'">تعديل</button><button class="mini danger" data-act="delGroup" data-id="'+esc(g.id)+'">حذف</button></span></td></tr>';
    g.items.forEach(function(k){
      h+='<tr><td data-l="المؤشر"><div class="kpi-name">'+esc(k.ar)+'</div><div class="kpi-en">'+esc(k.en)+'</div><div class="kpi-tools" style="margin:6px 0 0"><button class="mini" data-act="editKpi" data-id="'+esc(k.id)+'">تعديل</button><button class="mini danger" data-act="delKpi" data-id="'+esc(k.id)+'">حذف</button></div></td>'
        +'<td data-l="التعريف" class="kpi-def">'+esc(k.def)+'</td>'
        +'<td data-l="الهدف"><input class="kpi-in kpi-tgt" id="kt_'+esc(k.id)+'" data-id="'+esc(k.id)+'" value="'+esc(k.t||'')+'" placeholder="—" aria-label="Target"'+(env.canEdit?'':' disabled')+'></td>'
        +'<td data-l="اليوم"><input class="kpi-in kpi-act" id="ka_'+esc(k.id)+'" data-id="'+esc(k.id)+'" placeholder="—" aria-label="Today"></td></tr>';
    });
  });
  $('kpiBody').innerHTML=h;
  var note='المؤشرات أدناه مقترحة لإدارة خدمة وتجربة العملاء. خانة «الهدف» و«اليوم» يعدّلها المشرف والمدير فقط، وقيمة «اليوم» واحدة للفريق لكل يوم. لم تُحدَّد أهداف رقمية بعد؛ تُضاف حين تعتمدها الإدارة. ';
  note+='تُحفظ القيم مباشرة وتظهر لكل الفريق.';
  $('kpiNote').textContent=note;
}
function renderAll(){
  prepContent();
  renderTabs();renderTasks();renderNews();renderKpi();renderTeam();renderUsers();updateTabs();
  document.body.classList.toggle('edit-on',ui.edit&&env.canEdit);
  var eb=$('editBtn');eb.hidden=!env.canEdit;eb.classList.toggle('on',ui.edit);
  eb.textContent=ui.edit?'إنهاء التعديل · Done editing':'وضع التعديل · Edit mode';
  switchView(ui.view,true);
  applyDay();
}

function applyDay(){
  var ro=!env.canWrite;
  S().forEach(function(s){s.items.forEach(function(i){
    var row=$('row_'+i.id);if(!row)return;
    var x=itemSt(i.id);
    var cb=row.querySelector('.cb');cb.checked=x.done;cb.disabled=ro;
    MKTS.forEach(function(m){var c=row.querySelector('.mkt-cb[data-m="'+m+'"]');c.checked=x.mk[m];c.disabled=ro||!ui.markets[m]});
    var n=row.querySelector('.note');if(document.activeElement!==n)n.value=x.note;n.disabled=ro;
    row.classList.toggle('done-row',x.done);row.classList.toggle('issue-row',x.issue);
  })});
  ['mgName','mgDept','hodComment','sigInput','signTime'].forEach(function(k){
    var el=$(k);if(document.activeElement===el)return;
    var v=day.fields[k];el.value=v!=null?v:(k==='mgDept'?DEF_DEPT:(k==='mgName'?((env.me&&env.me.full_name)||''):''));
    if(k!=='signTime')el.disabled=ro;
  });
  content.kpis.forEach(function(g){g.items.forEach(function(k){
    var el=$('ka_'+k.id);if(!el)return;
    if(document.activeElement!==el)el.value=(day.kpi[k.id]&&day.kpi[k.id].a)||'';
    el.disabled=!env.canEdit;
  })});
  MKTS.forEach(function(m){$('market_'+m).checked=!!ui.markets[m]});
  progress();counts();setSync();
}
function progress(){
  var t=0,d=0,iss=0;
  S().filter(inView).forEach(function(s){s.items.forEach(function(i){t++;var x=itemSt(i.id);if(x.done)d++;if(x.issue)iss++})});
  var p=t?Math.round(d/t*100):0;
  $('sumTotal').textContent=t;$('sumDone').textContent=d;$('sumIssues').textContent=iss;$('sumPct').textContent=p+'%';$('pbarFill').style.width=p+'%';
  var q=$('statusPill');q.className='pill '+(p===100&&t?'done':p?'prog':'');q.textContent=p===100&&t?'Complete · مكتمل':p?p+'% done':'Not started / لم يبدأ';
}
function counts(){
  var T=0,D=0;
  S().forEach(function(s){
    var d=s.items.filter(function(i){return itemSt(i.id).done}).length;T+=s.items.length;D+=d;
    var c=$('cnt_'+s.id);if(c)c.textContent=d+'/'+s.items.length;
    var tc=$('tc_'+s.id);if(tc)tc.textContent=d+'/'+s.items.length;
  });
  var ta=$('tc_all');if(ta)ta.textContent=D+'/'+T;
}
function switchView(v,quiet){
  ui.view=v;
  ['tasks','news','kpi','team','users'].forEach(function(k){$('view_'+k).hidden=k!==v;$('vt_'+k).classList.toggle('active',k===v)});
  if(v==='team')renderTeam();
  if(!quiet)savePrefs();
}
function switchSection(id){
  ui.sec=id;
  document.querySelectorAll('#secTabs .brand-tab[data-act="sec"]').forEach(function(b){var on=b.dataset.id===id;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});
  applyView();progress();savePrefs();
}

/* ---------- image attachments ---------- */
var MAX_IMGS=6;
function compressImage(file){
  return new Promise(function(res,rej){
    if(!/^image\//.test(file.type||'')){rej(new Error('type'));return}
    var url=URL.createObjectURL(file),img=new Image();
    img.onload=function(){
      try{
        var w=img.naturalWidth,h=img.naturalHeight,m=1600,k=Math.min(1,m/Math.max(w,h));
        var cv=document.createElement('canvas');cv.width=Math.max(1,Math.round(w*k));cv.height=Math.max(1,Math.round(h*k));
        var cx=cv.getContext('2d');cx.fillStyle='#fff';cx.fillRect(0,0,cv.width,cv.height);cx.drawImage(img,0,0,cv.width,cv.height);
        URL.revokeObjectURL(url);
        if(cv.toBlob)cv.toBlob(function(b){b?res(b):(file.size<5e6?res(file):rej(new Error('enc')))},'image/jpeg',0.82);
        else rej(new Error('enc'));
      }catch(e){URL.revokeObjectURL(url);rej(e)}
    };
    img.onerror=function(){URL.revokeObjectURL(url);rej(new Error('load'))};
    img.src=url;
  });
}
function uploadImg(b){
  var path='n/'+uid('')+'.jpg';
  return env.sb.storage.from(BUCKET).upload(path,b,{contentType:'image/jpeg',upsert:false}).then(function(r){
    if(r.error)throw r.error;
    return {id:path,url:URL.createObjectURL(b)};
  });
}
function dropAssets(list){
  if(!env.sb||!list)return;
  var ids=list.filter(function(a){return a&&a.id}).map(function(a){return a.id});
  if(ids.length)try{Promise.resolve(env.sb.storage.from(BUCKET).remove(ids)).catch(function(){})}catch(e){}
}
function lightbox(src){
  var ov=document.createElement('div');ov.className='lb-ov';
  ov.innerHTML='<button type="button" class="lb-x" aria-label="Close">×</button><img alt="">';
  ov.querySelector('img').src=src;
  function close(){document.removeEventListener('keydown',onKey,true);ov.remove()}
  function onKey(e){if(e.key==='Escape'){e.preventDefault();close()}}
  document.addEventListener('keydown',onKey,true);
  ov.addEventListener('click',close);
  document.body.appendChild(ov);
}

/* ---------- toast + modal ---------- */
var toastT=null;
function toast(msg,bad){var t=$('toast');t.textContent=msg;t.className='toast'+(bad?' bad':'');t.hidden=false;clearTimeout(toastT);toastT=setTimeout(function(){t.hidden=true},2600)}
function openModal(o){
  var ov=document.createElement('div');ov.className='modal-ov';
  var fh=(o.fields||[]).map(function(x,i){
    var id='mf_'+i,v=x.value==null?'':x.value,inp;
    if(x.type==='textarea')inp='<textarea id="'+id+'" rows="'+(x.rows||4)+'"'+(x.rtl?' dir="rtl"':'')+'>'+esc(v)+'</textarea>';
    else if(x.type==='select')inp='<select id="'+id+'">'+x.options.map(function(op){return '<option value="'+esc(op[0])+'"'+(op[0]===v?' selected':'')+'>'+esc(op[1])+'</option>'}).join('')+'</select>';
    else if(x.type==='note')return '<div class="mf-note">'+esc(x.label)+'</div>';
    else if(x.type==='images')inp='<div class="img-field" id="'+id+'"><div class="img-list"></div><button type="button" class="action img-add">＋ إضافة صورة / لقطة شاشة · Add image</button><input type="file" class="img-file" accept="image/*" multiple hidden></div>';
    else if(x.type==='check')return '<div class="mf chk"><label for="'+id+'"><input type="checkbox" id="'+id+'"'+(v?' checked':'')+'> '+esc(x.label)+'</label></div>';
    else if(x.type==='color')inp='<div class="swatches" id="'+id+'" role="radiogroup">'+COLORS.map(function(c){return '<button type="button" class="swatch'+(c===v?' sel':'')+'" data-c="'+c+'" style="background:'+c+'" aria-label="'+c+'"></button>'}).join('')+'</div>';
    else inp='<input type="'+(x.type||'text')+'" id="'+id+'" value="'+esc(v)+'"'+(x.rtl?' dir="rtl"':'')+'>';
    if(x.presets)inp+='<div class="presets">'+x.presets.map(function(t){return '<button type="button" class="preset" data-for="'+id+'" data-v="'+esc(t)+'">'+esc(t)+'</button>'}).join('')+'</div>';
    return '<div class="mf"><label for="'+id+'">'+esc(x.label)+'</label>'+inp+'</div>';
  }).join('');
  ov.innerHTML='<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle"><h3 id="mTitle">'+esc(o.title)+'</h3>'
    +(o.message?'<p class="m-msg">'+esc(o.message)+'</p>':'')+'<div class="mf-err" id="mErr" hidden></div>'+fh
    +'<div class="m-actions"><button type="button" class="action primary" id="mSave">'+esc(o.saveLabel||'حفظ · Save')+'</button><button type="button" class="action" id="mCancel">إلغاء · Cancel</button></div></div>';
  document.body.appendChild(ov);
  var prev=document.activeElement;
  /* image fields: working list, originals kept for cleanup */
  var imgSt={};
  (o.fields||[]).forEach(function(x,i){
    if(x.type!=='images')return;
    var st=imgSt[i]={cur:(Array.isArray(x.value)?x.value:[]).filter(function(a){return a&&a.id}),orig:[],busy:0};
    st.orig=st.cur.slice();
    var box=$('mf_'+i),list=box.querySelector('.img-list'),add=box.querySelector('.img-add'),fi=box.querySelector('.img-file');
    function draw(){
      list.innerHTML=st.cur.map(function(a,k){return '<div class="img-chip"><img src="'+esc(a.url)+'" alt=""><button type="button" class="img-del" data-k="'+k+'" aria-label="Remove">×</button></div>'}).join('')
        +(st.busy?'<div class="img-chip busy">…</div>':'');
      add.disabled=st.cur.length+st.busy>=MAX_IMGS;
    }
    st.draw=draw;draw();
    add.onclick=function(){fi.click()};
    list.addEventListener('click',function(e){
      var d=e.target.closest('.img-del');if(!d)return;
      var a=st.cur.splice(+d.dataset.k,1)[0];
      if(a&&!st.orig.some(function(q){return q.id===a.id}))dropAssets([a]);
      draw();
    });
    fi.onchange=function(){
      var files=Array.prototype.slice.call(fi.files||[]);fi.value='';
      files.slice(0,Math.max(0,MAX_IMGS-st.cur.length-st.busy)).forEach(function(f){
        st.busy++;draw();
        compressImage(f).then(uploadImg).then(function(r){
          st.busy--;if(!document.body.contains(ov)){dropAssets([r]);return}
          st.cur.push({id:r.id,url:r.url});draw();
        },function(){st.busy--;draw();toast('تعذّر رفع الصورة · Image upload failed',true)});
      });
    };
  });
  function imgsBusy(){return Object.keys(imgSt).some(function(k){return imgSt[k].busy>0})}
  function cleanup(saved){
    Object.keys(imgSt).forEach(function(k){
      var st=imgSt[k];
      if(saved)dropAssets(st.orig.filter(function(a){return !st.cur.some(function(q){return q.id===a.id})}));
      else dropAssets(st.cur.filter(function(a){return !st.orig.some(function(q){return q.id===a.id})}));
    });
  }
  function close(){document.removeEventListener('keydown',onKey,true);ov.remove();if(prev&&prev.focus)try{prev.focus()}catch(e){}}
  function cancelAll(){cleanup(false);close();if(o.cancel)o.cancel()}
  function onKey(e){if(e.key==='Escape'){e.preventDefault();cancelAll()}}
  document.addEventListener('keydown',onKey,true);
  ov.addEventListener('click',function(e){
    if(e.target===ov){cancelAll();return}
    var sw=e.target.closest('.swatch');
    if(sw){ov.querySelectorAll('.swatch').forEach(function(b){b.classList.remove('sel')});sw.classList.add('sel')}
    var pr=e.target.closest('.preset');
    if(pr){var t=$(pr.dataset.for);if(t)t.value=pr.dataset.v}
  });
  $('mCancel').onclick=cancelAll;
  $('mSave').onclick=function(){
    var vals={};
    if(imgsBusy()){var eb=$('mErr');eb.textContent='انتظر اكتمال رفع الصور · Wait for the upload to finish';eb.hidden=false;return}
    (o.fields||[]).forEach(function(x,i){
      if(x.type==='note')return;
      var el=$('mf_'+i);
      if(x.type==='images'){vals[x.key]=imgSt[i].cur.slice();return}
      if(x.type==='check')vals[x.key]=el.checked;
      else if(x.type==='color'){var s=el.querySelector('.swatch.sel');vals[x.key]=s?s.dataset.c:COLORS[0]}
      else vals[x.key]=el.value.trim();
    });
    var err=o.validate?o.validate(vals):'';
    if(err){var e=$('mErr');e.textContent=err;e.hidden=false;return}
    cleanup(true);close();o.save(vals);
  };
  var first=ov.querySelector('input,textarea,select')||$('mSave');
  setTimeout(function(){try{first.focus()}catch(e){}},30);
}
function confirmBox(message,yes){
  return new Promise(function(res){
    openModal({title:'تأكيد · Confirm',message:message,saveLabel:yes||'نعم · Yes',save:function(){res(true)},cancel:function(){res(false)}});
  });
}

/* ---------- content editing ---------- */
function findTask(id){for(var a=0;a<S().length;a++){var i=S()[a].items.findIndex(function(t){return t.id===id});if(i>-1)return {sec:S()[a],idx:i,item:S()[a].items[i]}}return null}
function taskModal(title,t,save){
  openModal({title:title,saveLabel:'حفظ المهمة · Save task',
    fields:[
      {key:'ar',label:'نص المهمة بالعربية · Task (Arabic)',type:'textarea',rtl:true,rows:3,value:t.ar},
      {key:'en',label:'Task (English)',type:'textarea',rows:3,value:t.en},
      {key:'priority',label:'الأولوية · Priority',type:'select',value:t.priority||'med',options:Object.keys(PRIORITY).map(function(k){return [k,PRIORITY[k]]})},
      {key:'arSub',label:'ملاحظة فرعية بالعربية (اختياري)',type:'text',rtl:true,value:t.arSub},
      {key:'enSub',label:'Sub-note in English (optional)',type:'text',value:t.enSub}
    ],
    validate:function(v){return (!v.ar&&!v.en)?'اكتب نص المهمة بالعربية أو الإنجليزية · Enter the task text':''},
    save:save});
}
function sectionModal(title,s,save){
  openModal({title:title,saveLabel:'حفظ القسم · Save section',
    fields:[
      {key:'labelAr',label:'اسم القسم بالعربية · Section name (Arabic)',type:'text',rtl:true,value:s.labelAr},
      {key:'label',label:'Section name (English)',type:'text',value:s.label},
      {key:'color',label:'اللون · Colour',type:'color',value:s.color||COLORS[0]}
    ],
    validate:function(v){return (!v.labelAr&&!v.label)?'اكتب اسم القسم · Enter a section name':''},
    save:save});
}
function newsModal(title,n,save){
  openModal({title:title,saveLabel:'نشر الرسالة · Publish',
    fields:[
      {key:'title',label:'العنوان · Title',type:'text',rtl:true,value:n.title},
      {key:'text',label:'نص الرسالة · Message',type:'textarea',rtl:true,rows:6,value:n.text}]
      .concat(env.canEdit?[
        {key:'images',label:'المرفقات (صور / لقطات شاشة) · Attachments',type:'images',value:n.images||[]},
        {type:'note',label:'تنبيه خصوصية: قبل رفع لقطة شاشة لرسالة عميل، غطِّ اسمه ورقم جواله وأي بيانات شخصية · Privacy: hide the customer name, phone number and any personal data before uploading.'}
      ]:[])
      .concat([
      {key:'tag',label:'الوسم · Tag',type:'text',rtl:true,value:n.tag,presets:['رسالة الإدارة','رسالة شكر من عميل','إنجاز موظف','توجيه','تنبيه']},
      {key:'date',label:'التاريخ · Date',type:'date',value:n.date||todayStr()},
      {key:'pin',label:'تثبيت في الأعلى · Pin to top',type:'check',value:!!n.pin}
    ]),
    validate:function(v){return (!v.title&&!v.text&&!(v.images&&v.images.length))?'اكتب عنوانًا أو نصًا أو أرفق صورة · Enter a title, message or image':''},
    save:save});
}
function kpiModal(title,k,save){
  openModal({title:title,saveLabel:'حفظ المؤشر · Save KPI',
    fields:[
      {key:'ar',label:'اسم المؤشر بالعربية · KPI (Arabic)',type:'text',rtl:true,value:k.ar},
      {key:'en',label:'KPI name (English)',type:'text',value:k.en},
      {key:'def',label:'التعريف · Definition',type:'textarea',rtl:true,rows:3,value:k.def},
      {key:'t',label:'الهدف · Target (اتركه فارغًا حتى تعتمده الإدارة)',type:'text',value:k.t}
    ],
    validate:function(v){return (!v.ar&&!v.en)?'اكتب اسم المؤشر · Enter a KPI name':''},
    save:save});
}
function groupModal(title,g,save){
  openModal({title:title,saveLabel:'حفظ · Save',fields:[{key:'g',label:'اسم المجموعة · Group name',type:'text',rtl:true,value:g.g}],
    validate:function(v){return v.g?'':'اكتب اسم المجموعة · Enter a group name'},save:save});
}
function findKpi(id){for(var a=0;a<content.kpis.length;a++){var i=content.kpis[a].items.findIndex(function(k){return k.id===id});if(i>-1)return {grp:content.kpis[a],idx:i,item:content.kpis[a].items[i]}}return null}

var ACT={
  img:function(id,el){var s=sigC[el.dataset.path];if(s)lightbox(s.url)},
  logout:logout,
  teamToggle:function(id){ui.open[id]=!ui.open[id];renderTeam()},
  teamCsv:function(){exportTeam('csv')},
  teamXlsx:function(){exportTeam('xlsx')},
  view:function(id){switchView(id)},
  sec:function(id){switchSection(id)},
  collapse:function(id){ui.collapsed[id]=!ui.collapsed[id];var c=$('card_'+id);c.querySelector('.sec-body').hidden=!!ui.collapsed[id];c.querySelector('.toggle').textContent=ui.collapsed[id]?'▼':'▲';c.querySelector('.section-hdr').setAttribute('aria-expanded',!ui.collapsed[id])},
  toggleInsp:function(){var w=$('inspWrap');w.hidden=!w.hidden;$('insp_tog').textContent=w.hidden?'▼':'▲'},
  inspNext:function(){showInsp(inspI+1)},
  inspPrev:function(){showInsp(inspI-1)},
  toggleEdit:function(){ui.edit=!ui.edit;renderAll()},
  save:function(){
    $('signTime').value=new Date().toTimeString().slice(0,5);
    var f={};['mgName','mgDept','hodComment','sigInput','signTime'].forEach(function(k){f[k]=$(k).value});
    commit({fields:f});
    flushNow().then(function(){
      var b=$('savedBadge');b.style.display='inline-block';setTimeout(function(){b.style.display='none'},1800);
    });
  },
  reset:function(){
    var ids=[];S().filter(inView).forEach(function(s){s.items.forEach(function(i){ids.push(i.id)})});
    confirmBox('إعادة ضبط المهام في العرض الحالي لهذا اليوم والوردية؟ · Reset the current view for this day and shift?','إعادة ضبط · Reset').then(function(ok){
      if(!ok)return;
      var p={items:{}};ids.forEach(function(id){p.items[id]={done:false,issue:false,mkts:{KSA:false,UAE:false},note:''}});
      commit(p);applyDay();
    });
  },
  print:function(){window.print()},
  csv:exportCSV,
  xlsx:exportExcel,

  addTask:function(sid){
    var sec=S().find(function(s){return s.id===sid});
    taskModal('إضافة مهمة · Add task',{priority:'med'},function(v){
      sec.items.push({id:uid('t'),en:v.en,enSub:v.enSub,ar:v.ar,arSub:v.arSub,priority:v.priority});
      persist('sections');renderAll();
    });
  },
  editTask:function(id){
    var f=findTask(id);if(!f)return;
    taskModal('تعديل المهمة · Edit task',f.item,function(v){
      f.sec.items[f.idx]=Object.assign({},f.item,{en:v.en,enSub:v.enSub,ar:v.ar,arSub:v.arSub,priority:v.priority});
      persist('sections');renderAll();
    });
  },
  delTask:function(id){
    var f=findTask(id);if(!f)return;
    confirmBox('حذف هذه المهمة؟ · Delete this task?\n'+(f.item.ar||f.item.en),'حذف · Delete').then(function(ok){
      if(!ok)return;f.sec.items.splice(f.idx,1);persist('sections');renderAll();
    });
  },
  mvTask:function(id,b){
    var f=findTask(id);if(!f)return;var d=parseInt(b.dataset.d,10),j=f.idx+d;
    if(j<0||j>=f.sec.items.length)return;
    var t=f.sec.items.splice(f.idx,1)[0];f.sec.items.splice(j,0,t);
    persist('sections');renderAll();
  },
  addSec:function(){
    sectionModal('قسم جديد · New section',{color:COLORS[S().length%COLORS.length]},function(v){
      var s={id:uid('s'),label:v.label||v.labelAr,labelAr:v.labelAr||v.label,color:v.color,items:[]};
      S().push(s);ui.sec=s.id;persist('sections');renderAll();savePrefs();
    });
  },
  editSec:function(id){
    var s=S().find(function(x){return x.id===id});if(!s)return;
    sectionModal('تعديل القسم · Edit section',s,function(v){
      s.label=v.label||v.labelAr;s.labelAr=v.labelAr||v.label;s.color=v.color;persist('sections');renderAll();
    });
  },
  delSec:function(id){
    var s=S().find(function(x){return x.id===id});if(!s)return;
    confirmBox('حذف القسم «'+s.labelAr+'» وكل مهامه ('+s.items.length+')؟ · Delete this section and its tasks?','حذف · Delete').then(function(ok){
      if(!ok)return;content.sections=S().filter(function(x){return x.id!==id});if(ui.sec===id)ui.sec='all';persist('sections');renderAll();savePrefs();
    });
  },

  addNews:function(){
    newsModal('رسالة جديدة · New message',{tag:'رسالة الإدارة'},function(v){
      content.news.push({id:uid('n'),date:v.date,tag:v.tag,title:v.title,text:v.text,pin:v.pin,images:v.images||[]});persist('news');renderAll();
    });
  },
  editNews:async function(id){
    var n=content.news.find(function(x){return x.id===id});if(!n)return;
    try{await signed((n.images||[]).map(function(a){return a.id}))}catch(e){}
    var nv=Object.assign({},n,{images:(n.images||[]).map(function(a){return {id:a.id,url:sigC[a.id]?sigC[a.id].url:''}})});
    newsModal('تعديل الرسالة · Edit message',nv,function(v){Object.assign(n,{date:v.date,tag:v.tag,title:v.title,text:v.text,pin:v.pin});if(v.images)n.images=v.images;persist('news');renderAll()});
  },
  delNews:function(id){
    confirmBox('حذف هذه الرسالة؟ · Delete this message?','حذف · Delete').then(function(ok){
      if(!ok)return;var gone=content.news.find(function(x){return x.id===id});content.news=content.news.filter(function(x){return x.id!==id});persist('news');renderAll();if(gone)dropAssets(gone.images);
    });
  },

  addGroup:function(){groupModal('مجموعة جديدة · New group',{},function(v){content.kpis.push({id:uid('g'),g:v.g,items:[]});persist('kpis');renderAll()})},
  editGroup:function(id){var g=content.kpis.find(function(x){return x.id===id});if(!g)return;groupModal('تعديل المجموعة · Edit group',g,function(v){g.g=v.g;persist('kpis');renderAll()})},
  delGroup:function(id){
    var g=content.kpis.find(function(x){return x.id===id});if(!g)return;
    confirmBox('حذف المجموعة «'+g.g+'» وكل مؤشراتها؟ · Delete this group and its KPIs?','حذف · Delete').then(function(ok){
      if(!ok)return;content.kpis=content.kpis.filter(function(x){return x.id!==id});persist('kpis');renderAll();
    });
  },
  addKpi:function(gid){
    var g=content.kpis.find(function(x){return x.id===gid});if(!g)return;
    kpiModal('مؤشر جديد · New KPI',{},function(v){g.items.push({id:uid('k'),ar:v.ar,en:v.en,def:v.def,t:v.t});persist('kpis');renderAll()});
  },
  editKpi:function(id){
    var f=findKpi(id);if(!f)return;
    kpiModal('تعديل المؤشر · Edit KPI',f.item,function(v){Object.assign(f.item,{ar:v.ar,en:v.en,def:v.def,t:v.t});persist('kpis');renderAll()});
  },
  delKpi:function(id){
    var f=findKpi(id);if(!f)return;
    confirmBox('حذف المؤشر «'+f.item.ar+'»؟ · Delete this KPI?','حذف · Delete').then(function(ok){
      if(!ok)return;f.grp.items.splice(f.idx,1);persist('kpis');renderAll();
    });
  }
};

/* ---------- events ---------- */
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-act]');if(!b||b.disabled)return;
  var a=ACT[b.dataset.act];if(a)a(b.dataset.id,b,e);
});
document.addEventListener('keydown',function(e){
  if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.section-hdr[role="button"]')){e.preventDefault();var b=e.target;ACT[b.dataset.act](b.dataset.id,b,e)}
});
document.addEventListener('change',function(e){
  var t=e.target,row=t.closest&&t.closest('.check-row');
  if(t.classList.contains('cb')){commit({items:(function(){var o={};o[row.dataset.id]={done:t.checked};return o})()});applyDay()}
  else if(t.classList.contains('mkt-cb')){var o={};o[row.dataset.id]={mkts:(function(){var m={};m[t.dataset.m]=t.checked;return m})()};commit({items:o});applyDay()}
  else if(t.classList.contains('note')){
    var iss=/issue|error|fail|broken|problem|مشكلة|خطأ|عطل/i.test(t.value),o2={};
    o2[row.dataset.id]={note:t.value,issue:iss};commit({items:o2});applyDay();
  }
  else if(t.classList.contains('kpi-act')){saveKpi(t.dataset.id,t.value)}
  else if(t.classList.contains('role-sel')){updateUser(t.dataset.id,{role:t.value})}
  else if(t.classList.contains('act-chk')){updateUser(t.dataset.id,{active:t.checked})}
  else if(t.classList.contains('kpi-tgt')){var f=findKpi(t.dataset.id);if(f){f.item.t=t.value.trim();persist('kpis')}}
  else if(t.dataset&&t.dataset.field){var ff={};ff[t.dataset.field]=t.value;commit({fields:ff})}
  else if(t.dataset&&t.dataset.market){ui.markets[t.dataset.market]=t.checked;savePrefs();applyDay()}
  else if(t.id==='checkDate'||t.id==='shiftSel'){if(t.id==='checkDate'&&!t.value)t.value=todayStr();openDay()}
  else if(t.id==='auFile'){}
});

function flushOnHide(){if(env.sb&&Object.keys(pend).length){clearTimeout(flushTimer);flush()}}
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')flushOnHide()});
window.addEventListener('pagehide',flushOnHide);

/* ---------- exports ---------- */
function rows(){
  var out=[],date=$('checkDate').value,shift=$('shiftSel').value;
  S().forEach(function(s){s.items.forEach(function(i){
    var x=itemSt(i.id);
    out.push({Date:date,Shift:shift,Category:s.label,'Task EN':i.en,'Task AR':i.ar,Priority:i.priority,KSA:x.mk.KSA?'Done':'Pending',UAE:x.mk.UAE?'Done':'Pending',Status:x.done?'Done':'Pending',Issue:x.issue?'Yes':'No',Notes:x.note});
  })});
  return out;
}
function kpiRows(){
  var out=[];
  content.kpis.forEach(function(g){g.items.forEach(function(k){out.push({Date:$('checkDate').value,Shift:$('shiftSel').value,Group:g.g,'KPI AR':k.ar,'KPI EN':k.en,Definition:k.def,Target:k.t||'',Today:(day.kpi[k.id]&&day.kpi[k.id].a)||''})})});
  return out;
}
function saveFile(name,data,type){
  var blob=data instanceof Blob?data:new Blob([data],{type:type});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(function(){URL.revokeObjectURL(a.href)},1000);
}
function fileStem(){return 'AlEzzOud_CX_Daily_Checklist_'+($('checkDate').value||todayStr())+'_s'+($('shiftSel').selectedIndex+1)}
function exportCSV(){
  var r=rows(),k=Object.keys(r[0]||{});
  var csv=[k.join(',')].concat(r.map(function(x){return k.map(function(y){return '"'+String(x[y]==null?'':x[y]).replace(/"/g,'""')+'"'}).join(',')})).join('\n');
  saveFile(fileStem()+'.csv','﻿'+csv,'text/csv;charset=utf-8');
}
function exportExcel(){
  if(window.XLSX){
    var wb=XLSX.utils.book_new(),ws=XLSX.utils.json_to_sheet(rows()),wk=XLSX.utils.json_to_sheet(kpiRows());
    ws['!cols']=[{wch:11},{wch:18},{wch:26},{wch:60},{wch:60},{wch:9},{wch:9},{wch:9},{wch:9},{wch:7},{wch:40}];
    wk['!cols']=[{wch:11},{wch:18},{wch:22},{wch:34},{wch:30},{wch:50},{wch:14},{wch:14}];
    XLSX.utils.book_append_sheet(wb,ws,'Checklist');XLSX.utils.book_append_sheet(wb,wk,'KPIs');
    var buf=XLSX.write(wb,{bookType:'xlsx',type:'array'});
    saveFile(fileStem()+'.xlsx',new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
    return;
  }
  var r=rows(),k=Object.keys(r[0]||{});
  var table='<table border="1"><tr>'+k.map(function(x){return '<th>'+esc(x)+'</th>'}).join('')+'</tr>'+r.map(function(x){return '<tr>'+k.map(function(y){return '<td>'+esc(x[y])+'</td>'}).join('')+'</tr>'}).join('')+'</table>';
  saveFile(fileStem()+'.xls','<html><meta charset="UTF-8"><body>'+table+'</body></html>','application/vnd.ms-excel');
}

function teamRows(){
  var out=[],idx=[],date=dayDate(),shift=$('shiftSel').value;
  team.recs.forEach(function(r){
    S().forEach(function(s){s.items.forEach(function(i){
      var x=(r.items||{})[i.id]||{},m=x.mkts||{};
      out.push({Date:date,Shift:shift,Employee:personName(r.user_id),Category:s.label,'Task EN':i.en,'Task AR':i.ar,Priority:i.priority,KSA:m.KSA?'Done':'Pending',UAE:m.UAE?'Done':'Pending',Status:x.done?'Done':'Pending',Issue:x.issue?'Yes':'No',Notes:x.note||''});
    })});
  });
  return out;
}
function exportTeam(kind){
  var r=teamRows();if(!r.length){toast('لا توجد سجلات لهذا اليوم والوردية · No records',true);return}
  var stem='AlEzzOud_CX_Team_'+dayDate()+'_s'+($('shiftSel').selectedIndex+1);
  if(kind==='xlsx'&&window.XLSX){
    var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(r),'Team');
    saveFile(stem+'.xlsx',new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));return;
  }
  var k=Object.keys(r[0]);
  var csv=[k.join(',')].concat(r.map(function(x){return k.map(function(y){return '"'+String(x[y]==null?'':x[y]).replace(/"/g,'""')+'"'}).join(',')})).join('\n');
  saveFile(stem+'.csv','\ufeff'+csv,'text/csv;charset=utf-8');
}

/* ---------- inspiration ---------- */
function showInsp(i){
  inspI=(i+INSP.length)%INSP.length;var d=INSP[inspI];
  $('inspName').textContent=d.n+' · '+d.ar;$('inspIdea').textContent=d.idea;$('inspTip').textContent=d.tip;$('inspMot').textContent=d.mot;$('inspCnt').textContent=(inspI+1)+' / '+INSP.length;
}

/* ---------- boot ---------- */
async function boot(){
  $('checkDate').value=todayStr();
  loadPrefs();
  var n=new Date(),s0=new Date(n.getFullYear(),0,0);showInsp(Math.floor((n-s0)/864e5));
  $('auTabLogin').onclick=function(){setAuthMode('login')};
  $('auTabReg').onclick=function(){setAuthMode('register')};
  $('authForm').addEventListener('submit',function(e){e.preventDefault();doAuth()});
  $('pendOut').onclick=logout;$('pendRefresh').onclick=function(){refreshProfile();toast('جارٍ التحقق… · Checking')};
  setAuthMode('login');
  if(!window.supabase||!CFG.url){showScreen('auth');authMsg('تعذّر تحميل مكتبة الاتصال. تحقق من الإنترنت وأعد تحميل الصفحة.');return}
  env.sb=window.supabase.createClient(CFG.url,CFG.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});
  env.sb.auth.onAuthStateChange(function(ev){if(ev==='SIGNED_OUT'&&env.me)setTimeout(function(){location.reload()},50)});
  try{
    var r=await env.sb.auth.getSession();
    if(r.data&&r.data.session)await enter(r.data.session);else showAuth();
  }catch(e){showAuth();authMsg('تعذّر الاتصال بالخادم. تحقق من الإنترنت.')}
}
boot();
})();
