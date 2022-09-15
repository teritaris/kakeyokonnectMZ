console.log("sysconfig")

const sleep = ms => new Promise(res => setTimeout(res, ms));
(async () => {
    // ツクールコアスクリプト読み込み待ち
    await sleep(2000)

    $gameVariables.setValue(40,"main")
    console.log(`環境 ${$gameVariables.value(40)}`)

    // 環境を取得
    // 開発用
    if($gameVariables.value(40) === "dev"){
        console.log("dev");
        // tenxym.tomato MosaicId
        $gameVariables.setValue(502, "43F21999B8B47E33");
        // tenxym.game-coin MosaicId
        $gameVariables.setValue(35, "09B903E44F2FD614");
        // green.tomato MosaicId
        $gameVariables.setValue(506, "3ECE57441794CE38");
        // red.tomato MosaicId
        $gameVariables.setValue(507, "0ED7290001F4190D");
        // blue.tomato MosaicId
        $gameVariables.setValue(508, "5DB69BA3ECEF446B");
        // 転XYMマスターアカウントアドレス
        $gameVariables.setValue(36, "TDCPHIHQPN6WKJJIUCOFISJCB4NULEZOS4NCQQQ");
        // symbol-sdkのネットワーク値
        $gameVariables.setValue(37, "0x98");
        // ドメイン 開発/heroku
        $gameVariables.setValue(38, "http://localhost:3000");
        // ネットワークタイプ(パラメータでネットワークタイプ切り替えるAPIで使う)
        $gameVariables.setValue(39, 2);
        // 使用するノードURL
        $gameVariables.setValue(41,
            "https://sym-test-02.opening-line.jp:3001")
        // generationHash
        $gameVariables.setValue(42,
            "7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836")
        // epochAdjustment
        $gameVariables.setValue(43,
            "1637848847")
        // currencyMosaicId（symbol.xym）送金トランザクションで使う
        $gameVariables.setValue(44,
            "3A8416DB2D53B6C8")
        // プレイヤーアドレス (トマティーナプレイヤー)
        $gameVariables.setValue(45, "TAW7XPHTVDDTMSTB7XZNZQUD7EG4C7OIY6HWFIA")
        // サンプルアカウント
        $gameVariables.setValue(57, "TDX6VBX2WL72GD5SOKR4PSEQMKU6IFBMWL7363I")
        // revoke(HP管理用)mosaicID
        $gameVariables.setValue(79,"7F2D26E89342D398")
        // ゲインHP減算用API(revoke)
        $gameVariables.setValue(60,"https://21pq08w3l1.execute-api.ap-northeast-1.amazonaws.com/symbol-dev-drainHpTestNet")
        // ゲインアドレス revokeトランザクションで使う
        $gameVariables.setValue(61,"TCW5Z7YV6ZS7SIQ3ZRJMUNGUCQ6WYXNYXKV4WCY")
        // クリア特典モザイク送り返し用アドレス(ここにメッセージ送信してもらう)
        //$gameVariables.setValue(46, "TDCPHIHQPN6WKJJIUCOFISJCB4NULEZOS4NCQQQ")
        // クリア特典モザイク送信API
        $gameVariables.setValue(46, "https://9ee6as8bc1.execute-api.ap-northeast-1.amazonaws.com/present/clearMosaicTestNet/")
        // 掲示板1用アドレス
        $gameVariables.setValue(50, "TANON3T4TN64XMI55QRGUP7W77JCWTFUXVNU3TA")
    }else if($gameVariables.value(40) === "main"){
        console.log("main")
        // tenxym.tomato MosaicId
        $gameVariables.setValue(502, "717C14465A99FBA4");
        // tenxym.game-coin MosaicId
        $gameVariables.setValue(35, "116E2C1423585B81");
        // toshi.tomato MosaicId
        $gameVariables.setValue(506, "613E6D0FC11F4530");
        // shizui.tomato MosaicId
        $gameVariables.setValue(507, "5A8F12439B09B33E");
        // xembook.tomato MosaicId
        $gameVariables.setValue(508, "310378C18A140D1B");
        // nononon.tomato MosaicId
        $gameVariables.setValue(510, "22EB02FCBC661527");
        // 転XYMマスターアカウントアドレス
        $gameVariables.setValue(36, "NAV4E47MKZKMUCMQXPVFZ6QS45TJT66PYSNNU6A");
        // symbol-sdkのネットワーク値
        $gameVariables.setValue(37, "0x68");
        // ドメイン 開発/heroku
        //$gameVariables.setValue(38, "https://tenxym-api.herokuapp.com");
        // ドメイン herokuが無料制限っぽいからteri-tools
        $gameVariables.setValue(38, "https://tenxym-api.teritaris.net");
        // ネットワークタイプ(パラメータでネットワークタイプ切り替えるAPIで使う)
        $gameVariables.setValue(39, 1);
        // 使用するノードURL
        $gameVariables.setValue(41,
            "https://00fabf14.xym.stir-hosyu.com:3001")
        // generationHash
        $gameVariables.setValue(42,
            "57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6")
        // epochAdjustment
        $gameVariables.setValue(43,
            "1615853185")
        // currencyMosaicId（symbol.xym）送金トランザクションで使う
        $gameVariables.setValue(44,
            "6BED913FA20223F8")
        // プレイヤーアドレス
        $gameVariables.setValue(45, "未設定")
        // サンプルアカウント
        $gameVariables.setValue(57, "NCHRCR6RLU3VWUO4MRDBPD2AQBKHWY5TWRNVYVY")
        // revoke(HP管理用)mosaicID
        $gameVariables.setValue(79,"525335B0516D5CCC")
        // ゲインHP減算用API(revoke)
        $gameVariables.setValue(60,"https://snp67wyoab.execute-api.ap-northeast-1.amazonaws.com/symbol-dev-drainHp")
        // ゲインアドレス revokeトランザクション後の残高チェックに使う
        $gameVariables.setValue(61,"NAYA3MJH4LW3HUYWF6NBXNLI2VR4AED4O5BHDLY")
        // クリア特典モザイク送り返し用アドレス(ここにメッセージ送信してもらう)
        //$gameVariables.setValue(46, "メインネット版作る")
        // クリア特典モザイク送信API
        $gameVariables.setValue(46, "https://9ee6as8bc1.execute-api.ap-northeast-1.amazonaws.com/present/clearMosaic/")
        // 掲示板1用アドレス
        $gameVariables.setValue(50, "NC2JE47OZGBPA7PX2LZFERDDRESZBR7GQIWZ7LA")
    }

    // デフォルトの名前は「NoName」
    if($gameVariables.value(47) === 0){
        $gameVariables.setValue(47, "NoName")
    }

    // アクターid20までの名前を変更
    for(i=1; i<=20; i++){
        $gameActors.actor(i).setName($gameVariables.value(47));
    }
})();
