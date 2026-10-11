(function(root){
 'use strict';
 const D=root.UG_DATA||(typeof require==='function'?require('./questions.js'):null);
 const key=(m,q)=>m+'__'+q;
 const blank=()=>({responseStatus:'observed',choice:'',selections:[],values:{v1:'',v2:'',v3:''},notes:'',evidence:'',rating:0});
 const payload=a=>({responseStatus:a?.responseStatus||'observed',choice:a?.choice||'',selections:[...(a?.selections||[])],values:{v1:a?.values?.v1||'',v2:a?.values?.v2||'',v3:a?.values?.v3||''},notes:a?.notes||'',evidence:a?.evidence||'',rating:Number(a?.rating)||0});
 const answered=a=>!!a&&(a.responseStatus==='unknown'||a.responseStatus==='na'||!!a.choice||a.selections?.length>0||Object.values(a.values||{}).some(v=>String(v).trim())||!!a.notes?.trim());
 const count=(records,member,section)=>D.questions.filter(q=>(!section||q.section===section)&&answered(records[key(member,q.id)])).length;
 function average(records,ids=D.questions.map(q=>q.id),member){const nums=Object.values(records).filter(a=>ids.includes(a.questionId)&&(!member||a.memberId===member)&&answered(a)&&a.responseStatus!=='na'&&a.rating>=1&&a.rating<=5).map(a=>a.rating);return {value:nums.length?nums.reduce((a,b)=>a+b,0)/nums.length:null,n:nums.length};}
 function validate(q,a){
  if(!q)return 'Unknown question.';
  if(!['observed','unknown','na'].includes(a.responseStatus))return 'Choose a valid response status.';
  if(a.notes.length>6000||a.evidence.length>2000)return 'Please shorten your answer or evidence.';
  if(!Number.isInteger(a.rating)||a.rating < -1||a.rating>5)return 'Choose a rating from 1 to 5, N/A, or leave it unrated.';
  if(a.choice&&!q.options.includes(a.choice))return 'Choose one of the available answers.';
  if(a.selections.some(v=>!q.options.includes(v)))return 'An option is not valid for this question.';
  if(Object.values(a.values).some(v=>v.length>400))return 'Keep each short field under 400 characters.';
  if(a.responseStatus==='observed'&&q.type==='ratio'&&(a.values.v1||a.values.v2)){
   const solid=Number(a.values.v1),voidArea=Number(a.values.v2);
   if(!a.values.v1||!a.values.v2||!Number.isFinite(solid)||!Number.isFinite(voidArea)||solid<0||voidArea<0||solid>100||voidArea>100||Math.abs(solid+voidArea-100)>.1)return 'Enter solid and void percentages between 0 and 100 that total 100%.';
  }
  if(a.responseStatus==='observed'&&q.type==='distance'&&a.values.v1){if(!Number.isFinite(Number(a.values.v1))||Number(a.values.v1)<0||!['m','km','minutes'].includes(a.values.v2))return 'Enter a nonnegative distance and select its unit.';}
  if(q.id==='compact-03'&&a.selections.includes('Neither')&&a.selections.length>1)return 'Choose “Neither” by itself, or select the available parking types.';
  return '';
 }
 function summary(q,a){if(!a)return 'No answer yet';const items=[];if(a.responseStatus==='unknown')items.push('Not sure / needs checking');if(a.responseStatus==='na')items.push('Not applicable');if(a.responseStatus==='observed'){if(a.choice)items.push(a.choice);if(a.selections?.length)items.push(a.selections.join(', '));const v=a.values||{};if(q.type==='ratio'&&(v.v1||v.v2))items.push(`Solid ${v.v1}%, void ${v.v2}%`);else if(q.type==='rent'){if(v.v1)items.push('House rent: '+v.v1);if(v.v2)items.push('Shop rent: '+v.v2);if(v.v3)items.push('Property values: '+v.v3);}else if(q.type==='distance'&&v.v1)items.push(v.v1+' '+v.v2);}if(a.notes)items.push(a.notes);return items.join('\n')||'No answer yet';}
 const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const csvCell=v=>'"'+String(v??'').replace(/^\s*[=+@\-\t\r]/,"'$&").replace(/"/g,'""')+'"';
 function csv(records){const rows=[['Section','Question','Original prompt','Member','Answered','Status','Answer','Rating / 5','Evidence','Updated (UTC)']];for(const q of D.questions)for(const m of D.members){const a=records[key(m.id,q.id)];rows.push([D.sections.find(s=>s.id===q.section).name,q.number,q.prompt,m.name,answered(a)?'Yes':'No',a?.responseStatus||'',summary(q,a),a?.rating>0?a.rating:a?.rating===-1?'N/A':'',a?.evidence||'',a?.updatedAt||'']);}return '\uFEFF'+rows.map(row=>row.map(csvCell).join(',')).join('\r\n');}
 root.UG_CORE={key,blank,payload,answered,count,average,validate,summary,escape,csv};if(typeof module!=='undefined')module.exports=root.UG_CORE;
})(typeof window!=='undefined'?window:globalThis);
