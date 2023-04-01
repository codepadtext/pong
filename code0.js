gdjs.StartCode = {};
gdjs.StartCode.GDBlock1Objects1= [];
gdjs.StartCode.GDBlock1Objects2= [];
gdjs.StartCode.GDBlock4Objects1= [];
gdjs.StartCode.GDBlock4Objects2= [];
gdjs.StartCode.GDBlock2Objects1= [];
gdjs.StartCode.GDBlock2Objects2= [];
gdjs.StartCode.GDBlock3Objects1= [];
gdjs.StartCode.GDBlock3Objects2= [];
gdjs.StartCode.GDPlayerObjects1= [];
gdjs.StartCode.GDPlayerObjects2= [];
gdjs.StartCode.GDScoreObjects1= [];
gdjs.StartCode.GDScoreObjects2= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDStartButtonObjects1= [];
gdjs.StartCode.GDStartButtonObjects2= [];
gdjs.StartCode.GDExitButtonObjects1= [];
gdjs.StartCode.GDExitButtonObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDStartButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDStartButtonObjects1[k] = gdjs.StartCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDStartButtonObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.StartCode.GDExitButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDExitButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDExitButtonObjects1[k] = gdjs.StartCode.GDExitButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDExitButtonObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDBlock1Objects1.length = 0;
gdjs.StartCode.GDBlock1Objects2.length = 0;
gdjs.StartCode.GDBlock4Objects1.length = 0;
gdjs.StartCode.GDBlock4Objects2.length = 0;
gdjs.StartCode.GDBlock2Objects1.length = 0;
gdjs.StartCode.GDBlock2Objects2.length = 0;
gdjs.StartCode.GDBlock3Objects1.length = 0;
gdjs.StartCode.GDBlock3Objects2.length = 0;
gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDScoreObjects1.length = 0;
gdjs.StartCode.GDScoreObjects2.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDStartButtonObjects1.length = 0;
gdjs.StartCode.GDStartButtonObjects2.length = 0;
gdjs.StartCode.GDExitButtonObjects1.length = 0;
gdjs.StartCode.GDExitButtonObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
