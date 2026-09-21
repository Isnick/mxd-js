var FY0 = "┏━━━━━━━━━━━┓";
var FY1 = "┃       - 枫叶 -       ┃";
var FY2 = "┃ 脚本仿制  　定制脚本 ┃";
var FY3 = "┃ 技术支持 　 游戏顾问 ┃";
var FY4 = "┃ ＷＺ添加　  地图制作 ┃";
var FY5 = "┃ 加盾防御　  售登陆器 ┃";
var FY6 = "┣━━━━━━━━━━━┫";
var FY7 = "┃ 唯一QQ:782772124    ┃";
var FY8 = "┗━━━━━━━━━━━┛";
var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
       
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b好的,下次再见.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {

		if(cm.getPlayer().getMapId()==180000001)
			{
				cm.dispose();
				cm.openNpc(9900005);
				return;
			}
			if(cm.getPlayer().getMapId()==970000005 || cm.getPlayer().getMapId()==901111112 || cm.getPlayer().getMapId()==901111113){
			
				cm.dispose();
				return;
			}
		
		
            var add =          " \t\t"+彩虹+"  #e#r " + cm.getChannelServer().getServerName() + " #k#n  #r  "+彩虹+"#b#k#n\r\r\n";
add += "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n";add +="\t #e当前点卷：#r" +cm.getPlayer().getCSPoints(1) +  "#k点\t #e在线时间：#r" + cm.getGamePoints() + "#k分钟\r\n";
add +="  #L345#"+皇冠白+"#r【新手入门必做】#l";	
add +=" #L99633#"+皇冠白+"#r【回去自由市场】#l\r\n\r\n";			
add +="#L5#"+小兔+"#r快捷商店#l   #L1#"+小兔+"#r万能传送#l   #L919#"+小兔+"#r云交易行#k#l\r\n";
add +="#L80#"+小兔+"#b怪物掉落#l   #L9330045#"+小兔+"休闲钓鱼#l   #L26#"+小兔+"#b技能学院#l\r\n";
add +="#L272#"+小兔+"枫叶换点#l  #L9# "+小兔+"#b每日任务#l   #L144#"+小兔+"回到新手#l\r\n\r\n";
add += "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+" #d美好的一天 "+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"#k\r\n";
add +="#L1511#"+小兔+"#b副本奖励#l   #L28#"+小兔+"制作血衣"+小兔+"#l  #L3451#"+小兔+"每日跑环#l\r\n";//#L99#"+小兔+"个人信息#l
add +="#L1451#"+小兔+"#b二十七关#l   #L78#"+小兔+"快速转职"+小兔+"#l  #L270#"+小兔+"在线奖励#l\r\n";
add +="#L1317#"+小兔+"#b矿石成金#l   #L1319#"+小兔+"转世投胎"+小兔+"#l  #L288#"+小兔+"兑换元宝#l\r\n\r\n";
add +=  "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+" #d从冒险开始 "+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n";
add +="#L269#"+小兔+"饰品升星#l   #L274#"+小兔+"#b金币银行#l   #L19#"+小兔+"#b每日签到#l\r\n";
//add +="#L269#"+小兔+"#b饰品升星#l   #L274#"+小兔+"金币银行#l\r\n";    
add +="#L18#"+小兔+"背包清理#l   #L99#"+小兔+"#b一亿满技#l   #L1551#"+小兔+"#b美容美发#l\r\n";
//add +="#L78##d"+小黄星+"快速转职#l";         
add +="#L1316#"+小兔+"#b终极BOSS#l\r\n\r\n";                                                                                                                                                        
			//#L273#"+小兔+"#b身外之身#l		 
		    add += ""+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+"\r\n";

		if (cm.getPlayer().isGM()) {
			
			add += "#d- - - - - - - 屠 龙 G M 控 制 台 - - - - - - -\r\n"
			add += "#r   以下功能仅管理员可见：#k\r\n"
			add += "   在线人数："+(cm.在线人数()+0)+"     \r\n"
		
		add += "\t#L73##d"+小黄星+"刷 金 币#l";
		add += "#L75##d"+小黄星+"刷 点 卷#l";
		add += "#L76##d"+小黄星+"刷新地图#l\r\n";
		add += "\t#L77##d"+小黄星+"刷新状态#l";
		add += "#L1012##d"+小黄星+"在线玩家#l";
		add += "#L78##d"+小黄星+"全能转职#l\r\n";
		add += "\t#L78##d"+小黄星+"快速转职#l";
		add += "#L81##d"+小黄星+"掉落查询#l";
		add += "#L82##d"+小黄星+"在线充值#l\r\n";
		add += "\t#L79##d"+小黄星+"回到起点#l";
		add += "#L801##d"+小黄星+"回到新手#l";
		add += "#L29##d"+小黄星+"测试功能#l";
		
		}
		
		 
						 //#L13##b破攻升级#l #L6##b快速转职#l#L11##b填推广码#l #L12##b推广商店#l #L35#"+小水滴+"#b赏金任务#l#L36#"+小水滴+"#b杀怪任务#l

            cm.sendSimple(add);

//------------------------------------------------------------------------

        } else if (status == 1) {
			if (selection == 1314) {
				cm.dispose();
				cm.openNpc(3003332,  "装备融合");
				}if (selection == 1315) {
				cm.dispose();
				cm.openNpc(3003332,  "双倍购买");
				}if (selection == 1316) {
				cm.dispose();
				cm.openNpc(3003332,  "终极BOSS");
				
				
				}if (selection == 1317) {
				cm.dispose();
				cm.openNpc(3003332,  "矿石成金");
				
				}if (selection == 1318) {
				cm.dispose();
				cm.openNpc(3003332,  "主线任务");
				
				}if (selection == 1319) {
				cm.dispose();
				cm.openNpc(3003332,  "转世投胎");
				
		}if (selection == 269) {
				cm.dispose();
				cm.openNpc(3003332,  "戒指升星");
		}if (selection == 288) {
				cm.dispose();
				cm.openNpc(9270048, "兑换元宝");		
        }if (selection == 3211) {
				cm.dispose();
				cm.openNpc(3003332,  "61活动");
        }if (selection == 345) {
				cm.dispose();
				cm.openNpc(3003332,  "4周年装备");
        }if (selection == 3451) {
				cm.dispose();
				cm.openNpc(3003332,  "每日跑环");
        }if (selection == 1451) {
				cm.warp(970030000, 0 );//每日挑战红蜗牛王升级神话耳环
				cm.dispose();
        }if (selection == 1551) {
				cm.warp(100000104, 0 );//美容美发
				cm.dispose();
        }if (selection == 273) {
				cm.dispose();
				cm.openNpc(3003332,  "身外之身");
        }if (selection == 274) {
				cm.dispose();
				cm.openNpc(3003332,  "金币银行");
        }
		if (selection == 272) {
				cm.dispose();
				cm.openNpc(3003332,  "枫叶换点");
        }
		if (selection == 271) {
				cm.dispose();
				cm.openNpc(3003332,  "自助中心");
        }
		if (selection == 270) {
				cm.dispose();
				cm.openNpc(3003332,  "在线奖励");
        }
		
		if (selection == 28) {
				cm.dispose();
				cm.openNpc(9900004, "制作血衣");
        }
		if (selection == 9330045) {//钓鱼
				cm.dispose();
				cm.openNpc(9330045);
        }
		if (selection == 99633) {//回去自由
				cm.dispose();
				cm.warp(910000000);
        }
		if (selection == 1511) {
				cm.dispose();
				cm.openNpc(3003332, 6004);//每日副本
        }
		if (selection == 9963) {
				cm.dispose();
				cm.openNpc(3003332, "交易中心");
        }
if (selection == 963) {
				cm.dispose();
				cm.openNpc(9900004, 963);
        }
		if (selection == 964) {
				cm.dispose();
				cm.openNpc(9900004, 964);
        }
		if (selection == 144) {
				cm.dispose();
				cm.openNpc(3003332, "回到新手");
        }
		if (selection == 0) {
				cm.dispose();
				cm.warp(910000000);
	    }

	    if (selection == 1) {
				cm.dispose();
                cm.openNpc(3003332, "万能传送");
	    }

		if (selection == 70) {
				cm.dispose();
				cm.openNpc(9900004, 70);
        }
if (selection == 802) {
				cm.dispose();
				cm.openNpc(9900004, 111111155);
        }
		if (selection == 71) {
				cm.dispose();
				cm.openNpc(9900004, 71);
        }
		if (selection == 72) {
				cm.dispose();
				cm.openNpc(3003332, 722);
        }
		if (selection == 62) {
				cm.dispose();
				cm.openNpc(9900004, 72 );

        }
		if (selection == 73) {
            cm.dispose();
            cm.gainMeso(210000000);
			cm.sendOk("系统判断你是管理员：恭喜你获得了2.1E金币!");
			
		}
		if (selection == 74) {
				cm.dispose();
				cm.openNpc(3003332, 74);
        }
		if (selection == 75) {
            cm.dispose();
            cm.gainNX(999999);
			cm.sendOk("系统判断你是管理员：恭喜你获得了999999点卷!");
			
		}
		if (selection == 76) {
			cm.dispose();
			cm.刷新地图();
			cm.sendOk("系统判断你是管理员：当前地图状态已经刷新!");
			
        }
				if (selection == 77) {
		    cm.dispose();
            cm.刷新状态();
			cm.sendOk("系统判断你是管理员：当前状态已经刷新!");
			
		}
		if (selection == 78) {
				cm.dispose();
                cm.openNpc(9900004, "快速转职");
		
        }
		if (selection == 79) {
            cm.dispose();
            cm.warp("http://wpa.qq.com/msgrd?V=1&Uin=103796426&Site");	
			cm.sendOk("系统判断你是管理员：送你回到出生地方!");
			
		}
	    if (selection == 80) {
				cm.dispose();
                cm.openNpc(3003332, "怪物爆率");
		}
	    if (selection == 81) {
				cm.dispose();
                cm.openNpc(9900004, "掉落物品查询");
				
	    }
			    if (selection == 82) {
				cm.dispose();
                cm.openNpc(3003332, "在线充值");
				
	    }
        if (selection == 801) {
				cm.dispose();
                cm.openNpc(3003332, "回到新手");
	    }

	    if (selection == 3) {
				cm.dispose();
                cm.openNpc(3003332, "快速洗血");
	    }

	    if (selection == 4) {
				cm.dispose();
                cm.openNpc(3003332, "综合排行");
	    }

	    if (selection == 5) {
				cm.dispose();
                cm.openNpc(3003332, "快捷商店");
	    }

	    if (selection == 6) {
				cm.dispose();
                cm.openNpc(3003332, "快速转职");
		
        }
	    if (selection == 7) {
				cm.dispose();
				cm.openNpc(9310070);

        }
	    if (selection == 8) {
				cm.dispose();
                cm.openNpc(3003332, "师徒系统");
        }
		
	    if (selection == 9) {
				cm.dispose();
				cm.openNpc(3003332, "每日日常任务");
        }
		
	    if (selection == 10) {
				cm.dispose();
                cm.openNpc(3003332, "双倍购买");

        }
	    if (selection == 11) {
				cm.dispose();
                cm.openNpc(3003332, "填推广码");

        }
	    if (selection == 12) {
				cm.dispose();
                cm.openNpc(3003332, "推广商店");
		
        }
 	    if (selection == 13) {
				cm.dispose();
                cm.openNpc(3003332, "破攻升级");
		
        }
	    if (selection == 14) {
				cm.dispose();
                cm.openNpc(3003332, "BOSS召唤");
		
        }
	    if (selection == 15) {
				cm.dispose();
                cm.openNpc(9030100);

        }
		if (selection == 16) {
				cm.dispose();
                cm.openNpc(9330079, 300);
				
        }
			
		if (selection == 17) {
				cm.dispose();
                cm.openNpc(3003332, "新人礼包");

        }

		if (selection == 18) {
			cm.dispose();
                cm.openNpc(3003332, "背包清理");

        }	
			
		if (selection == 19) {
				cm.dispose();
                
				cm.openNpc(3003332, "每日签到");
				

        }
			
		if (selection == 20) {
				cm.dispose();
                cm.openNpc(3003332, "等级奖励");

        }
			
		if (selection == 21) {
			cm.dispose();
                cm.openNpc(3003332, "合成中心");

        }
			
			
		if (selection == 23) {
				cm.dispose();
				cm.openNpc(3003332, "大姐大租借装备");

        }
			
		if (selection == 24) {
				cm.dispose();
				cm.openNpc(9330079, "概率制作");

        }
			
		if (selection == 25) {
				cm.dispose();
				cm.openNpc(9900004, "快捷转职");

        }
			
		if (selection == 26) {
				cm.dispose();
				cm.openNpc(3003332, "学习技能");

        }
			
		if (selection == 27) {
				cm.dispose();
				cm.openNpc(9050001, 0);

        }
			
			
		if (selection == 29) {
				cm.dispose();
				cm.openNpc(9900004, 21);

        }
		
		if (selection == 30) {//遗迹魔王
				cm.dispose();
				cm.openNpc(9900004, 1788);

        }
		
		if (selection == 31) {
				cm.dispose();
				cm.openNpc(9310032);

        }
		
		if (selection == 32) {//神秘商人
				cm.dispose();
				cm.openNpc(9900001, 0);

        }
		
		if (selection == 33) {//杀怪积分兑换
				cm.dispose();
				cm.openNpc(9900004, 7007);

        }
		
		if (selection == 34) {//主线任务
				cm.dispose();
				cm.openNpc(9900004, 20152);
        }
		
		if (selection == 35) {//赏金任务
				cm.dispose();
				cm.openNpc(9900004, 1237);
        }
		
		if (selection == 36) {//每日杀怪任务
				cm.dispose();
				cm.openNpc(9900004, 1238);
        }
		
		if (selection == 37) {//游戏中心
				cm.dispose();
				cm.openNpc(9330079, 500);
        }
		if (selection == 1012) {//游戏中心
				cm.dispose();
				cm.openNpc(9900004, 1012);
        }
			
		if (selection == 99) {//个人信息
				cm.dispose();
				cm.openNpc(9330079, "满技能");

        }
		if (selection == 919) {//个人信息
				cm.dispose();
				cm.openNpc(3003332, "云交易行");

        }

        }
    }
}
//---------------------------------------------------------------------------
var acc = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 粉杯 = "#fUI/UIWindow/Quest/icon7/0#";
var 美化ne = "#fUI/UIWindow/Quest/icon6/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 中条猫 ="#fUI/ChatBalloon/37/n#";
var 猫右 =  "#fUI/ChatBalloon/37/ne#";
var 猫左 =  "#fUI/ChatBalloon/37/nw#";
var 右 =    "#fUI/ChatBalloon/37/e#";
var 左 =    "#fUI/ChatBalloon/37/w#";
var 下条猫 ="#fUI/ChatBalloon/37/s#";
var 猫下右 ="#fUI/ChatBalloon/37/se#";
var 猫下左 ="#fUI/ChatBalloon/37/sw#";
var 皇冠白 ="#fUI/GuildMark/Mark/Etc/00009004/16#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 草莓 = "#fUI/GuildMark/Mark/Plant/00003000/1#"; // 红色草莓
var 草莓1 = "#fUI/GuildMark/Mark/Plant/00003000/10#"; // 淡蓝色草莓
var 草莓2 = "#fUI/GuildMark/Mark/Plant/00003000/11#"; // 紫色草莓
var 草莓3 = "#fUI/GuildMark/Mark/Plant/00003000/15#"; // 白色草莓
var 草莓4 = "#fUI/GuildMark/Mark/Plant/00003000/3#"; // 黄色草莓
var 草莓5 = "#fUI/GuildMark/Mark/Plant/00003000/8#"; // 绿色草莓
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 彩虹 ="#fEffect/ItemEff/1071085/effect/walk1/2#";
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var 红爱心 ="#fEffect/CharacterEff/1112905/0/1#";
var 金币图标 = "#fUI/UIWindow.img/QuestIcon/7/0#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
