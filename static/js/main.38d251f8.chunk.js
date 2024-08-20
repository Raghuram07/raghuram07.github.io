(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t){},113:function(e,t){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(9),c=a.n(n),i=a(172),r=a(167),l=a(162),o=a(165),d=a(133),j=a(38),x=a(48),p=a.n(x);var b={SOCKET_URL:"https://video-chat-production-0903.up.railway.app/"},m=a(3);const g=Object(s.createContext)(),h=Object(j.io)(b.SOCKET_URL),u=e=>{let{children:t}=e;const[a,n]=Object(s.useState)(!1),[c,i]=Object(s.useState)(!1),[r,l]=Object(s.useState)(),[o,d]=Object(s.useState)(""),[j,x]=Object(s.useState)({}),[b,u]=Object(s.useState)(""),O=Object(s.useRef)(),f=Object(s.useRef)(),v=Object(s.useRef)();Object(s.useEffect)((()=>{navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((e=>{l(e),O.current.srcObject=e})),h.on("me",(e=>{u(e)})),h.on("callUser",(e=>{let{from:t,name:a,signal:s}=e;x({isReceivingCall:!0,from:t,name:a,signal:s})})),h.on("receiveMessage",(e=>{console.log("New message received:",e)}))}),[]);return Object(m.jsx)(g.Provider,{value:{call:j,callAccepted:a,myVideo:O,userVideo:f,stream:r,name:o,setName:d,callEnded:c,me:b,callUser:e=>{const t=new p.a({initiator:!0,trickle:!1,stream:r});t.on("signal",(t=>{h.emit("callUser",{userToCall:e,signalData:t,from:b,name:o})})),t.on("stream",(e=>{f.current.srcObject=e})),h.on("callAccepted",(e=>{n(!0),t.signal(e)})),v.current=t},leaveCall:()=>{i(!0),v.current.destroy(),window.location.reload()},answerCall:()=>{n(!0);const e=new p.a({initiator:!1,trickle:!1,stream:r});e.on("signal",(e=>{h.emit("answerCall",{signal:e,to:j.from})})),e.on("stream",(e=>{f.current.srcObject=e})),e.signal(j.signal),v.current=e},sendMessage:e=>{h.emit("newMessage",e)}},children:t})},O=Object(l.a)((e=>({video:{width:"550px",[e.breakpoints.down("xs")]:{width:"300px"}},gridContainer:{justifyContent:"center",[e.breakpoints.down("xs")]:{flexDirection:"column"}},paper:{padding:"10px",border:"2px solid black",margin:"10px"}})));var f=()=>{const{name:e,callAccepted:t,myVideo:a,userVideo:n,callEnded:c,stream:i,call:l}=Object(s.useContext)(g),j=O();return Object(m.jsxs)(o.a,{container:!0,className:j.gridContainer,children:[i&&Object(m.jsx)(d.a,{className:j.paper,children:Object(m.jsxs)(o.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(r.a,{variant:"h5",gutterBottom:!0,children:e||"Name"}),Object(m.jsx)("video",{playsInline:!0,muted:!0,ref:a,autoPlay:!0,className:j.video})]})}),t&&!c&&Object(m.jsx)(d.a,{className:j.paper,children:Object(m.jsxs)(o.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(r.a,{variant:"h5",gutterBottom:!0,children:l.name||"Name"}),Object(m.jsx)("video",{playsInline:!0,ref:n,autoPlay:!0,className:j.video})]})})]})},v=a(168),C=a(173),w=a(174),y=a(78),N=a(169),k=a(170),I=a(171);const S=Object(l.a)((e=>({root:{display:"flex",flexDirection:"column"},gridContainer:{width:"100%",[e.breakpoints.down("xs")]:{flexDirection:"column"}},container:{width:"600px",margin:"35px 0",padding:0,[e.breakpoints.down("xs")]:{width:"80%"}},margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}})));var M=e=>{let{children:t}=e;const{me:a,callAccepted:n,name:c,setName:i,callEnded:l,leaveCall:j,callUser:x}=Object(s.useContext)(g),[p,b]=Object(s.useState)(""),h=S();return Object(m.jsx)(v.a,{className:h.container,children:Object(m.jsxs)(d.a,{elevation:10,className:h.paper,children:[Object(m.jsx)("form",{className:h.root,noValidate:!0,autoComplete:"off",children:Object(m.jsxs)(o.a,{container:!0,className:h.gridContainer,children:[Object(m.jsxs)(o.a,{item:!0,xs:12,md:6,className:h.padding,children:[Object(m.jsx)(r.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(m.jsx)(C.a,{label:"Name",value:c,onChange:e=>i(e.target.value),fullWidth:!0}),Object(m.jsx)(y.CopyToClipboard,{text:a,className:h.margin,children:Object(m.jsx)(w.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(m.jsx)(N.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(m.jsxs)(o.a,{item:!0,xs:12,md:6,className:h.padding,children:[Object(m.jsx)(r.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(m.jsx)(C.a,{label:"ID to call",value:p,onChange:e=>b(e.target.value),fullWidth:!0}),n&&!l?Object(m.jsx)(w.a,{variant:"contained",color:"secondary",startIcon:Object(m.jsx)(k.a,{fontSize:"large"}),fullWidth:!0,onClick:j,className:h.margin,children:"Hang Up"}):Object(m.jsx)(w.a,{variant:"contained",color:"primary",startIcon:Object(m.jsx)(I.a,{fontSize:"large"}),fullWidth:!0,onClick:()=>x(p),className:h.margin,children:"Call"})]})]})}),t]})})};var R=()=>{const{answerCall:e,call:t,callAccepted:a}=Object(s.useContext)(g);return Object(m.jsx)(m.Fragment,{children:t.isReceivingCall&&!a&&Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(m.jsxs)("h1",{children:[t.name," is calling:"]}),Object(m.jsx)(w.a,{variant:"contained",color:"primary",onClick:e,children:"Answer"})]})})},T=a(41);const B=Object(j.io)(b.SOCKET_URL),A=Object(l.a)((e=>({container:{width:"600px",margin:"35px 0",background:"white",borderRadius:"5px",padding:0,[e.breakpoints.down("xs")]:{width:"80%"}},sendContainer:{display:"flex",margin:"2px",padding:"5px",alignItems:"center"},textArea:{margin:"5px",padding:"5px"},sendButton:{width:"30px",height:"100%",margin:"2px",padding:"2px",cursor:"pointer"},msgContainer:{background:"lightgrey",padding:"5px"},message:{padding:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},sentMessage:{justifyContent:"flex-end",textAlign:"right",background:"#808080"},receivedMessage:{justifyContent:"flex-start",textAlign:"left",background:"#C0C0C0"},messageText:{maxWidth:"70%",wordWrap:"break-word"},chatIcon:{position:"fixed",bottom:"50px",right:"50px",width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#007bff",color:"white",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",zIndex:1e3},chatBox:{display:"none",position:"fixed",bottom:"100px",right:"80px",maxHeight:"400px",overflowY:"auto",backgroundColor:"white",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"5px",zIndex:1e3},chatBoxOpen:{display:"block"}})));var D=()=>{const[e,t]=Object(s.useState)([]),[a,n]=Object(s.useState)(""),[c,i]=Object(s.useState)(!1),{sendMessage:r}=Object(s.useContext)(g),{name:l}=Object(s.useContext)(g),d=A(),j=e=>{const t={Sender:l,Message:e,Time:(new Date).toISOString(),Id:B.id};e&&r(t)};Object(s.useEffect)((()=>(B.on("receiveMessage",(e=>{const a={Sender:e.Sender,Message:e.Message,Time:e.Time,Id:e.Id};t((e=>[...e,a]))})),()=>{B.off("receiveMessage")})),[]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:d.chatIcon,onClick:()=>i(!c),children:Object(m.jsx)(T.a,{size:30})}),Object(m.jsx)("div",{className:"".concat(d.chatBox," ").concat(c?d.chatBoxOpen:""),children:Object(m.jsxs)(o.a,{className:d.container,children:[Object(m.jsx)("div",{className:d.msgContainer,children:e.map(((t,a)=>((t,a)=>{const s=t.Id===B.id,n=!(0===a)&&e[a-1].Id===t.Id,c=n?{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"}:{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"};return Object(m.jsxs)("div",{className:"".concat(d.message," ").concat(s?d.sentMessage:d.receivedMessage),style:c,children:[!s&&!n&&Object(m.jsxs)("p",{className:d.messageText,children:[Object(m.jsxs)("strong",{style:{color:"blue"},children:[t.Sender,": "]}),t.Message]}),!s&&n&&Object(m.jsx)("p",{className:d.messageText,children:t.Message}),s&&!n&&Object(m.jsxs)("p",{className:d.messageText,style:{float:"right"},children:[t.Message,Object(m.jsx)("strong",{style:{color:"blue"},children:" :You "})]}),s&&n&&Object(m.jsx)("p",{className:d.messageText,style:{float:"right"},children:t.Message})]},a)})(t,a)))}),Object(m.jsxs)("div",{className:d.sendContainer,children:[Object(m.jsx)(C.a,{className:d.textArea,label:"Message",fullWidth:!0,value:a,onChange:e=>n(e.target.value),onKeyPress:e=>{"Enter"===e.key&&(j(a),n(""),e.preventDefault())}}),Object(m.jsx)(T.b,{className:d.sendButton,onClick:()=>{j(a),n("")}})]})]})})]})};const E=Object(l.a)((e=>({appBar:{borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black",[e.breakpoints.down("xs")]:{width:"90%"}},image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}})));var U=()=>{const e=E();return Object(m.jsxs)("div",{className:e.wrapper,children:[Object(m.jsx)(i.a,{className:e.appBar,position:"static",color:"inherit",children:Object(m.jsx)(r.a,{variant:"h2",align:"center",children:"Video Chat"})}),Object(m.jsx)(f,{}),Object(m.jsx)(M,{children:Object(m.jsx)(R,{})}),Object(m.jsx)("div",{children:Object(m.jsx)(D,{})})]})};a(131);c.a.render(Object(m.jsx)(u,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.38d251f8.chunk.js.map