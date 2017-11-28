
var s_sharedLocalStorageMgr = null;

var LocalStorage_Key = {
	UUID_KEY: "_uuid_",		//玩家uuid，当机器码用
	VISITOR_LOGIN: "_visitor_login_",
    LOGIN_RECORD_KEY: "_login_record_",	//玩家登录记录
    RECORD_PASS_KEY: "_record_pass_",
    AUTO_LOGIN_KEY: "_auto_login_",
    MUSIC_KEY: "_music_",	//背景音乐
    SOUND_KEY: "_sound_",	//音效
    MUSIC_VOLUME_KEY: "_music_volume_",	//背景音乐音量
    SOUND_VOLUME_KEY: "_sound_volume_",	//音效音量
    HALL_MUSIC_KEY: "_hall_music_",	//大厅背景音乐
    HALL_SOUND_KEY: "_hall_sound_",	//大厅音效
    GAME_MUSIC_KEY: "_game_music_",	//游戏背景音乐
    GAME_SOUND_KEY: "_game_sound_",	//游戏音效
    MAILS_INFO: "_mails_info_",
    HZMJ_GAMEINFO: "hzmj_gameInfo",	//红中麻将游戏信息
};

var LocalStorageMgr = cc.Class.extend({
    _locarStorage: null,

    ctor: function () {
        this._locarStorage = cc.sys.localStorage;
    },
    //------------------------HZMJ_GAMEINFO
    getHzmjGameInfo: function () {
    	var strHzmjGameInfo = this._locarStorage.getItem(LocalStorage_Key.HZMJ_GAMEINFO);
    	if(!strHzmjGameInfo){
    		return "";
    	}

    	return strHzmjGameInfo;
    },
    setHzmjGameInfo: function (strHzmjGameInfo) {
    	this._locarStorage.setItem(LocalStorage_Key.HZMJ_GAMEINFO, strHzmjGameInfo);
    },
    removeHzmjGameInfo: function(){
    	this._locarStorage.removeItem(LocalStorage_Key.HZMJ_GAMEINFO);
    },
    //------------------------UUID
    getUuidItem: function () {
    	var strUuid = this._locarStorage.getItem(LocalStorage_Key.UUID_KEY);
    	if(!strUuid || strUuid == ""){
    		strUuid = UUID.genV4().toString();
    		this._locarStorage.setItem(LocalStorage_Key.UUID_KEY, strUuid);
    	}

    	return strUuid;
    },

    //------------------------游客账号密码
    setVisitorLoginItem: function (str) {
    	//加密
    	str = CryptoUtil.base64_encode(str);
    	this._locarStorage.setItem(LocalStorage_Key.VISITOR_LOGIN, str);
    },

    getVisitorLoginItem: function () {
    	var str = this._locarStorage.getItem(LocalStorage_Key.VISITOR_LOGIN);
    	
    	//解密
    	str = CryptoUtil.base64_decode(str);

    	return str;
    },

    removeVisitorLoginItem: function () {
    	this._locarStorage.getItem(LocalStorage_Key.VISITOR_LOGIN);
    },
    
    //------------------------登录账号密码记录
    setLoginRecordItem: function (str) {
    	//加密
    	str = CryptoUtil.base64_encode(str);
    	this._locarStorage.setItem(LocalStorage_Key.LOGIN_RECORD_KEY, str);
    },

    getLoginRecordItem: function () {
    	var str = this._locarStorage.getItem(LocalStorage_Key.LOGIN_RECORD_KEY);
    	
    	if(str == "" || str==null){
    		str = "[]";
    	}else{
    		//解密
    		str = CryptoUtil.base64_decode(str);
    	}
    	
    	return str;
    },

    removeLoginRecordItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.LOGIN_RECORD_KEY);
    },

    //------------------------记住密码
    setRecordPassItem: function (bRecord) {
    	var str = "N";
    	if(bRecord){
    		str = "Y";
    	}
    	
    	this._locarStorage.setItem(LocalStorage_Key.RECORD_PASS_KEY, str);
    },

    getRecordPassItem: function () {
    	var bRecord = true;//默认true
    	
    	var str = this._locarStorage.getItem(LocalStorage_Key.RECORD_PASS_KEY);

    	if(str == "N"){
    		bRecord = false;
    	}
    	
    	return bRecord;
    },

    removeRecordPassItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.RECORD_PASS_KEY);
    },

    //------------------------自动登录
    setAutoLoginItem: function (bAuto) {
    	var str = "N";
    	if(bAuto){
    		str = "Y";
    	}
    	
    	this._locarStorage.setItem(LocalStorage_Key.AUTO_LOGIN_KEY, str);
    },

    getAutoLoginItem: function () {
    	var bAuto = true;//默认true
    	
    	var str = this._locarStorage.getItem(LocalStorage_Key.AUTO_LOGIN_KEY);

    	if(str == "N"){
    		bAuto = false;
    	}

    	return bAuto;
    },

    removeAutoLoginItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.AUTO_LOGIN_KEY);
    },

    //------------------------music
    setMusicItem: function (bOpen) {
    	var str = "N";
    	if(bOpen){
    		str = "Y";
    	}
    	
    	this._locarStorage.setItem(LocalStorage_Key.MUSIC_KEY, str);
    },

    getMusicItem: function () {
    	var bOpen = true;//默认true
    	
    	var str = this._locarStorage.getItem(LocalStorage_Key.MUSIC_KEY);

    	if(str == "N"){
    		bOpen = false;
    	}

    	return bOpen;
    },

    removeMusicItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.MUSIC_KEY);
    },

    //------------------------sound
    setSoundItem: function (bOpen) {
    	var str = "N";
    	if(bOpen){
    		str = "Y";
    	}

    	this._locarStorage.setItem(LocalStorage_Key.SOUND_KEY, str);
    },

    getSoundItem: function () {
    	var bOpen = true;//默认true

    	var str = this._locarStorage.getItem(LocalStorage_Key.SOUND_KEY);

    	if(str == "N"){
    		bOpen = false;
    	}

    	return bOpen;
    },

    removeSoundItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.SOUND_KEY);
    },

    //------------------------music volume
    setMusicVolumeItem: function (percent) {
    	percent = Math.floor(percent);
    	
    	var str = percent + "";

    	this._locarStorage.setItem(LocalStorage_Key.MUSIC_VOLUME_KEY, str);
    },

    getMusicVolumeItem: function () {
    	var percent = 100;//默认100

    	var str = this._locarStorage.getItem(LocalStorage_Key.MUSIC_VOLUME_KEY);
    	if("" == str){
    		percent = 100;
    	}

    	percent = parseInt(str);
    	
    	if(isNaN(percent)){
    		percent = 100;
    	}

    	return percent;
    },

    removeMusicVolumeItem: function () {
    	this._locarStorage.getItem(LocalStorage_Key.MUSIC_VOLUME_KEY);
    },
    
    //------------------------sound volume
    setSoundVolumeItem: function (percent) {
    	percent = Math.floor(percent);

    	var str = percent + "";

    	this._locarStorage.setItem(LocalStorage_Key.SOUND_VOLUME_KEY, str);
    },

    getSoundVolumeItem: function () {
    	var percent = 100;//默认100

    	var str = this._locarStorage.getItem(LocalStorage_Key.SOUND_VOLUME_KEY);
    	if("" == str){
    		percent = 100;
    	}

    	percent = parseInt(str);

    	if(isNaN(percent)){
    		percent = 100;
    	}

    	return percent;
    },

    removeSoundVolumeItem: function () {
    	this._locarStorage.getItem(LocalStorage_Key.SOUND_VOLUME_KEY);
    },

    //------------------------大厅music
    setHallMusicItem: function (bOpen) {
    	var str = "N";
    	if(bOpen){
    		str = "Y";
    	}

    	this._locarStorage.setItem(LocalStorage_Key.HALL_MUSIC_KEY, str);
    },

    getHallMusicItem: function () {
    	var bOpen = true;//默认true

    	var str = this._locarStorage.getItem(LocalStorage_Key.HALL_MUSIC_KEY);

    	if(str == "N"){
    		bOpen = false;
    	}

    	return bOpen;
    },

    removeHallMusicItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.HALL_MUSIC_KEY);
    },

    //------------------------大厅sound
    setHallSoundItem: function (bOpen) {
    	var str = "N";
    	if(bOpen){
    		str = "Y";
    	}

    	this._locarStorage.setItem(LocalStorage_Key.HALL_SOUND_KEY, str);
    },

    getHallSoundItem: function () {
    	var bOpen = true;//默认true

    	var str = this._locarStorage.getItem(LocalStorage_Key.HALL_SOUND_KEY);

    	if(str == "N"){
    		bOpen = false;
    	}

    	return bOpen;
    },

    removeHallSoundItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.HALL_SOUND_KEY);
    },

    //------------------------游戏music
    setGameMusicItem: function (bOpen) {
    	var str = "N";
    	if(bOpen){
    		str = "Y";
    	}

    	this._locarStorage.setItem(LocalStorage_Key.GAME_MUSIC_KEY, str);
    },

    getGameMusicItem: function () {
    	var bOpen = true;//默认true

    	var str = this._locarStorage.getItem(LocalStorage_Key.GAME_MUSIC_KEY);

    	if(str == "N"){
    		bOpen = false;
    	}

    	return bOpen;
    },

    removeGameMusicItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.GAME_MUSIC_KEY);
    },

    //------------------------游戏sound
    setGameSoundItem: function (bOpen) {
    	var str = "N";
    	if(bOpen){
    		str = "Y";
    	}

    	this._locarStorage.setItem(LocalStorage_Key.GAME_SOUND_KEY, str);
    },

    getGameSoundItem: function () {
    	var bOpen = true;//默认true

    	var str = this._locarStorage.getItem(LocalStorage_Key.GAME_SOUND_KEY);
    	
    	if(str == "N"){
    		bOpen = false;
    	}

    	return bOpen;
    },

    removeGameSoundItem: function () {
        this._locarStorage.getItem(LocalStorage_Key.GAME_SOUND_KEY);
    },
    
    //------------------------游戏任务
    setMailsItem: function (str) {
    	//加密
    	str = CryptoUtil.base64_encode(str);
    	this._locarStorage.setItem(LocalStorage_Key.MAILS_INFO, str);
    },

    getMailsItem: function () {
    	var str = this._locarStorage.getItem(LocalStorage_Key.MAILS_INFO);

    	if(str == ""){
    		str = "[]";
    	}else{
    		//解密
    		str = CryptoUtil.base64_decode(str);
    	}

    	return str;
    },

    removeMailsItem: function () {
    	this._locarStorage.getItem(LocalStorage_Key.MAILS_INFO);
    },
});

LocalStorageMgr.getInstance = function () {
    if (!s_sharedLocalStorageMgr) {
        s_sharedLocalStorageMgr = new LocalStorageMgr();
    }
    return s_sharedLocalStorageMgr;
};

