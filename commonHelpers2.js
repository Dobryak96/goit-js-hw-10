import{i as l}from"./assets/icon-error-e85ff60c.js";/* empty css                      */import{i as s}from"./assets/vendor-54069c3e.js";const n="/goit-js-hw-10/assets/icon-success-286069d5.svg",a="/goit-js-hw-10/assets/icon-attention-f39d3c79.svg",c=document.querySelector(".form");c.addEventListener("submit",m);function m(t){t.preventDefault();const o=t.target.elements.delay.value,r=t.target.elements.state.value;if(!o||!r){s.warning({title:"Attention!",titleSize:"16",titleColor:"red",message:"You need to set Delay or State!",messageSize:"16",messageColor:"red",backgroundColor:"yellow",position:"topRight",iconUrl:a}),console.log("⚠️ Attention: Field delay or state is empty!");return}new Promise(function(e,i){setTimeout(()=>{r==="fulfilled"?e(o):i(o)},o)}).then(e=>{s.success({maxWidth:"1000",title:"OK",titleSize:"16",titleColor:"#fff",message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconUrl:n,iconColor:"#fff"}),console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{s.error({title:"Error!",titleSize:"16",titleColor:"#fff",message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:l,iconColor:"#fff"}),console.log(`❌ Rejected promise in ${e}ms`)})}
//# sourceMappingURL=commonHelpers2.js.map
