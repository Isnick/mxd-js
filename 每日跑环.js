var FY0 = "┏━━━━━━━━━━━┓";
var FY1 = "┃       - 枫叶 -       ┃";
var FY2 = "┃ 脚本仿制  　定制脚本 ┃";
var FY3 = "┃ 技术支持 　 游戏顾问 ┃";
var FY4 = "┃ ＷＺ添加　  地图制作 ┃";
var FY5 = "┣━━━━━━━━━━━┫";
var FY6 = "┃ 唯一QQ:782772124    ┃";
var FY7 = "┗━━━━━━━━━━━┛";

var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var DatabaseConnection = Java.type('database.DatabaseConnection');

var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
var itemList = Array(//Array(id,Num)
Array(4000000,100),Array(4000001,100),Array(4000002,100),//蓝蜗牛壳，花蘑菇盖，蝴蝶结
Array(4000003,100),Array(4000004,100),Array(4000005,100),//树枝，绿叶球，叶子
Array(4000006,100),Array(4000007,100),Array(4000008,100),//三眼章鱼的触手，火独眼兽之尾，道符
Array(4000009,100),Array(4000010,100),Array(4000011,100),//蓝蘑菇盖，绿水灵珠，蘑菇芽孢 
Array(4000012,100),Array(4000013,100),Array(4000014,100),//绿蘑菇盖，风独眼兽之尾，龙的头骨
Array(4000015,100),Array(4000016,100),Array(4000018,100),//刺蘑菇盖，红蜗牛壳，木块
Array(4000019,100),Array(4000026,100),Array(4000029,100),//绿蜗牛壳，猴子娃娃，香蕉
Array(4000031,100),Array(4000032,100),Array(4000034,100),//诅咒娃娃，鳄鱼皮，蛇皮
Array(4000035,100),Array(4000036,100),Array(4000037,100),//桌布，奇妙的药，蓝水灵大水珠
Array(4000039,100),Array(4000042,100),Array(4000043,100),//铁甲猪蹄，蝙蝠翅膀，红螃蟹钳
Array(4000044,100),Array(4000045,100),Array(4000048,100),//青螃蟹钳，乌龟壳，小白雪人皮

Array(4000051,100),Array(4000052,100),Array(4000053,25),//野狼之尾，白狼之尾，狼人的脚趾甲
Array(4000054,25),Array(4000059,100),Array(4000060,100),//白狼人的脚趾甲，星光精灵的星块，月光精灵的星块
Array(4000061,100),Array(4000069,100),Array(4000074,100),//日光精灵的日块，僵尸牙齿，黑色飞狮尾

Array(4000070,100),Array(4000071,100),Array(4000072,100),//红独角狮尾，黄独角狮尾，蓝独角狮尾
Array(4000101,100),Array(4000102,100),Array(4000106,100),//黄色玩具圈，蓝色玩具圈，玩具熊猫的棉花团
Array(4000107,100),Array(4000108,100),Array(4000115,100),//玩具熊猫的黄色丝带，熊猫娃娃，齿轮
Array(4000128,100),Array(4000129,100),Array(4000143,100),//黄小丑的帽子，红小丑的小珠，僵尸娃娃
Array(4000161,100),Array(4000162,100),Array(4000180,100),//海马的尾巴，华丽的鳞皮，鲨鱼假牙
Array(4000181,100),Array(4000182,100),Array(4000183,100),//冷冻鱼翅，石灰粉瓶，墨汁瓶
Array(4000187,100),Array(4000188,100),Array(4000189,100),//鸡爪，鸭蛋，羊毛
Array(4000190,100),Array(4000191,100),Array(4000192,100),//山羊角，黑山羊角，鼻环
Array(4000196,100),Array(4000197,100),Array(4000204,100),//木板，石板，骷髅犬骨头
Array(4000205,100),Array(4000206,100),Array(4000207,100),//绷带，肋骨，骨盆
Array(4000292,100),Array(4000293,100),Array(4000294,100),//山参汤，桔梗，百年桔梗
Array(4000329,100),Array(4000330,100),Array(4000331,100),//仙人球，仙人掌的刺，仙人掌的花
Array(4020005,100),Array(4020007,100),Array(4020008,100),//蓝宝石母矿，钻石母矿，黑水晶母矿
Array(4020004,10),Array(4004000,10),Array(4004001,10),//蛋白石母矿，力量母矿，智慧母矿
Array(4004002,10),Array(4004003,10),Array(4004004,10),//敏捷母矿，幸运母矿，黑暗水晶母矿
Array(4010000,10),Array(4010001,10),Array(4010002,10),//青铜母矿，钢铁母矿，锂矿石母矿
Array(4010003,10),Array(4010004,10),Array(4010005,10),//朱矿石母矿，银的母矿，紫矿石母矿
Array(4010006,10),Array(4010007,10),Array(4020000,10),//黄金母矿，锂母矿，石榴石母矿
Array(4020001,10),Array(4020002,10),Array(4020003,10)//紫水晶母矿，海蓝石母矿，祖母绿母矿

);
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
var giftList = Array(//Array(id,Num)
	Array(2022468,3)//
);
var finalGiftList = Array(//Array(id,Num)
	Array(2022468,5)//
);
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        	id = cm.getPlayer().getId();
        	ringnum = cm.getBossLog("paoshang");
			
        	var strlen = "你觉得你可以满足我的需求吗？#e#r【注：任务所需材料均为随机，所以一切听天由命啦！第5环起开始有奖励 20环奖励国庆币 祝福 元宝 双倍金钱buff】#l\r\n\r\n";
        	if(ringnum == 0)
            	strlen += "#r玩法详情： #b每次您都会接收到一个任务，您需要将我需要的材料拿来，满足我的条件后，我会给你一个巨大的奖品哦，每天我都会提供给你20次任务，做完就能领取巨额大奖！";
            else if (ringnum <= 20){
            	strlen += "您已经完成我这次的委托了么？";
            }else{
				strlen = "真厉害！您已经完成了当日所有跑商！";
				cm.sendOk(strlen);
				cm.dispose();
				return;
			}
            cm.sendNext(strlen);
        }else if(status == 1){
			if(cm.getInventory(4).isFull()){
    		cm.sendOk("#b请保证其他栏位至少有2个空格,否则无法继续.");
    		cm.dispose();
    		return;
			}
			if (cm.getInventory(2).isFull()){
            cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法继续.");
            cm.dispose();
            return;
			}
        	itemIndex = getOneTimeLog(id);
        	if(ringnum > 0 && ringnum < 20){//每轮奖励
        		if(cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])){
        			cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
        			cm.getPlayer().gainMeso(50000, true);
        			if(ringnum%5 == 0){
        				cm.gainItem(4000463,1);//国庆纪念币
						cm.gainItem(3600001,1);//跑环币
						cm.gainItem(4000313,1);//黄金枫叶
        				cm.gainItem(4001126,20);//枫叶
        			}
        			cm.sendNext("恭喜您完成了这次跑商，请继续！");
        		}else{
        		    cm.sendOk("第"+ringnum+"环，对不起，您还没有拿来我需要的材料，加油哦！\r\n\r\n这次您需要帮我搜集"+itemList[itemIndex][1]+"个#v"+itemList[itemIndex][0]+"#\r\n期待您的好消息");
					cm.dispose();
					return;
        		}
        	}else if(ringnum == 20){//最终奖励
        		if(cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])){
        			cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
        			cm.getPlayer().gainMeso(100000, true);
        			cm.gainItem(4000463,30);//国庆纪念币
					cm.gainItem(2340000,1);//祝福卷
					//cm.gainItem(4031217,1);//黄金钥匙
					cm.gainItem(4001126,200);//枫叶
					cm.gainItem(3600001,5);//跑环币
					//cm.setmoneyb(10);//奖励元宝
					//cm.gainItem(4310038, 5);//boss召唤币
					
					cm.gainItem(4000038, 2);//金杯
        			//cm.gainItem(4000463,30);//中介币
					//cm.gainItem(2022529,1);//金达莱花语 +100%双倍金币掉落
					//cm.gainItem(2022530,1);//迎春花花语 +100%双倍爆率
					cm.gainItem(2022112,5);//小魔女
					cm.setBossLog("paoshang");
        			cm.sendNext("恭喜您完成了这次跑商，请继续！");
        		}else{
        			cm.sendOk(""+ringnum+"对不起，您还没有拿来我需要的材料，加油哦！\r\n\r\n这次您需要帮我搜集"+itemList[itemIndex][1]+"个#v"+itemList[itemIndex][0]+"#\r\n期待您的好消息");
					cm.dispose();
					return;
        		}
        	}else{
        		var ran = Math.floor(Math.random() * itemList.length);
        		var itmeid = itemList[ran][0];
        		var itemnum = itemList[ran][1];
        		if(itemIndex == -1){
        			setOneTimeLog(ran,id);
        		}else{
        			changeOneTimeLog(ran,id);
        		}
        		var strlen1 = "您当前跑环环数为： "+(ringnum+1)+"\r\n\r\n";
				strlen1 += "您已经成功的领取了本次跑环！";
	        	strlen1 += " 这次您需要帮我搜集"+itemnum +"个#v"+itmeid+"#\r\n期待您的好消息";
        		cm.setBossLog("paoshang");
        		cm.sendOk(strlen1);
        		cm.dispose();
        	}
        }else if(status == 2){
        	if(ringnum < 20){
	        	var ran = Math.floor(Math.random() * itemList.length);
	        	var itemid = itemList[ran][0];
	        	var itemnum = itemList[ran][1];
	        	if(itemIndex == -1){
	        		setOneTimeLog(ran,id);
	        	}else{
	        		changeOneTimeLog(ran,id);
	        	}
	        	var strlen = "您当前跑环环数为： "+ (ringnum+1) +"\r\n\r\n";
	        	strlen += " 这次您需要帮我搜集"+itemnum +"个#v"+itemid +"#\r\n期待您的好消息";;
	        	cm.setBossLog("paoshang");
	        	cm.sendOk(strlen);
	        	cm.dispose();
	        }else{
	        	cm.sendOk("您已经完成了跑商！");
	        	cm.dispose();
	        }
	    }
    }          
}
function getBossLog(boss,id) {
        var con = DatabaseConnection.getConnection();
        var count = 0;
        var ps;
        //ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= subtime(CURRENT_TIMESTAMP, '23:0:0.0')");
		var day = ""+year+"-"+month+"-"+days+"";
		ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ?");// AND lastattempt >= ?
        ps.setInt(1, id);
        ps.setString(2, boss);
		//ps.setString(3,day);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getInt(1);
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

function setOneTimeLog(bossid,id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, "跑环任务_" + bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid,id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimelog set log = ? where characterid = ? and log like '%跑环任务%'");
    ps.setString(1, "跑环任务_" + bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
        var con = DatabaseConnection.getConnection();
        var count = 0;
        var ps;
        ps = con.prepareStatement("SELECT log FROM onetimelog WHERE characterid = ? and log like '%跑环任务%'");
        ps.setInt(1, id);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getString("log").replace("跑环任务_", "");
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

