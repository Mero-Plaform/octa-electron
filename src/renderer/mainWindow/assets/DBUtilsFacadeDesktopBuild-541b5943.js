import{s as e}from"./ipcUtils-e02d1c64.js";import{aK as a,bF as n,bG as o,bH as s,bI as d,bJ as p,bK as D,bL as c,bM as b,bN as u,bO as l,bP as A,bQ as O,bR as S}from"./main-1f7973ff.js";const v=t=>(e("onAddWord",t),n(t)),W=t=>(e("onEditWord",t),o(t)),P=t=>(e("onDeleteWord",t),s(t)),m=()=>(e("onDictionaryClear"),d()),M=t=>(e("initStatisticData",t),p(t)),B=t=>(e("initPracticeData",t),D(t)),g=t=>(e("updatePracticeData",t),c(t)),E=t=>(e("updateStatistic",t),b(t)),I=t=>(e("initAppSettingsData",t),u(t)),y=t=>(e("updateAppSettingsData",t),l(t)),C=t=>(e("initIdleModeData",t),A(t)),F=t=>(e("updateIdleModeData",t),O(t)),f=async t=>(JSON.parse(await t.text()).data.data.forEach(({tableName:i,rows:r})=>{e("importAppDBData",i,r)}),S(t)),K=()=>{a.onAddWord=v,a.onEditWord=W,a.onDeleteWord=P,a.onDictionaryClear=m,a.initStatisticData=M,a.initPracticeData=B,a.updatePracticeData=g,a.updateStatistic=E,a.initAppSettingsData=I,a.updateAppSettingsData=y,a.initIdleModeData=C,a.updateIdleModeData=F,a.importAppDBData=f};export{K as initDBUtilsFacadeDesktopBuild};
