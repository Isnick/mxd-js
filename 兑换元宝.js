var ca = java.util.Calendar.getInstance();
var 年 = ca.get(java.util.Calendar.YEAR); //获得年份
var 月 = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var 日 = ca.get(java.util.Calendar.DATE);//获取日
var 时 = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var 分 = ca.get(java.util.Calendar.MINUTE);//获得分钟
var 秒 = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;

var 熊1 = "#fUI/GuildMark/Mark/Animal/00002011/6#";
var 熊2 = "#fUI/GuildMark/Mark/Animal/00002011/7#";
var 熊3 = "#fUI/GuildMark/Mark/Animal/00002011/8#";
var 熊4 = "#fUI/GuildMark/Mark/Animal/00002011/9#";
var 熊5 = "#fUI/GuildMark/Mark/Animal/00002011/5#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 小蓝星 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 金币图标 = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var 点卷图标 = "#fUI/CashShop/CashItem/0#";
var t2 = "#fEffect/CharacterEff/1112902/0/0#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";

function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }	
        if (status == 0) {
			比例 = 1;
			if (日 == 52) {
				比例 = 1;
				比例说明 = "#e#r惊喜福利当前充值可获得 1:1 比例【限时活动中】#n\r\n";
			} else {
				比例 = 1;
				比例说明 = "";
			}
			//赞助点 = getzanzhu();
			余额 = getmoneyb();
			元宝 = getmoneyb();
            累计充值 = getmoney();
			点卷 = cm.getChar().getCSPoints(1);
			
			获取点卷 = 余额*比例;
            var text = "";
            text += "\t\t\t     "+ 星星 +"#e#d自助兑换中心#k#n"+ 星星 + "#l\r\n\r\n"; 
			text += "#d[本服为良心公益服,赞助均用于服务器运营]\r\n"			
			text += "#r兑换比例 1:"+比例+"                    1元宝="+比例+"点卷   #k\r\n"	
			text += ""+点卷图标+"当前点卷："+点卷+"            "+点卷图标+"当前元宝："+余额+" \r\n"
			
			if (点卷 >= 0) {
				text += "#e#b"+点卷图标+"您有:"+点卷+" 点券可以兑换元宝哦！#n\r\n"
				text += "#L2##e#b- - - <<<点卷兑换元宝>>> - - -#l\r\n"
				text += "#L3##e#b- - - <<<点卷全部兑换元宝>>> - - -#l\r\n"
			} 			
			cm.sendSimple(text);
 
        } else if (status == 1) {
			sele1 = selection;
			if(selection ==999){
				var msg = "";
				msg += "1赞助点 = 1元宝 当前赞助点："+充值点()+"\r\n"
				msg += "请输入赞助点数量兑换元宝\r\n"
				cm.sendGetNumber(msg, 1,1, 充值点());

			} else if (selection == 2) {
				var msg = "";
				msg += "1点券 = "+比例+"元宝    当前点券："+点卷+"\r\n"
				msg += "请输入点券数量兑换元宝\r\n"
				cm.sendGetNumber(msg, 1,1, 9999);
			}
			else if (selection == 3) {	
                                      
				if (点卷 >= 1) {
					cm.setmoneyb(点卷);
					cm.gainNX(-点卷);	
					cm.sendOk("兑换成功");
					cm.dispose();
				} else {
					cm.sendOk("抱歉，你没有点券！");
					cm.dispose();
				
				}
			}
     
        } else if (status == 2) {
			
			sele2 = selection;
			
            if (sele1 == 0) {
	
			} else	if (sele1 == 1) {
			} else	if (sele1 == 2) {
				if (点卷 >= sele2) {
					cm.gainNX(-sele2);
					cm.setmoneyb(sele2*比例);				
					cm.sendOk("兑换成功");
                    cm.dispose();
				} else {
					cm.sendOk("点券不足无法兑换");
                    cm.dispose();
				}
				
			
			} else {
				
			}	
        
			

            status = -1;
        } else {
            cm.dispose();
        }
    }
}
function 推广人(){
	var 角色id = cm.getPlayer().getId();
	var 数值 =0;
	var 数值1 =1;
	var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "SELECT ownid,objecid FROM invsystem WHERE ownid = "+角色id+"";
	var pstmt = conn.prepareStatement(sql);
	var result = pstmt.executeQuery();
	if (result.next()) {
	数值 = result.getInt("objecid");
	数值1= 0;
	}
	result.close();
	pstmt.close();
	if(数值1==1){
	var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "INSERT INTO invsystem(id,ownid,objecid) value(null,"+角色id+",0)";
	var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
	}
	return 数值;	
	
}


/*function 扣除充值点(uit) {
	var uid = cm.getPlayer().getId();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE chongzhidian SET jf = jf-"+uit+"  WHERE ownid = "+uid+"";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}*/

function 推广人获得点卷(uit) {
	var uid = 推广人();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE tuiguangjf SET dj = dj+"+uit+"  WHERE ownid = "+uid+"";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}















//V95端的充值读取
function getmoney() {
	accid = cm.getPlayer().getAccountID();
	xmfhz = 0;
	var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "SELECT * FROM accounts WHERE id = "+accid+"   ;";
	var pstmt = conn.prepareStatement(sql);
	var result = pstmt.executeQuery();
	if (result.next()) {
	xmfhz = result.getString("money");
	}
	result.close();
	pstmt.close();	
	return xmfhz;
}

function setmoney(xiezhi) {
	accid = cm.getPlayer().getAccountID();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE accounts SET money = "+xiezhi+"  WHERE id = "+accid+"  ;";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}

function gainmoney(xiezhi) {
	accid = cm.getPlayer().getAccountID();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE accounts SET money = money+"+xiezhi+"  WHERE id = "+accid+"  ;";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}


function getmoneyb() {
	accid = cm.getPlayer().getAccountID();
	xmfhz = 0;
	var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "SELECT * FROM accounts WHERE id = "+accid+"   ;";
	var pstmt = conn.prepareStatement(sql);
	var result = pstmt.executeQuery();
	if (result.next()) {
	xmfhz = result.getString("moneyb");
	}
	result.close();
	pstmt.close();	
	return xmfhz;
}
function setmoneyb(xiezhi) {
	accid = cm.getPlayer().getAccountID();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE accounts SET moneyb = "+xiezhi+"  WHERE id = "+accid+"  ;";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}

function 充值点() {
	accid = cm.getPlayer().getAccountID();
	xmfhz = 0;
	var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "SELECT * FROM accounts WHERE id = "+accid+"   ;";
	var pstmt = conn.prepareStatement(sql);
	var result = pstmt.executeQuery();
	if (result.next()) {
	xmfhz = result.getString("moneyg");
	}
	result.close();
	pstmt.close();	
	return xmfhz;
}
function 扣除充值点(xiezhi) {
	accid = cm.getPlayer().getAccountID();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE accounts SET moneyg = moneyg-"+xiezhi+"  WHERE id = "+accid+"  ;";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}





function getmoneyc() {
	accid = cm.getPlayer().getAccountID();
	xmfhz = 0;
	var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "SELECT * FROM accounts WHERE id = "+accid+"   ;";
	var pstmt = conn.prepareStatement(sql);
	var result = pstmt.executeQuery();
	if (result.next()) {
	xmfhz = result.getString("moneyc");
	}
	result.close();
	pstmt.close();	
	return xmfhz;
}

function gainmoneyc(xiezhi) {
	accid = cm.getPlayer().getAccountID();
    var conn = Packages.database.DatabaseConnection.getConnection();
	var sql = "UPDATE accounts SET moneyc = moneyc+"+xiezhi+"  WHERE id = "+accid+"  ;";
    var pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate();
	pstmt.close();
}