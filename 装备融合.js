var status = 0;
var ii;

var _useId = 4000313; //使用的道具
var _useCount = 20; //使用的道具数量
var _buff_item_id = 4000313;
var maxAbsorbLv = 100; //融合次数上限
var currentLv = 0;
var item, item2;
var absorbProps = [
    'Str', 'Dex', 'Int', 'Luk',
    'Hp', 'Mp', 'Watk', 'Matk',
    'Wdef', 'Mdef', 'Acc', 'Avoid',
    'Hands'
];
var propsNames = {
    'Str': '力量',
    'Dex': '敏捷',
    'Int': '智力',
    'Luk': '运气',
    'Hp': '血上限',
    'Mp': '查克拉上限',
    'Watk': '物理攻击',
    'Matk': '魔法攻击',
    'Wdef': '物理防御',
    'Mdef': '魔法防御',
    'Acc': '命中率',
    'Avoid': '回避率',
    'Hands': '撸(手)技',
};

//Potential1

var maxRatio = 30;//融合获得的最高装备属性百分比

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
       //  if (status == 0) {
        //     var text = "    #e 您好 ! 我是#r岛上最牛逼的融合老师傅#k : 铁锤\r\n";
        //     text += "#L1#普通融合#l\r\n"
       //      text += "#L2#高级融合#l\r\n"
        //     cm.sendSimple(text);
       //  }
        if (status == 0) {
            //init package utils
            ii = Packages.server.MapleItemInformationProvider.getInstance();
            item = cm.getInventory(1).getItem(1);
            item2 = cm.getInventory(1).getItem(2);
            if (item != null &&
                item2 != null &&
                !ii.isCashItem(item.getItemId()) &&
                !ii.isCashItem(item2.getItemId())) {
                status++;
				//var text = "装备融合系统介绍:可通过枫叶之力，将装备栏第二格装备的属性随机融合给第一格装备 \r\n";
                var text = "当前第一格道具 : \r\n";
                text += "#v" + item.getItemId() + "#\r\n";
                currentLv = item.getPotential1() || 0;
				currentLv = currentLv < 0 ? 0 : currentLv;
                text += "融合等级 : " + currentLv + "/" + maxAbsorbLv + "\r\n";
                text += "第二格道具 : \r\n"
				text += "#v" + item2.getItemId() + "#\r\n";
                var lv2 = (item2.getPotential1() || 0)
                text += "融合等级 : " + (lv2 < 0 ? 0 : lv2) + "\r\n";
                text += "融合第二格装备给第一格#r(随机获得属性，最高获取30%)#k\r\n需要费用#v4000313#X20，确认融合 ？ \r\n";
                cm.sendYesNo(text);
            } else {
                cm.sendOk("您的第一格装备栏或第二格装备栏不得为空\r\n且不可为现金道具,请确认 ！(需要#v4000313#X20)");
                cm.dispose();
            }
        } else if (status == 2) {
            if (!cm.haveItem(_useId, _useCount)) {
                cm.sendOk("对不起,你没有足够的#v" + _useId + "# ！");
                cm.dispose();
                return;
            }
            if (currentLv < maxAbsorbLv) {
                var Props = fetchAllProps(item2);
                setAppendProps(Props);
                var text = fetchPropsNames(Props);
                cm.sendOk("恭喜,融合成功,快看看你的包袱吧 ！\r\n" + text);
                cm.worldMessage("[装备融合]：恭喜[" + cm.getChar().getName() + "]成功融合了装备！");
                cm.dispose();
            } else {
                cm.sendOk("融合等级已满!!!");
                cm.dispose();
            }
        } else {
            cm.sendOk(status);
            cm.dispose();
        }
    }
}

// var Props = fetchAllProps(item2);
// setAppendProps(Props);
// cm.sendOk("恭喜,融合成功,快看看你的包袱吧 ！");
// cm.worldMessage("[装备融合]]：恭喜[" + cm.getChar().getName() + "]成功使用了装备装备融合让装备变得更强 ！");
// cm.dispose();

function setAppendProps(props) {
    var _item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
    for (var i = 0; i < props.length; i++) {
        var obj = props[i];
        var key = obj.key;
        var val = obj.val;
        var oldVal = _item['get' + key]() || 0;
        _item['set' + key](oldVal + val);
    }
    _item.setPotential1(++currentLv);
    cm.gainItem(_useId, -(_useCount));
    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, true);
    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), _item, false);
}

function fetchPropsNames(props) {
    var text = "本次融合收益 : \r\n";
    for (var i = 0; i < props.length; i++) {
        var obj = props[i];
        var key = obj.key;
        var val = obj.val;
        text += propsNames[key] + " : " + val + "点\r\n";
    }
    return text;
}

function fetchAllProps(item) {
    var _props = [];
    for (var i = 0; i < absorbProps.length; i++) {
        var key = absorbProps[i];
        var val = parseFloat(item['get' + key]() || 0);
        if (val > 0) {
            val = (val * maxRatio) / 100;
            _props.push({
                key: key,
                val: Math.floor(Math.random() * val) + 1
            });
        }
    }
    return _props;
}