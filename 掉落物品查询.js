/*
 ZEVMS冒险岛(079)游戏服务端
 脚本：爆物查询
 */


//importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var b;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("如果不知道ID请自行百度。");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
  if(status ==0){
   var text = "你要查询什么呢！\r\n";
   text +="#L0##b查询爆物#k#l\r\n";
   text +="#L1##b查询怪物所在地#k#l\r\n";
   cm.sendOk(text);
  }
        if (status == 1) {
   b =selection;
            cm.sendGetText(" Hi~#b#h ##k，请输入你要查询的名称；");
        } else if (status == 2) {
            fee = cm.getText();
   if(b==1){
    cm.sendOk(cm.查询怪物(fee));
   }else{
   //cm.私聊输出信息(""+cm.getChar().getName()+" 在爆物查询输入 "+fee+" ","71447500");
    cm.sendOk(cm.查询物品(fee));
   }
  }else if(status ==3){
   var s  = selection;
   if(b==1){
    var text = "你要查询的#r#o"+s+"##k在以下地图：\r\n";
    cm.sendOk(text +cm.查询怪物地图(s));
    cm.dispose();
    return;
   }
   cm.sendOk(" Hi~#b#h ##k，你要查询的 #t"+s+"# 掉落出处；\r\n\r\n"+cm.查询爆物(s)+"");
   //cm.对话结束();
  }else if(status ==4){
   var s =selection;
   var text = "你要查询的#r#o"+s+"##k在以下地图：\r\n";
   cm.sendOk(text +cm.查询怪物地图(s));
   cm.dispose();
  }
    }
}