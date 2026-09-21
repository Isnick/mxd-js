
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
			text += "               #k"+皇冠白+" #r#e#w 超越的心升级 #n#k "+皇冠白+"\r\n\r\n";
			text += "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n\r\n";
           
		   text += "若无松柏志,超越不为高。\r\n\r\n";
		   text += "你所需要拥有#z"+材料+"#才能成就#r#z1122241##v1122241##b中途可能需要耐心和金钱，往往成功就在远方！\r\n\r\n";
		   
		   
		   	if (cm.haveItem(1122226)>=1) { 
			text += "\t\t#L101   ##k[#r#z"+材料+"#1/#c"+材料+"##k]+[#v1122226#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122231:##l\r\n\r\n\r\n"
			}
				if (cm.haveItem(1122227)>=1) { 
			text += "\t\t#L102   ##k[#r#z"+材料+"#1/#c"+材料+"##k]+[#v1122227#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122232:##l\r\n\r\n\r\n"
			}
				if (cm.haveItem(1122228)>=1) { 
			text += "\t\t#L103   ##k[#r#z"+材料+"#1/#c"+材料+"##k]+[#v1122228#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122233:##l\r\n\r\n\r\n"
			}
				if (cm.haveItem(1122229)>=1) { 
			text += "\t\t#L104   ##k[#r#z"+材料+"#1/#c"+材料+"##k]+[#v1122229#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122234:##l\r\n\r\n\r\n"
			}
				if (cm.haveItem(1122230)>=1) { 
			text += "\t\t#L105   ##k[#r#z"+材料+"#1/#c"+材料+"##k]+[#v1122230#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122235:##l\r\n\r\n\r\n"
			}
				if (cm.haveItem(1122231)>=1) { 
			text += "\t\t#L106   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1122231#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122236:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122232)>=1) { 
			text += "\t\t#L107   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1122232#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122237:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122233)>=1) { 
			text += "\t\t#L108   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1122233#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122238:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122234)>=1) { 
			text += "\t\t#L109   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1122234#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122239:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122235)>=1) { 
			text += "\t\t#L110   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1122235#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122240:##l\r\n\r\n\r\n"
			}
			
			if (cm.haveItem(1122236)>=1) { 
			text += "\t\t#L111   ##k[#r#z"+材料+"#10/#c"+材料+"##k]+[#v1122236#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122241:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122237)>=1) { 
			text += "\t\t#L112   ##k[#r#z"+材料+"#10/#c"+材料+"##k]+[#v1122237#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122242:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122238)>=1) { 
			text += "\t\t#L113   ##k[#r#z"+材料+"#10/#c"+材料+"##k]+[#v1122238#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122243:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122239)>=1) { 
			text += "\t\t#L114   ##k[#r#z"+材料+"#10/#c"+材料+"##k]+[#v1122239#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122244:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1122240)>=1) { 
			text += "\t\t#L115   ##k[#r#z"+材料+"#10/#c"+材料+"##k]+[#v1122240#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1122245:##l\r\n\r\n\r\n"
			}
			
			
			
			
			text += "  "+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+"\r\n\r\n";
            cm.sendSimple(text);

		}else if (selection == 101) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,材料数量) && cm.haveItem(1122226,1)) { 
			    cm.gainItem(1122226,-1);
				cm.gainItem(材料,-材料数量);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122231,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 102) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,材料数量) && cm.haveItem(1122227,1)) { 
			    cm.gainItem(1122227,-1);
				cm.gainItem(材料,-材料数量);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122232,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 103) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,材料数量) && cm.haveItem(1122228,1)) { 
			    cm.gainItem(1122228,-1);
				cm.gainItem(材料,-材料数量);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122233,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 104) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,材料数量) && cm.haveItem(1122229,1)) { 
			    cm.gainItem(1122229,-1);
				cm.gainItem(材料,-材料数量);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122234,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 105) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,材料数量) && cm.haveItem(1122230,1)) { 
			    cm.gainItem(1122230,-1);
				cm.gainItem(材料,-材料数量);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122235,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 106) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,5) && cm.haveItem(1122231,1)) { 
			    cm.gainItem(1122231,-1);
				cm.gainItem(材料,-5);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122236,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 107) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,5) && cm.haveItem(1122232,1)) { 
			    cm.gainItem(1122232,-1);
				cm.gainItem(材料,-5);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122237,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 108) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,5) && cm.haveItem(1122233,1)) { 
			    cm.gainItem(1122233,-1);
				cm.gainItem(材料,-5);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122238,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 109) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,5) && cm.haveItem(1122234,1)) { 
			    cm.gainItem(1122234,-1);
				cm.gainItem(材料,-5);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122239,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 110) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,5) && cm.haveItem(1122235,1)) { 
			    cm.gainItem(1122235,-1);
				cm.gainItem(材料,-5);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122240,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 111) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,10) && cm.haveItem(1122236,1)) { 
			    cm.gainItem(1122236,-1);
				cm.gainItem(材料,-10);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122241,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 112) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,10) && cm.haveItem(1122237,1)) { 
			    cm.gainItem(1122237,-1);
				cm.gainItem(材料,-10);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122242,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 113) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,10) && cm.haveItem(1122238,1)) { 
			    cm.gainItem(1122238,-1);
				cm.gainItem(材料,-10);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122243,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 114) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,10) && cm.haveItem(1122239,1)) { 
			    cm.gainItem(1122239,-1);
				cm.gainItem(材料,-10);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122244,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
			}else if (selection == 115) {					
			if (cm.getPlayer().getCSPoints(1) >=(5000) && cm.haveItem(材料,10) && cm.haveItem(1122240,1)) { 
			    cm.gainItem(1122240,-1);
				cm.gainItem(材料,-10);
				cm.getPlayer().modifyCSPoints(1, -5000);
		       cm.gainItem(1122245,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了超越的心，若无松柏志,超越不为高！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t所需材料不足或点券不足5000。请检查,不完整的心项链不可戴在身上，请脱下");
				cm.dispose();
			}
		
			
        }
    }
}