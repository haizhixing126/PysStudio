var OxOffb2=["isWinIE","isGecko","isSafari","isOpera","userAgent","ua","opera","safari","gecko","msie","Mac","isMac","compatMode","document","CSS1Compat","XMLHttpRequest","","caller","(","\x0A","attachEvent","on","\x0D\x0A","top","returnValue","_dialog_returnvalue","opener","dialogArguments","_dialog_arguments","length","element \x27","\x27 not found","all","childNodes","nodeType","UNSELECTABLE","tabIndex","-1","//TODO: event not found? throw error ?","preventDefault","event","arguments","parent","frames","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","which","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","buttonInitialized","oncontextmenu","onmouseout","onmousedown","onmouseup","isover","className","CuteEditorButtonOver","CuteEditorButton","CuteEditorButtonDown","CuteEditorDown","border","style","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","onerror","\x0D\x0A\x0D\x0A","href","location","view-source:","?\x26view-source=","_blank","ondblclick","onkeydown","//duplicated?\x0D\x0A","var ","=Window_GetElement(window,\x22","\x22,true);","Text","clipboardData","dialogWidth","availWidth","dialogHeight","availHeight","innerWidth","innerHeight","addEventListener","isdir","path","url","text","return this.getAttribute(\x27","\x27);","prototype","attributes","tagName","\x3C","specified","value","name"," ","=\x22","\x22","\x3E","innerHTML","\x3C/","PARAM","META","LINK","ISINDEX","INPUT","BR","IMG","HR","FRAME","COL","BASEFONT","BASE","AREA","00","0123456789ABCDEF","#","object","EditorSetting","colorpicker.aspx?setting=","dialogWidth:500px;dialogHeight:320px;help:0;status:0;resizable:0"];var _Browser_TypeInfo=null; function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={}; Ox4[OxOffb2[0x5]]=navigator[OxOffb2[0x4]].toLowerCase(),Ox4[OxOffb2[0x3]]=(Ox4[OxOffb2[0x5]].indexOf(OxOffb2[0x6])>-0x1),Ox4[OxOffb2[0x2]]=(Ox4[OxOffb2[0x5]].indexOf(OxOffb2[0x7])>-0x1),Ox4[OxOffb2[0x1]]=(!Ox4[OxOffb2[0x3]]&&!Ox4[OxOffb2[0x2]]&&Ox4[OxOffb2[0x5]].indexOf(OxOffb2[0x8])>-0x1),Ox4[OxOffb2[0x0]]=(!Ox4[OxOffb2[0x3]]&&Ox4[OxOffb2[0x5]].indexOf(OxOffb2[0x9])>-0x1) ; Ox4[OxOffb2[0xb]]=navigator[OxOffb2[0x4]].indexOf(OxOffb2[0xa])!=-0x1 ; _Browser_TypeInfo=Ox4 ;}  ; Browser__InitType() ; function Browser_IsWinIE(){return _Browser_TypeInfo[OxOffb2[0x0]];}  ; function Browser_IsGecko(){return _Browser_TypeInfo[OxOffb2[0x1]];}  ; function Browser_IsOpera(){return _Browser_TypeInfo[OxOffb2[0x3]];}  ; function Browser_IsSafari(){return _Browser_TypeInfo[OxOffb2[0x2]];}  ; function Browser_UseIESelection(){return _Browser_TypeInfo[OxOffb2[0x0]];}  ; function Browser_IsCSS1Compat(){return window[OxOffb2[0xd]][OxOffb2[0xc]]==OxOffb2[0xe];}  ; function Browser_IsIE7(){return _Browser_TypeInfo[OxOffb2[0x0]]&&window[OxOffb2[0xf]];}  ; function GetStackTrace(){var Ox2a=OxOffb2[0x10];for(var Ox1b2=GetStackTrace[OxOffb2[0x11]];Ox1b2!=null;Ox1b2=Ox1b2[OxOffb2[0x11]]){var Ox1b3=Ox1b2+OxOffb2[0x10]; Ox1b3=Ox1b3.substr(0x0,Ox1b3.indexOf(OxOffb2[0x12])) ; Ox2a+=Ox1b3+OxOffb2[0x13] ;} ;return Ox2a;}  ; function Event_Attach(obj,name,Ox1b6){if(obj[OxOffb2[0x14]]){if(name.substr(0x0,0x2)!=OxOffb2[0x15]){ name=OxOffb2[0x15]+name ;} ; obj.attachEvent(name,Ox1b6) ;} else {if(name.substr(0x0,0x2)==OxOffb2[0x15]){ name=name.substring(0x2) ;} ; obj.addEventListener(name,Ox1b6,false) ;} ;}  ;var __ISDEBUG=false; function Debug_Todo(Ox1b9){if(!__ISDEBUG){return ;} ;throw ( new Error(Ox1b9+OxOffb2[0x16]+Debug_Todo.caller));}  ; function Window_CloseDialog(Ox1bb){ Ox1bb[OxOffb2[0x17]].close() ;}  ; function Window_SetDialogReturnValue(Ox1bd,Ox1be){var Ox1bf=Ox1bd[OxOffb2[0x17]]; Ox1bf[OxOffb2[0x18]]=Ox1be ; Ox1bf[OxOffb2[0xd]][OxOffb2[0x19]]=Ox1be ;var Ox1c0=Ox1bf[OxOffb2[0x1a]];if(Ox1c0==null){return ;} ; Ox1c0[OxOffb2[0xd]][OxOffb2[0x19]]=Ox1be ;}  ; function Window_GetDialogArguments(Ox1bd){var Ox1bf=Ox1bd[OxOffb2[0x17]];if(Ox1bf[OxOffb2[0x1b]]){return Ox1bf[OxOffb2[0x1b]];} ;var Ox1c0=Ox1bf[OxOffb2[0x1a]];if(Ox1c0==null){return Ox1bf[OxOffb2[0xd]][OxOffb2[0x1c]];} ;return Ox1c0[OxOffb2[0xd]][OxOffb2[0x1c]];}  ; function Window_GetElement(Ox1bd,Oxfc,Ox1c3){var Ox81=Ox1bd[OxOffb2[0xd]].getElementById(Oxfc);if(Ox81){return Ox81;} ;var coll=Ox1bd[OxOffb2[0xd]].getElementsByName(Oxfc);if(coll[OxOffb2[0x1d]]>0x0){return coll.item(0x0);} ;if(Ox1c3){if(__ISDEBUG){ alert(OxOffb2[0x1e]+Oxfc+OxOffb2[0x1f]) ;} ;throw ( new Error(OxOffb2[0x1e]+Oxfc+OxOffb2[0x1f]));} ;return null;}  ; function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0x0;i<p[OxOffb2[0x20]][OxOffb2[0x1d]];i++){ arr.push(p[OxOffb2[0x20]].item(i)) ;} ;return arr;} ; Ox1c5(p) ; function Ox1c5(Ox81){var Ox1c6=Ox81[OxOffb2[0x21]];var Ox2b=Ox1c6[OxOffb2[0x1d]];for(var i=0x0;i<Ox2b;i++){var n=Ox1c6.item(i);if(n[OxOffb2[0x22]]!=0x1){continue ;} ; arr.push(n) ; Ox1c5(n) ;} ;}  ;return arr;}  ; function Element_SetUnselectable(element){ element.setAttribute(OxOffb2[0x23],OxOffb2[0x15]) ; element.setAttribute(OxOffb2[0x24],OxOffb2[0x25]) ;var arr=Element_GetAllElements(element);var len=arr[OxOffb2[0x1d]];if(!len){return ;} ;for(var i=0x0;i<len;i++){ arr[i].setAttribute(OxOffb2[0x23],OxOffb2[0x15]) ; arr[i].setAttribute(OxOffb2[0x24],OxOffb2[0x25]) ;} ;}  ; function Event_GetEvent(Ox1c9){ Ox1c9=Event_FindEvent(Ox1c9) ;if(Ox1c9==null){ Debug_Todo(OxOffb2[0x26]) ;} ;return Ox1c9;}  ; function Array_IndexOf(arr,Ox1cb){for(var i=0x0;i<arr[OxOffb2[0x1d]];i++){if(arr[i]==Ox1cb){return i;} ;} ;return -0x1;}  ; function Array_Contains(arr,Ox1cb){return Array_IndexOf(arr,Ox1cb)!=-0x1;}  ; function clearArray(Ox1ce){for(var i=0x0;i<Ox1ce[OxOffb2[0x1d]];i++){ Ox1ce[i]=null ;} ;}  ; function Event_FindEvent(Ox1c9){if(Ox1c9&&Ox1c9[OxOffb2[0x27]]){return Ox1c9;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOffb2[0x28]]){return window[OxOffb2[0x28]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;}  ; function Event_FindEvent_FindEventFromCallers(){var Ox1d1=Event_GetEvent[OxOffb2[0x11]];for(var i=0x0;i<0x64;i++){if(!Ox1d1){break ;} ;var Ox1c9=Ox1d1[OxOffb2[0x29]][0x0];if(Ox1c9&&Ox1c9[OxOffb2[0x27]]){return Ox1c9;} ; Ox1d1=Ox1d1[OxOffb2[0x11]] ;} ;}  ; function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox1d3(window); function Ox1d3(Ox1bd){if(Ox1bd==null){return null;} ;if(Ox1bd[OxOffb2[0x28]]){return Ox1bd[OxOffb2[0x28]];} ;if(Array_Contains(arr,Ox1bd)){return null;} ; arr.push(Ox1bd) ;var Ox1d4=[];if(Ox1bd[OxOffb2[0x2a]]!=Ox1bd){ Ox1d4.push(Ox1bd.parent) ;} ;if(Ox1bd[OxOffb2[0x17]]!=Ox1bd[OxOffb2[0x2a]]){ Ox1d4.push(Ox1bd.top) ;} ;if(Ox1bd[OxOffb2[0x1a]]){ Ox1d4.push(Ox1bd.opener) ;} ;for(var i=0x0;i<Ox1bd[OxOffb2[0x2b]][OxOffb2[0x1d]];i++){ Ox1d4.push(Ox1bd[OxOffb2[0x2b]][i]) ;} ;for(var i=0x0;i<Ox1d4[OxOffb2[0x1d]];i++){try{var Ox1c9=Ox1d3(Ox1d4[i]);if(Ox1c9){return Ox1c9;} ;} catch(x){} ;} ;return null;}  ;}  ; function Event_GetSrcElement(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;if(Ox1c9[OxOffb2[0x2c]]){return Ox1c9[OxOffb2[0x2c]];} ;if(Ox1c9[OxOffb2[0x2d]]){return Ox1c9[OxOffb2[0x2d]];} ; Debug_Todo(OxOffb2[0x2e]) ;return null;}  ; function Event_GetFromElement(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;if(Ox1c9[OxOffb2[0x2f]]){return Ox1c9[OxOffb2[0x2f]];} ;if(Ox1c9[OxOffb2[0x30]]){return Ox1c9[OxOffb2[0x30]];} ;return null;}  ; function Event_GetToElement(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;if(Ox1c9[OxOffb2[0x31]]){return Ox1c9[OxOffb2[0x31]];} ;if(Ox1c9[OxOffb2[0x30]]){return Ox1c9[OxOffb2[0x30]];} ;return null;}  ; function Event_GetKeyCode(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x33]]||Ox1c9[OxOffb2[0x32]];}  ; function Event_GetClientX(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x34]];}  ; function Event_GetClientY(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x35]];}  ; function Event_GetOffsetX(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x36]];}  ; function Event_GetOffsetY(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x37]];}  ; function Event_IsLeftButton(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;if(Browser_IsWinIE()){return Ox1c9[OxOffb2[0x38]]==0x1;} ;if(Browser_IsGecko()){return Ox1c9[OxOffb2[0x38]]==0x0;} ;return Ox1c9[OxOffb2[0x38]]==0x0;}  ; function Event_IsCtrlKey(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x39]];}  ; function Event_IsAltKey(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x3a]];}  ; function Event_IsShiftKey(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ;return Ox1c9[OxOffb2[0x3b]];}  ; function Event_PreventDefault(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ; Ox1c9[OxOffb2[0x18]]=false ;if(Ox1c9[OxOffb2[0x27]]){ Ox1c9.preventDefault() ;} ;}  ; function Event_CancelBubble(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ; Ox1c9[OxOffb2[0x3c]]=true ;if(Ox1c9[OxOffb2[0x3d]]){ Ox1c9.stopPropagation() ;} ;return false;}  ; function Event_CancelEvent(Ox1c9){ Ox1c9=Event_GetEvent(Ox1c9) ; Event_PreventDefault(Ox1c9) ;return Event_CancelBubble(Ox1c9);}  ; function CuteEditor_ButtonOver(element){if(!element[OxOffb2[0x3e]]){ element[OxOffb2[0x3f]]=Event_CancelEvent ; element[OxOffb2[0x40]]=CuteEditor_ButtonOut ; element[OxOffb2[0x41]]=CuteEditor_ButtonDown ; element[OxOffb2[0x42]]=CuteEditor_ButtonUp ; Element_SetUnselectable(element) ; element[OxOffb2[0x3e]]=true ;} ; element[OxOffb2[0x43]]=true ; element[OxOffb2[0x44]]=OxOffb2[0x45] ;}  ; function CuteEditor_ButtonOut(){var element=this; element[OxOffb2[0x44]]=OxOffb2[0x46] ; element[OxOffb2[0x43]]=false ;}  ; function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this; element[OxOffb2[0x44]]=OxOffb2[0x47] ;}  ; function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOffb2[0x43]]){ element[OxOffb2[0x44]]=OxOffb2[0x45] ;} else { element[OxOffb2[0x44]]=OxOffb2[0x48] ;} ;}  ; function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOffb2[0x3e]]){ element[OxOffb2[0x3f]]=Event_CancelEvent ; element[OxOffb2[0x40]]=CuteEditor_ColorPicker_ButtonOut ; element[OxOffb2[0x41]]=CuteEditor_ColorPicker_ButtonDown ; Element_SetUnselectable(element) ; element[OxOffb2[0x3e]]=true ;} ; element[OxOffb2[0x43]]=true ; element[OxOffb2[0x4a]][OxOffb2[0x49]]=OxOffb2[0x4b] ; element[OxOffb2[0x4a]][OxOffb2[0x4c]]=OxOffb2[0x4d] ; element[OxOffb2[0x4a]][OxOffb2[0x4e]]=OxOffb2[0x4f] ;}  ; function CuteEditor_ColorPicker_ButtonOut(){var element=this; element[OxOffb2[0x43]]=false ; element[OxOffb2[0x4a]][OxOffb2[0x49]]=OxOffb2[0x50] ; element[OxOffb2[0x4a]][OxOffb2[0x4c]]=OxOffb2[0x10] ; element[OxOffb2[0x4a]][OxOffb2[0x4e]]=OxOffb2[0x4f] ;}  ; function CuteEditor_ColorPicker_ButtonDown(){var element=this; element[OxOffb2[0x4a]][OxOffb2[0x49]]=OxOffb2[0x51] ; element[OxOffb2[0x4a]][OxOffb2[0x4c]]=OxOffb2[0x10] ; element[OxOffb2[0x4a]][OxOffb2[0x4e]]=OxOffb2[0x4f] ;}  ; function CuteEditor_ButtonCommandOver(element){ element[OxOffb2[0x43]]=true ;if(element[OxOffb2[0x52]]){ element[OxOffb2[0x44]]=OxOffb2[0x53] ;} else { element[OxOffb2[0x44]]=OxOffb2[0x45] ;} ;}  ; function CuteEditor_ButtonCommandOut(element){ element[OxOffb2[0x43]]=false ;if(element[OxOffb2[0x54]]){ element[OxOffb2[0x44]]=OxOffb2[0x55] ;} else {if(element[OxOffb2[0x52]]){ element[OxOffb2[0x44]]=OxOffb2[0x53] ;} else { element[OxOffb2[0x44]]=OxOffb2[0x46] ;} ;} ;}  ; function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ; element[OxOffb2[0x44]]=OxOffb2[0x47] ;}  ; function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOffb2[0x52]]){ element[OxOffb2[0x44]]=OxOffb2[0x53] ;return ;} ;if(element[OxOffb2[0x43]]){ element[OxOffb2[0x44]]=OxOffb2[0x45] ;} else {if(element[OxOffb2[0x54]]){ element[OxOffb2[0x44]]=OxOffb2[0x55] ;} else { element[OxOffb2[0x44]]=OxOffb2[0x46] ;} ;} ;} [CuteEditor_ButtonOver,CuteEditor_ColorPicker_ButtonOver] ; [Window_GetDialogArguments,Window_SetDialogReturnValue,Window_CloseDialog,Window_GetElement] ; function CancelEventIfNotDigit(){var Ox1f0=Event_GetKeyCode();if(Browser_IsWinIE()){if((Ox1f0>=0x30)&&(Ox1f0<=0x39)){return true;} ;} else {if((Ox1f0<0x30||Ox1f0>0x39)&&Ox1f0!=0x8&&(Ox1f0<0x23||Ox1f0>0x25)&&Ox1f0!=0x27&&Ox1f0!=0x2e){} else {return true;} ;} ;return Event_CancelEvent();}  ; window[OxOffb2[0x56]]=function window_onerror(Ox14d,Ox17,Ox1c6){if(!__ISDEBUG){return false;} ; alert(Ox14d+OxOffb2[0x16]+Ox17+OxOffb2[0x16]+Ox1c6+OxOffb2[0x57]+GetStackTrace()) ;return true;}  ; function DialogHandleDblClick(){if(Event_IsCtrlKey()){ window[OxOffb2[0x59]][OxOffb2[0x58]]=OxOffb2[0x5a]+window[OxOffb2[0x59]][OxOffb2[0x58]]+OxOffb2[0x5b]+ new Date().getTime() ;} ;if(Event_IsShiftKey()){ window.open(window[OxOffb2[0x59]].href,OxOffb2[0x5c]) ;} ;}  ; function DialogHandleKeyDown(){var Ox1f4=Event_GetKeyCode();if(Ox1f4==0x74){ window[OxOffb2[0x59]].reload() ;} ;if(Ox1f4==0x1b){ Window_SetDialogReturnValue(window,false) ; Window_CloseDialog(window) ;} ;}  ; Event_Attach(document,OxOffb2[0x5d],DialogHandleDblClick) ; Event_Attach(document,OxOffb2[0x5e],DialogHandleKeyDown) ; function Debug_ReportElements(Ox1f6){var Ox1f7={};var Ox1f8=[]; function Ox1f9(Oxfc){if(!Oxfc){return ;} ;if(Ox1f7[Oxfc]){ Ox1f8.push(OxOffb2[0x5f]) ;} ; Ox1f7[Oxfc]=true ; Ox1f8.push(OxOffb2[0x60]) ; Ox1f8.push(Oxfc) ; Ox1f8.push(OxOffb2[0x61]) ; Ox1f8.push(Oxfc) ; Ox1f8.push(OxOffb2[0x62]) ; Ox1f8.push(OxOffb2[0x16]) ;}  ;var arr=Element_GetAllElements(Ox1f6);for(var i=0x0;i<arr[OxOffb2[0x1d]];i++){var Oxb0=arr[i]; Ox1f9(Oxb0.id) ;} ;var Ox18e=Ox1f8.join(OxOffb2[0x10]); window[OxOffb2[0x64]].setData(OxOffb2[0x63],Ox18e) ;}  ;try{if(Browser_IsWinIE()){ top.moveTo((screen[OxOffb2[0x66]]-self[OxOffb2[0x65]])/0x2,(screen[OxOffb2[0x68]]-self[OxOffb2[0x67]])/0x2) ;} else { top.moveTo((screen[OxOffb2[0x66]]-self[OxOffb2[0x69]])/0x2,(screen[OxOffb2[0x68]]-self[OxOffb2[0x6a]])/0x2) ;} ;} catch(x){} ;if(Browser_IsGecko()){if(document[OxOffb2[0x6b]]){var rowprops=[OxOffb2[0x6c],OxOffb2[0x6d],OxOffb2[0x6e],OxOffb2[0x6f]];for(var rowpropi=0x0;rowpropi<rowprops[OxOffb2[0x1d]];rowpropi++){ HTMLElement[OxOffb2[0x72]].__defineGetter__(rowprops[rowpropi], new Function(OxOffb2[0x70]+rowprops[rowpropi]+OxOffb2[0x71])) ;} ;} ;} ; function outerHTML(element){var attr;var Ox1fe=element[OxOffb2[0x73]];var Ox24=OxOffb2[0x75]+element[OxOffb2[0x74]];for(var i=0x0;i<Ox1fe[OxOffb2[0x1d]];i++){ attr=Ox1fe[i] ;if(attr[OxOffb2[0x76]]){ Ox24+=OxOffb2[0x79]+attr[OxOffb2[0x78]]+OxOffb2[0x7a]+attr[OxOffb2[0x77]]+OxOffb2[0x7b] ;} ;} ;if(!canHaveChildren(element)){return Ox24+OxOffb2[0x7c];} ;return Ox24+OxOffb2[0x7c]+element[OxOffb2[0x7d]]+OxOffb2[0x7e]+element[OxOffb2[0x74]]+OxOffb2[0x7c];}  ; function canHaveChildren(element){switch(element[OxOffb2[0x74]]){case OxOffb2[0x8b]:case OxOffb2[0x8a]:case OxOffb2[0x89]:case OxOffb2[0x88]:case OxOffb2[0x87]:case OxOffb2[0x86]:case OxOffb2[0x85]:case OxOffb2[0x84]:case OxOffb2[0x83]:case OxOffb2[0x82]:case OxOffb2[0x81]:case OxOffb2[0x80]:case OxOffb2[0x7f]:return false;;;;;;;;;;;;;;} ;return true;}  ; function RGBtoHex(Ox201,Ox202,Ox203){return toHex(Ox201)+toHex(Ox202)+toHex(Ox203);}  ; function toHex(Ox205){if(Ox205==null){return OxOffb2[0x8c];} ; Ox205=parseInt(Ox205) ;if(Ox205==0x0||isNaN(Ox205)){return OxOffb2[0x8c];} ; Ox205=Math.max(0x0,Ox205) ; Ox205=Math.min(Ox205,0xff) ; Ox205=Math.round(Ox205) ;return OxOffb2[0x8d].charAt((Ox205-Ox205%0x10)/0x10)+OxOffb2[0x8d].charAt(Ox205%0x10);}  ;var dec_pattern=/rgb\((\d{1,3})[,]\s*(\d{1,3})[,]\s*(\d{1,3})\)/gi; function revertColor(Ox98){if(Ox98.match(dec_pattern)){var Ox208=Ox98.replace(dec_pattern,function (Ox24,p1,Oxd3,Ox209){return (OxOffb2[0x8e]+RGBtoHex(p1,Oxd3,Ox209)).toLowerCase();} );return Ox208;} ;return Ox98;}  ; function isNull(Ox14d){return  typeof Ox14d==OxOffb2[0x8f]&&!Ox14d;}  ; function SelectColor(Ox20c,Ox20d){ function Ox20e(arr){if(arr){ Ox20c[OxOffb2[0x77]]=arr.toUpperCase() ; Ox20c[OxOffb2[0x4a]][OxOffb2[0x4c]]=arr ;if(Ox20d){ Ox20d[OxOffb2[0x4a]][OxOffb2[0x4c]]=arr ;} ;} ;}  ;if(Browser_IsSafari()){var obj={color1:Ox20c,color2:Ox20d}; editor.ShowDialog(Ox20e,OxOffb2[0x91]+editor.GetScriptProperty(OxOffb2[0x90]),obj,OxOffb2[0x92]) ;} else { editor.ShowDialog(Ox20e,OxOffb2[0x91]+editor.GetScriptProperty(OxOffb2[0x90]),null,OxOffb2[0x92]) ;} ;}  ;