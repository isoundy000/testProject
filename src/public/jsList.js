var g_jsList = [
    //libs
    "src/libs/CryptoJS/components/core-min.js",
    "src/libs/CryptoJS/components/enc-base64-min.js",
    "src/libs/CryptoJS/components/md5-min.js",
    "src/libs/CryptoJS/components/sha256-min.js",
    "src/libs/cryptoUtil.js",
    "src/libs/MyUtil.js",
    "src/libs/uuid.js",
    "src/libs/js-md5.js",
    
    //public
    "src/public/resource.js",
    //public config
    "src/public/config/loadConfig.js",
    "src/public/config/loadFaceCfg.js",
    "src/public/config/loadTaskCfg.js",
    "src/public/config/loadWordChatCfg.js",
    "src/public/config/platform.js",
    //public consts
    "src/public/consts/consts.js",
    "src/public/consts/define.js",
    "src/public/consts/cmdCommom.js",
    "src/public/consts/cmdLogonServer.js",
    "src/public/consts/cmdGameServer.js",
    "src/public/consts/cmdMsgServer.js",
    //public model
    "src/public/model/player.js",
    "src/public/model/hero.js",
    "src/public/model/card.js",
    "src/public/model/plaza.js",
    "src/public/model/insure.js",
    "src/public/model/signIn.js",
    "src/public/model/mail.js",
    "src/public/model/exAward.js",
    "src/public/model/task.js",
    "src/public/model/timingGiftInfo.js",
    "src/public/model/room.js",
    "src/public/model/match.js",
    "src/public/model/table.js",
    "src/public/model/clientData.js",
    "src/public/model/outcome.js",
    "src/public/model/nearUserInfo.js",
    //public manager
    "src/public/manager/UIMgr.js",
    "src/public/manager/sceneUIMgr.js",
    "src/public/manager/localStorageMgr.js",
    "src/public/manager/soundMgr.js",
    "src/public/manager/sendCardMgr.js",
    "src/public/manager/uiActionMgr.js",
    "src/public/manager/gameUIMgr.js",
    "src/public/manager/gameKindMgr.js",
    "src/public/manager/gameMsgMgr.js",
    //public network
    "src/public/network/dataHelp.js",
    "src/public/network/crypto.js",
    "src/public/network/WSSocket.js",
    "src/public/network/msgMgr.js",
    "src/public/network/httpRequest.js",
    "src/public/network/networkDefine.js",
    "src/public/network/logonServer/logonMsgHandler.js",
    "src/public/network/logonServer/loginRegisterMsg.js",
    "src/public/network/logonServer/serverListMsg.js",
    "src/public/network/logonServer/userServerMsg.js",
    "src/public/network/logonServer/signInMsg.js",
    "src/public/network/logonServer/EnterRoomMsg.js",
    
    "src/public/network/gameServer/gameMsgHandler.js",
    "src/public/network/gameServer/gameLogonMsg.js",
    "src/public/network/gameServer/gameConfigMsg.js",
    "src/public/network/gameServer/gameUserMsg.js",
    "src/public/network/gameServer/gameFrameMsg.js",
    "src/public/network/gameServer/gameMatchMsg.js",
    "src/public/network/gameServer/gameUserInsureMsg.js",
    "src/public/network/gameServer/gameTaskMsg.js",
    "src/public/network/gameServer/gameMsg.js",
    "src/public/network/gameServer/openRoomMsg.js",

    "src/public/network/msgServer/cmdHander.js",
    "src/public/network/msgServer/cmd4GCUser.js",
    "src/public/network/msgServer/cmd4GCLogon.js",

    //public view
    "src/public/views/cardSprite.js",
    "src/public/views/cardGroup.js",
    "src/public/views/myClip.js",
    "src/public/views/btnOnOff.js",
    "src/public/views/myBtnSlider.js",
    //public ui
    "src/public/ui/indexDlgId.js",
    "src/public/ui/dlgLoader.js",
    "src/public/ui/cfgDlgTip.js",
    "src/public/ui/dlgTip.js",    
    "src/public/ui/dlgGameSet.js",
    "src/public/ui/dlgGameTask.js",
    "src/public/ui/dlgGameInsure.js",
    "src/public/ui/dlgWaiting.js",  
    "src/public/ui/dlgSoundAnimation.js",
    "src/public/ui/dlgDialogScene.js",
    "src/public/ui/dlgChatScene.js",
    //public sdk
    "src/public/sdk/anysdkConst.js",
    "src/public/sdk/wxSdk/wxsdkMgr.js",
    "src/public/sdk/wxSdk/wxShare.js",
    
    //login   
    "src/login/ui/indexDlgId.js",
    "src/login/ui/loginScene.js",    
    "src/login/ui/loginSceneUIMgr.js",
    "src/login/ui/dlgLogin.js",
    
    //plaza  
    "src/game-plaza/network/mailHttpRequest.js",
    "src/game-plaza/ui/indexDlgId.js",
    "src/game-plaza/ui/dlgShare.js",
    "src/game-plaza/ui/plazaScene.js",
    "src/game-plaza/ui/plazaUIMgr.js",
    "src/game-plaza/ui/dlgPlaza.js",
    "src/game-plaza/ui/dlgEnterRoom.js",
    "src/game-plaza/ui/dlgOpenRoom.js",
    "src/game-plaza/ui/dlgRank.js",
    "src/game-plaza/ui/dlgWelfare.js",
    "src/game-plaza/ui/dlgPlazaSet.js",
    "src/game-plaza/ui/dlgPlazaUserInfo.js",
    "src/game-plaza/ui/dlgSignIn.js",
    "src/public/ui/dlgGameRule.js",
    "src/public/ui/dlgResult.js",
    "src/public/ui/dlgDDZScore.js",
    
    //game-hzmj
    "src/game_hzmj/ui/indexDlgId.js",
    "src/game_hzmj/model/hzmjGame.js",
    "src/game_hzmj/network/cmdGame.js",
    "src/game_hzmj/network/hzmjGameMsg.js",
    "src/game_hzmj/ui/hzmjDlgCardsInfo.js",
    "src/game_hzmj/ui/hzmjDlgMain.js",
    "src/game_hzmj/ui/hzmjDlgSettlement.js",
    "src/game_hzmj/ui/hzmjDlgRankCenter.js",
    "src/game_hzmj/ui/hzmjScene.js",
    "src/game_hzmj/ui/hzmjUIMgr.js",

    // game-nntb
    "src/game-nntb/model/niuniuTB.js",
    "src/game-nntb/model/niuniuTBGame.js",
    "src/game-nntb/network/cmdGame.js",
    // "src/game-nntb/network/niuniuTBGameMsg.js",
    "src/game-nntb/ui/indexDlgId.js",
    "src/game-nntb/ui/niuniuTBScene.js",
    "src/game-nntb/ui/niuniuTBUIMgr.js",
    "src/game-nntb/ui/nnTbDlgCallScore.js",
    "src/game-nntb/ui/nnTbDlgClock.js",
    "src/game-nntb/ui/nnTbDlgSystem.js",
    "src/game-nntb/ui/nnTbDlgPlayer.js",
    "src/game-nntb/ui/nnTbDlgOpen.js",
    "src/game-nntb/ui/nnTbDlgResult.js",
    "src/game-nntb/ui/nnTbDlgGetType.js",
    "src/game-nntb/ui/nnTbDlgReady.js",
    "src/game-nntb/ui/dlgNNTBMsgList.js",
    "src/game-nntb/ui/nnTbBreakScene.js",

    //game_nnfp
    "src/game-nnfp/model/niuniuFP.js",
    "src/game-nnfp/model/niuniuFPGame.js",
    "src/game-nnfp/network/cmdGame.js",
    "src/game-nnfp/network/niuniuFPGameMsg.js",
    "src/game-nnfp/ui/niuniuFPScene.js",
    "src/game-nnfp/ui/niuniuFPUIMgr.js",
    "src/game-nnfp/ui/indexDlgId.js",
    "src/game-nnfp/ui/dlgReminder.js",
    "src/game-nnfp/ui/nnFpDlgPlayer.js",
    "src/game-nnfp/ui/nnFpDlgClock.js",
    "src/game-nnfp/ui/nnFpDlgOpen.js",
    "src/game-nnfp/ui/nnFpDlgReady.js",
    "src/game-nnfp/ui/nnFpDlgSystem.js",
    "src/game-nnfp/ui/nnFpDlgGetType.js",
    "src/game-nnfp/ui/dlgNnFpMsgList.js",
    "src/game-nnfp/ui/dlgNnFpSet.js",
    "src/game-nnfp/ui/dlgNnFpRule.js",
    "src/game-nnfp/ui/dlgNnFpResult.js",
    "src/game-nnfp/ui/nnFpDlgAddChip.js",
    "src/game-nnfp/ui/nnFpDlgRobBanker.js",
 

    
    // game_ddz
    "src/game_ddz/ui/indexDlgId.js",
    "src/game_ddz/ui/ddzGameScene.js",
    "src/game_ddz/ui/ddzDlgScene.js",
    "src/game_ddz/ui/ddzDlgReady.js",
    "src/game_ddz/ui/ddzDlgCardOp.js",
    "src/game_ddz/ui/ddzDlgPlayer.js",
    "src/game_ddz/ui/ddzDlgResult.js",
    "src/game_ddz/ui/ddzDlgQuit.js",
    "src/game_ddz/ui/ddzDlgCallScore.js",
    "src/game_ddz/ui/ddzDlgMsg.js",
    "src/game_ddz/ui/ddzUIMgr.js",
    "src/game_ddz/network/cmdGame.js",
    "src/game_ddz/network/ddzGameMsg.js",
    "src/game_ddz/model/ddzModel.js",
    "src/game_ddz/model/ddzGameModel.js",
    
    
    //game-sss
    "src/game_sss/dlgSetcard.js",
    "src/game_sss/dlgSetCardPlanB.js",
    "src/game_sss/dlgMainTable.js",
    "src/game_sss/dlgCNPokePlayer.js",
    "src/game_sss/dlgCNPokeBegin.js",
    "src/game_sss/ui/sssUIMgr.js",
    "src/game_sss/ui/sssGameScene.js",
    "src/game_sss/network/cmdGame.js",
    "src/game_sss/network/sssGameMsg.js",
    "src/game_sss/model/sssGameModel.js",
    "src/game_sss/dlgSssOutCome.js",
    "src/game_sss/AnalyseCard.js",

    // PlazaMail
    "src/game-plaza/ui/dlgPlazaMail.js",
    "src/public/network/gameServer/plazaMailMsg.js",
    "src/public/network/logonServer/plazaMallMsg.js",
    "src/game-plaza/ui/dlgPlazaMall.js",

    // more
    "src/game-plaza/ui/dlgMoreGame.js",
    
    //last regist
    "src/public/network/RegistFunc.js"
];

if(cc.sys.os == cc.sys.OS_ANDROID){
    g_jsList = ["src/load/apkUpdateScene.js"].concat(g_jsList);
}
