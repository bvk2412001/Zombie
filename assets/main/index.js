System.register("chunks:///_virtual/Bang.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameplayCtrl.ts"],(function(t){var e,n,i,r,o,a,l,c,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,l=t.Label,c=t.Component},function(t){s=t.GameplayCtrl}],execute:function(){var u,p,f,g,y;o._RF.push({},"c6b56i0YrNDvJK03nPWKWO5","Bang",void 0);var h=a.ccclass,v=a.property;t("Bang",(u=h("Bang"),p=v(l),u((y=e((g=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,i(e,"title",y,r(e)),e.index=0,e}n(e,t);var o=e.prototype;return o.start=function(){2==s.instance.version&&(this.title.fontSize=20)},o.SetTitle=function(t){this.title.string=t.toString()},e}(c)).prototype,"title",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=g))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bullet.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundGameManager.ts"],(function(e){var i,t,n,o,r,l,a,s,c,u,d,p,h;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,a=e.CircleCollider2D,s=e.RigidBody2D,c=e.sp,u=e.Vec2,d=e.UIOpacity,p=e.Component},function(e){h=e.SoundGameManager}],execute:function(){var y,f,g,b,m,v,B,_,C;r._RF.push({},"e75bdcOyglL1bKjb82Kr/4s","Bullet",void 0);var M=l.ccclass,w=l.property;e("Bullet",(y=M("Bullet"),f=w(a),g=w(s),b=w(c.Skeleton),y((B=i((v=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return i=e.call.apply(e,[this].concat(r))||this,n(i,"collider",B,o(i)),n(i,"rigidBody",_,o(i)),n(i,"spines",C,o(i)),i.speed=50,i.isMove=!1,i}t(i,e);var r=i.prototype;return r.start=function(){},r.update=function(e){1==this.isMove&&(this.rigidBody.linearVelocity=new u(1*this.speed,0))},r.Move=function(){this.collider=this.node.getComponent(a),this.rigidBody=this.node.getComponent(s),this.node.getComponent(d).opacity=255,this.collider.enabled=!0,this.rigidBody.enabled=!0,this.isMove=!0},r.PlayNo=function(){this.collider.enabled=!1,this.rigidBody.enabled=!1,this.spines.setAnimation(0,"ca_chua_no",!1),h.instance.PlayQua(3)},r.ListernerAnimationSp=function(){var e=this;this.spines.setCompleteListener((function(i){"ca_chua_no"==i.animation.name&&e.node.destroy()}))},i}(p)).prototype,"collider",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=i(v.prototype,"rigidBody",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=i(v.prototype,"spines",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=v))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameplayCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Lane.ts","./MiniGame.ts","./StarCtrl.ts","./SoundGameManager.ts","./ItemBoard.ts"],(function(exports){var _applyDecoratedDescriptor,_inheritsLoose,_initializerDefineProperty,_assertThisInitialized,cclegacy,_decorator,Node,Label,SpriteFrame,PhysicsSystem2D,Vec3,tween,UIOpacity,randomRangeInt,Animation,screen,Size,Layout,Sprite,Component,Lane,MiniGame,StarCtrl,SoundGameManager,ItemBoard;return{setters:[function(e){_applyDecoratedDescriptor=e.applyDecoratedDescriptor,_inheritsLoose=e.inheritsLoose,_initializerDefineProperty=e.initializerDefineProperty,_assertThisInitialized=e.assertThisInitialized},function(e){cclegacy=e.cclegacy,_decorator=e._decorator,Node=e.Node,Label=e.Label,SpriteFrame=e.SpriteFrame,PhysicsSystem2D=e.PhysicsSystem2D,Vec3=e.Vec3,tween=e.tween,UIOpacity=e.UIOpacity,randomRangeInt=e.randomRangeInt,Animation=e.Animation,screen=e.screen,Size=e.Size,Layout=e.Layout,Sprite=e.Sprite,Component=e.Component},function(e){Lane=e.Lane},function(e){MiniGame=e.MiniGame},function(e){StarCtrl=e.StarCtrl},function(e){SoundGameManager=e.SoundGameManager},function(e){ItemBoard=e.ItemBoard}],execute:function(){var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_class3;cclegacy._RF.push({},"f41a2V8/t9HyoaK787Q6rwO","GameplayCtrl",void 0);var ccclass=_decorator.ccclass,property=_decorator.property,GameplayCtrl=exports("GameplayCtrl",(_dec=ccclass("GameplayCtrl"),_dec2=property(Node),_dec3=property(Node),_dec4=property(Label),_dec5=property(Node),_dec6=property(Node),_dec7=property(SpriteFrame),_dec((_class3=function(_Component){function GameplayCtrl(){for(var e,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return e=_Component.call.apply(_Component,[this].concat(i))||this,_initializerDefineProperty(e,"layerBullet",_descriptor,_assertThisInitialized(e)),_initializerDefineProperty(e,"layerDemo",_descriptor2,_assertThisInitialized(e)),_initializerDefineProperty(e,"time",_descriptor3,_assertThisInitialized(e)),_initializerDefineProperty(e,"board",_descriptor4,_assertThisInitialized(e)),_initializerDefineProperty(e,"ui",_descriptor5,_assertThisInitialized(e)),_initializerDefineProperty(e,"sp",_descriptor6,_assertThisInitialized(e)),e.lanes=[],e.startTime=void 0,e.version=2,e.minigame=null,e.numberSpawmMonster=1,e.numberDung=0,e.numberSai=0,e.countMontenSpawn=0,e.timeSpawn=10,e.endgame=!1,e.timeNumber=60,e.diem=0,e.monsterCurrent=null,e}_inheritsLoose(GameplayCtrl,_Component);var _proto=GameplayCtrl.prototype;return _proto.onLoad=function(){this.startTime=(new Date).getTime(),console.log("[INFO]: Progress: 1"),GameplayCtrl.instance=this,PhysicsSystem2D.instance.fixedTimeStep=1/120},_proto.btnBack=function(){console.log("[ACTION]: BACK")},_proto.start=function(){var e=this;this.SetVersion(),this.lanes=this.node.getComponentsInChildren(Lane),2==this.version&&this.board.setPosition(new Vec3(0,414,0)),this.board.children.forEach((function(t,i){1==e.version?e.scheduleOnce((function(){tween(t.getComponent(UIOpacity)).to(.3,{opacity:255}).start()}),.3*i):t.active=!1})),this.scheduleOnce((function(){e.SetTime(),e.SpawnMonster()}),3),SoundGameManager.instance.playThoai(randomRangeInt(0,2))},_proto.getParamUrl=function(e){var t=window.location.href;return new URL(t).searchParams.get(e)},_proto.SetVersion=function(){switch(this.getParamUrl("input")){case"tl_zombie_boss1":this.minigame=MiniGame.MiniGame1,this.version=1;break;case"tl_zombie_boss2":this.minigame=MiniGame.MiniGame2,this.version=1;break;case"tl_zombie_boss3":this.minigame=MiniGame.MiniGame3,this.version=1;break;case"tl_zombie_boss4":this.minigame=MiniGame.MiniGame4,this.version=2}},_proto.update=function(e){},_proto.SpawnMonster=function(){var e=this;this.countMontenSpawn+=this.numberSpawmMonster;for(var t=0;t<this.numberSpawmMonster;t++)this.scheduleOnce((function(){e.timeSpawn=10,e.lanes[randomRangeInt(0,e.lanes.length)].SpawnMonster()}),2*t)},_proto.SetTime=function(){var e=this;this.SetTimeLbl(this.timeNumber),this.schedule((function(){e.timeNumber--,e.SetTimeLbl(e.timeNumber),e.timeNumber<40&&e.timeNumber>20&&1==e.version&&(e.numberSpawmMonster=2),e.timeNumber<=20&&1==e.version&&(e.numberSpawmMonster=3),6==e.timeNumber&&(SoundGameManager.instance.PlayTime(),e.time.node.parent.getComponent(Animation).play("time")),0==e.timeNumber&&0==e.endgame&&(e.endgame=!0,e.unscheduleAllCallbacks(),e.ShowStar())}),1)},_proto.SetTimeLbl=function(e){this.time.string=e>=10?"00:"+e:"00:0"+e},_proto.getSizeWindow=function(){var e=0,t=0,i=screen.windowSize.width/1366,n=screen.windowSize.height/1024;return i>n?(t=screen.windowSize.width/n,e=1024):(e=screen.windowSize.height/i,t=1366),new Size(t,e)},_proto.AddScore=function(){this.diem++},_proto.ShowStar=function(){this.diem>8?StarCtrl.instance.SetDiem(3):this.diem>4?StarCtrl.instance.SetDiem(2):this.diem>1?StarCtrl.instance.SetDiem(1):StarCtrl.instance.SetDiem(0),StarCtrl.instance.showNode()},_proto.EnabledBoard=function EnabledBoard(){var _this5=this;this.board.getComponent(Layout).spacingX=50,this.board.children.forEach((function(e,t){e.getComponent(UIOpacity).opacity=150,e.active=!1,e.getComponent(ItemBoard).isBlock=!0}));var list=[];this.board.children.forEach((function(node,index){node.getComponent(ItemBoard).index==eval(_this5.monsterCurrent.type.index)&&list.push(node)})),this.addUniqueNodes(this.board.children,list,3),list.forEach((function(e,t){e.active=!0,e.getComponent(Sprite).spriteFrame=_this5.sp,e.getComponent(UIOpacity).opacity=255,e.getComponent(ItemBoard).isBlock=frameElement}))},_proto.addUniqueNodes=function(e,t,i){if(e.length<i)console.error("Không đủ node trong danh sách nguồn để thêm!");else{for(var n=0,r=function(){var i=Math.floor(Math.random()*e.length),r=e[i];t.some((function(e){return e===r}))||t.push(r),n++};t.length<i&&n<e.length;)r();t.length<i&&console.warn("Không thể thêm đủ node không trùng lặp!")}},GameplayCtrl}(Component),_class3.instance=null,_class2=_class3,_descriptor=_applyDecoratedDescriptor(_class2.prototype,"layerBullet",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,"layerDemo",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,"time",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,"board",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor5=_applyDecoratedDescriptor(_class2.prototype,"ui",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor6=_applyDecoratedDescriptor(_class2.prototype,"sp",[_dec7],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_class=_class2))||_class));cclegacy._RF.pop()}}}));

System.register("chunks:///_virtual/ItemBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameplayCtrl.ts","./SoundGameManager.ts"],(function(exports){var _applyDecoratedDescriptor,_inheritsLoose,_initializerDefineProperty,_assertThisInitialized,cclegacy,_decorator,CCInteger,Prefab,Input,instantiate,UITransform,Vec3,UIOpacity,tween,Component,GameplayCtrl,SoundGameManager;return{setters:[function(e){_applyDecoratedDescriptor=e.applyDecoratedDescriptor,_inheritsLoose=e.inheritsLoose,_initializerDefineProperty=e.initializerDefineProperty,_assertThisInitialized=e.assertThisInitialized},function(e){cclegacy=e.cclegacy,_decorator=e._decorator,CCInteger=e.CCInteger,Prefab=e.Prefab,Input=e.Input,instantiate=e.instantiate,UITransform=e.UITransform,Vec3=e.Vec3,UIOpacity=e.UIOpacity,tween=e.tween,Component=e.Component},function(e){GameplayCtrl=e.GameplayCtrl},function(e){SoundGameManager=e.SoundGameManager}],execute:function(){var _dec,_dec2,_dec3,_dec4,_class,_class2,_descriptor,_descriptor2,_descriptor3;cclegacy._RF.push({},"a42dbC+g1ZGfL9MvY9sA5xP","ItemBoard",void 0);var ccclass=_decorator.ccclass,property=_decorator.property,ItemBoard=exports("ItemBoard",(_dec=ccclass("ItemBoard"),_dec2=property(CCInteger),_dec3=property(Prefab),_dec4=property(Prefab),_dec((_class2=function(_Component){function ItemBoard(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=_Component.call.apply(_Component,[this].concat(n))||this,_initializerDefineProperty(e,"index",_descriptor,_assertThisInitialized(e)),_initializerDefineProperty(e,"bullet",_descriptor2,_assertThisInitialized(e)),e.items=null,_initializerDefineProperty(e,"bulletDemo",_descriptor3,_assertThisInitialized(e)),e.isBlock=!1,e.itemMove=null,e}_inheritsLoose(ItemBoard,_Component);var _proto=ItemBoard.prototype;return _proto.start=function(){this.items=this.node.getChildByName("item"),this.node.on(Input.EventType.TOUCH_START,this.touchStart,this),this.node.on(Input.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.on(Input.EventType.TOUCH_END,this.TouchEnd,this),this.node.on(Input.EventType.TOUCH_CANCEL,this.TouchEnd,this)},_proto.touchStart=function(e){if(1!=this.isBlock&&null==this.itemMove){this.itemMove=instantiate(this.bulletDemo),GameplayCtrl.instance.layerDemo.addChild(this.itemMove);var t=e.getUILocation(),n=this.itemMove.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(t.x,t.y,0));this.itemMove.setPosition(n),SoundGameManager.instance.PlayQua(0)}},_proto.TouchMove=function(e){if(1!=this.isBlock){var t=e.getUILocation(),n=this.itemMove.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(t.x,t.y,0));this.itemMove.setPosition(n)}},_proto.TouchEnd=function(){if(1!=this.isBlock&&1!=GameplayCtrl.instance.endgame){for(var e=null,t=0;t<3;t++)1==this.IsNodeInsideTarget(this.itemMove,GameplayCtrl.instance.lanes[t].node)&&(e=GameplayCtrl.instance.lanes[t]);null!=e&&(1==GameplayCtrl.instance.version&&this.Version1(e),2==GameplayCtrl.instance.version&&this.Version2(e)),this.itemMove&&this.itemMove.destroy(),this.itemMove=null}},_proto.Version1=function(e){var t=this,n=0;!function o(){e.monsterNode.length>n?0==e.monsterNode[n].isChoose?e.monsterNode[n].type.index==t.index?(e.monsterNode[n].isChoose=!0,GameplayCtrl.instance.timeSpawn=10,t.SpawnBullet(e)):e.PlaySai():(n++,o()):e.PlaySai()}()},_proto.Version2=function Version2(laneTarget){var _this3=this,index=0,spaw=function spaw(){laneTarget.monsterNode.length>index?0==laneTarget.monsterNode[index].isChoose?eval(laneTarget.monsterNode[index].type.index)==_this3.index?(laneTarget.monsterNode[index].isChoose=!0,GameplayCtrl.instance.timeSpawn=10,_this3.SpawnBullet(laneTarget)):laneTarget.PlaySai():(index++,spaw()):laneTarget.PlaySai()};spaw()},_proto.SpawnBullet=function(e){for(var t=this,n=function(){var n=instantiate(t.bullet);GameplayCtrl.instance.layerBullet.addChild(n),n.setWorldPosition(t.items.worldPosition),n.getComponent(UIOpacity).opacity=0,t.scheduleOnce((function(){n.getComponent(UIOpacity).opacity=150,tween(n).to(.5,{worldPosition:e.phao.worldPosition}).call((function(){SoundGameManager.instance.PlayQua(1),e.PlayFire(n)})).start()}),.2*o)},o=0;o<this.index;o++)n()},_proto.IsNodeInsideTarget=function(e,t){var n=t.getComponent(UITransform),o=e.getWorldPosition(),i=n.convertToNodeSpaceAR(o),r=n.width/2,a=n.height/2;return i.x>=-r&&i.x<=r&&i.y>=-a&&i.y<=a},ItemBoard}(Component),_descriptor=_applyDecoratedDescriptor(_class2.prototype,"index",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,"bullet",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,"bulletDemo",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_class=_class2))||_class));cclegacy._RF.pop()}}}));

System.register("chunks:///_virtual/Lane.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Monster.ts","./GameplayCtrl.ts","./SoundGameManager.ts","./Bullet.ts"],(function(e){var n,t,i,a,o,r,s,l,c,u,p,h,f,m,d,y,b;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,s=e.Node,l=e.sp,c=e.Prefab,u=e.instantiate,p=e.randomRangeInt,h=e.Vec3,f=e.Component},function(e){m=e.Monster},function(e){d=e.GameplayCtrl},function(e){y=e.SoundGameManager},function(e){b=e.Bullet}],execute:function(){var g,w,S,v,A,M,C,N,P,_,z,L,k,G,I,R,x;o._RF.push({},"25c5ewJAfJN5aIKm3+fqAOg","Lane",void 0);var B=r.ccclass,D=r.property;e("Lane",(g=B("Lane"),w=D(s),S=D(l.Skeleton),v=D(l.Skeleton),A=D(s),M=D(c),C=D(s),N=D(s),g((z=n((_=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return n=e.call.apply(e,[this].concat(o))||this,i(n,"phao",z,a(n)),i(n,"chacracer",L,a(n)),i(n,"phaoSke",k,a(n)),i(n,"spawnMonsterNode",G,a(n)),i(n,"monsters",I,a(n)),i(n,"monsterContain",R,a(n)),i(n,"fire",x,a(n)),n.monsterNode=[],n}t(n,e);var o=n.prototype;return o.start=function(){this.PlayGame(),y.instance.PlayEffectCharacter(this.node.getSiblingIndex())},o.SpawnMonster=function(){var e=u(this.monsters[p(0,this.monsters.length)]);this.monsterContain.addChild(e),this.monsterNode.push(e.getComponent(m)),e.setPosition(new h(this.spawnMonsterNode.position.x+120*this.monsterNode.length,this.spawnMonsterNode.position.y,0))},o.RemoveMonser=function(){this.monsterNode.length>0&&this.monsterNode.splice(0,1)},o.PlayGame=function(){this.chacracer.setAnimation(0,"vui_mung",!1),this.chacracer.addAnimation(0,"idle",!0)},o.playSo=function(){this.chacracer.setAnimation(0,"so_hai_2",!1)},o.playLoLang=function(){this.chacracer.setAnimation(0,"lo_lang",!1),this.chacracer.addAnimation(0,"so_hai",!0)},o.PlaySai=function(){d.instance.numberSai<3&&(y.instance.playSai(),d.instance.numberSai++),this.chacracer.setAnimation(0,"lo_lang",!1),this.chacracer.addAnimation(0,"idle",!0)},o.PlayFire=function(e){var n=this;this.scheduleOnce((function(){y.instance.PlayQua(2);var t=u(e);t.position=new h(0,0,0),n.fire.addChild(t),t.getComponent(b).Move(),e.destroy(),n.phaoSke.setAnimation(0,"fire",!1),n.phaoSke.addAnimation(0,"idle",!0)}),.5)},n}(f)).prototype,"phao",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(_.prototype,"chacracer",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(_.prototype,"phaoSke",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=n(_.prototype,"spawnMonsterNode",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=n(_.prototype,"monsters",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=n(_.prototype,"monsterContain",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=n(_.prototype,"fire",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=_))||P));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SoundManager.ts","./StarCtrl.ts","./Bang.ts","./Bullet.ts","./GameplayCtrl.ts","./ItemBoard.ts","./Lane.ts","./MiniGame.ts","./Monster.ts","./SoundGameManager.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MiniGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,n,d,x;return{setters:[function(i){e=i.inheritsLoose},function(i){n=i.cclegacy,d=i._decorator,x=i.Component}],execute:function(){var t,r;n._RF.push({},"31c64zt3S5KxoCzW1+HWCbr","MiniGame",void 0);var o=d.ccclass;d.property,i("MiniGame",o("MiniGame")(((r=function(i){function n(){return i.apply(this,arguments)||this}return e(n,i),n}(x)).MiniGame1=[{index:1},{index:2},{index:3},{index:4},{index:5}],r.MiniGame2=[{index:6},{index:7},{index:8},{index:9},{index:10}],r.MiniGame3=[{index:3},{index:7},{index:5},{index:9},{index:6}],r.MiniGame4=[{index:"1+3"},{index:"2+3"},{index:"1+5"},{index:"2+5"},{index:"1+7"},{index:"8+1"},{index:"4+3"},{index:"3+5"},{index:"5+4"},{index:"6+2"},{index:"4+2"},{index:"3+2"}],t=r))||t);n._RF.pop()}}}));

System.register("chunks:///_virtual/Monster.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bang.ts","./GameplayCtrl.ts","./Lane.ts","./SoundGameManager.ts","./Bullet.ts"],(function(exports){var _applyDecoratedDescriptor,_inheritsLoose,_initializerDefineProperty,_assertThisInitialized,cclegacy,_decorator,BoxCollider2D,RigidBody2D,sp,CCInteger,Contact2DType,randomRangeInt,Vec2,Component,Bang,GameplayCtrl,Lane,SoundGameManager,Bullet;return{setters:[function(e){_applyDecoratedDescriptor=e.applyDecoratedDescriptor,_inheritsLoose=e.inheritsLoose,_initializerDefineProperty=e.initializerDefineProperty,_assertThisInitialized=e.assertThisInitialized},function(e){cclegacy=e.cclegacy,_decorator=e._decorator,BoxCollider2D=e.BoxCollider2D,RigidBody2D=e.RigidBody2D,sp=e.sp,CCInteger=e.CCInteger,Contact2DType=e.Contact2DType,randomRangeInt=e.randomRangeInt,Vec2=e.Vec2,Component=e.Component},function(e){Bang=e.Bang},function(e){GameplayCtrl=e.GameplayCtrl},function(e){Lane=e.Lane},function(e){SoundGameManager=e.SoundGameManager},function(e){Bullet=e.Bullet}],execute:function(){var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5;cclegacy._RF.push({},"b9d0fAKM1xOHoqV14OyzBDU","Monster",void 0);var ccclass=_decorator.ccclass,property=_decorator.property,Monster=exports("Monster",(_dec=ccclass("Monster"),_dec2=property(BoxCollider2D),_dec3=property(RigidBody2D),_dec4=property(Bang),_dec5=property(sp.Skeleton),_dec6=property(CCInteger),_dec((_class2=function(_Component){function Monster(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e=_Component.call.apply(_Component,[this].concat(n))||this,_initializerDefineProperty(e,"collider",_descriptor,_assertThisInitialized(e)),_initializerDefineProperty(e,"rigidBody",_descriptor2,_assertThisInitialized(e)),_initializerDefineProperty(e,"bang",_descriptor3,_assertThisInitialized(e)),_initializerDefineProperty(e,"monterSkeleton",_descriptor4,_assertThisInitialized(e)),_initializerDefineProperty(e,"numberMonster",_descriptor5,_assertThisInitialized(e)),e.speed=-1,e.index=0,e.index1=0,e.type=null,e.isChoose=!1,e.countSpawn=0,e.isSpawn=!1,e.isdownSpeed=!1,e.callbackDown=null,e.isCuoi=!1,e.countV2=0,e}_inheritsLoose(Monster,_Component);var _proto=Monster.prototype;return _proto.start=function start(){this.monterSkeleton=this.node.getComponentInChildren(sp.Skeleton),this.bang=this.node.getComponentInChildren(Bang),this.collider=this.node.getComponent(BoxCollider2D),this.rigidBody=this.node.getComponent(RigidBody2D),this.collider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this),this.type=GameplayCtrl.instance.minigame[randomRangeInt(0,GameplayCtrl.instance.minigame.length)],this.bang.SetTitle(this.type.index),this.index=eval(this.type.index),this.index1=this.type.index,this.speed=-(2*Math.random()+3),this.PlayRun(),this.ListernerAnimationSp(),2==GameplayCtrl.instance.version&&(GameplayCtrl.instance.monsterCurrent=this,GameplayCtrl.instance.EnabledBoard())},_proto.update=function(e){this.rigidBody.linearVelocity=new Vec2(1*this.speed,0)},_proto.onBeginContact=function onBeginContact(selfCollider,otherCollider,contact){var _this2=this;this.scheduleOnce((function(){1==otherCollider.tag&&(0==_this2.isSpawn&&(_this2.isSpawn=!0,GameplayCtrl.instance.countMontenSpawn--,0==GameplayCtrl.instance.countMontenSpawn&&GameplayCtrl.instance.SpawnMonster()),_this2.index--,_this2.callbackDown&&(_this2.speed=2*_this2.speed,_this2.unschedule(_this2.callbackDown)),_this2.callbackDown=function(){_this2.speed=2*_this2.speed},_this2.speed=_this2.speed/2,_this2.scheduleOnce(_this2.callbackDown,1),1==GameplayCtrl.instance.version&&_this2.bang.SetTitle(_this2.index),otherCollider.node.getComponent(Bullet).PlayNo(),0==_this2.index&&(_this2.collider.enabled=!1,_this2.rigidBody.enabled=!1,_this2.scheduleOnce((function(){1==GameplayCtrl.instance.version&&SoundGameManager.instance.playSo(_this2.type.index),2==GameplayCtrl.instance.version&&(SoundGameManager.instance.playSo(eval(_this2.type.index)),_this2.bang.SetTitle(_this2.type.index+"="+eval(_this2.type.index))),_this2.node.parent.parent.getComponent(Lane).PlayGame(),GameplayCtrl.instance.AddScore(),_this2.node.parent.parent.getComponent(Lane).RemoveMonser(),GameplayCtrl.instance.timeSpawn=10,_this2.PlayDie(),setTimeout((function(){GameplayCtrl.instance.numberDung<3&&(SoundGameManager.instance.playDung(),GameplayCtrl.instance.numberDung++)}),500)}),.5))),10==otherCollider.tag&&(_this2.PlayAttack(),_this2.node.parent.parent.getComponent(Lane).playSo()),11==otherCollider.tag&&0==_this2.isCuoi&&(_this2.isCuoi=!0,SoundGameManager.instance.PlayEffectZombie(_this2.numberMonster)),9==otherCollider.tag&&_this2.node.parent.parent.getComponent(Lane).playLoLang()}),.01)},_proto.PlayRun=function(){this.monterSkeleton.setAnimation(0,"Run",!0),this.monterSkeleton.setAnimation(0,"run",!0)},_proto.PlayDie=function(){SoundGameManager.instance.PlayEffectZombie(this.numberMonster+4),this.collider.enabled=!1,this.rigidBody.enabled=!1,this.monterSkeleton.setAnimation(0,"Die",!1)},_proto.PlayAttack=function(){SoundGameManager.instance.PlayEffectZombie(this.numberMonster),this.monterSkeleton.setAnimation(0,"Attack",!1)},_proto.ListernerAnimationSp=function(){var e=this;this.monterSkeleton.setCompleteListener((function(t){"Die"==t.animation.name&&(SoundGameManager.instance.PlayEffectCharacter(e.node.parent.parent.getSiblingIndex()),e.node.destroy()),"Attack"==t.animation.name&&0==GameplayCtrl.instance.endgame&&(GameplayCtrl.instance.endgame=!0,GameplayCtrl.instance.ShowStar())}))},Monster}(Component),_descriptor=_applyDecoratedDescriptor(_class2.prototype,"collider",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,"rigidBody",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,"bang",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,"monterSkeleton",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor5=_applyDecoratedDescriptor(_class2.prototype,"numberMonster",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_class=_class2))||_class));cclegacy._RF.pop()}}}));

System.register("chunks:///_virtual/SoundGameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,o,n,a,u,s,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,u=e.AudioSource,s=e.AudioClip,c=e.randomRangeInt,l=e.Component}],execute:function(){var p,f,h,y,b,d,g,m,z,S,w,v,M,C,P,L,O,Q,D,G,R,_,A,E;n._RF.push({},"f0007VrQVREzLVcpLJHyaHy","SoundGameManager",void 0);var H=a.ccclass,T=a.property;e("SoundGameManager",(p=H("SoundGameManager"),f=T(u),h=T(u),y=T(s),b=T(s),d=T(s),g=T(s),m=T(s),z=T(s),S=T(s),w=T(s),p(((E=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,r(t,"source",C,o(t)),r(t,"source1",P,o(t)),r(t,"dung",L,o(t)),r(t,"sai",O,o(t)),r(t,"so",Q,o(t)),r(t,"thoai",D,o(t)),r(t,"effectCharacter",G,o(t)),r(t,"soundMonster",R,o(t)),r(t,"soundQua",_,o(t)),r(t,"time",A,o(t)),t}i(t,e);var n=t.prototype;return n.onLoad=function(){t.instance=this},n.start=function(){},n.playThoai=function(e){this.source.stop(),this.source.clip=this.thoai[e],this.source.loop=!1,this.source.play()},n.playDung=function(){this.source.stop(),this.source.clip=this.dung[c(0,3)],this.source.loop=!1,this.source.play()},n.playSai=function(){this.source.stop(),this.source.clip=this.sai[c(0,2)],this.source.loop=!1,this.source.play()},n.playSo=function(e){this.source.playOneShot(this.so[e-1],1)},n.PlayEffectCharacter=function(e){this.source.playOneShot(this.effectCharacter[e],.5)},n.PlayEffectZombie=function(e){this.source.playOneShot(this.soundMonster[e],.5)},n.PlayQua=function(e){this.source.playOneShot(this.soundQua[e],.5)},n.PlayTime=function(){this.source.playOneShot(this.time,.5)},t}(l)).instance=void 0,C=t((M=E).prototype,"source",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=t(M.prototype,"source1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(M.prototype,"dung",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=t(M.prototype,"sai",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Q=t(M.prototype,"so",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=t(M.prototype,"thoai",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=t(M.prototype,"effectCharacter",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=t(M.prototype,"soundMonster",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=t(M.prototype,"soundQua",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=t(M.prototype,"time",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=M))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/SoundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,r,o,a,u,l,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){o=n.cclegacy,a=n._decorator,u=n.AudioSource,l=n.AudioClip,c=n.Component}],execute:function(){var s,p,d,f,g,y,h,m,b,S;o._RF.push({},"67f65S9g4NP37ZdgmmLBncW","SoundManager",void 0);var v=a.ccclass,_=a.property;n("SoundManager",(s=v("SoundManager"),p=_(u),d=_(l),f=_(l),s(((S=function(n){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o))||this,t(e,"audio",h,r(e)),t(e,"sao",m,r(e)),t(e,"Endgame",b,r(e)),e}i(e,n);var o=e.prototype;return o.__preload=function(){e.instance=this},o.playSao=function(){this.audio.playOneShot(this.sao,.5)},o.playEndgame=function(){this.audio.playOneShot(this.Endgame,.5)},e}(c)).instance=void 0,h=e((y=S).prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(y.prototype,"sao",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"Endgame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StarCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundManager.ts","./GameplayCtrl.ts"],(function(t){var n,e,i,o,a,r,l,c,s,u,d,p,f,h;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,l=t.Node,c=t.tween,s=t.Vec3,u=t.director,d=t.Animation,p=t.Component},function(t){f=t.SoundManager},function(t){h=t.GameplayCtrl}],execute:function(){var m,g,b,S,y,w,C,v,T,A;a._RF.push({},"66c26VKi6dFdZP42VJLPg7G","StarCtrl",void 0);var G=r.ccclass,N=r.property;t("StarCtrl",(m=G("StarCtrl"),g=N(l),b=N(l),S=N(l),m(((A=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return n=t.call.apply(t,[this].concat(a))||this,i(n,"nodetinhsao",C,o(n)),i(n,"board",v,o(n)),i(n,"stars",T,o(n)),n.diem=0,n}e(n,t);var a=n.prototype;return a.__preload=function(){null==n.instance&&(n.instance=this)},a.start=function(){},a.showNode=function(){var t=this;console.log("[RESULT]: "+(((new Date).getTime()-h.instance.startTime)/1e3).toFixed(2)+" - "+this.diem),this.node.setSiblingIndex(99),f.instance.playEndgame(),this.nodetinhsao.active=!0,c(this.nodetinhsao).to(.5,{scale:new s(.4,.4,1)}).call((function(){c(t.board).to(.5,{scale:new s(1,1,1)}).call((function(){t.ShowStars()})).start()})).start()},a.btnReset=function(){f.instance=null,n.instance=null,u.loadScene("Gameplay")},a.btnBackGame=function(){console.log("[ACTION]: BACK")},a.btnNextGame=function(){console.log("[ACTION]: NEXTGAME")},a.btnListgame=function(){console.log("[ACTION]: SHOWLISTGAME")},a.ShowStars=function(){var t=this;this.stars.forEach((function(n,e){e<t.diem&&t.scheduleOnce((function(){c(n).to(.2,{scale:new s(1,1,1)}).call((function(){n.getComponent(d).play("scale"),f.instance.playSao()})).start()}),.2*e)}))},a.SetDiem=function(t){this.diem=t},n}(p)).instance=void 0,C=n((w=A).prototype,"nodetinhsao",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(w.prototype,"board",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=n(w.prototype,"stars",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=w))||y));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});