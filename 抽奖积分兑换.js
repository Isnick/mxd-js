
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
var selectionData = [0, 0]
var PP;
/**
 * 可兑物品列表
 * @type {*[]}
 */
 var itemList = [
    [2049116,50],
	[2340000,50],
	[2070012,600],
	[1032234,1000],
	[1113057,1000],
	[1003843,3000],
		[1012171,3000],




	[1002186,5],
	[1003271,5],
	[1003276,5],
	[1003900,5],
	[1012057,5],
	[1012104,5],
	[1012289,5],
	[1022048,5],
	[1022079,5],
	[1032024,5],
	[1072153,5],
	[1082102,5],
	[1092056,5],
	[1102039,5],
	[1702099,5],
	[1702190,5],
	[1702224,5],
	[1702585,5]
	
]
var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode === -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode === 0) {
           
            cm.dispose();
            return;
        }

        status = status + (mode === 1 ? 1 : -1);

        if (status === 0) {
            showMenu();
        } else if (status === 1) {
				seletionData=itemList[selection];
				var text = "#d确定要使用【"+itemList[selection][1]+"】积分兑换#v"+itemList[selection][0]+"##z"+itemList[selection][0]+"##l吗，在这之前请确认背包是否有足够空间。#k\r\n";
				cm.sendYesNo("" + text + "");
        } else if (status === 2) {
			
            if (cm.getInventory(2).isFull()||cm.getInventory(1).isFull(1)){
				cm.sendOk("请保证背包#b消耗栏#k,#b装备栏#k至少有 #r1 #k个位置");
				cm.dispose();
				return;
			}
			if (cm.getBossRankCount("随机奖池抽奖") >= seletionData[1]) {
				cm.gainItem(seletionData[0],1);
				cm.setBossRankCount("随机奖池抽奖", -seletionData[1]);
				cm.sendOk("恭喜兑换成功，获得 #v"+seletionData[0]+"##z"+seletionData[0]+"##r * 1");
				cm.dispose();
			} else {
				cm.sendOk("抽奖积分不足，无法兑换。");
				cm.dispose();
			}
        }
    }
}
/**
 * 显示菜单
 */
 function showMenu() {
 
    var text ="             "+大黄星+""+小烟花 +"#d【抽奖积分兑换】#k"+小烟花 +""+大黄星+"\r\n\r\n";

	text+="当前有:"+cm.getBossRankCount("随机奖池抽奖")+" 点抽奖积分"+rn;
    for (var i = 0; i < itemList.length; i++) {
        text += "\t#L"+i+"##d"+itemList[i][1]+"积分兑换#v"+itemList[i][0]+"##z"+itemList[i][0]+"##l\r\n";
    }
    cm.sendNext("" + text + "");
}
