gdjs.EndCode = {};
gdjs.EndCode.GDBlock1Objects1= [];
gdjs.EndCode.GDBlock1Objects2= [];
gdjs.EndCode.GDBlock4Objects1= [];
gdjs.EndCode.GDBlock4Objects2= [];
gdjs.EndCode.GDBlock2Objects1= [];
gdjs.EndCode.GDBlock2Objects2= [];
gdjs.EndCode.GDBlock3Objects1= [];
gdjs.EndCode.GDBlock3Objects2= [];
gdjs.EndCode.GDScoreObjects1= [];
gdjs.EndCode.GDScoreObjects2= [];
gdjs.EndCode.GDTitleObjects1= [];
gdjs.EndCode.GDTitleObjects2= [];
gdjs.EndCode.GDStartButtonObjects1= [];
gdjs.EndCode.GDStartButtonObjects2= [];
gdjs.EndCode.GDExitButtonObjects1= [];
gdjs.EndCode.GDExitButtonObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.EndCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects1[i].setString("SCORE: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("HighScore"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.EndCode.GDStartButtonObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDStartButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.EndCode.condition0IsTrue_0.val = true;
        gdjs.EndCode.GDStartButtonObjects1[k] = gdjs.EndCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDStartButtonObjects1.length = k;}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.EndCode.GDExitButtonObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDExitButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.EndCode.condition0IsTrue_0.val = true;
        gdjs.EndCode.GDExitButtonObjects1[k] = gdjs.EndCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDExitButtonObjects1.length = k;}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDBlock1Objects1.length = 0;
gdjs.EndCode.GDBlock1Objects2.length = 0;
gdjs.EndCode.GDBlock4Objects1.length = 0;
gdjs.EndCode.GDBlock4Objects2.length = 0;
gdjs.EndCode.GDBlock2Objects1.length = 0;
gdjs.EndCode.GDBlock2Objects2.length = 0;
gdjs.EndCode.GDBlock3Objects1.length = 0;
gdjs.EndCode.GDBlock3Objects2.length = 0;
gdjs.EndCode.GDScoreObjects1.length = 0;
gdjs.EndCode.GDScoreObjects2.length = 0;
gdjs.EndCode.GDTitleObjects1.length = 0;
gdjs.EndCode.GDTitleObjects2.length = 0;
gdjs.EndCode.GDStartButtonObjects1.length = 0;
gdjs.EndCode.GDStartButtonObjects2.length = 0;
gdjs.EndCode.GDExitButtonObjects1.length = 0;
gdjs.EndCode.GDExitButtonObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);

return;

}

gdjs['EndCode'] = gdjs.EndCode;
