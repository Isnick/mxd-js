
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
var 小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 材料 = 1122225;
var 材料数量 = 1;
var itemSet =[
	[4001126],
	[2000],
	[4000313],
    [100],
	[4000000],//蓝蜗牛壳
	[88],
	[4000016],//红蜗牛壳
	[88],
	[4000019],//绿蜗牛壳
	[88],
    [10000],
	[20000000]
	
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
			text += " #r              #v4000110# 新 手 血衣 制 造 #v4000110#\r\n \r\n";
			text += "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n\r\n";
           
		   text += "\r\n需要：\r\n";
		   text += "#v"+itemSet[0]+"##z"+itemSet[0]+"#x"+itemSet[1]+"#v"+itemSet[2]+"##z"+itemSet[2]+"#x"+itemSet[3]+"点卷：10000金币：2000万 \r\n#v"+itemSet[4]+"##z"+itemSet[4]+"#x"+itemSet[5]+"#v"+itemSet[6]+"##z"+itemSet[6]+"#x"+itemSet[7]+"#v"+itemSet[8]+"##z"+itemSet[8]+"#x"+itemSet[9]+"\r\n";
		   text += "  "+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+"\r\n\r\n";
		    text += "#k想要铸造吗？\r\n";
			text += "\t\t#L101##e#r壹仟点HP#l"
			text += "\t\t#L102##e#b壹仟点MP#l\r\n\r\n\r\n"
			
		   if (cm.haveItem(1112119)>=1) { 
		   text +="\t\t\t #k #L103#"+小兔+"升级血衣"+小兔+"#l"
		   }
		  
	
		   
		   
		   	
			
			
			
			
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
                		
			if (cm.getPlayer().getCSPoints(1) >=(dj10) && cm.getMeso()>=(jb) &&cm.haveItem(dj0,dj1)&& cm.haveItem(dj2,dj3)&& cm.haveItem(dj4,dj5)&& cm.haveItem(dj6,dj7)&& cm.haveItem(dj8,dj9)) { 
			    cm.gainItem(dj0,-dj1);
				cm.gainItem(dj2,-dj3);
				cm.gainItem(dj4,-dj5);
				cm.gainItem(dj6,-dj7);
				cm.gainItem(dj8,-dj9);
				cm.gainMeso(-jb);
				cm.getPlayer().modifyCSPoints(1, -dj10);
		       cm.gainItem(1112119,0,0,0,0,1000,0,0,0,0,0,0,0,0,0,0);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『血衣系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！制作了壹仟点HP血衣!")); 
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
			if (cm.getPlayer().getCSPoints(1) >=(dj10) && cm.getMeso()>=(jb) && cm.haveItem(dj0,dj1)&& cm.haveItem(dj2,dj3)&& cm.haveItem(dj4,dj5)&& cm.haveItem(dj6,dj7)&& cm.haveItem(dj8,dj9)) { 
			    cm.gainItem(dj0,-dj1);
				cm.gainItem(dj2,-dj3);
				cm.gainItem(dj4,-dj5);
				cm.gainItem(dj6,-dj7);
				cm.gainItem(dj8,-dj9);
				cm.gainMeso(-jb);
				cm.getPlayer().modifyCSPoints(1, -dj10);
		       cm.gainItem(1112119,0,0,0,0,0,1000,0,0,0,0,0,0,0,0,0);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『血衣系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！制作了壹仟点MP血衣!")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足"+dj10+"或金币不足"+jb+"。    请检查");
				cm.dispose();
			}
		}else if (selection == 103) {
				cm.dispose();
				cm.openNpc(3003332, "升级血衣");

        
        }
    }
}