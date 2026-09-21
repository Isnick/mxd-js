var status = -1;
var rateType = 0;
var 小黄星 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status >= 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        if (!cm.getPlayer().isGM()) {
            cm.sendOk("#r该功能仅限管理员使用。");
            cm.dispose();
            return;
        }
        var cs = cm.getChannelServer();
        var text = "\t\t#e#r【倍率调整】#k#n\r\n\r\n";
        text += "当前频道(#b" + cs.getChannel() + "#k)倍率情况：\r\n";
        text += "经验倍率：#r" + cs.getExpRate() + "#k 倍\r\n";
        text += "掉落倍率：#r" + cs.getDropRate() + "#k 倍\r\n";
        text += "金币倍率：#r" + cs.getMesoRate() + "#k 倍\r\n\r\n";
        text += "请选择要调整的项目：\r\n";
        text += "#L1#" + 小黄星 + "设置经验倍率#l\r\n";
        text += "#L2#" + 小黄星 + "设置掉落倍率#l\r\n";
        text += "#L3#" + 小黄星 + "设置金币倍率#l\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        rateType = selection;
        var name = "";
        if (rateType == 1) {
            name = "经验";
        } else if (rateType == 2) {
            name = "掉落";
        } else if (rateType == 3) {
            name = "金币";
        } else {
            cm.dispose();
            return;
        }
        cm.sendGetNumber("请输入要设置的#b" + name + "#k倍率（范围 1~100）：\r\n", 1, 1, 100);
    } else if (status == 2) {
        var value = selection;
        var cs = cm.getChannelServer();
        if (rateType == 1) {
            cs.setExpRate(value);
        } else if (rateType == 2) {
            cs.setDropRate(value);
        } else if (rateType == 3) {
            cs.setMesoRate(value);
        }
        cm.sendOk("设置成功！当前频道倍率已更新为：\r\n\r\n" +
                  "经验倍率：#r" + cs.getExpRate() + "#k 倍\r\n" +
                  "掉落倍率：#r" + cs.getDropRate() + "#k 倍\r\n" +
                  "金币倍率：#r" + cs.getMesoRate() + "#k 倍");
        cm.dispose();
    }
}
