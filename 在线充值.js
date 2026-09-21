
var status = 0;

var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 礼包物品 = "#v1302000#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var 成功了 = "#fEffect/BasicEff.img/Fishing/6#"; 
var 推广员反馈百分比 = 0.1; 



	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
	
	if (cm.getPlayer().getCSPoints(1) < 0) {
		cm.sendOk("防止领取失败判断:\r\n#b装备栏至少需要#k#r8个格子#k");
		cm.dispose();
	}else if (cm.getPlayer().getCSPoints(1) < 0) {
		cm.sendOk("防止领取失败判断:\r\n#b消耗栏至少需要#k#r8个格子#k");
		cm.dispose();

	}else {
		var textz = "\r\n您好，欢迎来到冒险岛#r充值奖励中心\r\n(提示:请注意领取的当前账号,返利是根据你填写的账号来的)#k\n\r\n";
		
        
       
		textz += "#d当前未领取充值:" + cm.getPlayer().getCZJF() + "点\r\n";
		
	textz += "#d#L0##r我要领取充值[" + cm.getPlayer().getCZJF() + "点券]\r\n";
		






                cm.sendSimple (textz);  	
	}
	    	
	}else if (status == 1) {
	
	if (selection == 0) {
		var sl = cm.getPlayer().getCZJF();
		var 推广员ID = cm.getBossRank("推广员", 2);
		if(cm.getPlayer().getCZJF()>0){
			cm.gainNX(+cm.getPlayer().getCZJF());
			
			 cm.Gaincharacter7("" + 推广员ID + "", 300, Math.floor(sl * 推广员反馈百分比));
              var 推广员名字 = cm.角色ID取名字(推广员ID);
			cm.小纸条("" + 推广员名字 + "", "[充值返利]:" + cm.getChar().getName() + " 充值 " + sl + " 点券，你获得返利 " + Math.floor(sl  * 推广员反馈百分比) + " 点券。");
			cm.getPlayer().setCZJF(0);
                    
            cm.dispose();
		}else {
			cm.sendOk("你没有充值积分");
			cm.dispose();
		}	   
}else if (selection == 1) {
		if(cm.haveItem(4031250,100)){
			cm.gainItem(4031250,-100);//
			cm.gainItem(4000463,30);
			cm.gainNX(+300000);
			cm.setzb(+100)
            cm.dispose();
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}	 
}else if (selection == 2) {
if(cm.haveItem(4031250,200)){
			cm.gainItem(4031250,-200);//
			cm.gainItem(4000463,50);
			cm.gainItem(4000464,1);
			cm.gainNX(+660000);
			cm.setzb(+200)
            cm.dispose();
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}	
}else if (selection == 3){
if(cm.haveItem(4031250,300)){
			cm.gainItem(4031250,-300);//
			cm.gainItem(4000463,50);
			cm.gainItem(4000464,5);
			cm.gainNX(+1300000);
			cm.gainItem(4000487,2);//
			cm.setzb(+300)
            cm.dispose();
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}		
		
}else if (selection == 4){
	if(cm.haveItem(4031250,500)){
			cm.gainItem(4031250,-500);//
			cm.gainItem(4000463,100);
			cm.gainItem(4310196,100);
			cm.gainItem(4000464,10);
			cm.gainItem(2460005,5);
			cm.gainNX(+2800000);
			cm.gainItem(4000487,15);//
			cm.gainItem(1112793,50,50,50,50,50,50,50,50,50,50,50,50,50,50);//
			cm.setzb(+500)
            cm.dispose();
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}	
}else if (selection == 5){

	if(cm.haveItem(4031250,1000)){
			cm.gainItem(4031250,-1000);//
			cm.gainItem(4000463,100);
			cm.gainItem(4310196,100);
			cm.gainItem(4000464,20);
			cm.gainItem(2460005,10);
			cm.gainNX(+7000000);
			cm.gainItem(4000487,35);//
			cm.setzb(+1000)
            cm.dispose();
		
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}		
}else if (selection == 6){
	
	if(cm.haveItem(4031250,2000)){
			cm.gainItem(4031250,-2000);//
			cm.gainItem(4000463,200);
			cm.gainItem(4310196,200);
			cm.gainItem(4000464,50);
			cm.gainItem(2460005,20);
			cm.gainNX(+15000000);
			cm.gainItem(4000487,75);//
			cm.setzb(+2000)
            cm.dispose();
		
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}	
}else if (selection == 7){
		if(cm.haveItem(4031250,3000)){
			cm.gainItem(4031250,-3000);//
			cm.gainItem(4000463,300);
			cm.gainItem(4310196,300);
			cm.gainItem(4000464,100);
			cm.gainItem(2460005,30);
			cm.gainNX(+28000000);
			cm.gainItem(4000487,100);//
			cm.setzb(+3000)
            cm.dispose();
		
		}else {
			cm.sendOk("物品不足无法领取");
			cm.dispose();
		}	



}
}
}
}
