(this.webpackJsonpwiki=this.webpackJsonpwiki||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){},115:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},440:function(e,t,c){},441:function(e,t,c){},442:function(e,t,c){},443:function(e,t,c){},444:function(e,t,c){},449:function(e,t,c){},450:function(e,t,c){},451:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(8),r=c.n(s),i=(c(108),c(37)),o=c(14),j=c(46),l=c(15),d=c(34),b=c(4),u=c(495),h=c(21),O=c(505),x=c(496),m=c(497),p=c(498),f=c(492),g=(c(109),c(501)),w=c(499),v=c(96),y=c.n(v),k=c(97),S=c.n(k),N=c(454),A=c(502),P=c(507),I=c(500),T=c.p+"static/media/logo.eae36173.png",R=c(83),E=c.n(R),_=c(81),B=c.n(_),L=c(82),C=c.n(L),U=c(84),G=c.n(U),M=c(85),F=c.n(M),D=c(55),H=c.n(D),z=c(43),Y=c.n(z),K=c(56),W=c.n(K),J=c(57),X=c.n(J),q=c(58),Q=c.n(q),V=c(59),Z=c.n(V),$=c(38),ee=c.n($),te=c(41),ce=c.n(te),ae=c(1),ne=[{topname:"Basic Info",topicon:Object(ae.jsx)(ce.a,{}),content:[{name:"Building Sakura",icon:Object(ae.jsx)(B.a,{}),url:"/build-sakura"},{name:"Installing Sakura",icon:Object(ae.jsx)(C.a,{}),url:"/install-sakura"},{name:"Reporting a bug",icon:Object(ae.jsx)(E.a,{}),url:"/report-bug"}]},{topname:"Maintainers",topicon:Object(ae.jsx)(ce.a,{}),content:[{name:"Apply for maintainership",icon:Object(ae.jsx)(G.a,{}),url:"/apply"},{name:"Build Flags",icon:Object(ae.jsx)(F.a,{}),url:"/build-flags"}]},{topname:"Features",topicon:Object(ae.jsx)(ce.a,{}),content:[{name:"Animation",icon:Object(ae.jsx)(H.a,{}),url:"/animation"},{name:"Gestures",icon:Object(ae.jsx)(Y.a,{}),url:"/gestures"},{name:"Hardware Buttons",icon:Object(ae.jsx)(W.a,{}),url:"/hardware-buttons"},{name:"Miscellaneous",icon:Object(ae.jsx)(Y.a,{}),url:"/miscellaneous"},{name:"Navigation",icon:Object(ae.jsx)(X.a,{}),url:"/navigation"},{name:"Notification",icon:Object(ae.jsx)(Q.a,{}),url:"/notification"},{name:"Power Menu",icon:Object(ae.jsx)(Z.a,{}),url:"/power-menu"},{name:"Statusbar",icon:Object(ae.jsx)(ee.a,{}),url:"/statusbar"}]}],se=c(506),re=c(493),ie=c(86),oe=c.n(ie),je=c(87),le=c.n(je),de=(c(115),c(61)),be=function(){var e=Object(de.usePopupState)({variant:"popover",popupId:"demoMenu"});return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(oe.a,Object(d.a)({},Object(de.bindTrigger)(e))),Object(ae.jsxs)(se.a,Object(d.a)(Object(d.a)({className:"menu_popup"},Object(de.bindMenu)(e)),{},{children:[Object(ae.jsx)(le.a,{className:"menu_close",onClick:e.close}),Object(ae.jsx)("span",{className:"menu_span",children:Object(ae.jsx)(re.a,{className:"menu_items",href:"#",children:"Home"})}),Object(ae.jsx)("span",{className:"menu_span",children:Object(ae.jsx)(re.a,{className:"menu_items",href:"#",children:"Downloads"})}),Object(ae.jsx)("span",{className:"menu_span",children:Object(ae.jsx)(re.a,{className:"menu_items",href:"#",children:"Stats"})}),Object(ae.jsx)("span",{className:"menu_span",children:Object(ae.jsx)(re.a,{className:"menu_items",href:"#",children:"Blog"})})]}))]})},ue=c(494);c(122);function he(){var e=n.a.useState(0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=n.a.useState(10),r=Object(l.a)(s,2),i=r[0],o=r[1],j=n.a.useRef((function(){}));return n.a.useEffect((function(){j.current=function(){if(c>100)a(0),o(10);else{var e=10*Math.random(),t=10*Math.random();a(c+e),o(c+e+t)}}})),n.a.useEffect((function(){var e=setInterval((function(){j.current()}),500);return function(){clearInterval(e)}}),[]),Object(ae.jsx)("div",{className:"loader",children:Object(ae.jsx)(ue.a,{variant:"buffer",value:c,valueBuffer:i})})}var Oe=c.p+"static/media/projectSakura.2627941a.png",xe=(c(123),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),1500)}),[]),Object(ae.jsxs)("div",{className:"environment",children:[c&&Object(ae.jsx)(he,{}),!c&&Object(ae.jsx)("center",{children:Object(ae.jsxs)("div",{className:"content",children:[Object(ae.jsx)("img",{className:"home_image",alt:"data",src:Oe}),Object(ae.jsx)("h1",{children:"WELCOME TO PROJECT SAKURA WIKI"}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h3",{children:"Some basic info about ProjectSakura!"}),Object(ae.jsxs)("p",{children:[" ","ProjectSakura was started by LordShenron as a hobby Project in February of 2020. Later on ArunTeltia joined in as a fulltime web developer for the Project."]}),Object(ae.jsx)("p",{children:"ProjectSakura uses LineageOS as base and closely stick to it. Infact you can build ProjectSakura using same LineageOS trees."}),Object(ae.jsx)("p",{children:"As of this moment ProjectSakura have evolved through 2 major Android Releases. The current Stable version is 5.R based on Android 11."}),Object(ae.jsx)("hr",{}),Object(ae.jsxs)("h4",{children:["Designed by Cryptofox17",Object(ae.jsx)("br",{})," ","This Wiki is completely created from scratch by ArunTeltia, FireQueen-3010 and LordShenron.",Object(ae.jsx)("br",{}),"\xa9 All Rights Reserved 2020-2021, ProjectSakura"]})]})})]})}),me=(c(124),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),1500)}),[]),Object(ae.jsxs)("div",{className:"environment",children:[c&&Object(ae.jsx)(he,{}),!c&&Object(ae.jsx)("center",{children:Object(ae.jsxs)("div",{className:"content",children:[Object(ae.jsx)("h2",{children:"REPORTING A BUG"}),Object(ae.jsx)("p",{children:"Here we will guide you on how to report a bug related to Project Sakura"}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"WHERE SHOULD I REPORT BUGS"}),Object(ae.jsxs)("p",{children:["You can report Bugs that are related to our Source on our",Object(ae.jsx)("a",{href:"https://github.com/ProjectSakura/Bug_Tracker",target:"_blank",rel:"noreferrer",children:"Bug Reports Repo."}),Object(ae.jsx)("br",{}),"If you are facing a bug related to a specific device then you can report about it to the device maintainer in our Telegram Chat or the device specific support Group."]}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"WHAT DO I NEED TO INCLUDE IN THE BUG REPORT "}),Object(ae.jsxs)("p",{children:["If you are going to report the bug on our Bug report Repo then you can use the template that we have designed for opening Issues there.",Object(ae.jsx)("br",{}),"If you are going to report any device specific bug then you will need to write the description of the bug and properly explain the procedure of reproducing the bug. It is also required to attach screenshots or a logcat."]}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"HOW TO TAKE LOGCATS "}),Object(ae.jsxs)("p",{children:["You can follow this amazing article to know how to properly take log using both ADB and Any Logcat Application,",Object(ae.jsx)("a",{href:"https://telegra.ph/BUG-REPORTING-GUIDE-FOR-DUMMIES-10-05",target:"_blank",rel:"noreferrer",children:" Follow this link"})]})]})})]})}),pe=c(504),fe=c(26),ge=(c(125),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),1500)}),[]),Object(ae.jsxs)("div",{className:"environment",children:[c&&Object(ae.jsx)(he,{}),!c&&Object(ae.jsx)("center",{children:Object(ae.jsxs)("div",{className:"content",children:[Object(ae.jsx)("h2",{children:"BUILDING SAKURA"}),Object(ae.jsx)("p",{children:"Here we will guide you on how to build Project Sakura for your device."}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"HOW TO SETUP A BUILD ENVIRONMENT"}),Object(ae.jsxs)("p",{children:["To Build Project Sakura you can use any 64 Bit Linux Distro, though we recommend using Ubuntu 18.04, LinuxMint, MXLinux or Manjaro. You can setup the build environment using",Object(ae.jsxs)("a",{href:"https://github.com/akhilnarang/scripts",target:"_blank",rel:"noreferrer",children:[" ","Akhil Narang's Script"]}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{})]}),Object(ae.jsx)("div",{className:"wrapper",children:Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"git clone https://github.com/akhilnarang/scripts; cd scripts; sudo bash setup/android_build_env.sh"})}),Object(ae.jsx)("br",{}),Object(ae.jsxs)("p",{children:["Or You can install all the packages manually using the commands below.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{})]}),Object(ae.jsx)("div",{className:"wrapper",children:Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"sudo apt-get install openjdk-8-jdk && sudo apt-get update && sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev libesd0-dev squashfs-tools build-essential zip curl libncurses5-dev zlib1g-dev openjdk-8-jre openjdk-8-jdk pngcrush schedtool libxml2 libxml2-utils xsltproc lzop libc6-dev schedtool g++-multilib lib32z1-dev lib32ncurses5-dev lib32readline-gplv2-dev gcc-multilib maven tmux screen w3m ncftp"})}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"SYNCING SOURCES "}),Object(ae.jsxs)("p",{children:["To Sync ProjectSakura Sources you will need to execute the following command"," ",Object(ae.jsx)("br",{}),"(PS: This command will shallow sync the sources which saves bandwidth and storage space if you are just going to build and not do any source side changes.)",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{})]}),Object(ae.jsx)("div",{className:"wrapper",children:Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"repo init --depth=1 -u git://github.com/ProjectSakura/android.git -b 11 && repo sync --current-branch --force-sync --no-clone-bundle --no-tags --optimized-fetch --prune -j `nproc`"})}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"BUILDING SAKURA "}),Object(ae.jsxs)("p",{children:['Now execute the below command to start building ProjectSakura, replace "devicecodename" with your device\'s code. E.g, for ASUS ZENFONE MAX PRO M1 we will write X00T.',Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{})]}),Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:". build/envsetup.sh && lunch lineage_devicecodename-userdebug && mka bacon -jx"})]})})]})}),we=(c(440),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),1500)}),[]),Object(ae.jsxs)("div",{className:"environment",children:[c&&Object(ae.jsx)(he,{}),!c&&Object(ae.jsx)("center",{children:Object(ae.jsxs)("div",{className:"content",children:[Object(ae.jsx)("h2",{children:"INSTALLING SAKURA "}),Object(ae.jsxs)("p",{children:["In this article we will tell you how to flash ProjectSakura.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)("i",{children:"This article only cover universal steps that you need to take and things may differ for every device so it's better if you also follow the XDA thread for your device."})," "]}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"DOWNLOAD PROJECT SAKURA"}),Object(ae.jsxs)("p",{children:["To flash ProjectSakura you will need to get the flashable ROM zip for your device. We have a download center where you can get builds for every device that we support, Go to",Object(ae.jsx)("a",{href:"https://ProjectSakura.xyz/download",target:"_blank",rel:"noreferrer",children:"ProjectSakura | Downloads"}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"If you cannot find the build for your device on our download center then it probably is unsupported  by us.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)("i",{children:"Note: Some devices also need specific firmwares and Vendors to be flashed with ROM. To know more you should check the XDA thread or Telegram Chats of your device."})]}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"FLASHING PROJECT SAKURA "}),Object(ae.jsxs)("p",{children:["After you have downloaded all the needed files, you can proceed with the flashing process. Boot your device into recovery mode and go to advanced wipe after that wipe dalvik, cache, system, vendor and data.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"Once you have wiped, flash the required firmware/ vendor zips and the flashable ROM zip. Then reboot to system and enjoy a clean Android experience.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)("i",{children:"Note: ProjectSakura provides three types of builds GAPPS, VANILLA and MICROG. You may or maynot need to flash a separate GAPPS package depending on the type of the build; maintainer is releasing."})]}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"GAINING ROOT ACCESS"}),Object(ae.jsx)("p",{children:"You will need to flash Magisk in order to gain root access. You can download the flashable magisk zip from it's Github Repo. We only recommend you to download magisk from verified sources."})]})})]})}),ve=(c(441),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),1500)}),[]),Object(ae.jsxs)("div",{className:"environment",children:[c&&Object(ae.jsx)(he,{}),!c&&Object(ae.jsx)("center",{children:Object(ae.jsxs)("div",{className:"content",children:[Object(ae.jsx)("h2",{children:"APPLY FOR PROJECT SAKURA MAINTAINERSHIP "}),Object(ae.jsx)("p",{children:"In this article we will tell you how you can become an Official ProjectSakura Maintainer."}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"GUIDELINES"}),Object(ae.jsxs)("p",{children:["You don't need too many skills to be a device maintainer. Though you need to fullfill these simple guidelines.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"1. You must own the device.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"2. You must know Basic git ( creating pull requests, properly writing commits, cherry-picking and other basic stuff).",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"3. You must have made some contributions towards your device community instead of just taking a device tree and compiling.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"4. You must know how to read basic logcats.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"5. You must have to compile Unofficial builds before you apply for Official.",Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),"6. Co-Maintaining is allowed but you cannot be a shadow maintainer for some other guy."]}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"APPLICATION FORM "}),Object(ae.jsxs)("p",{children:["Once you make sure that you are fullfilling all the above guidelines, you can use the Google Form below to apply for Official maintainership.",Object(ae.jsx)("br",{})," ",Object(ae.jsx)("br",{}),Object(ae.jsx)("div",{children:Object(ae.jsx)("iframe",{className:"form",title:"maintainer-form",src:"https://docs.google.com/forms/d/e/1FAIpQLSfKFUSyohdGKQFLEZCxsxCemlcXdKUMPCsShi0TXGJu7ihceg/viewform?embedded=true",width:"700",height:"520",frameBorder:"0",children:"Loading\u2026"})}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{})]})]})})]})}),ye=(c(442),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),1500)}),[]),Object(ae.jsxs)("div",{className:"environment",children:[c&&Object(ae.jsx)(he,{}),!c&&Object(ae.jsx)("center",{children:Object(ae.jsxs)("div",{className:"content",children:[Object(ae.jsx)("h2",{children:"FLAGS PRESENT IN PROJECT SAKURA"}),Object(ae.jsx)("p",{children:"In this article we will tell you about all the available Flags in ProjectSakura"}),Object(ae.jsx)("hr",{}),Object(ae.jsx)("h2",{children:"List of all flags with their functionality."}),Object(ae.jsxs)("p",{children:[Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"SAKURA_BUILD_TYPE := gapps //For building ProjectSakura with Builtin GAPPS."}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"SAKURA_BUILD_TYPE := microg //For building ProjectSakura with Builtin MICROG."}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"SAKURA_OPLAUNCHER := true //For building ProjectSakura with default OnePlus Launcher."}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"TARGET_USES_BLUR := true //For building ProjectSakura with option to toggle Notification shade Blur."}),Object(ae.jsx)("br",{}),Object(ae.jsx)("br",{}),Object(ae.jsx)(pe.a,{language:"bash",style:fe.dracula,children:"EXTRA_FOD_ANIMATIONS := true //For building ProjectSakura with FODAnimations resources. "})]})]})})]})}),ke=[{name:"Setting up environment",icon:Object(ae.jsx)(xe,{}),url:"/wiki/"},{name:"Build Sakura",icon:Object(ae.jsx)(ge,{}),url:"/wiki/build-sakura"},{name:"Reporting a bug",icon:Object(ae.jsx)(me,{}),url:"/wiki/report-bug"},{name:"Installing Sakura",icon:Object(ae.jsx)(we,{}),url:"/wiki/install-sakura"},{name:"Apply for maintainership",icon:Object(ae.jsx)(ve,{}),url:"/wiki/apply"},{name:"Build Flags",icon:Object(ae.jsx)(ye,{}),url:"/wiki/build-flags"},{name:"Animation",icon:Object(ae.jsx)(H.a,{}),url:"/wiki/animation"},{name:"Gestures",icon:Object(ae.jsx)(Y.a,{}),url:"/wiki/gestures"},{name:"Hardware Buttons",icon:Object(ae.jsx)(W.a,{}),url:"/wiki/hardware-buttons"},{name:"Miscellaneous",icon:Object(ae.jsx)(Y.a,{}),url:"/wiki/miscellaneous"},{name:"Navigation",icon:Object(ae.jsx)(X.a,{}),url:"/wiki/navigation"},{name:"Notification",icon:Object(ae.jsx)(Q.a,{}),url:"/wiki/notification"},{name:"Power Menu",icon:Object(ae.jsx)(Z.a,{}),url:"/wiki/power-menu"},{name:"Statusbar",icon:Object(ae.jsx)(ee.a,{}),url:"/wiki/statusbar"}],Se=(c(443),c(94)),Ne=c.n(Se),Ae=c(95),Pe=c.n(Ae),Ie=c(92),Te=c.n(Ie),Re=c(93),Ee=c.n(Re),_e=c.p+"static/media/export_3.eae36173.png",Be=function(){return Object(ae.jsxs)("div",{className:"cardtab",children:[Object(ae.jsx)("div",{className:"card_table_of_content",children:Object(ae.jsxs)("div",{className:"card_list",children:[Object(ae.jsx)("h5",{className:"card_heading",children:"Talk with us"}),Object(ae.jsxs)("div",{className:"card_listitem",children:[Object(ae.jsx)(Te.a,{style:{backgroundColor:"#1e1e1e"}}),Object(ae.jsx)("a",{href:"https://projectsakura.xyz",children:"Website"})]}),Object(ae.jsxs)("div",{className:"card_listitem",children:[Object(ae.jsx)(Ee.a,{style:{backgroundColor:"#1e1e1e"}}),Object(ae.jsx)("a",{href:"https://projectsakura.xyz/download",children:"Download"})]}),Object(ae.jsxs)("div",{className:"card_listitem",children:[Object(ae.jsx)(ee.a,{style:{backgroundColor:"#1e1e1e"}}),Object(ae.jsx)("a",{href:"https://projectsakura.xyz/stats.html",children:"Stats"})]}),Object(ae.jsxs)("div",{className:"card_listitem",children:[Object(ae.jsx)(Ne.a,{style:{backgroundColor:"#1e1e1e"}}),Object(ae.jsx)("a",{href:"https://github.com/ProjectSakura",children:"Github"})]}),Object(ae.jsxs)("div",{className:"card_listitem",children:[Object(ae.jsx)(Pe.a,{style:{backgroundColor:"#1e1e1e"}}),Object(ae.jsx)("a",{href:"https://t.me/ProjectSakura",children:"Telegram "})]})]})}),Object(ae.jsx)("div",{className:"mascot",children:Object(ae.jsxs)("center",{children:[Object(ae.jsx)("h4",{children:"Our Mascot"}),Object(ae.jsx)("img",{src:_e,style:{width:"100%"},alt:"project sakura mascot"})]})})]})},Le=(c(444),Object(o.g)((function(){var e=Object(a.useState)(window.location.href.split("/")),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n(window.location.href.split("/"))}),[window.location.href]),Object(ae.jsx)("div",{className:"breadcrum",children:Object(ae.jsxs)("div",{className:"breadcrum_content",children:[Object(ae.jsx)(ce.a,{className:"breadcrum_home"})," ",c[3].toUpperCase()," ","/"," ",c[4]&&c[4].toUpperCase()]})})}))),Ce=(c(449),c.p+"static/media/404.c13c0fbe.gif"),Ue=function(){return Object(ae.jsx)("div",{className:"page404",children:Object(ae.jsx)("div",{children:Object(ae.jsx)("img",{src:Ce,alt:"404"})})})},Ge=(c(450),Object(o.g)((function(){return Object(ae.jsx)("div",{className:"footer_div",children:Object(ae.jsxs)("h2",{children:["Made with"," ","\u2764\ufe0f"," ","\xa9 2020-21 Project"," ",Object(ae.jsx)("span",{className:"footer_sakura",children:"Sakura"})]})})}))),Me=280,Fe=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Me,"px)"),marginLeft:Me,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Me,flexShrink:0},drawerPaper:{width:Me,backgroundColor:"#1e1e1e"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-280},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},toolbar:e.mixins.toolbar}}));var De=Object(o.g)((function(){var e=Object(o.f)().pathid,t=Fe(),c=Object(h.a)(),s=n.a.useState(null),r=Object(l.a)(s,2),d=r[0],u=r[1];Object(a.useEffect)((function(){var e=ke.filter((function(e){return e.url==="/wiki/".concat(window.location.href.split("/")[4])}));void 0===e[0]?u(Object(ae.jsx)(Ue,{})):u(e[0].icon)}),[e,window.location.href]);var v=n.a.useState(!0),k=Object(l.a)(v,2),R=k[0],E=k[1],_=n.a.useState(window.innerWidth),B=Object(l.a)(_,2),L=B[0],C=B[1],U=function(){C(window.innerWidth)};return Object(a.useEffect)((function(){return window.addEventListener("resize",U),function(){return window.removeEventListener("resize",U)}})),Object(ae.jsxs)("div",{className:t.root,children:[Object(ae.jsx)(x.a,{}),Object(ae.jsx)(m.a,{position:"fixed",className:Object(b.a)(t.appBar,Object(j.a)({},t.appBarShift,R)),children:Object(ae.jsxs)(p.a,{children:[Object(ae.jsxs)("div",{className:t.title,style:{display:"flex",alignItems:"center"},children:[Object(ae.jsx)(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){E(!0)},edge:"start",className:Object(b.a)(t.menuButton,R&&t.hide),children:Object(ae.jsx)("img",{style:{width:"50px",height:"50px",borderRadius:"20px",paddingBottom:"2px"},src:T,alt:"logo"})}),!R&&Object(ae.jsxs)("div",{children:[Object(ae.jsx)("div",{children:Object(ae.jsxs)("h2",{className:"Main-logo",children:[Object(ae.jsx)("span",{children:"Project"}),Object(ae.jsx)("span",{className:"Sakura",children:" Sakura"})]})}),Object(ae.jsx)("div",{className:"spring",children:Object(ae.jsx)("h6",{children:Object(ae.jsx)("i",{children:"feels like spring"})})})]})]}),L>720&&Object(ae.jsxs)("div",{children:[Object(ae.jsx)(I.a,{color:"inherit",children:Object(ae.jsx)("b",{children:"Home"})}),Object(ae.jsx)(I.a,{color:"inherit",children:Object(ae.jsx)("b",{children:"Download"})}),Object(ae.jsx)(I.a,{color:"inherit",children:Object(ae.jsx)("b",{children:"Stats"})}),Object(ae.jsx)(I.a,{color:"inherit",children:Object(ae.jsx)("b",{children:"Blog"})})]}),L<=720&&Object(ae.jsx)(be,{})]})}),Object(ae.jsxs)(O.a,{style:{overflow:"hidden"},className:t.drawer,variant:"persistent",anchor:"left",open:R,classes:{paper:t.drawerPaper},children:[Object(ae.jsxs)("div",{className:t.drawerHeader,style:{zIndex:1,backgroundColor:"#1e1e1e",position:"fixed",width:Me},children:[Object(ae.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"2px"},children:[Object(ae.jsx)("img",{style:{width:"40px",height:"40px",borderRadius:"20px",marginRight:"7px"},src:T,alt:"logo"}),Object(ae.jsx)("div",{children:Object(ae.jsxs)("h4",{className:"drawer_logoname",children:[Object(ae.jsx)("span",{className:"drawer_project",children:"Project"}),Object(ae.jsx)("span",{className:"drawer_sakura",children:" Sakura"})]})})]}),Object(ae.jsx)(w.a,{style:{color:"whitesmoke"},onClick:function(){E(!1)},children:"ltr"===c.direction?Object(ae.jsx)(y.a,{}):Object(ae.jsx)(S.a,{})})]}),Object(ae.jsx)("div",{style:{marginTop:"55px",backgroundColor:"#1e1e1e",color:"whitesmoke"},children:ne.map((function(e){return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(g.a,{}),Object(ae.jsx)(N.a,{className:"drawer_elements",children:Object(ae.jsx)(P.a,{primary:e.topname,style:{color:"#00ccff"}})},e.topname),Object(ae.jsx)(f.a,{style:{padding:"0px"},children:e.content.map((function(e){return Object(ae.jsx)(i.b,{to:e.url,children:Object(ae.jsxs)(N.a,{className:"drawer_elements",button:!0,children:[Object(ae.jsx)(A.a,{style:{color:"#00ccff"},children:e.icon}),Object(ae.jsx)(P.a,{children:Object(ae.jsx)("div",{style:{textDecoration:"none",color:"whitesmoke"},children:e.name})})]},e.url)},e)}))})]})}))})]}),(!R||L>720)&&Object(ae.jsxs)("main",{className:Object(b.a)(t.content,Object(j.a)({},t.contentShift,R)),children:[Object(ae.jsx)("div",{className:t.drawerHeader}),Object(ae.jsx)(Le,{}),Object(ae.jsxs)("div",{className:"main_content_cards",children:[Object(ae.jsx)(Be,{}),d]}),Object(ae.jsx)(Ge,{})]})]})}));var He=function(){return Object(ae.jsx)(i.a,{basename:"/wiki",children:Object(ae.jsxs)("div",{className:"App",children:[Object(ae.jsx)(De,{}),Object(ae.jsx)(o.c,{children:Object(ae.jsx)(o.a,{path:"/wiki/:pathid"})})]})})},ze=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,509)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(ae.jsx)(n.a.StrictMode,{children:Object(ae.jsx)(He,{})}),document.getElementById("root")),ze()}},[[451,1,2]]]);
//# sourceMappingURL=main.9823fd83.chunk.js.map