(this["webpackJsonpshopping-cart-app"]=this["webpackJsonpshopping-cart-app"]||[]).push([[0],{27:function(t,e,r){},28:function(t,e,r){},48:function(t,e,r){"use strict";r.r(e);var n=r(1),i=r.n(n),a=r(20),c=r.n(a),o=(r(27),r(6)),s=r(22),u=(r(28),r(2)),l=r(3),b=r(5),p=r(4),d=r(0),j={button:{backgroundColor:"#0A283E",color:"#fff",padding:"15px 20px",border:"none",cursor:"pointer",borderRadius:"5px"}},h=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)("button",Object(o.a)({style:j.button},this.props))}}]),r}(n.Component),O=h,f={product:{border:"1px solid #eee",boxShadow:"0 5px 5px rgb(0, 0, 0, 0.1)",width:"400px",padding:"2rem 2rem",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",marginTop:"2rem"},img:{width:"250px",height:"250px",marginBottom:"1.4rem"}},x=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this.props,e=t.product,r=t.addToCart;return Object(d.jsxs)("div",{style:f.product,children:[Object(d.jsx)("img",{style:f.img,alt:e.title,src:e.image}),Object(d.jsx)("h3",{children:e.title}),Object(d.jsxs)("p",{children:["$ ",e.price]}),Object(d.jsx)(O,{onClick:function(){return r(e)},children:"Agregar al carro"})]})}}]),r}(n.Component),g=x,y={products:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",gap:"2rem",padding:"0 4rem"},loading:{marginTop:"30%",color:"#0a283E"}},v=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this.props,e=t.products,r=t.addToCart,n=t.isLoading;return Object(d.jsx)("div",{style:y.products,children:n?Object(d.jsx)("div",{style:y.loading,children:Object(d.jsx)("h2",{children:"Cargando Productos..."})}):e.map((function(t){return Object(d.jsx)(g,{addToCart:r,product:t},t.id)}))})}}]),r}(n.Component),m=v,C={layout:{backgroundColor:"#fff",color:"#0a283E",paddingTop:"100px"},container:{}},k=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{style:C.layout,children:Object(d.jsx)("div",{style:C.container,children:this.props.children})})}}]),r}(n.Component),w=k,T={logo:{fontWeight:"700",fontSize:"2rem",marginLeft:"2.5rem"}},S=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(d.jsx)("div",{style:T.logo,children:"Shop"})}}]),r}(n.Component),L=S,V={bubbleAlert:{backgroundColor:"#E9725A",borderRadius:"15px",color:"#fff",padding:"2px 10px",fontSize:"0.9rem",width:"20px"}},A=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"getNumber",value:function(t){return t?t>9?"9+":t:""}},{key:"render",value:function(){var t=this.props.value;return Object(d.jsx)("span",{style:V.bubbleAlert,children:this.getNumber(t)})}}]),r}(n.Component),E=A,R={cart:{backgroundColor:"#fff",position:"absolute",marginTop:30,boxShadow:"1px 5px 5px rgb(0,0,0,0.3)",borderRadius:"5px",width:"300px",right:50},ul:{margin:0,padding:0},li:{listStyleType:"none",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"25px 20px",borderBottom:"solid 1px #aaa",gap:"2rem"},p:{width:"500px"}},q=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this.props.cart;return Object(d.jsx)("div",{style:R.cart,children:Object(d.jsx)("ul",{style:R.ul,children:t.map((function(t){return Object(d.jsxs)("li",{style:R.li,children:[Object(d.jsx)("img",{alt:t.title,src:t.image,width:"50",height:"32"}),Object(d.jsx)("p",{style:R.p,children:t.title}),Object(d.jsx)("span",{children:t.quantity})]},t.title)}))})})}}]),r}(n.Component),I=q,B={cart:{backgroundColor:"#359A2C",color:"#fff",border:"none",padding:"15px",borderRadius:"15px",cursor:"pointer",marginRight:"2.5rem"},bubble:{position:"relative",left:12,top:20}},F=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cart,r=t.isCartVisible,n=t.showCart,i=e.reduce((function(t,e){return t+e.quantity}),0);return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{style:B.bubble,children:0!==i?Object(d.jsx)(E,{value:i}):null}),Object(d.jsx)("button",{style:B.cart,onClick:n,children:"Carro"}),r?Object(d.jsx)(I,{cart:e}):null]})}}]),r}(n.Component),D=F,P={navbar:{display:"flex",alignItems:"center",width:"100vw",height:"100px",backgroundColor:"#fff",justifyContent:"space-between",position:"fixed",boxShadow:"0 2px 3px rgb(0,0,0,0.1)"}},z=function(t){Object(b.a)(r,t);var e=Object(p.a)(r);function r(){return Object(u.a)(this,r),e.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cart,r=t.isCartVisible,n=t.showCart;return Object(d.jsxs)("nav",{style:P.navbar,children:[Object(d.jsx)(L,{}),Object(d.jsx)(D,{cart:e,isCartVisible:r,showCart:n})]})}}]),r}(n.Component),J=z,N=r(21),W=r.n(N),M=function(){var t=Object(n.useState)({products:[],cart:[],isCartVisible:!1,isLoading:!0}),e=Object(s.a)(t,2),r=e[0],i=e[1];Object(n.useEffect)((function(){W.a.get("https://fakestoreapi.com/products").then((function(t){return i(Object(o.a)(Object(o.a)({},r),{},{isLoading:!1,products:t.data}))}))}),[]);var a=r.isCartVisible;return Object(d.jsxs)("div",{children:[Object(d.jsx)(J,{cart:r.cart,isCartVisible:a,showCart:function(){r.cart.length&&i(Object(o.a)(Object(o.a)({},r),{},{isCartVisible:!r.isCartVisible}))}}),Object(d.jsx)(w,{children:Object(d.jsx)(m,{products:r.products,addToCart:function(t){var e=r.cart;if(e.find((function(e){return e.title===t.title}))){var n=e.map((function(e){return e.title===t.title?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e}));return i(Object(o.a)(Object(o.a)({},r),{},{cart:n}))}return console.log(t),i(Object(o.a)(Object(o.a)({},r),{},{cart:r.cart.concat(Object(o.a)(Object(o.a)({},t),{},{quantity:1}))}))},isLoading:r.isLoading})})]})},$=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,49)).then((function(e){var r=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;r(t),n(t),i(t),a(t),c(t)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),$()}},[[48,1,2]]]);
//# sourceMappingURL=main.a6c22278.chunk.js.map