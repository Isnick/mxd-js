function start() {
    //p = cm.getChar();
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) { //ExitChat
        cm.dispose();
        return;
    } else if (mode == 0) { //No
        cm.sendOk("好的, 若是你准备好要转新手了再来找我吧！");
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("哈哈，你真的是万中无一的天才，你确定要转成新手（1级）吗？请仔细阅读以下注意事项：\r\n\r\n#r1、总共需要点券：【200000】\r\n" +
            "2、转新手后改变为10级新手、能力点和技能点等其它信息保留。\r\n" +
            "3、转新手后请务必重新登录，后续加技能需要用满技能功能，否则会无法加点，请存够钱再来转生！！#k#l");

    }else if(status == 1){
        if(cm.getPlayer().getNX() < 200000){
            cm.sendOk("您囊中羞涩，请确定有200000点券后再说吧");
            cm.dispose();
            return;
        }
        cm.喇叭(2,"恭喜[" + cm.getPlayer().getName() + "]在拍卖中使用转新手功能放弃了所有荣华富贵回到了解放前，可喜可贺，勇气可嘉！！");
        cm.gainNX(-200000);
        cm.unequipEverything(); //脱装备语句
        
        cm.getPlayer().changeJob(0);//新手职业
        //cm.gainAp(5);
        cm.getPlayer().setLevel(9);
        cm.getPlayer().exp = 0;//经验值0        
        cm.getPlayer().levelUp();
        cm.getPlayer().saveToDB(false, false);
        cm.sendOk("哈哈，恭喜你年轻人，你已经完成了#r转世投胎#k！\r\n\r\n#e#d");
        cm.getPlayer().fakeRelog();
        cm.dispose();
    }
}