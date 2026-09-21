var rn = "\r\n\r\n"; // 换行
var hwx =  "#fEffect/CharacterEff/1032063/0/0#"; //长音符
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var hwx =  "#fEffect/CharacterEff/1032063/0/0#"; //长音符
var 金币图标 = "#fUI/UIWindow.img/QuestIcon/7/0#";
var itemSet = Array(
Array(4031138,4032398,1,0,0,4001126,0)                   //第一个兑换物品 2代表材料1 3代表数量 4代表点卷 5金币 6物品2 7数量


);
var status = 0;
var selectedItem;
var item;
var req;
var req1;
var cost;
var qty;
var co;
var co1;
var dj;
var jb;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if (mode == -1){
        cm.dispose();
        return;
    } else if (mode == 0) {
    	cm.dispose();
    	return;
    }
    if (status == 0) {
            var add ="             "+大黄星+""+小烟花 +"#d【出席图章兑换】#k"+小烟花 +""+大黄星+"\r\n\r\n";
            for (var i = 0; i < itemSet.length; i++) {	
                    add += "\r\n\t\t\t#L" + i + "##i " + itemSet[i][0] + "##z";
                    add += itemSet[i][0]+"#"+" ";
                    add += "#l#k\r\n";
					 
                };

            cm.sendSimple(add);
    } else if (status == 1) {

            selectedItem = selection;
            item = itemSet[selectedItem][0];
            req = itemSet[selectedItem][1];
			req1 = itemSet[selectedItem][5];
            co = itemSet[selectedItem][2];
			co1 = itemSet[selectedItem][6];
			jb = itemSet[selectedItem][4];
			dj = itemSet[selectedItem][3];
            var bdd ="";
            bdd += "\r\n\t\t\t\t#i" +item+"# "+ "出席图章兑换点卷\n\r\n\r\n\r\n\r";
            bdd += "    需要材料:\n\r#\t#i " + req + "#\r\n\r\n";
           // bdd += "单个物品需要材料个数:#r " + co + "个\r\n\r\n\r\n";
            bdd += "请输入兑换个数  #r比例为：1:200\r\n";
            cm.sendGetNumber(bdd,1,1,100)
            //cm.sendYesNo(bdd);
    } else if (status == 2) {
	qty = (selection > 0) ? selection : (selection < 0 ? -selection : 1);
	cost=qty;   //花费为物品单价*输入的数量
          if (cm.getMeso() < cost*jb || cm.getPlayer().getCSPoints(1) < cost*dj) {
            cm.sendOk("#b您的点卷或金币不足哦");
	        cm.dispose();
	       } else if (!cm.haveItem(req1, cost*co1)) {
           cm.sendOk("#b您的材料#v"+req1+"#不足哦");
            cm.dispose();
            return;
			 } else if (!cm.haveItem(req, cost*co)) {
           cm.sendOk("#b您的材料#v"+req+"#不足哦");
            cm.dispose();
            return;
			
            } else {
			         
				        cm.gainNX(cost * 200);
            
            	        
            	       cm.gainItem(req,-cost);
                        cm.sendOk("#b购买成功");
	        cm.dispose();
            }
            cm.dispose();
    }
}
