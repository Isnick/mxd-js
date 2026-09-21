
var 中条猫 ="#fUI/ChatBalloon/37/n#";
var 猫右 =  "#fUI/ChatBalloon/37/ne#";
var 猫左 =  "#fUI/ChatBalloon/37/nw#";
var 右 =    "#fUI/ChatBalloon/37/e#";
var 左 =    "#fUI/ChatBalloon/37/w#";
var 下条猫 ="#fUI/ChatBalloon/37/s#";
var 猫下右 ="#fUI/ChatBalloon/37/se#";
var 猫下左 ="#fUI/ChatBalloon/37/sw#";
var 皇冠白 ="#fUI/GuildMark/Mark/Etc/00009004/16#";
var 红心 ="#fEffect/CharacterEff/1112905/0/1#";
var 材料 = 1122225;
var 材料数量 = 1;
var itemSet =[
	[4001126],//枫叶		
	[2000],
	[4000463],//国庆比
    [100],
	[4000000],//蓝蜗牛壳
	[1000],
	[4000016],//红蜗牛壳
	[1000],
	[4000019],//绿蜗牛壳
	[1000],
    [10000],//点卷：
	[50000000],//金币
	[4000001],//花蘑菇	
	[100],
	[4000034],//蛇皮
	[100],
	[4000313],//黄金枫叶
	[100],
	[1112119]//戒指
];

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""
			text += " #r              #v4000110# 中级 血衣 升级 #v4000110#\r\n \r\n";
			text += "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n\r\n";
           
		   text += "\r\n需要：\r\n";
		   text += "#v"+itemSet[18]+"##v"+itemSet[0]+"##z"+itemSet[0]+"#x"+itemSet[1]+"#v"+itemSet[2]+"##z"+itemSet[2]+"#x"+itemSet[3]+"#v"+itemSet[16]+"#x"+itemSet[17]+"\r\n#v"+itemSet[12]+"##v"+itemSet[14]+"#各x"+itemSet[15]+" #v"+itemSet[4]+"##v"+itemSet[6]+"##v"+itemSet[8]+"#各x"+itemSet[9]+"\r\n点卷："+itemSet[10]+" 金币："+itemSet[11]+"\r\n";
		   text += "  "+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+"\r\n\r\n";
		    text += "#k想要升级吗？\r\n";
			text += "\t\t#L101##e#r叁仟点HP#l"
			text += "\t\t#L102##e#b叁仟点MP#l\r\n\r\n\r\n"
			
		
		   
		   
		   	
			
			
			
			
            cm.sendSimple(text);
           
		}else if (selection == 101) {
		     	var dj0=itemSet[0]
                var dj1=itemSet[1]
				var dj2=itemSet[2]
				var dj3=itemSet[3]
				var dj4=itemSet[4]
				var dj5=itemSet[5]
				var dj6=itemSet[6]
				var dj7=itemSet[7]
				var dj8=itemSet[8]
				var dj9=itemSet[9]
				var dj10=itemSet[10]
				var jb=itemSet[11]
              	var dj12=itemSet[12]
				var dj13=itemSet[13]
				var dj14=itemSet[14]
				var dj15=itemSet[15]
				var dj16=itemSet[16]
				var dj17=itemSet[17]
				var dj18=itemSet[18]
				
			if (cm.getPlayer().getCSPoints(1) >=(dj10) && cm.getMeso()>=(jb) &&cm.haveItem(dj0,dj1)&& cm.haveItem(dj2,dj3)&& cm.haveItem(dj4,dj5)&& cm.haveItem(dj6,dj7)&& cm.haveItem(dj8,dj9)&& cm.haveItem(dj12,dj13)&& cm.haveItem(dj14,dj15)&& cm.haveItem(dj16,dj17)&& cm.haveItem(dj18,1)) { 
			    cm.gainItem(dj0,-dj1);
				cm.gainItem(dj2,-dj3);
				cm.gainItem(dj4,-dj5);
				cm.gainItem(dj6,-dj7);
				cm.gainItem(dj8,-dj9);
				cm.gainItem(dj12,-dj13);
				cm.gainItem(dj14,-dj15);
				cm.gainItem(dj16,-dj17);
				cm.gainItem(dj18,-1);
			
				cm.gainMeso(-jb);
				cm.getPlayer().modifyCSPoints(1, -dj10);
		       cm.gainItem(1112120,0,0,0,0,3000,0,0,0,0,0,0,0,0,0,0);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『血衣系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了叁仟点HP血衣!")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足"+dj10+"或金币不足"+jb+"。    请检查");
				cm.dispose();
			}
			}else if (selection == 102) {
		     	var dj0=itemSet[0]
                var dj1=itemSet[1]
				var dj2=itemSet[2]
				var dj3=itemSet[3]
				var dj4=itemSet[4]
				var dj5=itemSet[5]
				var dj6=itemSet[6]
				var dj7=itemSet[7]
				var dj8=itemSet[8]
				var dj9=itemSet[9]
				var dj10=itemSet[10]
				var jb=itemSet[11]
              	var dj12=itemSet[12]
				var dj13=itemSet[13]
				var dj14=itemSet[14]
				var dj15=itemSet[15]
				var dj16=itemSet[16]
				var dj17=itemSet[17]
				var dj18=itemSet[18]
				
			if (cm.getPlayer().getCSPoints(1) >=(dj10) && cm.getMeso()>=(jb) &&cm.haveItem(dj0,dj1)&& cm.haveItem(dj2,dj3)&& cm.haveItem(dj4,dj5)&& cm.haveItem(dj6,dj7)&& cm.haveItem(dj8,dj9)&& cm.haveItem(dj12,dj13)&& cm.haveItem(dj14,dj15)&& cm.haveItem(dj16,dj17)&& cm.haveItem(dj18,1)) { 
			    cm.gainItem(dj0,-dj1);
				cm.gainItem(dj2,-dj3);
				cm.gainItem(dj4,-dj5);
				cm.gainItem(dj6,-dj7);
				cm.gainItem(dj8,-dj9);
				cm.gainItem(dj12,-dj13);
				cm.gainItem(dj14,-dj15);
				cm.gainItem(dj16,-dj17);
				cm.gainItem(dj18,-1);
			
				cm.gainMeso(-jb);
				cm.getPlayer().modifyCSPoints(1, -dj10);
		       cm.gainItem(1112120,0,0,0,0,0,3000,0,0,0,0,0,0,0,0,0);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『血衣系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了叁仟点MP血衣!")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足"+dj10+"或金币不足"+jb+"。    请检查");
				cm.dispose();
			}
		
			
        }
    }
}