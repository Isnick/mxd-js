
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
var 材料 = 4000463;
var 材料数量 = 5;


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
			text += "               #k"+皇冠白+" #r#e#w 老公老婆戒指升级 #n#k "+皇冠白+"\r\n\r\n";
			text += "  "+猫左+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+中条猫+猫右+"\r\n\r\n";
          // text += "脚本维护~~\r\n";
		   text += "一枚充满爱的戒指，你值得珍藏，使用#z"+材料+"#进行升级 让这份珍藏变得更尊贵，更有爱\r\n\r\n";
		   	if (cm.haveItem(1112446)>=1) { 
			text += "\t\t\t#L101   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112446#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112447:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112447)>=1) { 
			text += "\t\t\t#L102   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112447#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112448:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112448)>=1) { 
			text += "\t\t\t#L103   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112448#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112449:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112449)>=1) { 
			text += "\t\t\t#L104   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112449#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112450:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112450)>=1) { 
			text += "\t\t\t#L105   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112450#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112451:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112451)>=1) { 
			text += "\t\t\t#L106  ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112451#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112452:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112452)>=1) { 
			text += "\t\t\t#L107   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112452#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112453:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112453)>=1) { 
			text += "\t\t\t#L108   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112453#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112454:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112454)>=1) { 
			text += "\t\t\t#L109   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112454#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112455:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112455)>=1) { 
			text += "\t\t\t#L110   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112455#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112456:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112456)>=1) { 
			text += "\t\t\t#L111   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112456#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112457:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112457)>=1) { 
			text += "\t\t\t#L112   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112457#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112458:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112458)>=1) { 
			text += "\t\t\t#L113  ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112458#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112459:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112459)>=1) { 
			text += "\t\t\t#L114   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112459#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112460:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112460)>=1) { 
			text += "\t\t\t#L115   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112460#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112461:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112461)>=1) { 
			text += "\t\t\t#L116   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112461#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112462:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112462)>=1) { 
			text += "\t\t\t#L117   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112462#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112463:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112463)>=1) { 
			text += "\t\t\t#L118   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112463#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112464:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112464)>=1) { 
			text += "\t\t\t#L119   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112464#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112465:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112465)>=1) { 
			text += "\t\t\t#L120   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112465#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112466:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112466)>=1) { 
			text += "\t\t\t#L121   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112466#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112467:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112467)>=1) { 
			text += "\t\t\t#L122   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112467#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112468:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112468)>=1) { 
			text += "\t\t\t#L123   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112468#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112469:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112469)>=1) { 
			text += "\t\t\t#L124   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112469#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112470:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112470)>=1) { 
			text += "\t\t\t#L125   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112470#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112471:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112471)>=1) { 
			text += "\t\t\t#L126   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112471#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112472:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112472)>=1) { 
			text += "\t\t\t#L127   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112472#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112473:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112473)>=1) { 
			text += "\t\t\t#L128   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112473#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112474:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112474)>=1) { 
			text += "\t\t\t#L129   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112474#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112475:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112475)>=1) { 
			text += "\t\t\t#L130   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112475#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112476:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112476)>=1) { 
			text += "\t\t\t#L131   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112476#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112477:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112477)>=1) { 
			text += "\t\t\t#L132   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112477#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112478:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112478)>=1) { 
			text += "\t\t\t#L133   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112478#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112479:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112479)>=1) { 
			text += "\t\t\t#L134   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112479#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112480:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112480)>=1) { 
			text += "\t\t\t#L135   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112480#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112481:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112481)>=1) { 
			text += "\t\t\t#L136   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112481#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112482:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112482)>=1) { 
			text += "\t\t\t#L137   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112482#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112483:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112483)>=1) { 
			text += "\t\t\t#L138   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112483#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112484:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112484)>=1) { 
			text += "\t\t\t#L139   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112484#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112485:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112485)>=1) { 
			text += "\t\t\t#L140   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112485#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112486:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112486)>=1) { 
			text += "\t\t\t#L141   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112486#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112487:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112487)>=1) { 
			text += "\t\t\t#L142   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112487#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112488:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112488)>=1) { 
			text += "\t\t\t#L143   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112488#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112489:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112489)>=1) { 
			text += "\t\t\t#L144   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112489#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112490:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112490)>=1) { 
			text += "\t\t\t#L145   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112490#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112491:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112491)>=1) { 
			text += "\t\t\t#L146   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112491#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112492:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112492)>=1) { 
			text += "\t\t\t#L147   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112492#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112493:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112493)>=1) { 
			text += "\t\t\t#L148   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112493#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112494:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112494)>=1) { 
			text += "\t\t\t#L149   ##k[#r#z"+材料+"#5/#c"+材料+"##k]+[#v1112494#]升级#d#fUI/Basic/BtHide3/mouseOver/0##i1112495:##l\r\n\r\n\r\n"
			}
			if (cm.haveItem(1112495)>=1) { 
			text += "据说只有真正有爱的才能看到这颗"+红心+"\r\n\r\n"
			}
			text += "  "+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+下条猫+"\r\n\r\n";
        
		 cm.sendSimple(text);

		}else if (selection == 101) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112446,1)) { 
			    cm.gainItem(1112446,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112447,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 102) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112447,1)) { 
			    cm.gainItem(1112447,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112448,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 103) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112448,1)) { 
			    cm.gainItem(1112448,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112449,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 104) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112449,1)) { 
			    cm.gainItem(1112449,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112450,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 105) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112450,1)) { 
			    cm.gainItem(1112450,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112451,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 106) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112451,1)) { 
			    cm.gainItem(1112451,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112452,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 107) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112452,1)) { 
			    cm.gainItem(1112452,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112453,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 108) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112453,1)) { 
			    cm.gainItem(1112453,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112454,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 109) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112454,1)) { 
			    cm.gainItem(1112454,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112455,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 110) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112455,1)) { 
			    cm.gainItem(1112455,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112456,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 111) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112456,1)) { 
			    cm.gainItem(1112456,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112457,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 112) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112457,1)) { 
			    cm.gainItem(1112457,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112458,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 113) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112458,1)) { 
			    cm.gainItem(1112458,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112459,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 114) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112459,1)) { 
			    cm.gainItem(1112459,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112460,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 115) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112460,1)) { 
			    cm.gainItem(1112460,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112461,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 116) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112461,1)) { 
			    cm.gainItem(1112461,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112462,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 117) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112462,1)) { 
			    cm.gainItem(1112462,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112463,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 118) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112463,1)) { 
			    cm.gainItem(1112463,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112464,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 119) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112464,1)) { 
			    cm.gainItem(1112464,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112465,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 120) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112465,1)) { 
			    cm.gainItem(1112465,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112466,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 121) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112466,1)) { 
			    cm.gainItem(1112466,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112467,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 122) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112467,1)) { 
			    cm.gainItem(1112467,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112468,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 123) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112468,1)) { 
			    cm.gainItem(1112468,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112469,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 124) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112469,1)) { 
			    cm.gainItem(1112469,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112470,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 125) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112470,1)) { 
			    cm.gainItem(1112470,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112471,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 126) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112471,1)) { 
			    cm.gainItem(1112471,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112472,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 127) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112472,1)) { 
			    cm.gainItem(1112472,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112473,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 128) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112473,1)) { 
			    cm.gainItem(1112473,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112474,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 129) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112474,1)) { 
			    cm.gainItem(1112474,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112475,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 130) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112475,1)) { 
			    cm.gainItem(1112475,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112476,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 131) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112476,1)) { 
			    cm.gainItem(1112476,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112477,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 132) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112477,1)) { 
			    cm.gainItem(1112477,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112478,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 133) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112478,1)) { 
			    cm.gainItem(1112478,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112479,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 134) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112479,1)) { 
			    cm.gainItem(1112479,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112480,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 135) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112480,1)) { 
			    cm.gainItem(1112480,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112481,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 136) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112481,1)) { 
			    cm.gainItem(1112481,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112482,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 137) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112482,1)) { 
			    cm.gainItem(1112482,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112483,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 138) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112483,1)) { 
			    cm.gainItem(1112483,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112484,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 139) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112484,1)) { 
			    cm.gainItem(1112484,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112485,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 140) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112485,1)) { 
			    cm.gainItem(1112485,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112486,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 141) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112486,1)) { 
			    cm.gainItem(1112486,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112487,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 142) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112487,1)) { 
			    cm.gainItem(1112487,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112488,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 143) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112488,1)) { 
			    cm.gainItem(1112488,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112489,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 144) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112489,1)) { 
			    cm.gainItem(1112489,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112490,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 145) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112490,1)) { 
			    cm.gainItem(1112490,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112491,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 146) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112491,1)) { 
			    cm.gainItem(1112491,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112492,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 147) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112492,1)) { 
			    cm.gainItem(1112492,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112493,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 148) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112493,1)) { 
			    cm.gainItem(1112493,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112494,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
					}else if (selection == 149) {					
			if (cm.haveItem(材料,材料数量) && cm.haveItem(1112494,1)) { 
			    cm.gainItem(1112494,-1);
				cm.gainItem(材料,-材料数量);
				
		       cm.gainItem(1112495,1);

				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "『升级系统』" + " : " + "[" + cm.getChar().getName() + "]通过不懈努力！升级了老公老婆戒指，让爱坚定！")); 
				cm.dispose();
			}else{
				cm.sendOk("\t材料不足。请检查");
				cm.dispose();
			}
		
			
		
			
        }
    }
}